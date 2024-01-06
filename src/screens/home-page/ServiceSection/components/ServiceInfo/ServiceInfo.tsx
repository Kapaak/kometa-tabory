import { Backpack, BatteryMedium, CalendarBlank } from '@phosphor-icons/react';

import { ServiceInfoItem } from '../ServiceInfoItem';

import * as S from './ServiceInfo.style';

export interface ServiceInfoType {
  date?: string;
  currentCapacity?: number;
  maxCapacity?: number;
  trip?: string;
  isAvailable?: boolean;
}

export const ServiceInfo = (props: ServiceInfoType) => {
  const { currentCapacity, date, maxCapacity, isAvailable, trip } = props;

  const hasCapacity =
    maxCapacity !== undefined && currentCapacity !== undefined && isAvailable;

  return (
    <S.ServiceItems>
      <ServiceInfoItem icon={CalendarBlank} label={date ?? ''} />
      <ServiceInfoItem icon={Backpack} label={trip ?? ''} />
      {hasCapacity && maxCapacity - currentCapacity < 5 && (
        <ServiceInfoItem icon={BatteryMedium} label="Volná místa:">
          <div>
            <S.CapacityText smallCapacity={maxCapacity - currentCapacity < 5}>
              {maxCapacity - currentCapacity}
            </S.CapacityText>
            <span> z {maxCapacity}</span>
          </div>
        </ServiceInfoItem>
      )}
    </S.ServiceItems>
  );
};
