import { useQuery } from '@tanstack/react-query';

import {
  CampOccupancy,
  getAllSheets,
  getOccupancyBySheetId,
  getOccupancyFromRows,
} from '~/libs';

export function useGetGoogleSheetCampCapacities(
  spreadSheetsIds: number[],
  enabled: boolean = true
) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['googleSheetsCapacities', spreadSheetsIds],
    queryFn: async () => {
      const resSheets = (await getAllSheets(spreadSheetsIds)) as any;
      const results = await Promise.allSettled(resSheets);

      let updatedObj: Record<number, number> = {};
      results.forEach((sheet: any, index: number) => {
        updatedObj[spreadSheetsIds[index]] = sheet.value?.length ?? 0;
      });

      return updatedObj;
    },
    enabled,
    // staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return {
    data,
    isLoading,
    isError,
  };
}

export function useGetGoogleSheetCampOccupancies(
  spreadSheetsIds: number[],
  enabled: boolean = true
) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['googleSheetsOccupancies', spreadSheetsIds],
    queryFn: async () => {
      const resSheets = (await getAllSheets(spreadSheetsIds)) as any;
      const results = await Promise.allSettled(resSheets);

      let updatedObj: Record<number, CampOccupancy> = {};
      results.forEach((sheet: any, index: number) => {
        updatedObj[spreadSheetsIds[index]] = getOccupancyFromRows(sheet.value);
      });

      return updatedObj;
    },
    enabled,
  });

  return {
    data,
    isLoading,
    isError,
  };
}

export function useGetGoogleSheetCampOccupancy(
  spreadSheetId: number,
  enabled: boolean = true
) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['googleSheetOccupancy', spreadSheetId],
    queryFn: () => getOccupancyBySheetId(spreadSheetId),
    enabled,
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
}
