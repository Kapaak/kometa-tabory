import { useQuery } from '@tanstack/react-query';

import { SanityCampType } from '~/domains';

export function useGetAllCampTypes() {
  const { data, isError, isLoading, isSuccess } = useQuery<SanityCampType[]>({
    queryKey: ['camp-types'],
    queryFn: async () => {
      const response = await fetch('/api/camp-types');
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
