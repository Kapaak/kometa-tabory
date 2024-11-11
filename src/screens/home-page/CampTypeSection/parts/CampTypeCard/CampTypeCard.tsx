import NextLink from 'next/link';

import { Baby, Coin, SwimmingPool } from '@phosphor-icons/react';

import { Button, Strong, VerticalStack } from '~/ui/components';
import { convertDateToLocaleString } from '~/utils/date';

import * as S from './CampTypeCard.style';

interface CampTypeCardProps {
  title?: string;
  description?: string;
  price?: number;
  age?: string;
  url?: string;
  dailySwimmingCount?: number;
  image?: { src?: string; alt?: string };
  availableFrom?: string;
}

//TODO:pokud neni sezona, tak ten redirect schovat a dat placeholder s nejakym datem
// v tu dobu nefetchovat data pro ty podstranky
//  - to aktivni dej do settings karty v sanity ... to nemusim nastavovat pro kazdej kurz

//TOOD: pridej zadavani pro tyhle karty v SANITY

//TODO: check jestli availableFrom je v minulosti, pokud jo tak se lze prihlasit, jinak zobraz placehodler text

export function CampTypeCard({
  age,
  dailySwimmingCount,
  description,
  price,
  image,
  title,
  url,
  availableFrom,
}: CampTypeCardProps) {
  const isAvailable = availableFrom
    ? new Date(availableFrom) < new Date()
    : true;

  const redirectButtonText = isAvailable
    ? 'Zobrazit termíny'
    : `otvíráme ${convertDateToLocaleString(availableFrom, 'D. M. YYYY')}`;

  return (
    <S.CampTypeCard>
      <S.CampTypeCardImageContainer>
        {image?.src && (
          <S.CampTypeCardImage src={image.src} alt={image?.alt ?? ''} fill />
        )}
      </S.CampTypeCardImageContainer>

      <VerticalStack gap="2rem" align="flex-start" padding="2.4rem">
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
        <Button disabled={!isAvailable}>
          <NextLink href={url ?? ''} passHref>
            {redirectButtonText}
          </NextLink>
        </Button>
      </VerticalStack>
    </S.CampTypeCard>
  );
}
