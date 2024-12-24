import { useQuery } from '@tanstack/react-query';

import { SanityPhotoGallery } from '~/domains';

export function useGetAllPhotosByCampType(campType?: string) {
  const { data, isError, isLoading, isSuccess } = useQuery<
    SanityPhotoGallery[]
  >({
    queryKey: ['photos-by-camp-type', campType],
    enabled: Boolean(campType),
    queryFn: async () => {
      const response = await fetch(`/api/photo-gallery?campType=${campType}`);
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
