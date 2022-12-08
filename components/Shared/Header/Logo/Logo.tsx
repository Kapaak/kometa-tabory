//styles
import * as S from "./Logo.style";
//images
import LogoLatest from "@/public/icons/logo-tabory.svg";

const Logo = () => {
	return (
		<S.Logo href="/" aria-label="logo této stránky">
			<S.Image src={LogoLatest} alt="page logo" />
		</S.Logo>
	);
};

export default Logo;
