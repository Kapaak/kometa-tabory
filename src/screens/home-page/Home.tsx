import { Space } from '~/ui/components';

import { AboutSection } from './AboutSection';
import { ActualitiesSection } from './ActualitiesSection';
import { CampTypeSection } from './CampTypeSection';
import { ContactSection } from './ContactSection';
import { DocumentSection } from './DocumentSection';
import { HeroSection } from './HeroSection';
import { LocationSection } from './LocationSection';
import { SponsorSection } from './SponsorSection';
import { TestimonialSection } from './TestimonialSection';
import { USPSection } from './USPSection';

export function HomePageScreen() {
  return (
    <>
      <HeroSection />
      <Space half />
      <ActualitiesSection />
      <Space half />
      <USPSection />
      <Space half />
      <CampTypeSection />
      <Space half />
      {/* <Space />
      <DiscountSection /> */}
      <Space />
      <AboutSection />
      <Space />
      <DocumentSection />
      <Space />
      <TestimonialSection />
      <Space />
      <LocationSection />
      <Space />
      <ContactSection />
      <Space />
      <SponsorSection />
    </>
  );
}
