//libraries
import Image from "next/image";

//images
import * as S from "./FooterInitial.style";
import KometaLogo from "../../../../../../public/icons/kometa.svg";
import LogoWhite from "../../../../../../public/icons/logo-latest-white.svg";
//styles

const FooterInitial = () => {
  return (
    <S.Flex justify="space-between" direction="row" wrap="wrap" gap="3rem">
      <Image src={LogoWhite} alt="logo stránky primestaky" />
      <Image src={KometaLogo} alt="logo Kometa Brno" />
      <S.Text variant="light">
        Sportovní klub policie Brno <br />
        Bauerova 321/5
        <br /> 613 00 Brno
      </S.Text>
    </S.Flex>
  );
};

export default FooterInitial;
