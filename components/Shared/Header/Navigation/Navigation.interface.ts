import { ScrollTargets } from "@/utils";

export interface IDropdown {
  href: string;
  scrollTarget?: ScrollTargets;
  output: string;
}

export interface INavLink extends IDropdown {
  dropdown?: Array<IDropdown>;
}

export { ScrollTargets };
