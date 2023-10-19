import Link from "next/link";
import Image from "next/image";
//libraries
import { useSelector } from "react-redux";
//components
import NavLink from "./NavLink/NavLink";
//styles
import * as S from "./NavLinks.style";
//redux
import { RootState } from "~/state";
import { Button, Flex, Hidden } from "~/ui/components";
import { scrollTo } from "~/utils";
//images
import FacebookInvertIcon from "../../../../../public/icons/facebook-invert.svg";
import InstagramInvertIcon from "../../../../../public/icons/instagram-invert.svg";
import { NavLink as NavLinkType, ScrollTargets } from "~/types";

interface Props {
  data: Array<NavLinkType>;
  isActive?: boolean;
}

const NavItems = ({ data, isActive = false }: Props) => {
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
        <S.IconsWrapper>
          <Link href="https://www.facebook.com/primestakkometa">
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
        </S.IconsWrapper>
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
