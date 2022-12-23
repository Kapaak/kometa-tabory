import { MaxWidth } from "@ui-library";
import { IService } from "../PageHome/ServiceSection/ServiceSection.interface";
import { SectionForm } from "./SectionForm";
import * as S from "./PagePrihlasky.style";

const initialState = {
	id: "fajapfa13asd",
	name: "Dítě 1",
};

const initialFormState = {
	address: "",
	alergy: "",
	city: "",
	czechNationality: "",
	dateOfBirth: "",
	email: "",
	foundUs: "",
	healthIssues: "",
	insurance: "",
	name: "",
	personalIdNum: "",
	phone: "",
	postCode: "",
	surname: "",
	swimmingAbilities: "",
	gender: "",
};

interface PagePrihlaskyProps {
	camp: IService | undefined;
}

export const PagePrihlasky = ({ camp }: PagePrihlaskyProps) => {
	return (
		<div>
			<MaxWidth>
				<S.Headline>{camp?.headline}</S.Headline>
				<S.Subheadline>{camp?.info?.date}</S.Subheadline>
				<SectionForm />
			</MaxWidth>
		</div>
	);
};
