import { Space } from '~/ui/components';

import { AboutSection } from './AboutSection';
import { ActualitiesSection } from './ActualitiesSection';
import { ContactSection } from './ContactSection';
import { DiscountSection } from './DiscountSection';
import { DocumentSection } from './DocumentSection';
import { FAQSection } from './FAQSection';
import { GallerySection } from './GallerySection';
import { HeroSection } from './HeroSection';
import { LocationSection } from './LocationSection';
import { ServiceSection } from './ServiceSection';
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
      <AboutSection />
      <Space half />
      <ServiceSection />
      <Space />
      <DiscountSection />
      <Space />
      <FAQSection />
      <Space />
      <TestimonialSection />
      <Space />
      <GallerySection />
      <Space />
      <DocumentSection />
      <Space />
      <LocationSection />
      <Space />
      <ContactSection />
      <Space />
      <SponsorSection />
    </>
  );
}
