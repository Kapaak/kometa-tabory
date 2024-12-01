import { MaxWidth, VerticalStack } from '~/ui/components';

import { CampsSection, FAQSection } from './parts';

import * as S from './CampsTripScreen.style';

export function CampsTripScreen() {
  return (
    <MaxWidth>
      <S.Headline>Tábory zaměřené na výlety</S.Headline>

      <VerticalStack gap="3rem">
        <CampsSection />
        <FAQSection />
      </VerticalStack>
    </MaxWidth>
  );
}
