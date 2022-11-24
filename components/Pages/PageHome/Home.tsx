import { Space } from "@ui-library";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { FAQSection } from "./FAQSection";
import { HeroSection } from "./HeroSection";
import { ServiceSection } from "./ServiceSection/ServiceSection";
import { SponsorSection } from "./SponsorSection";
import { TestimonialSection } from "./TestimonialSection";
import { TrainerSection } from "./TrainerSection";

export const PageHome = () => {
	return (
		<main>
			<HeroSection />
			<Space half />
			<AboutSection />
			<Space half />
			<ServiceSection />
			<Space />
			<FAQSection />
			<Space />
			<TestimonialSection />
			<Space />
			<TrainerSection />
			<Space />
			<ContactSection />
			<Space />
			<SponsorSection />
		</main>
	);
};
