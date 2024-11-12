import { useQuery } from '@tanstack/react-query';

import { getAllSheets } from '~/libs';

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
