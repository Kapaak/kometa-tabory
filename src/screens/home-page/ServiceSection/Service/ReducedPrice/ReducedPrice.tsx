import { labelVariant } from "../Service.variant";
import * as S from "./ReducedPrice.style";

interface ReducedPriceProps {
  price: number;
  oldPrice: number;
}

export const ReducedPrice = ({ price, oldPrice }: ReducedPriceProps) => {
  return (
    <S.Label variants={labelVariant}>
      {Math.floor(100 - (price / oldPrice) * 100)}% sleva
    </S.Label>
  );
};
