import { labelVariant } from '../../variants';

import * as S from './DiscountChip.style';

interface DiscountChipProps {
  value: number;
}

export function DiscountChip({ value }: DiscountChipProps) {
  return (
    <S.DiscountChip variants={labelVariant}>sleva {value} %</S.DiscountChip>
  );
}
