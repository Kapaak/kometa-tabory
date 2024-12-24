import { PhotoGallery } from '~/components/PhotoGallery';
import { Testimonials } from '~/components/Testimonials';
import { CampType } from '~/types';
import { MaxWidth } from '~/ui/components';

import { CampsSection, FAQSection } from './parts';

import * as S from './CampsTripScreen.style';

export function CampsTripScreen() {
  return (
    <>
      <MaxWidth>
        <S.Headline>Dobrodružné tábory</S.Headline>
      </MaxWidth>

      <S.Container>
        <MaxWidth>
          <CampsSection />
        </MaxWidth>
        <MaxWidth>
          <FAQSection />
        </MaxWidth>
        <Testimonials campType={CampType.Trip} />
        <MaxWidth>
          <PhotoGallery campType={CampType.Trip} />
        </MaxWidth>
      </S.Container>
    </>
  );
}
