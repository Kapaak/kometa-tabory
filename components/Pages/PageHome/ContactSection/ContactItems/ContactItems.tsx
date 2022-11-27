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
				Náš tábor se nachází v rozlehlém areálu SKP KOMETA BRNO, který se
				nachází vedle Brněnské Riviéry. Máme tu obrovské travnaté plochy, kde
				můžeme běhat a hrát spousty her, ať už ve stínu pod stromy nebo na
				sluníčku. A kdyby pršelo, tak máme připravenou tělocvičnu. Pokud se k
				nám chcete vydat MHD, tak je nejlepší vystoupit na zastávce BAUEROVA. A
				když přijedete autem, tak můžete zastavit naproti přes ulici, kde je
				veliké parkoviště.
			</S.Text>
			<S.Container>
				{data.map((d, i) => (
					<ContactItem
						key={i}
						headline={d.headline}
						icon={d.icon}
						fragment={d.fragment}
					/>
				))}
			</S.Container>
		</Flex>
	);
};

export default ContactItems;
