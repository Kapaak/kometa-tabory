import { MaxWidth } from '~/ui/components';

import { CampsSection, FAQSection } from './parts';

import * as S from './CampsTripScreen.style';

export function CampsTripScreen() {
  return (
    <MaxWidth>
      <S.Headline>Dobrodružné tábory</S.Headline>

      <S.Container>
        <CampsSection />
        <FAQSection />
      </S.Container>
    </MaxWidth>
  );
}
