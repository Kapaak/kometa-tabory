import { contentType } from "./Footer.interface";
import { IData } from "./Footer.interface";

export const data: Array<IData> = [
	{
		headline: "Kontaktní osoba",
		fragment: [
			{
				output: "Bc. Anna Matušová",
				type: contentType.bold,
			},
			{
				output: "+420 606 354 747",
				type: contentType.link,
			},
			{
				output: "taborpisarky@kometaplavani.cz",
				type: contentType.link,
			},
			{
				output: "Bauerova 321/5, Brno 603 00",
				type: contentType.normal,
			},
			{
				output: "Po - Pá: 8:00-15:30",
				type: contentType.normal,
			},
		],
	},
	{
		headline: "Užitečné odkazy",
		fragment: [
			{
				output: "Plavecké kurzy Kometa",
				type: contentType.bold,
			},
			{
				output: "Kraví hora",
				type: contentType.link,
				href: "https://kometaplavani.cz/plavani-katka/",
			},
			{
				output: "Kohoutovice",
				type: contentType.link,
				href: "https://kometaplavani.cz/plavani-bazenky/bazenky/aquapark-kohoutovice/",
			},
			{
				output: "Bazénky",
				type: contentType.link,
				href: "https://kometaplavani.cz/plavani-bazenky/",
			},
			{
				output: "",
				type: contentType.blank,
			},
			{
				output: "Tábory a letní akce",
				type: contentType.bold,
			},
			{
				output: "Kraví hora",
				type: contentType.link,
				href: "https://kometaplavani.cz/plavani-katka/tabory/",
			},
		],
	},
	{
		headline: "Informace",
		fragment: [
			{
				output: "GDPR",
				type: contentType.link,
				href: "https://kometaplavani.cz/plavani-katka/tabory/}",
			},
			{ output: "IČO: 44992432", type: contentType.normal },
		],
	},
];
