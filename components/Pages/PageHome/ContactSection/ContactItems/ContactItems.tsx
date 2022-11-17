//components
import ContactItem from "./ContactItem/ContactItem";
//styles
import { Headline } from "@/components";
import { Flex } from "@ui-library";
import * as S from "./ContactItems.style";
//interfaces
import { IContact } from "../ContactSection.interface";

interface Props {
	data: Array<IContact>;
}

const ContactItems = ({ data }: Props) => {
	return (
		<Flex gap="2rem">
			<Headline>Kontakt</Headline>
			<S.Text variant="dark">
				V případě jakýchkoliv dotazů nás kontaktujte.
			</S.Text>
			<Flex gap="2rem">
				{data.map((d, i) => (
					<ContactItem
						key={i}
						headline={d.headline}
						icon={d.icon}
						fragment={d.fragment}
					/>
				))}
			</Flex>
		</Flex>
	);
};

export default ContactItems;
