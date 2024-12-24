import { PhotoGallery } from '~/components/PhotoGallery';
import { CampType } from '~/types';
import { MaxWidth } from '~/ui/components';

import { CampsSection, FAQSection } from './parts';

import * as S from './CampsSwimmingScreen.style';

export function CampSwimmingScreen() {
  return (
    <MaxWidth>
      <S.Headline>Tábory zaměřené na plavání</S.Headline>

      <S.Container>
        <CampsSection />
        <FAQSection />
        <PhotoGallery campType={CampType.Swimming} />
      </S.Container>
    </MaxWidth>
  );
}
