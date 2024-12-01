import { useQuery } from '@tanstack/react-query';

import { SanityFaq } from '~/domains';

export function useGetAllSwimmingFaqs() {
  const { data, isError, isLoading, isSuccess } = useQuery<SanityFaq[]>({
    queryKey: ['swimming-faqs'],
    queryFn: async () => {
      const response = await fetch('/api/swimming-faqs');
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

export function useGetAllTripFaqs() {
  const { data, isError, isLoading, isSuccess } = useQuery<SanityFaq[]>({
    queryKey: ['trip-faqs'],
    queryFn: async () => {
      const response = await fetch('/api/trip-faqs');
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
