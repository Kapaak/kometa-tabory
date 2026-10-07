import { useMemo } from 'react';

import { SanityImage } from '~/domains';
import { GenderCapacity } from '~/types';
import { VerticalStack } from '~/ui/components';
import { getDiscount } from '~/utils';
import { formatLocaleNumber } from '~/utils/number';

import {
  CampCardButton,
  CampCardImage,
  CampCardInformationList,
  DiscountChip,
} from './parts';

import * as S from './CampCard.style';

interface CampCardProps {
  title: string;
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
  isDataError?: boolean;
  availabilityLabel?: string;
  maleCapacity?: GenderCapacity;
  femaleCapacity?: GenderCapacity;
}

const isGenderCapacityFull = (capacity?: GenderCapacity) =>
  typeof capacity?.max === 'number' && capacity.current >= capacity.max;

export function CampCard(props: CampCardProps) {
  const {
    title,
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
    isDataError,
    availabilityLabel,
    maleCapacity,
    femaleCapacity,
  } = props;

  // An empty capacity means there is no limit, 0 means the camp is closed
  const isTotalCapacityFull =
    typeof maxCapacity === 'number' ? currentCapacity >= maxCapacity : false;
  // A camp with gender limits is full only when there is no place left for either gender
  const isGenderCapacityFullForAll =
    isGenderCapacityFull(maleCapacity) && isGenderCapacityFull(femaleCapacity);
  const isFullCapacity = isTotalCapacityFull || isGenderCapacityFullForAll;
  const warningMessage = !isAvailable
    ? 'Přihlášky ještě nebyly otevřeny'
    : isFullCapacity
    ? 'Tento termín je již zaplněný'
    : '';

  const actionButtonLabel = useMemo(() => {
    if (isDataError) return 'Nepodařilo se načíst';
    else if (!isAvailable) return availabilityLabel ?? '';
    else if (isFullCapacity) return 'Termín je již zaplněný';
    else if (isAvailable && !isFullCapacity && !isNaN(currentCapacity))
      return 'Přihláška';
    else if (isAvailable && !isFullCapacity && isNaN(currentCapacity))
      return 'Načítání ...';
    else return '';
  }, [
    availabilityLabel,
    currentCapacity,
    isAvailable,
    isDataError,
    isFullCapacity,
  ]);

  return (
    <S.CampCard>
      {discountPrice && (
        <DiscountChip value={getDiscount(price, discountPrice)} />
      )}
      <S.CampCardImageContainer>
        <CampCardImage
          hasWarning={isFullCapacity || !isAvailable}
          warningMessage={warningMessage}
          image={image}
          alt={imageAlt}
        />
      </S.CampCardImageContainer>
      <S.Container>
        <S.Subheadline variant="dark">{title}</S.Subheadline>
        <CampCardInformationList
          isAvailable={isAvailable}
          currentCapacity={currentCapacity}
          maxCapacity={maxCapacity}
          maleCapacity={maleCapacity}
          femaleCapacity={femaleCapacity}
          date={date}
          trip={trip}
        />
        <S.PriceActionContainer>
          <CampCardButton
            label={actionButtonLabel}
            href={`/prihlasky/${url}`}
            disabled={!isAvailable || isFullCapacity}
          />
          <VerticalStack justify="center" align="flex-end">
            {discountPrice && (
              <>
                <S.DiscountPrice>
                  {formatLocaleNumber(Number(price))}
                </S.DiscountPrice>
                <S.Price>{formatLocaleNumber(Number(discountPrice))}</S.Price>
              </>
            )}
            {!discountPrice && (
              <S.Price>{formatLocaleNumber(Number(price))}</S.Price>
            )}
          </VerticalStack>
        </S.PriceActionContainer>
      </S.Container>
    </S.CampCard>
  );
}
