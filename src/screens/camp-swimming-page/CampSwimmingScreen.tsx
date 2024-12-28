import { AvailableCoursesBanner } from '~/components/CampBanner';
import { PhotoGallery } from '~/components/PhotoGallery';
import { Testimonials } from '~/components/Testimonials';
import { CampType } from '~/types';
import { MaxWidth } from '~/ui/components';

import { CampsSection, FAQSection } from './parts';

import * as S from './CampsSwimmingScreen.style';

interface CampSwimmingScreenProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export function CampSwimmingScreen({
  title,
  description,
  imageUrl,
}: CampSwimmingScreenProps) {
  return (
    <>
      <MaxWidth>
        <AvailableCoursesBanner
          title={title}
          description={description}
          imageUrl={imageUrl}
        />
      </MaxWidth>

      <S.Container>
        <MaxWidth>
          <CampsSection />
        </MaxWidth>
        <MaxWidth>
          <FAQSection />
        </MaxWidth>
        <Testimonials campType={CampType.Swimming} />
        <MaxWidth>
          <PhotoGallery campType={CampType.Swimming} />
        </MaxWidth>
      </S.Container>
    </>
  );
}
