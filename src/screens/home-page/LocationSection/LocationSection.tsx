//components
import { MaxWidth } from "~/ui/components";

import ContactMap from "./ContactMap/ContactMap";
//styles
import { data } from "./LocationSection.data";
import * as S from "./LocationSection.style";
//data
import ContactItems from "./LocationSectionItems/LocationSectionItems";

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
