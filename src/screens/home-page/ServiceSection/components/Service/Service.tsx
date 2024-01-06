import { useMemo } from 'react';

import { SanityImage } from '~/domains';
import { HorizontalStack, VerticalStack } from '~/ui/components';
import { getDiscount } from '~/utils';
import { formatLocaleNumber } from '~/utils/number';

import { DiscountChip } from '../DiscountChip/DiscountChip';
import { ServiceActionButton } from '../ServiceActionButton';
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
  isDataError?: boolean;
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
    isDataError,
    availabilityLabel,
  } = props;

  let isFullCapacity = true;
  const warningMessage = isAvailable
    ? 'Tento termín je již zaplněný'
    : 'Přihlášky ještě nebyly otevřeny';

  if (maxCapacity) {
    isFullCapacity = currentCapacity >= maxCapacity;
  }

  const isServiceAvailable =
    isAvailable && !isFullCapacity && !isNaN(currentCapacity);

  const actionButtonLabel = useMemo(() => {
    if (isDataError) return 'Nepodařilo se načíst data';
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
    <S.Service>
      {discountPrice && (
        <DiscountChip value={getDiscount(price, discountPrice)} />
      )}
      <ServiceImage
        hasWarning={isFullCapacity || !isAvailable}
        warningMessage={warningMessage}
        image={image}
        alt={imageAlt ?? ''}
      />
      <S.Container>
        <S.Subheadline variant="dark">{headline}</S.Subheadline>
        <ServiceInfo
          isAvailable={isAvailable}
          currentCapacity={currentCapacity}
          maxCapacity={maxCapacity}
          date={date}
          trip={trip}
        />
        <HorizontalStack justify="space-between" align="center">
          <ServiceActionButton
            label={actionButtonLabel}
            href={isServiceAvailable ? `/prihlasky/${url}` : undefined}
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
        </HorizontalStack>
      </S.Container>
    </S.Service>
  );
}
