//components
import ContactItems from "./LocationSectionItems/LocationSectionItems";
import ContactMap from "./ContactMap/ContactMap";
//styles
import { MaxWidth } from "~/ui/components";
import * as S from "./LocationSection.style";
//data
import { data } from "./LocationSection.data";

export const LocationSection = () => {
  return (
    <S.LocationSection name="location">
      <MaxWidth>
        <S.Flex>
          <ContactItems data={data} />
          <ContactMap />
        </S.Flex>
      </MaxWidth>
    </S.LocationSection>
  );
};
