import { ContentType, FragmentType } from '~/types';

interface FooterData {
  headline: string;
  fragment: Array<FragmentType>;
}

export const data: Array<FooterData> = [
  {
    headline: 'Kontaktní osoba',
    fragment: [
      {
        output: 'Bc. Anna Matušová',
        type: ContentType.bold,
      },
      {
        output: '+420 773 708 287',
        type: ContentType.link,
      },
      {
        output: 'info@primestak-brno.cz',
        type: ContentType.link,
      },

      {
        output: 'Po - Pá: 8:00-15:30',
        type: ContentType.normal,
      },
    ],
  },
  {
    headline: 'Užitečné odkazy',
    fragment: [
      {
        output: 'Plavecké kurzy Kometa',
        type: ContentType.bold,
      },
      {
        output: 'Kraví hora',
        type: ContentType.link,
        href: 'https://www.plavanikometa.cz/kravi-hora/',
      },
      {
        output: 'Kohoutovice',
        type: ContentType.link,
        href: 'https://www.plavanikometa.cz/aquapark-kohoutovice/',
      },
      {
        output: 'Lužánky',
        type: ContentType.link,
        href: 'https://www.plavani-luzanky.cz/',
      },
      {
        output: 'Bazénky',
        type: ContentType.link,
        href: 'https://kometaplavani.cz/plavani-bazenky/',
      },
      {
        output: '',
        type: ContentType.blank,
      },
      {
        output: 'Tábory a letní akce',
        type: ContentType.bold,
      },
      {
        output: 'Kraví hora',
        type: ContentType.link,
        href: 'https://www.plavanikometa.cz/tabor-kravi-hora/',
      },
      {
        output: 'Pisárky',
        type: ContentType.link,
        href: 'https://www.plavanikometa.cz/tabor-pisarky/',
      },
    ],
  },
  {
    headline: 'Informace',
    fragment: [
      {
        output: 'GDPR',
        type: ContentType.link,
        href: 'https://www.primestak-brno.cz/files/ZASADY_GDPR.pdf',
      },
      { output: 'IČO: 44992432', type: ContentType.normal },
    ],
  },
];
