import { useEffect, useState } from 'react';

import { useSanityContext } from '~/contexts';
import { getAllSheets } from '~/libs';

export function useGoogleSheetsCapacities() {
  const [googleSheetsCapacities, setGoogleSheetsCapacities] = useState<
    Record<number, number>
  >({});

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { spreadSheetsIds } = useSanityContext();

  useEffect(() => {
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
  }, [spreadSheetsIds]);

  return {
    googleSheetsCapacities,
    isLoading,
    isError,
  };
}
