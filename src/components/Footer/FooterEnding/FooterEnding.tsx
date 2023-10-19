//libraries
import Image from "next/image";
import Link from "next/link";
//styles
import * as S from "./FooterEnding.style";
import { Flex } from "~/ui/components";
//images
import FacebookIcon from "../../../../public/icons/facebook.svg";
import InstagramIcon from "../../../../public/icons/instagram.svg";
import YoutubeIcon from "../../../../public/icons/youtube.svg";

const FooterEnding = () => {
  return (
    <Flex gap="1rem">
      <S.ImageFlexContainer gap="1rem" direction="row">
        <Link href="https://www.youtube.com/KometaSwimTv">
          <Image src={YoutubeIcon} width={30} height={30} alt="youtube" />
        </Link>
        <Link href="https://instagram.com/primestakbrno">
          <Image src={InstagramIcon} width={30} height={30} alt="instagram" />
        </Link>
        <Link href="https://www.facebook.com/primestakbrno">
          <Image src={FacebookIcon} width={30} height={30} alt="facebook" />
        </Link>
      </S.ImageFlexContainer>
      <S.Creator>
        <a href="https://www.pavelzapletal.cz/">© 2022 Pavel Zapletal</a>
      </S.Creator>
    </Flex>
  );
};

export default FooterEnding;
