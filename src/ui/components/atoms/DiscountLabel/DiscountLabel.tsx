import * as S from './DiscountLabel.style';

interface DiscountLabelProps {
  title?: string;
  description?: string;
}

export const DiscountLabel = ({ description, title }: DiscountLabelProps) => {
  return (
    <S.DiscountLabel>
      <S.BiggerText>{title}</S.BiggerText>
      <S.SmallerText>{description}</S.SmallerText>
    </S.DiscountLabel>
  );
};
