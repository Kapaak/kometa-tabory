import { useQuery } from '@tanstack/react-query';

import { SanitySwimmingCamp, SanityTripCamp } from '~/domains';

export function useGetAllSwimmingCamps() {
  const { data, isError, isLoading, isSuccess } = useQuery<
    SanitySwimmingCamp[]
  >({
    queryKey: ['swimming-camps'],
    queryFn: async () => {
      const response = await fetch('/api/swimming-camps');
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

export function useGetAllTripCamps() {
  const { data, isError, isLoading, isSuccess } = useQuery<SanityTripCamp[]>({
    queryKey: ['trip-camps'],
    queryFn: async () => {
      const response = await fetch('/api/trip-camps');
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
