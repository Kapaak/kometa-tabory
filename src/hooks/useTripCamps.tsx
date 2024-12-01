import { useMemo } from 'react';

import { useGetAllTripCamps } from '~/adapters/campsAdapter';
import { useGetGoogleSheetCampCapacities } from '~/adapters/googleAdapter';
import { TripCamp } from '~/types';

export function useTripCamps() {
  const {
    data: camps,
    isLoading: isCampsLoading,
    isError: isCampsError,
  } = useGetAllTripCamps();

  const spreadSheetsIds = useMemo(() => {
    return camps?.map((camp) => camp?.spreadsheetId) ?? [];
  }, [camps]);

  const { data, isLoading, isError } = useGetGoogleSheetCampCapacities(
    spreadSheetsIds,
    spreadSheetsIds?.length > 0 && !isCampsLoading
  );

  const tripCampsData = useMemo((): TripCamp[] => {
    if (!camps) return [];

    return camps?.map((camp) => ({
      ...camp,
      currentCapacity:
        typeof camp?.spreadsheetId === 'number' && data
          ? data?.[camp?.spreadsheetId]
          : NaN,
    }));
  }, [camps, data]);

  return {
    data: tripCampsData,
    isLoading: isCampsLoading || isLoading,
    isError: isCampsError || isError,
  };
}
