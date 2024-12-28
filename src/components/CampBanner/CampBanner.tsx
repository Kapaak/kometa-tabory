import { VerticalStack } from '~/ui/components/atoms';

import * as S from './CampBanner.style';

interface AvailableCoursesBannerProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export function AvailableCoursesBanner({
  title,
  description,
  imageUrl,
}: AvailableCoursesBannerProps) {
  return (
    <S.CampBanner>
      <S.CampBannerWrapper>
        <VerticalStack gap="3rem">
          <S.CampBannerTitle>{title}</S.CampBannerTitle>
          <S.CampBannerDescription>{description}</S.CampBannerDescription>
        </VerticalStack>
      </S.CampBannerWrapper>

      <S.CampBannerImageWrapper>
        {imageUrl && (
          <S.CampBannerImage
            src={imageUrl}
            placeholder="blur"
            blurDataURL={imageUrl}
            fill
            alt="Ženy ve vodě při synchronizovaném plavání na bazéně Komety."
          />
        )}
      </S.CampBannerImageWrapper>
    </S.CampBanner>
  );
}
