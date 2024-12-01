import Image from 'next/image';
import Link from 'next/link';

import FacebookInvertIcon from '~/public/icons/facebook-invert.svg';
import InstagramInvertIcon from '~/public/icons/instagram-invert.svg';
import { NavLink as NavLinkType, ScrollTargets } from '~/types';
import { scrollTo } from '~/utils';

import { Button, Hidden } from '../../../../atoms';
import { NavLink } from './NavLink';

import * as S from './NavLinks.style';

interface Props {
  data: Array<NavLinkType>;
  isActive?: boolean;
}

export function NavLInks({ data, isActive = false }: Props) {
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
          onClick={() => scrollTo(ScrollTargets.campTypes)}
        >
          Volné termíny
        </Button>
      </Hidden>
    </S.NavLinks>
  );
}
