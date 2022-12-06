import { labelVariant } from "../Service.variant";
import * as S from "./DiscountLabel.style";

interface DiscountLabelProps {
	price: number;
	oldPrice: number;
}

export const DiscountLabel = ({ price, oldPrice }: DiscountLabelProps) => {
	return (
		<S.Label variants={labelVariant}>
			{Math.ceil(100 - (price / oldPrice) * 100)}% sleva
		</S.Label>
	);
};
