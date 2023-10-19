//styles
import * as S from "./Logo.style";
//images
import LogoLatest from "../../../../public/icons/logo-tabory.svg";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" aria-label="logo této stránky" passHref>
      <S.Img src={LogoLatest} alt="logo" />
    </Link>
  );
}
