import { Backpack, BatteryMedium, CalendarBlank } from '@phosphor-icons/react';

import { CampCardListItem } from '../CampCardListItem';

import * as S from './CampCardInformation.style';

export interface ServiceInfoType {
  date?: string;
  currentCapacity?: number;
  maxCapacity?: number;
  trip?: string;
  isAvailable?: boolean;
}

export const CampCardInformationList = (props: ServiceInfoType) => {
  const {
    currentCapacity = 0,
    date,
    maxCapacity = 0,
    isAvailable,
    trip,
  } = props;
  const actualCapacity = maxCapacity - currentCapacity;

  return (
    <S.CampCardInformationList>
      <CampCardListItem icon={CalendarBlank} label={date ?? ''} />
      {trip && <CampCardListItem icon={Backpack} label={trip} />}
      {isAvailable && maxCapacity - currentCapacity < 5 && (
        <CampCardListItem icon={BatteryMedium} label="Volná místa:">
          <div>
            <S.CapacityText smallCapacity={maxCapacity - currentCapacity < 5}>
              {actualCapacity >= 0 ? actualCapacity : 0}
            </S.CapacityText>
            <span> z {maxCapacity}</span>
          </div>
        </CampCardListItem>
      )}
    </S.CampCardInformationList>
  );
};
