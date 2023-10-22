import {
  Backpack,
  BatteryMedium,
  CalendarBlank,
  Coin,
} from '@phosphor-icons/react';

import { joinValues } from '~/utils';

import { ulVariant } from '../../variants';
import { ServiceInfoItem } from '../ServiceInfoItem';

import * as S from './ServiceInfo.style';

export interface ServiceInfoType {
  price?: number;
  discountPrice?: number;
  date?: string;
  currentCapacity?: number;
  maxCapacity?: number;
  trip?: string;
}

export const ServiceInfo = (props: ServiceInfoType) => {
  const { currentCapacity, date, maxCapacity, price, discountPrice, trip } =
    props;

  const hasCapacity = maxCapacity && currentCapacity;

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
        {discountPrice && <S.LineThroughText>{price} Kč</S.LineThroughText>}
      </ServiceInfoItem>
      <ServiceInfoItem icon={CalendarBlank} label={date ?? ''} />
      <ServiceInfoItem icon={BatteryMedium} label="Volná místa:">
        <div>
          <S.CapacityText
            smallCapacity={
              hasCapacity ? maxCapacity - currentCapacity < 5 : false
            }
          >
            {hasCapacity ? maxCapacity - currentCapacity : '-'}
          </S.CapacityText>
          <span> z {hasCapacity && maxCapacity}</span>
        </div>
      </ServiceInfoItem>
      <ServiceInfoItem icon={Backpack} label={trip ?? ''} />
    </S.ServiceItems>
  );
};
