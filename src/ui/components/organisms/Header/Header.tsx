//libraries
import { useSelector } from "react-redux";
//styles
import * as S from "./Header.style";
//components
import { Navigation } from "./Navigation";
//redux
import { RootState } from "~/state";
import { DiscountLabel,  } from "~/ui/components";
import { SanityInfoBar } from "~/domains";

interface HeaderProps {
  infoBar?: SanityInfoBar;
}

export function Header ({ infoBar }: HeaderProps) {
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
};

export default Header;
