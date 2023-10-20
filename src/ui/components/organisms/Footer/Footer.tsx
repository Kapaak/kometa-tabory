//components
import FooterSections from "./FooterSections/FooterSections";
import FooterInitial from "./FooterInital/FooterInitial";
import FooterEnding from "./FooterEnding/FooterEnding";
//styles
import * as S from "./Footer.style";
//data
import { data } from "./Footer.data";

export function Footer(){
  return (
    <S.Footer>
      <S.MaxWidth>
        <S.Flex gap="4rem">
          <FooterInitial />
          <FooterSections data={data} />
          <FooterEnding />
        </S.Flex>
      </S.MaxWidth>
    </S.Footer>
  );
};
