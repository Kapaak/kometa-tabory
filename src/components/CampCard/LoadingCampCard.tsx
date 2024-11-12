import { Skeleton, VerticalStack } from '~/ui/components';

import * as S from './CampCard.style';

export function LoadingCampCard() {
  return (
    <S.CampCard>
      <S.CampCardImageContainer>
        <Skeleton height="100%" />
      </S.CampCardImageContainer>
      <S.Container>
        <Skeleton width="55%" height="3rem" />
        <VerticalStack gap="1rem">
          <Skeleton width="40%" height="2rem" />
          <Skeleton width="30%" height="2rem" />
        </VerticalStack>
      </S.Container>
    </S.CampCard>
  );
}
