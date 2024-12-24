import Skeleton from 'react-loading-skeleton';

import { SanityPhotoGallery } from '~/domains';

import * as S from './PhotoGrid.style';

interface PhotoGridProps {
  photos?: SanityPhotoGallery[];
  onClick: (num: number) => void;
  loading?: boolean;
}

export const PhotoGrid = ({ photos, loading, onClick }: PhotoGridProps) => {
  return (
    <S.PhotoGrid>
      {loading &&
        Array.from({ length: 5 }).map((_, i) => (
          <S.ImageContainer key={i}>
            <Skeleton height="100%" width="100%" />
          </S.ImageContainer>
        ))}
      {!loading &&
        photos?.map(
          (photo, i) =>
            photo?.image && (
              <S.ImageContainer key={i} onClick={() => onClick(i)}>
                <S.Image
                  alt={photo?.alt ?? ''}
                  image={photo?.image}
                  fill
                  sizes="(max-width: 768px) 50vw,
						(max-width: 1200px) 50vw,
						33vw"
                  placeholder="blur"
                />
              </S.ImageContainer>
            )
        )}
    </S.PhotoGrid>
  );
};
