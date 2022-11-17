import { scrollTargets } from "@/utils";

export interface IDropdown {
	href: string;
	scrollTarget?: scrollTargets;
	output: string;
}

export interface INavLink extends IDropdown {
	dropdown?: Array<IDropdown>;
}

export { scrollTargets };
