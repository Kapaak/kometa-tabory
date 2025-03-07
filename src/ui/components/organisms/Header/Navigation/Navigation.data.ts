import { NavLink, ScrollTargets } from '~/types';

export const data: Array<NavLink> = [
  {
    href: '/',
    scrollTarget: ScrollTargets.home,
    output: 'Domů',
  },
  {
    href: '/',
    scrollTarget: ScrollTargets.about,
    output: 'Naše tábory',
  },
  // {
  //   href: "/",
  //   scrollTarget: ScrollTargets.services,
  //   output: "Přihlášky",

  //commented out, because it wont be needed on release
  // dropdown: [
  //   {
  //     href: "/prihlasky/skolky",
  //     scrollTarget: ScrollTargets.skolky,
  //     output: "školky",
  //   },
  //   {
  //     href: "/prihlasky/skoly",
  //     scrollTarget: ScrollTargets.skoly,
  //     output: "školy",
  //   },
  //   {
  //     href: "/prihlasky/kurzy",
  //     scrollTarget: ScrollTargets.kurzy,
  //     output: "kurzy",
  //   },
  // ],
  // },
  // {
  //   href: '/',
  //   scrollTarget: ScrollTargets.faq,
  //   output: 'Základní informace',
  // },
  {
    href: '/',
    scrollTarget: ScrollTargets.gallery,
    output: 'Galerie',
  },
  // {
  //   href: "/",
  //   scrollTarget: ScrollTargets.trainer,
  //   output: "Trenéři",
  // },
  {
    href: '/',
    scrollTarget: ScrollTargets.location,
    output: 'Lokalita',
  },
  {
    href: '/',
    scrollTarget: ScrollTargets.contact,
    output: 'Kontakt',
  },
];
