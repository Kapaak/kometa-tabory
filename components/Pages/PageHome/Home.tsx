import { Space } from "@ui-library";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { HeroSection } from "./HeroSection";
import { ServiceSection } from "./ServiceSection/ServiceSection";

export const PageHome = () => {
	return (
		<main>
			<HeroSection />
			<Space half />
			<AboutSection />
			<Space half />
			<ServiceSection />
			<Space />
			<ContactSection />
			<Space />
			{/* <SponsorSection /> */}
		</main>
	);
};
