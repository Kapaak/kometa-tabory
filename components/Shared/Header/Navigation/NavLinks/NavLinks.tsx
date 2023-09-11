import Link from "next/link";
import Image from "next/image";
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
import { Flex, Hidden } from "@ui-library";
//images
import FacebookInvertIcon from "@/public/icons/facebook-invert.svg";
import InstagramInvertIcon from "@/public/icons/instagram-invert.svg";

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
      <Hidden down="desktop">
        <Flex
          direction="row"
          align="center"
          gap="3rem"
          style={{ marginTop: ".7rem" }}
        >
          <Link href="https://www.facebook.com/primestakbrno">
            <Image
              src={FacebookInvertIcon}
              width={22}
              height={22}
              alt="facebook"
            />
          </Link>
          <Link href="https://www.instagram.com/primestakbrno">
            <Image
              src={InstagramInvertIcon}
              width={22}
              height={22}
              alt="instagram"
            />
          </Link>
        </Flex>
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
