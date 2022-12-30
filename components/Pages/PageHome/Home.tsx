import { Space } from "@ui-library";
import {
  TrainerSection,
  TestimonialSection,
  SponsorSection,
  ServiceSection,
  HeroSection,
  FAQSection,
  DocumentSection,
  ContactSection,
  AboutSection,
  GallerySection,
  VideoSection,
} from "./index";

export const PageHome = () => {
  return (
    <main>
      <HeroSection />
      <Space half />
      <AboutSection />
      <Space half />
      <ServiceSection />
      <Space />
      <VideoSection />
      <Space />
      <FAQSection />
      <Space />
      <TestimonialSection />
      <Space />
      <TrainerSection />
      <Space />
      <GallerySection />
      <Space />
      <DocumentSection />
      <Space />
      <ContactSection />
      <Space />
      <SponsorSection />
    </main>
  );
};
