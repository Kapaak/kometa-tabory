import { MaxWidth, VerticalStack } from '~/ui/components';

import { CampsSection, FAQSection } from './parts';

import * as S from './CampsSwimmingScreen.style';

export function CampSwimmingScreen() {
  return (
    <MaxWidth>
      <S.Headline>Tábory zaměřené na plavání</S.Headline>

      <VerticalStack gap="3rem">
        <CampsSection />
        <FAQSection />
      </VerticalStack>
    </MaxWidth>
  );
}
