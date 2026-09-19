import { useQuery } from '@tanstack/react-query';

import { SanityDocument } from '~/domains';

export function useGetDocumentByType(documentType: string) {
  const { data, isError, isLoading, isSuccess } = useQuery<SanityDocument>({
    queryKey: ['document', documentType],
    queryFn: async () => {
      const response = await fetch(
        `/api/documents?documentType=${documentType}`
      );
      const data = await response.json();

      return data;
    },
  });

  return {
    data,
    isError,
    isSuccess,
    isLoading,
  };
}
