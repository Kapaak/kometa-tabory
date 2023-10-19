//components
import NavLinks from "./NavLinks/NavLinks";
//styles
import * as S from "./Navigation.style";
//data
import { data } from "./Navigation.data";
import { Logo } from "../Logo";
import { Hamburger } from "../Hamburger";

interface Props {
  isActive: boolean;
}

export const Navigation = ({ isActive }: Props) => {
  return (
    <S.Navigation>
      <Logo />
      <NavLinks data={data} isActive={isActive} />
      <Hamburger />
    </S.Navigation>
  );
};
