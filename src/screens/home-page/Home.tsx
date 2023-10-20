import { Space } from "~/ui/components";
import {
  TrainerSection,
  TestimonialSection,
  SponsorSection,
  ServiceSection,
  HeroSection,
  LocationSection,
  FAQSection,
  DocumentSection,
  AboutSection,
  GallerySection,
  VideoSection,
  ContactSection,
} from "./index";

export function HomePageScreen() {
  return (
    <main>
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
    </main>
  );
}