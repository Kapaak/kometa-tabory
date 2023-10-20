import { useSelector } from 'react-redux';

import { SanityInfoBar } from '~/domains';
import { RootState } from '~/state';

import * as S from './Header.style';
import { Navigation } from './Navigation';
import { DiscountLabel } from '../../atoms/DiscountLabel';

interface HeaderProps {
  infoBar?: SanityInfoBar;
}

export function Header({ infoBar }: HeaderProps) {
  const isActive = useSelector(
    (state: RootState) => state.navigation.isNavActive
  );

  const withShadow = useSelector(
    (state: RootState) => state.navigation.withShadow
  );

  return (
    <S.Header withShadow={withShadow}>
      {infoBar && (
        <DiscountLabel title={infoBar?.title} description={infoBar?.text} />
      )}
      <Navigation isActive={isActive} />
    </S.Header>
  );
}

export default Header;
