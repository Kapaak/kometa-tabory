import { useQuery } from '@tanstack/react-query';

import { SanityFaq } from '~/domains';
import { CampFaqSanityKey } from '~/types';

export function useGetAllSwimmingFaqs() {
  const { data, isError, isLoading, isSuccess } = useQuery<SanityFaq[]>({
    queryKey: ['faq', CampFaqSanityKey.Swimming],
    queryFn: async () => {
      const response = await fetch(
        `/api/faq?campFaqSanityKey=${CampFaqSanityKey.Swimming}`
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

export function useGetAllTripFaqs() {
  const { data, isError, isLoading, isSuccess } = useQuery<SanityFaq[]>({
    queryKey: ['faq', CampFaqSanityKey.Trip],
    queryFn: async () => {
      const response = await fetch(
        `/api/faq?campFaqSanityKey=${CampFaqSanityKey.Trip}`
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

export function useGetAllResidentialFaqs() {
  const { data, isError, isLoading, isSuccess } = useQuery<SanityFaq[]>({
    queryKey: ['faq', CampFaqSanityKey.Residential],
    queryFn: async () => {
      const response = await fetch(
        `/api/faq?campFaqSanityKey=${CampFaqSanityKey.Residential}`
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
