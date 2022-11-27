import {
	EnvelopeOpen,
	Wallet,
	Coin,
	FirstAid,
	XCircle,
	Backpack,
	ForkKnife,
	Users,
	SmileyXEyes,
	Lifebuoy,
	CalendarBlank,
	Archive,
} from "phosphor-react";

export const data = [
	{
		id: "1",
		headline: "Platba",
		items: [
			{
				id: "11",
				title: "POTVRZENÍ PŘIHLÁŠKY NA EMAIL ",
				description:
					"Po vyplnění přihlášky Vám přijde atomaticky vygenerovaný email s potvrzením Vaší přihlášky.",
				icon: EnvelopeOpen,
			},
			{
				id: "22",
				title: "Do kdy zaplatit",
				description:
					"Tábor je třeba uhradit do 15.06.2023, v případě pozdějšího přihlášení do 5 dnů od podání přihlášky.",
				icon: Wallet,
			},
			{
				id: "33",
				title: "JAKÉ JSOU MOŽNOSTI PLATBY?",
				description: "Převodem na účet, nebo přes fakturu zaměstnavateli.",
				icon: Coin,
			},
			{
				id: "44",
				title: "POTVRZENÍ PRO ZDRAVOTNÍ POJIŠŤOVNU",
				description:
					"Pokud potřebujete potvrzení pro zdravotní pojišťovnu, přineste si vyplněný formulář z Vaší zdravotní pojišťovny v první den nástupu na tábor.",
				icon: FirstAid,
			},
			{
				id: "55",
				title: "STORNO PODMÍNKY",
				description: "Text bude doplněn.",
				icon: XCircle,
			},
		],
	},
	{
		id: "2",
		headline: "Časté dotazy",
		items: [
			{
				id: "211",
				title: "CO S SEBOU NA PŘÍMĚSTSKÝ TÁBOR?",
				description:
					"Sportovní oblečení na sebe, 1 batoh s dvěma popruhy na záda a do něj: dopolední a odpolední svačina, láhev na pití (bude pravidelně doplňována), pláštěnka (podle počasí), a igelitka s plavkami+ručníkem+brýlemi na plavání (taktéž v batohu).",
				icon: Backpack,
			},
			{
				id: "212",
				title: "JE MOŽNOST VEGETARIÁNSKÉ / BEZLEPKOVÉ STRAVY?",
				description: "Ano, napište to prosím do poznámky v přihlášce.",
				icon: ForkKnife,
			},
			{
				id: "213",
				title: "MOHOU BÝ SOUROZENCI / KAMÁRÁDI VE STEJNÉM DUŽSTVU?",
				description:
					"Ano, stačí, když to nahlásí první den při rozřazování do družstev.",
				icon: Users,
			},
			{
				id: "214",
				title: "BUDOU DĚTI PO TÁBOŘE UNAVENÉ ?",
				description:
					"Ano, celodenní sportovní vyžití na čerstvém vzduchu děti unaví.",
				icon: SmileyXEyes,
			},
			{
				id: "215",
				title: "MŮŽE NA TÁBOR I NEPLAVEC?",
				description:
					"At’ už je na tom vaše dítě s plaváním jakkoliv, u nás se pro něj vždycky místo najde. Ti nejmenší začínají v rybičkách, pokročilejší jsou zařazeni do delfínků a ti nejzkušenější plavou na velkém 25m bazéně.",
				icon: Lifebuoy,
			},
			{
				id: "216",
				title: "CO VŠE CENA ZAHRNUJE?",
				description:
					"Cena zahrnuje celodenní program, vstupné, jízdné, obědy a pitný režim.",
				icon: Archive,
			},
		],
	},
	{
		id: "3",
		headline: "Program",
		items: [
			{
				id: "311",
				title: "Pondělí",
				description:
					"V případě, že požadujete vystavení faktury, budeme od vás potřebovat tyto údaje: fakturační údaje firmy, jméno žadatele (zaměstnanec) – jeho osobní údaje požadované firmou, jméno dítěte, datum narození, kurz do kterého se hlásí (spec. symbol), datum začátku a konce kurzu, cena kurzu, telefon na žadatele, e-mail, na který se bude faktura posílat",
				icon: CalendarBlank,
			},
			{
				id: "312",
				title: "Úterý, Čtvrtek, Pátek",
				description:
					"V případě, že požadujete vystavení faktury, budeme od vás potřebovat tyto údaje: fakturační údaje firmy, jméno žadatele (zaměstnanec) – jeho osobní údaje požadované firmou, jméno dítěte, datum narození, kurz do kterého se hlásí (spec. symbol), datum začátku a konce kurzu, cena kurzu, telefon na žadatele, e-mail, na který se bude faktura posílat",
				icon: CalendarBlank,
			},
			{
				id: "313",
				title: "Středa",
				description:
					"V případě, že požadujete vystavení faktury, budeme od vás potřebovat tyto údaje: fakturační údaje firmy, jméno žadatele (zaměstnanec) – jeho osobní údaje požadované firmou, jméno dítěte, datum narození, kurz do kterého se hlásí (spec. symbol), datum začátku a konce kurzu, cena kurzu, telefon na žadatele, e-mail, na který se bude faktura posílat",
				icon: CalendarBlank,
			},
		],
	},
];
