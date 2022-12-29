import * as S from "./DiscountLabel.style";

export const DiscountLabel = () => {
	return (
		<S.DiscountLabel>
			<S.BiggerText>Sleva 28%</S.BiggerText>
			<S.SmallerText>
				Slevu získáte za včasnou platbu. Při platbě do února sleva 28%. Při
				platbě do konce dubna sleva 14%.
			</S.SmallerText>
		</S.DiscountLabel>
	);
};
