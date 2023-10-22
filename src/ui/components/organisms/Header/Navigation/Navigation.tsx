//components
import { usePageContext } from '~/contexts/PageContext';

import { data } from './Navigation.data';
import { NavLInks } from './NavLinks';
import { Hamburger, Logo } from '../../../atoms';

import * as S from './Navigation.style';

interface Props {
  isActive: boolean;
}

export const Navigation = ({ isActive }: Props) => {
  const { toggleNavigation, isNavigationOpen } = usePageContext();

  return (
    <S.Navigation>
      <Logo />
      <NavLInks data={data} isActive={isActive} />
      <Hamburger isOpen={isNavigationOpen} onChange={toggleNavigation} />
    </S.Navigation>
  );
};
