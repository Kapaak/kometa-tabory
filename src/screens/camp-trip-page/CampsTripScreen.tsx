import { PhotoGallery } from '~/components/PhotoGallery';
import { Testimonials } from '~/components/Testimonials';
import { CampType } from '~/types';
import { MaxWidth } from '~/ui/components';

import { CampsSection, FAQSection } from './parts';

import * as S from './CampsTripScreen.style';

interface CampTripScreenProps {
  title?: string;
}

export function CampsTripScreen({ title }: CampTripScreenProps) {
  return (
    <>
      <MaxWidth>
        <S.Headline>{title}</S.Headline>
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
