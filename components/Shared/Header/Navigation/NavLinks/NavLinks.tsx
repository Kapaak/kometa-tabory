//libraries
import { useSelector } from "react-redux";
//components
import NavLink from "./NavLink/NavLink";
//styles
import * as S from "./NavLinks.style";
//interfaces
import { INavLink } from "../Navigation.interface";
//redux
import { RootState } from "@/state";

interface Props {
	data: Array<INavLink>;
}

const NavItems = ({ data }: Props) => {
	const isActive = useSelector(
		(state: RootState) => state.navigation.isNavActive
	);

	return (
		<S.NavLinks isActive={isActive}>
			{data.map((d, i) => (
				<NavLink
					key={i}
					href={d.href}
					scrollTarget={d?.scrollTarget}
					dropdown={d.dropdown || undefined}
				>
					{d.output}
				</NavLink>
			))}
		</S.NavLinks>
	);
};

export default NavItems;
