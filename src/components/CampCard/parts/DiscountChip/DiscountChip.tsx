import * as S from './DiscountChip.style';

interface DiscountChipProps {
  value: number;
  label?: string;
}

export function DiscountChip({ label = 'sleva', value }: DiscountChipProps) {
  return (
    <S.DiscountChip>
      {label} {value} %
    </S.DiscountChip>
  );
}
