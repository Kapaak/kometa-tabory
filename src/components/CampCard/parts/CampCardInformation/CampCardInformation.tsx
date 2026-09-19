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

const getRemainingSpots = (count: number) => {
  if (count === 1) return { label: 'Zbývá poslední', noun: 'místo' };
  if (count >= 2 && count <= 4)
    return { label: 'Zbývají poslední', noun: 'místa' };
  return { label: 'Zbývá posledních', noun: 'míst' };
};

export const CampCardInformationList = (props: ServiceInfoType) => {
  const {
    currentCapacity = 0,
    date,
    maxCapacity = 0,
    isAvailable,
    trip,
  } = props;
  const actualCapacity = Math.max(maxCapacity - currentCapacity, 0);
  const isSoldOut = actualCapacity === 0;

  const remainingSpots = getRemainingSpots(actualCapacity);

  return (
    <S.CampCardInformationList>
      <CampCardListItem icon={CalendarBlank} label={date ?? ''} />
      {trip && <CampCardListItem icon={Backpack} label={trip} />}
      {isAvailable && maxCapacity - currentCapacity <= 5 && (
        <CampCardListItem
          icon={BatteryMedium}
          label={isSoldOut ? 'Vyprodáno' : remainingSpots.label}
        >
          {!isSoldOut && (
            <div>
              <S.CapacityText smallCapacity>{actualCapacity}</S.CapacityText>
              <span> {remainingSpots.noun}</span>
            </div>
          )}
        </CampCardListItem>
      )}
    </S.CampCardInformationList>
  );
};
