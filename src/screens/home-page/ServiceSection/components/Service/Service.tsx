import { useState } from 'react';

import { SanityImage } from '~/domains';
import { Button, Text } from '~/ui/components';
import { getDiscount, isTouchDevice } from '~/utils';

import { textVariant } from '../../variants';
import { DiscountChip } from '../DiscountChip/DiscountChip';
import { ServiceImage } from '../ServiceImage';
import { ServiceInfo } from '../ServiceInfo';

import * as S from './Service.style';

interface ServiceProps {
  headline: string;
  image?: SanityImage;
  imageAlt?: string;
  url: string;
  currentCapacity: number;
  price?: number;
  discountPrice?: number;
  trip?: string;
  date?: string;
  maxCapacity?: number;
  isAvailable?: boolean;
  availabilityLabel?: string;
}

export function Service(props: ServiceProps) {
  const {
    headline,
    image,
    imageAlt,
    date,
    discountPrice,
    maxCapacity,
    price,
    trip,
    url,
    currentCapacity,
    isAvailable,
    availabilityLabel,
  } = props;
  const [showMore, setShowMore] = useState(false);
  let isFullCapacity = true;
  const warningMessage = isAvailable
    ? 'Tento termín je již zaplněný'
    : 'Přihlášky ještě nebyly otevřeny';

  if (maxCapacity) {
    isFullCapacity = currentCapacity >= maxCapacity;
  }
  return (
    <S.Service
      initial="hidden"
      {...(!isTouchDevice() && { whileHover: 'visible' })}
      animate={showMore ? 'visible' : 'hidden'}
    >
      <ServiceImage
        hasWarning={isFullCapacity}
        warningMessage={warningMessage}
        image={image}
        alt={imageAlt ?? ''}
      />
      <S.Container layout variants={textVariant}>
        {discountPrice && (
          <DiscountChip value={getDiscount(price, discountPrice)} />
        )}
        <S.Subheadline variant="dark">{headline}</S.Subheadline>
        <Text variant="grey">{date ?? ''}</Text>
        <ServiceInfo
          currentCapacity={currentCapacity}
          maxCapacity={maxCapacity}
          date={date}
          price={price}
          discountPrice={discountPrice}
          trip={trip}
        />
        <S.ActionsContainer>
          {isTouchDevice() && (
            <S.ShowMoreButton
              variant="plain"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? 'Méně' : 'Více'} o táboru
            </S.ShowMoreButton>
          )}

          {!isAvailable && <Button disabled>{availabilityLabel}</Button>}
          {isFullCapacity && isAvailable && (
            <Button disabled>Termín je již zaplněný</Button>
          )}
          {!isFullCapacity && isAvailable && !isNaN(currentCapacity) && (
            <S.Link href={`/prihlasky/${url}`}>Přihláška</S.Link>
          )}
          {!isFullCapacity && isAvailable && isNaN(currentCapacity) && (
            <Button disabled>Načítání ...</Button>
          )}
        </S.ActionsContainer>
      </S.Container>
    </S.Service>
  );
}
