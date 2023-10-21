import {
  Archive,
  Backpack,
  CalendarBlank,
  ClipboardText,
  Coin,
  EnvelopeOpen,
  FirstAid,
  ForkKnife,
  Lifebuoy,
  MapPin,
  Scroll,
  SmileyXEyes,
  Users,
  Wallet,
} from '@phosphor-icons/react';

export const data = [
  {
    id: '1',
    headline: 'Platba',
    items: [
      {
        id: '00',
        title: 'Cenové podmínky a způsob úhrady',
        description:
          'Tábor je potřeba uhradit do 31.5.2023 (přihlásíte-li se po tomto datu, tábor zaplaťte v den podání přihlášky) na účet 8822184001, banka 5500,				variabilní symbol 259 02, specifický symbol 1 – 7 (podle čísla táboru). Do zprávy pro příjemce je nutné napsat jméno dítěte. Za každé dítě a každý tábor je nutné poslat peníze jednotlivě.',
        icon: Scroll,
      },
      {
        id: '11',
        title: 'POTVRZENÍ PŘIHLÁŠKY NA EMAIL ',
        description:
          'Po vyplnění přihlášky Vám přijde atomaticky vygenerovaný email s potvrzením Vaší přihlášky.',
        icon: EnvelopeOpen,
      },
      {
        id: '22',
        title: 'Do kdy zaplatit',
        description:
          'Tábor je třeba uhradit do 15.06.2023, v případě pozdějšího přihlášení do 5 dnů od podání přihlášky.',
        icon: Wallet,
      },
      {
        id: '33',
        title: 'JAKÉ JSOU MOŽNOSTI PLATBY?',
        description: 'Převodem na účet, nebo přes fakturu zaměstnavateli.',
        icon: Coin,
      },
      {
        id: '44',
        title: 'POTVRZENÍ PRO ZDRAVOTNÍ POJIŠŤOVNU',
        description:
          'Pokud potřebujete potvrzení pro zdravotní pojišťovnu, přineste si vyplněný formulář z Vaší zdravotní pojišťovny v první den nástupu na tábor.',
        icon: FirstAid,
      },
    ],
  },
  {
    id: '2',
    headline: 'Časté dotazy',
    items: [
      {
        id: '211',
        title: 'CO S SEBOU NA PŘÍMĚSTSKÝ TÁBOR?',
        description:
          'Sportovní oblečení na sebe, 1 batoh s dvěma popruhy na záda a do něj: dopolední a odpolední svačina, láhev na pití (bude pravidelně doplňována), pláštěnka (podle počasí), a igelitka s plavkami+ručníkem+brýlemi na plavání (taktéž v batohu).',
        icon: Backpack,
      },
      {
        id: '212',
        title: 'JE MOŽNOST VEGETARIÁNSKÉ / BEZLEPKOVÉ STRAVY?',
        description: 'Ano, napište to prosím do poznámky v přihlášce.',
        icon: ForkKnife,
      },
      {
        id: '213',
        title: 'MOHOU BÝ SOUROZENCI / KAMÁRÁDI VE STEJNÉM DUŽSTVU?',
        description:
          'Ano, stačí, když to nahlásí první den při rozřazování do družstev.',
        icon: Users,
      },
      {
        id: '214',
        title: 'BUDOU DĚTI PO TÁBOŘE UNAVENÉ ?',
        description:
          'Ano, celodenní sportovní vyžití na čerstvém vzduchu děti unaví.',
        icon: SmileyXEyes,
      },
      {
        id: '215',
        title: 'MŮŽE NA TÁBOR I NEPLAVEC?',
        description:
          'At’ už je na tom vaše dítě s plaváním jakkoliv, u nás se pro něj vždycky místo najde. Ti nejmenší začínají v rybičkách, pokročilejší jsou zařazeni do delfínků a ti nejzkušenější plavou na velkém 25m bazéně.',
        icon: Lifebuoy,
      },
      {
        id: '216',
        title: 'CO VŠE CENA ZAHRNUJE?',
        description:
          'Cena zahrnuje celodenní program, vstupné, jízdné, obědy a pitný režim.',
        icon: Archive,
      },
      {
        id: '55',
        title: 'KDE PLAVEME',
        description:
          'Abychom mohli plavat za každého počasí, jezdíme plavat na kraví horu.',
        icon: MapPin,
      },
      {
        id: '66',
        title: 'JAKÉ DOKUMENTY JE TŘEBA PŘINÉST',
        description:
          'Kopii potvrzení o beinfekčnosti, která nesmí být starší než jeden rok a kopii kartičky pojištěnce.',
        icon: ClipboardText,
      },
    ],
  },
  {
    id: '3',
    headline: 'Program',
    items: [
      {
        id: '311',
        title: 'Pondělí',
        description: `Každé ráno si děti přebíráme v areálu Komety Brno od 7:30 do 8:00, poté máme rozcvičku a pár her na seznámení se.
					Následuje svačina a volné pokračování v hraní her.
					Obědváme kolem 12:30 a po obědě následuje polední klid. Odpoledne chodíme do lesa, nebo hrajeme tematické hry. Program končí v 16:30 a děti si můžete vyzvednout do 17:00.`,
        icon: CalendarBlank,
      },
      {
        id: '312',
        title: 'Úterý, Čtvrtek, Pátek',
        description: `Tyto dny s dětmi chodíme dopoledne plavat. Příchod do táboru je od 7:30 do 8:00 jako ostatní dny, následuje rozcvička a krátká hra. Poté se autobusem přesouváme na Kraví Horu, kde se dětem věnují zkušení a certifikovaní trenéři. Po plavání se přesouváme zpět do tábora. Zde máme oběd a polední klid. Odpolední program je věnován hrám a v pátek hledání pokladu. Děti si můžete vyzvednout opět mezi 16:30 a 17:00.`,
        icon: CalendarBlank,
      },
      {
        id: '313',
        title: 'Středa',
        description: `Ve středu jezdíme na tematické výlety. Dle vzdálenosti a dopravní situace se může měnit příchod a odchod dětí z táboru. Všechny informace Vám sdělí vedoucí trenér v daném týdnu táboru. Popřípadě se lze individuálně domluvit na jiném čase. Změna programu vyhrazena.`,
        icon: CalendarBlank,
      },
    ],
  },
];
