import { usePageContext } from '~/contexts/PageContext';
import { SanityInfoBar } from '~/domains';

import { Navigation } from './Navigation';
import { DiscountLabel } from '../../atoms/DiscountLabel';

import * as S from './Header.style';

interface HeaderProps {
  infoBar?: SanityInfoBar;
}

export function Header({ infoBar }: HeaderProps) {
  const { isNavigationOpen, isShadowActive } = usePageContext();

  return (
    <S.Header withShadow={isShadowActive}>
      {infoBar && (
        <DiscountLabel title={infoBar?.title} description={infoBar?.text} />
      )}
      <Navigation isActive={isNavigationOpen} />
    </S.Header>
  );
}
