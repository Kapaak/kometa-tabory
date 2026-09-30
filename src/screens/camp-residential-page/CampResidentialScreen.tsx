import { AvailableCoursesBanner } from '~/components/CampBanner';
import { PhotoGallery } from '~/components/PhotoGallery';
import { Testimonials } from '~/components/Testimonials';
import { CampType } from '~/types';
import { MaxWidth } from '~/ui/components';

import { CampsSection } from './parts/CampsSection';
import { FAQSection } from './parts/FAQSection';

import * as S from './CampResidentialScreen.style';

interface CampResidentialScreenProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export function CampResidentialScreen({
  title,
  description,
  imageUrl,
}: CampResidentialScreenProps) {
  return (
    <>
      <MaxWidth>
        <AvailableCoursesBanner
          title={title}
          description={description}
          imageUrl={imageUrl}
        />

        <S.Container>
          <MaxWidth>
            <CampsSection />
          </MaxWidth>
          <MaxWidth>
            <FAQSection />
          </MaxWidth>
          <Testimonials campType={CampType.Residential} />
          <MaxWidth>
            <PhotoGallery campType={CampType.Residential} />
          </MaxWidth>
        </S.Container>
      </MaxWidth>
    </>
  );
}
