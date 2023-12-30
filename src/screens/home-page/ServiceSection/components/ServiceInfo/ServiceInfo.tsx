import {
  Backpack,
  BatteryMedium,
  CalendarBlank,
  Coin,
} from '@phosphor-icons/react';

import { joinValues } from '~/utils';

import { ulVariant } from '../../variants';
import { ServiceInfoItem } from '../ServiceInfoItem';

import { Strong } from '~/ui/components';
import * as S from './ServiceInfo.style';

export interface ServiceInfoType {
  price?: number;
  discountPrice?: number;
  date?: string;
  currentCapacity?: number;
  maxCapacity?: number;
  trip?: string;
  isAvailable?: boolean;
}

export const ServiceInfo = (props: ServiceInfoType) => {
  const {
    currentCapacity,
    date,
    maxCapacity,
    price,
    isAvailable,
    discountPrice,
    trip,
  } = props;

  const hasCapacity =
    maxCapacity !== undefined && currentCapacity !== undefined && isAvailable;

  return (
    <S.ServiceItems layout variants={ulVariant}>
      <ServiceInfoItem
        bold
        icon={Coin}
        label={
          discountPrice
            ? joinValues([discountPrice, 'Kč'])
            : joinValues([price, 'Kč']) ?? '-'
        }
      >
        {discountPrice && (
          <S.LineThroughText>
            <Strong>{price} Kč</Strong>
          </S.LineThroughText>
        )}
      </ServiceInfoItem>
      <ServiceInfoItem icon={CalendarBlank} label={date ?? ''} />
      {hasCapacity && (
        <ServiceInfoItem icon={BatteryMedium} label="Volná místa:">
          <div>
            <S.CapacityText smallCapacity={maxCapacity - currentCapacity < 5}>
              {maxCapacity - currentCapacity}
            </S.CapacityText>
            <span> z {maxCapacity}</span>
          </div>
        </ServiceInfoItem>
      )}
      <ServiceInfoItem icon={Backpack} label={trip ?? ''} />
    </S.ServiceItems>
  );
};
