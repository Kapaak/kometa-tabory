import * as S from "./DiscountLabel.style";

export const DiscountLabel = () => {
  return (
    <S.DiscountLabel>
      <S.BiggerText>Sleva 14%</S.BiggerText>
      <S.SmallerText>Při platbě do konce dubna sleva 14%.</S.SmallerText>
    </S.DiscountLabel>
  );
};
