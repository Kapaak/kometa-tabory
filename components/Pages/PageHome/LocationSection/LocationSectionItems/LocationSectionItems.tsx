//components
import LocationSectionItem from "./LocationSectionItem/LocationSectionItem";
//styles
import { Headline } from "@/components";
import { Flex } from "@ui-library";
import * as S from "./LocationSectionItems.style";
//interfaces
import { IContact } from "../LocationSection.interface";

interface Props {
  data: Array<IContact>;
}

const LocationSectionItems = ({ data }: Props) => {
  return (
    <Flex gap="2rem">
      <Headline>Místo konání</Headline>
      <S.Text variant="dark" bold style={{ textTransform: "uppercase" }}>
        Bauerova 321/5, Brno 603 00
      </S.Text>
      <S.Text variant="dark">
        Náš tábor se nachází v rozlehlém areálu SKP KOMETA BRNO, který se
        nachází vedle Brněnské Riviéry. Máme tu obrovské travnaté plochy, kde
        můžeme běhat a hrát spousty her, ať už ve stínu pod stromy nebo na
        sluníčku. A kdyby pršelo, tak máme připravenou tělocvičnu.
      </S.Text>
      <S.Container>
        {data.map((d, i) => (
          <LocationSectionItem
            key={i}
            title={d.title}
            icon={d.icon}
            description={d.description}
          />
        ))}
      </S.Container>
    </Flex>
  );
};

export default LocationSectionItems;
