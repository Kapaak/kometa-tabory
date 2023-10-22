import { Space } from '~/ui/components';

import { AboutSection } from './AboutSection';
import { ContactSection } from './ContactSection';
import { DocumentSection } from './DocumentSection';
import { FAQSection } from './FAQSection';
import { GallerySection } from './GallerySection';
import { HeroSection } from './HeroSection';
import { LocationSection } from './LocationSection';
import { ServiceSection } from './ServiceSection';
import { SponsorSection } from './SponsorSection';
import { TestimonialSection } from './TestimonialSection';
import { VideoSection } from './VideoSection';

export function HomePageScreen() {
  return (
    <>
      <HeroSection />
      <Space half />
      <AboutSection />
      <Space half />
      <VideoSection />
      <Space />
      <ServiceSection />
      <Space />
      <FAQSection />
      <Space />
      <TestimonialSection />
      {/* <Space />
      <TrainerSection /> */}
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
