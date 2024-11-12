import { MaxWidth } from '~/ui/components';

import { CampsSection } from './parts';

import * as S from './CampsSwimmingScreen.style';

export function CampSwimmingScreen() {
  return (
    <MaxWidth>
      <S.Headline>Tábory zaměřené na plavání</S.Headline>

      <CampsSection />
    </MaxWidth>
  );
}
