//libraries
import { useSelector } from "react-redux";
//styles
import * as S from "./Header.style";
//components
import Hamburger from "./Hamburger/Hamburger";
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";
//redux
import { RootState } from "@/redux";
import { Flex } from "@ui-library";

export const Header = () => {
	const isActive = useSelector(
		(state: RootState) => state.navigation.isNavActive
	);

	const withShadow = useSelector(
		(state: RootState) => state.navigation.withShadow
	);

	return (
		<S.Header withShadow={withShadow}>
			<S.MaxWidth>
				<Flex direction="row" align="center" justify="space-between">
					<Logo />
					<Navigation isActive={isActive} />
					<Hamburger />
				</Flex>
			</S.MaxWidth>
		</S.Header>
	);
};
