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
    href: "/prihlasky",
    output: "Přihlášky",
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
    scrollTarget: scrollTargets.contact,
    output: "Kontakt",
  },
];
