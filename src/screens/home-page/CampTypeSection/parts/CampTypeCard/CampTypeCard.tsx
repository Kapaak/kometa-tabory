import { Baby, Coin, SwimmingPool } from '@phosphor-icons/react';

import { DiscountChip } from '~/components/CampCard/parts';
import { SanityImage } from '~/domains';
import { Button, Strong } from '~/ui/components';
import { getDiscount } from '~/utils';

import * as S from './CampTypeCard.style';

interface CampTypeCardProps {
  title?: string;
  description?: string;
  price?: number;
  discountPrice?: number;
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
  discountPrice,
  image,
  title,
  url,
}: CampTypeCardProps) {
  return (
    <S.CampTypeCard>
      {discountPrice && (
        <DiscountChip
          label="sleva až"
          value={getDiscount(price, discountPrice)}
        />
      )}

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
            <Coin />
            <Strong>
              {discountPrice && 'od '}
              {discountPrice ?? price} Kč
            </Strong>
          </S.CampTypeCardListItem>
          {dailySwimmingCount && (
            <S.CampTypeCardListItem>
              <SwimmingPool /> <Strong>{dailySwimmingCount}x týdně</Strong>
            </S.CampTypeCardListItem>
          )}
          <S.CampTypeCardListItem>
            <Baby /> <Strong>{age}</Strong>
          </S.CampTypeCardListItem>
        </S.CampTypeCardList>
        <S.CampTypeCardLink href={url ?? ''} passHref>
          <Button variant="filled">Zobrazit termíny</Button>
        </S.CampTypeCardLink>
      </S.CampTypeCardContainer>
    </S.CampTypeCard>
  );
}
