//libraries
import { useSelector } from "react-redux";
//styles
import * as S from "./Header.style";
//components
import { Hamburger } from "./Hamburger";
import { Navigation } from "./Navigation";
import { Logo } from "./Logo";
//redux
import { RootState } from "~/state";
import { DiscountLabel, Flex } from "~/ui/components";
import { SanityInfoBar } from "~/domains";

interface HeaderProps {
  infoBar?: SanityInfoBar;
}

const Header = ({ infoBar }: HeaderProps) => {
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
