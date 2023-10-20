//libraries
import Marquee from "react-fast-marquee";
//styles
import * as S from "./SponsorSection.style";
import Sponsor from "./Sponsor/Sponsor";
//data
import { data as sponsors } from "./SponsorSection.data";

export const SponsorSection = () => {
	return (
		<S.SponsorSection name="sponsor">
			<Marquee pauseOnHover>
				<S.Flex direction="row" align="center" gap="5rem">
					{sponsors.map((sponsor, i) => (
						<Sponsor image={sponsor.image} href={sponsor.href} name={sponsor.name} key={i} />
					))}
				</S.Flex>
			</Marquee>
		</S.SponsorSection>
	);
};
