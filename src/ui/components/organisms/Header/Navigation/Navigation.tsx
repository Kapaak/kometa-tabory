//components
import { data } from './Navigation.data';
import * as S from './Navigation.style';
import NavLinks from './NavLinks/NavLinks';
//styles
//data
import { Hamburger, Logo } from '../../../atoms';

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
