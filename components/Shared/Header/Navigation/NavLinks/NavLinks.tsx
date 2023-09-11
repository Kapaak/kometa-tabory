//libraries
import { useSelector } from "react-redux";
//components
import NavLink from "./NavLink/NavLink";
//styles
import * as S from "./NavLinks.style";
//interfaces
import { INavLink, ScrollTargets } from "../Navigation.interface";
//redux
import { RootState } from "@/state";
import { Button } from "components/Shared/Button";
import { scrollTo } from "utils/functions";
import { Hidden } from "@ui-library";

interface Props {
  data: Array<INavLink>;
}

const NavItems = ({ data }: Props) => {
  const isActive = useSelector(
    (state: RootState) => state.navigation.isNavActive
  );

  return (
    <S.NavLinks isActive={isActive}>
      {data.map((d, i) => (
        <NavLink
          key={i}
          href={d.href}
          scrollTarget={d?.scrollTarget}
          dropdown={d.dropdown || undefined}
        >
          {d.output}
        </NavLink>
      ))}
      <Hidden up="notebook">
        <NavLink href="" scrollTarget={ScrollTargets.services}>
          Volné termíny
        </NavLink>
      </Hidden>
      <Hidden down="notebook">
        <Button
          variant="filled"
          size="small"
          onClick={() => scrollTo(ScrollTargets.services)}
        >
          Volné termíny
        </Button>
      </Hidden>
    </S.NavLinks>
  );
};

export default NavItems;
