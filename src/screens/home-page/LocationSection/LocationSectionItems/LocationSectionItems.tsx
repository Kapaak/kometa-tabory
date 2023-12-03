//components
import { Flex, Headline } from '~/ui/components';

import LocationSectionItem, {
  LocationSection,
} from './LocationSectionItem/LocationSectionItem';

//styles
import * as S from './LocationSectionItems.style';

interface Props {
  data: Array<LocationSection>;
}

const LocationSectionItems = ({ data }: Props) => {
  return (
    <Flex gap="2rem">
      <Headline>Místo konání</Headline>
      <S.Text variant="dark" bold style={{ textTransform: 'uppercase' }}>
        SPORTOVNÍ 486/4, BRNO 602 00
      </S.Text>
      {/* <S.Text>
        Z důvodu opravy je ulice Bauerova zavřena. Místo toho lze použít
        Expoparking.
      </S.Text>
      <S.Text variant="dark" bold>
        Parkovací dům{" "}
        <a
          href="https://www.bvv.cz/navstevnici/doprava/expoparking/"
          style={{ textDecoration: "underline" }}
        >
          Expoparking
        </a>{" "}
        a odstavné plochy najdete v blízkosti brány 4 na BVV – některé patří do
        zóny C (přes den zdarma).
      </S.Text> */}
      <S.Text variant="dark">
        Náš tábor má základnu na bazéně Lužánky. Bezstarostně se sem dostanete
        jak autem, tak i veřejnou dopravou. Těšíme se na setkání s vámi na našem
        táboře plném zábavy a dobrodružství!
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
