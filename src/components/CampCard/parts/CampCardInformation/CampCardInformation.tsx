import { Backpack, BatteryMedium, CalendarBlank } from '@phosphor-icons/react';

import { GenderCapacity } from '~/types';

import { CampCardListItem } from '../CampCardListItem';

import * as S from './CampCardInformation.style';

export interface ServiceInfoType {
  date?: string;
  currentCapacity?: number;
  maxCapacity?: number;
  maleCapacity?: GenderCapacity;
  femaleCapacity?: GenderCapacity;
  trip?: string;
  isAvailable?: boolean;
}

const getRemainingSpots = (count: number) => {
  if (count === 1) return { label: 'Zbývá poslední', noun: 'místo' };
  if (count >= 2 && count <= 4)
    return { label: 'Zbývají poslední', noun: 'místa' };
  return { label: 'Zbývá posledních', noun: 'míst' };
};

interface RemainingSpotsItemProps {
  currentCapacity: number;
  maxCapacity: number;
  prefix?: string;
}

const RemainingSpotsItem = ({
  currentCapacity,
  maxCapacity,
  prefix,
}: RemainingSpotsItemProps) => {
  const actualCapacity = Math.max(maxCapacity - currentCapacity, 0);

  // Also hides the item while the capacity is still loading (NaN)
  if (!(actualCapacity <= 5)) return null;

  const isSoldOut = actualCapacity === 0;
  const remainingSpots = getRemainingSpots(actualCapacity);
  const label = isSoldOut ? 'Vyprodáno' : remainingSpots.label;

  return (
    <CampCardListItem
      icon={BatteryMedium}
      label={prefix ? `${prefix}: ${label.toLowerCase()}` : label}
    >
      {!isSoldOut && (
        <div>
          <S.CapacityText smallCapacity>{actualCapacity}</S.CapacityText>
          <span> {remainingSpots.noun}</span>
        </div>
      )}
    </CampCardListItem>
  );
};

export const CampCardInformationList = (props: ServiceInfoType) => {
  const {
    currentCapacity = 0,
    date,
    maxCapacity,
    maleCapacity,
    femaleCapacity,
    isAvailable,
    trip,
  } = props;

  const hasGenderLimits =
    typeof maleCapacity?.max === 'number' ||
    typeof femaleCapacity?.max === 'number';

  return (
    <S.CampCardInformationList>
      <CampCardListItem icon={CalendarBlank} label={date ?? ''} />
      {trip && <CampCardListItem icon={Backpack} label={trip} />}
      {isAvailable && !hasGenderLimits && typeof maxCapacity === 'number' && (
        <RemainingSpotsItem
          currentCapacity={currentCapacity}
          maxCapacity={maxCapacity}
        />
      )}
      {isAvailable && typeof maleCapacity?.max === 'number' && (
        <RemainingSpotsItem
          prefix="Chlapci"
          currentCapacity={maleCapacity.current}
          maxCapacity={maleCapacity.max}
        />
      )}
      {isAvailable && typeof femaleCapacity?.max === 'number' && (
        <RemainingSpotsItem
          prefix="Dívky"
          currentCapacity={femaleCapacity.current}
          maxCapacity={femaleCapacity.max}
        />
      )}
    </S.CampCardInformationList>
  );
};
