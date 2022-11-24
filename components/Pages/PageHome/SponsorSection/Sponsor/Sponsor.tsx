//libraries
import { ISponsor } from "../SponsorSection.interface";
//styles
import * as S from "./Sponsor.style";

const Sponsor = ({ href, image, name }: ISponsor) => {
	return (
		<S.Sponsor href={href}>
			<S.Image src={image} alt={name} height={100} width={120} priority />
		</S.Sponsor>
	);
};

export default Sponsor;
