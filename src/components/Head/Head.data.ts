export type SeoData = Record<
  string,
  { title?: string; keywords: string; description: string }
>;

const keywords = `příměstský tábor brno, letní tábory, tabory, tábory brno, primestske tabory brno, plavecký tábor, plavání kometa brno, příměstský tábor od 4 let, příměstské tábory v brně, bazén Lužánky`;

const description =
  'Příměstské tábory pro děti od 4 let do 13 let s lekcemi plavání od licencovaných trenérů s několikaletou praxí. Ve středu je speciální celodenní výlet dle tématu táboru.';

export const data: SeoData = {
  '/prihlasky/[taborId]': {
    title: 'Přihlášky | Příměšťák Brno',
    keywords,
    description:
      'Nabízíme plavecké kurzy pro děti, školy a školky i dospělé. Učíme plavat zábavnou formou dle nejnovějších metodik.',
  },
  '/': {
    title: 'Příměšťák Brno | Kometa',
    keywords,
    description,
  },
  default: {
    title: 'Příměšťák Brno | Kometa',
    keywords,
    description,
  },
};
