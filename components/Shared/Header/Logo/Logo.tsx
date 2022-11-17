//libraries
import Image from "next/image";
import Link from "next/link";
//styles
import * as S from "./Logo.style";
//images
import LogoLatest from "@/public/icons/logo-latest.svg";

const Logo = () => {
	return (
		<Link href="/" aria-label="logo této stránky" passHref>
			{/* <S.Logo>
        <Image src={LogoLatest} layout="fill" alt="logo" />
      </S.Logo> */}
		</Link>
	);
};

export default Logo;
