import { useMemo } from 'react';

import { useGetAllResidentialCamps } from '~/adapters/campsAdapter';
import { useGetGoogleSheetCampOccupancies } from '~/adapters/googleAdapter';
import { ResidentialCamp } from '~/types';

export function useResidentialCamps() {
  const {
    data: camps,
    isLoading: isCampsLoading,
    isError: isCampsError,
  } = useGetAllResidentialCamps();

  const spreadSheetsIds = useMemo(() => {
    return camps?.map((camp) => camp?.spreadsheetId) ?? [];
  }, [camps]);

  const { data, isLoading, isError } = useGetGoogleSheetCampOccupancies(
    spreadSheetsIds,
    spreadSheetsIds?.length > 0 && !isCampsLoading
  );

  const residentialCampsData = useMemo((): ResidentialCamp[] => {
    if (!camps) return [];

    return camps?.map((camp) => {
      const occupancy =
        typeof camp?.spreadsheetId === 'number' && data
          ? data?.[camp?.spreadsheetId]
          : undefined;

      return {
        ...camp,
        // currentCapacity counts all rows in the sheet, not only male + female.
        // Rows with an empty or unknown "Pohlaví" value (e.g. edited manually)
        // still take a place, but are not counted in either gender capacity.
        currentCapacity: occupancy?.total ?? NaN,
        currentMaleCapacity: occupancy?.male ?? NaN,
        currentFemaleCapacity: occupancy?.female ?? NaN,
      };
    });
  }, [camps, data]);

  return {
    data: residentialCampsData,
    isLoading: isCampsLoading || isLoading,
    isError: isCampsError || isError,
  };
}
