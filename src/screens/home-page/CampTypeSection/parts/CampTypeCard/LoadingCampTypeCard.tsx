import { Skeleton } from '~/ui/components';

import * as S from './CampTypeCard.style';

export function LoadingCampTypeCard() {
  return (
    <S.CampTypeCard>
      <S.CampTypeCardImageContainer>
        <Skeleton height="100%" />
      </S.CampTypeCardImageContainer>

      <S.CampTypeCardContainer>
        <S.CampTypeCardTitle>
          <Skeleton width="60%" height="3rem" />
        </S.CampTypeCardTitle>
        <Skeleton width="100%" height="10rem" />
      </S.CampTypeCardContainer>
    </S.CampTypeCard>
  );
}
