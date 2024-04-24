import NextImage, { StaticImageData } from 'next/image';

import { VerticalStack } from '~/ui/components';

import * as S from './USP.style';

interface USPProps {
  title: string;
  description: string;
  icon: StaticImageData;
}

export function USP({ title, description, icon }: USPProps) {
  return (
    <S.USP>
      <NextImage src={icon} alt={title} height={100} width={100} />
      <VerticalStack gap="1rem" margin="0 0 auto">
        <S.Title bold>{title}</S.Title>
        <S.Description variant="dark">{description}</S.Description>
      </VerticalStack>
    </S.USP>
  );
}
