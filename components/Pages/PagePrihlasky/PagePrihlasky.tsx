import { MaxWidth } from "@ui-library";
import { IService } from "../PageHome/ServiceSection/ServiceSection.interface";
import { SectionForm } from "./SectionForm";
import * as S from "./PagePrihlasky.style";

interface PagePrihlaskyProps {
	camp: IService | undefined;
}

export const PagePrihlasky = ({ camp }: PagePrihlaskyProps) => {
	return (
		<MaxWidth>
			<S.Headline>{camp?.headline}</S.Headline>
			<S.Subheadline>{camp?.info?.date}</S.Subheadline>
			{camp?.spreadsheetId && <SectionForm spreadsheet={camp.spreadsheetId} />}
		</MaxWidth>
	);
};
