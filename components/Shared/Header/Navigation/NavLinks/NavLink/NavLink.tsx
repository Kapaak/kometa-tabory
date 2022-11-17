//libraries
import Link from "next/link";
import { toggleNavigation } from "@/redux";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
//styles
import * as S from "./NavLink.style";
//interfaces
import { IDropdown, scrollTargets } from "../../Navigation.interface";
//others
import { scrollTo } from "@/utils";

interface Props {
	children: React.ReactNode;
	scrollTarget?: scrollTargets;
	href: string;
	dropdown?: Array<IDropdown>;
}

const NavLink = ({ scrollTarget, children, href, dropdown }: Props) => {
	const dispatch = useDispatch();
	const router = useRouter();

	const clickHandler = async (scrollTarget: string, href: string) => {
		const currentRoute = router.route;
		const onDifferentPage = href !== currentRoute;

		if (onDifferentPage) await router.push(href);
		scrollTo(scrollTarget);

		dispatch(toggleNavigation());
	};
	return (
		//I dont use next/link because I want to change route and then scroll to element
		//if I had next/link I would only change route, the function would not fire
		//maybe push route like /example#school and on example page have useEffect, that would fire
		//Scrolling to #school element on the initial page load (empty dependency array)
		<S.NavLink>
			{scrollTarget ? (
				<a onClick={() => clickHandler(scrollTarget, href)}>{children}</a>
			) : (
				<Link href={href} onClick={() => dispatch(toggleNavigation())}>
					{children}
				</Link>
			)}
			{/* {dropdown && (
        <S.Dropdown>
          {dropdown.map((g, i) => (
            <a onClick={() => clickHandler(g.scrollTarget, g.href)} key={i}>
              {g.output}
            </a>
          ))}
        </S.Dropdown>
      )} */}
		</S.NavLink>
	);
};

export default NavLink;
