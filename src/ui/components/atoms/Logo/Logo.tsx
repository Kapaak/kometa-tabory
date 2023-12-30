//styles
import Link from 'next/link';

import * as S from './Logo.style';
//images
import LogoLatest from '~/public/icons/kometa-blue.svg';

export function Logo() {
  return (
    <Link href="/" aria-label="logo této stránky" passHref>
      <S.Img src={LogoLatest} alt="logo" />
    </Link>
  );
}
