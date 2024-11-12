import { useEffect, useState } from 'react';

import { getAllSheets } from '~/libs';

export function useGoogleSheetsCapacities(
  spreadSheetsIds: number[],
  enabled?: boolean
) {
  const [googleSheetsCapacities, setGoogleSheetsCapacities] = useState<
    Record<number, number>
  >({});

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (
      spreadSheetsIds?.length === 0 ||
      !spreadSheetsIds ||
      isError ||
      !enabled
    ) {
      setIsLoading(false);

      return;
    }

    getAllSheets(spreadSheetsIds).then((resSheets: any) => {
      resSheets &&
        Promise.allSettled(resSheets)
          .then((res) => {
            let updatedObj: Record<number, number> = {};

            res.forEach((sheet: any, index: number) => {
              updatedObj[spreadSheetsIds[index]] = sheet.value?.length ?? 0;
            });

            setGoogleSheetsCapacities(updatedObj);
          })
          .catch(() => {
            setIsError(true);
          })
          .finally(() => {
            setIsLoading(false);
          });
    });
  }, [enabled, isError, spreadSheetsIds]);

  return {
    googleSheetsCapacities,
    isLoading,
    isError,
  };
}
