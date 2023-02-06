import { ContentType } from "./Footer.interface";
import { IData } from "./Footer.interface";

export const data: Array<IData> = [
  {
    headline: "Kontaktní osoba",
    fragment: [
      {
        output: "Bc. Anna Matušová",
        type: ContentType.bold,
      },
      {
        output: "+420 773 708 287",
        type: ContentType.link,
      },
      {
        output: "taborpisarky@kometaplavani.cz",
        type: ContentType.link,
      },
      {
        output: "Bauerova 321/5, Brno 603 00",
        type: ContentType.normal,
      },
      {
        output: "Po - Pá: 8:00-15:30",
        type: ContentType.normal,
      },
    ],
  },
  {
    headline: "Užitečné odkazy",
    fragment: [
      {
        output: "Plavecké kurzy Kometa",
        type: ContentType.bold,
      },
      {
        output: "Kraví hora",
        type: ContentType.link,
        href: "https://kometaplavani.cz/plavani-katka/",
      },
      {
        output: "Kohoutovice",
        type: ContentType.link,
        href: "https://kometaplavani.cz/plavani-bazenky/bazenky/aquapark-kohoutovice/",
      },
      {
        output: "Bazénky",
        type: ContentType.link,
        href: "https://kometaplavani.cz/plavani-bazenky/",
      },
      {
        output: "",
        type: ContentType.blank,
      },
      {
        output: "Tábory a letní akce",
        type: ContentType.bold,
      },
      {
        output: "Kraví hora",
        type: ContentType.link,
        href: "https://kometaplavani.cz/plavani-katka/tabory/",
      },
    ],
  },
  {
    headline: "Informace",
    fragment: [
      {
        output: "GDPR",
        type: ContentType.link,
        href: "https://www.primestak-brno.cz/files/ZASADY_GDPR.pdf",
      },
      { output: "IČO: 41604164", type: ContentType.normal },
    ],
  },
];
