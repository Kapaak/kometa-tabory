//libraries
import Image from "next/image";
//componenets
import { ContentRenderer } from "@/utils";
//styles
import * as S from "./ContactItem.style";
import { Flex } from "@ui-library";

interface Props {
	headline: string;
	fragment: any;
	icon: any;
}

const ContactItem = ({ headline, fragment, icon }: Props) => {
	return (
		<S.ContactItem direction="row" gap="2rem" align="center">
			<Image src={icon} alt={headline.toLowerCase()} />
			<Flex gap=".5rem">
				<S.Headline>{headline}</S.Headline>
				<ContentRenderer
					fragment={fragment}
					LinkElement={S.LinkElement}
					TextElement={S.TextElement}
				/>
			</Flex>
		</S.ContactItem>
	);
};

export default ContactItem;
