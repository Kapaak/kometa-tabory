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
			<FAQSection />
			<Space />
			<TestimonialSection />
			<Space />
			<TrainerSection />
			<Space />
			<DocumentSection />
			<Space />
			<ContactSection />
			<Space />
			<SponsorSection />
		</main>
	);
};
