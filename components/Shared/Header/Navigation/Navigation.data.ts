import { INavLink, scrollTargets } from "./Navigation.interface";

export const data: Array<INavLink> = [
	{
		href: "/",
		scrollTarget: scrollTargets.home,
		output: "Domů",
	},
	{
		href: "/",
		scrollTarget: scrollTargets.about,
		output: "O nás",
	},
	{
		href: "/",
		scrollTarget: scrollTargets.services,
		output: "Tábory",

		//commented out, because it wont be needed on release
		// dropdown: [
		//   {
		//     href: "/prihlasky/skolky",
		//     scrollTarget: scrollTargets.skolky,
		//     output: "školky",
		//   },
		//   {
		//     href: "/prihlasky/skoly",
		//     scrollTarget: scrollTargets.skoly,
		//     output: "školy",
		//   },
		//   {
		//     href: "/prihlasky/kurzy",
		//     scrollTarget: scrollTargets.kurzy,
		//     output: "kurzy",
		//   },
		// ],
	},
	{
		href: "/",
		scrollTarget: scrollTargets.faq,
		output: "Základní informace",
	},
	{
		href: "/",
		scrollTarget: scrollTargets.testimonial,
		output: "Recenze",
	},
	{
		href: "/",
		scrollTarget: scrollTargets.trainer,
		output: "Trenéři",
	},
	{
		href: "/",
		scrollTarget: scrollTargets.contact,
		output: "Kontakt",
	},
];
