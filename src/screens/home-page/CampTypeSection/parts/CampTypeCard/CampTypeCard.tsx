import NextLink from 'next/link';

import { Baby, Coin, SwimmingPool } from '@phosphor-icons/react';

import { SanityImage } from '~/domains';
import { Button, Strong } from '~/ui/components';

import * as S from './CampTypeCard.style';

interface CampTypeCardProps {
  title?: string;
  description?: string;
  price?: number;
  age?: string;
  url?: string;
  dailySwimmingCount?: number;
  image?: { src?: SanityImage; alt?: string };
  availableFrom?: string;
}

export function CampTypeCard({
  age,
  dailySwimmingCount,
  description,
  price,
  image,
  title,
  url,
}: CampTypeCardProps) {
  return (
    <S.CampTypeCard>
      <S.CampTypeCardImageContainer>
        {image?.src && (
          <S.CampTypeCardImage
            fill
            alt={image?.alt ?? ''}
            image={image.src}
            objectFit="cover"
            draggable={false}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </S.CampTypeCardImageContainer>

      <S.CampTypeCardContainer>
        <S.CampTypeCardTitle>{title}</S.CampTypeCardTitle>
        <S.CampTypeCardDescription>{description}</S.CampTypeCardDescription>
        <S.CampTypeCardList>
          <S.CampTypeCardListItem>
            <Coin /> <Strong>{price} Kč</Strong>
          </S.CampTypeCardListItem>
          {dailySwimmingCount && (
            <S.CampTypeCardListItem>
              <SwimmingPool /> <Strong>{dailySwimmingCount}x denně</Strong>
            </S.CampTypeCardListItem>
          )}
          <S.CampTypeCardListItem>
            <Baby /> <Strong>{age}</Strong>
          </S.CampTypeCardListItem>
        </S.CampTypeCardList>
        <NextLink href={url ?? ''} passHref>
          <Button>Zobrazit termíny</Button>
        </NextLink>
      </S.CampTypeCardContainer>
    </S.CampTypeCard>
  );
}
