import {
  Backpack,
  BatteryMedium,
  CalendarBlank,
  Coin,
} from '@phosphor-icons/react';

import * as S from './ServiceInfo.style';
import { ulVariant } from '../Service.variant';

export interface ServiceInfoType {
  price: number;
  oldPrice?: number;
  date: string;
  currentCapacity: number;
  maxCapacity: number;
  specialEvent: string;
}

export const ServiceInfo = (props: ServiceInfoType) => {
  const { currentCapacity, date, maxCapacity, price, specialEvent, oldPrice } =
    props;

  return (
    <S.ServiceItems layout variants={ulVariant}>
      <S.ServiceItem bold>
        <Coin size={22} />
        <span>{price} Kč</span>
        {oldPrice && <S.LineThroughText>{oldPrice} Kč</S.LineThroughText>}
      </S.ServiceItem>
      <S.ServiceItem>
        <CalendarBlank size={22} />
        <span>{date}</span>
      </S.ServiceItem>
      <S.ServiceItem>
        <BatteryMedium size={22} />
        <div>
          <span>Volná místa: </span>
          <S.CapacityText smallCapacity={maxCapacity - currentCapacity < 5}>
            {maxCapacity - currentCapacity}
          </S.CapacityText>
          <span> z {maxCapacity}</span>
        </div>
      </S.ServiceItem>
      <S.ServiceItem>
        <Backpack size={22} />
        <span>{specialEvent}</span>
      </S.ServiceItem>
    </S.ServiceItems>
  );
};
