import * as S from './DiscountChip.style';

interface DiscountChipProps {
  value: number;
}

export function DiscountChip({ value }: DiscountChipProps) {
  return <S.DiscountChip>sleva {value} %</S.DiscountChip>;
}
