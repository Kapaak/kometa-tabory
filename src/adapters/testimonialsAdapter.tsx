import { useQuery } from '@tanstack/react-query';

import { SanityTestimonial } from '~/domains';

export function useGetAllTestimonialsByCampType(campType?: string) {
  const { data, isError, isLoading, isSuccess } = useQuery<SanityTestimonial[]>(
    {
      queryKey: ['testimonials-by-camp-type', campType],
      enabled: Boolean(campType),
      queryFn: async () => {
        const response = await fetch(`/api/testimonials?campType=${campType}`);
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
