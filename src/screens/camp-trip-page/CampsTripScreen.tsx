import { MaxWidth } from '~/ui/components';

import { CampsSection } from './parts';

import * as S from './CampsTripScreen.style';

export function CampsTripScreen() {
  return (
    <MaxWidth>
      <S.Headline>Tábory zaměřené na výlety</S.Headline>

      <CampsSection />
    </MaxWidth>
  );
}
