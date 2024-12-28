import { useQuery } from '@tanstack/react-query';

import { SanityTestimonial } from '~/domains';

export function useGetAllTestimonialsByCampType(campType?: string) {
  const { data, isError, isLoading, isSuccess } = useQuery<SanityTestimonial[]>(
    {
      queryKey: ['testimonials-by-camp-type', campType],
      queryFn: async () => {
        const params = new URLSearchParams();

        if (campType) {
          params.append('campType', campType);
        }

        const response = await fetch(`/api/testimonials?${params.toString()}`);
        const data = await response.json();

        return data;
      },
    }
  );

  return {
    data,
    isError,
    isSuccess,
    isLoading,
  };
}
