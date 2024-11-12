import { useMemo } from 'react';

import { useGetAllSwimmingCamps } from '~/adapters/campsAdapter';
import { useGetGoogleSheetCampCapacities } from '~/adapters/googleAdapter';
import { SwimmingCamp } from '~/types';

export function useSwimmingCamps() {
  const {
    data: camps,
    isLoading: isCampsLoading,
    isError: isCampsError,
  } = useGetAllSwimmingCamps();

  const spreadSheetsIds = useMemo(() => {
    return camps?.map((camp) => camp?.spreadsheetId) ?? [];
  }, [camps]);

  const { data, isLoading, isError } = useGetGoogleSheetCampCapacities(
    spreadSheetsIds,
    spreadSheetsIds?.length > 0 && !isCampsLoading
  );

  const swimmingCampsData: SwimmingCamp[] = useMemo(() => {
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
    data: swimmingCampsData,
    isLoading: isCampsLoading || isLoading,
    isError: isCampsError || isError,
  };
}
