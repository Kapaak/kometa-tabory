//components
import ContactItems from "./ContactItems/ContactItems";
import ContactMap from "./ContactMap/ContactMap";
//styles
import { MaxWidth } from "@ui-library";
import * as S from "./ContactSection.style";
//data
import { data } from "./ContactSection.data";

export const ContactSection = () => {
	return (
		<S.ContactSection name="contact">
			<MaxWidth>
				<S.Flex>
					<ContactItems data={data} />
					<ContactMap />
				</S.Flex>
			</MaxWidth>
		</S.ContactSection>
	);
};
