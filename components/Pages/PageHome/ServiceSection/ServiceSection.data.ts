//images or svgs
import Adventure from "@/public/images/adventure.jpg";
import Harry from "@/public/images/harry-potter.jpg";
import Trosečníci from "@/public/images/castaway.jpg";
import Zootropolis from "@/public/images/zootropolis.jpg";
import Sport from "@/public/images/sport.jpg";
import Piráti from "@/public/images/pirates.jpg";
import Vesmír from "@/public/images/space.jpg";

import { IService } from "./ServiceSection.interface";
import { scrollTargets } from "./ServiceSection.interface";

export const data: IService[] = [
	{
		headline: "T1 - Zootropolis",
		text: "Tábor inspirovaný filmem Zootropolis.",
		image: Zootropolis,
		alt: "Postavy z filmu zootropolis",
		url: "zootropolis",
		scrollTarget: scrollTargets.kindergardens,
		info: {
			price: 3499,
			oldPrice: 4900,
			date: "10. 7. - 14. 7. 2023",
			actualCapacity: 0,
			maxCapacity: 30,
			event: "Výlet do ZOO",
		},
	},
	{
		headline: "T2 - Sporťáček",
		text: "Tábor zaměřený na sportovní hry.",
		image: Sport,
		alt: "děti hrající fotbal na hřišti",
		url: "sportovni-hry",
		scrollTarget: scrollTargets.schools,
		info: {
			price: 3499,
			oldPrice: 4900,
			date: "17. 7. - 21. 7. 2023",
			actualCapacity: 0,
			maxCapacity: 30,
			event: "Bongo",
		},
	},
	{
		headline: "T3 - Piráti z Karibiku",
		text: "Tábor inspirovaný příběhy z filmu Piráti z karibiku",
		image: Piráti,
		alt: "Hlavní postava z filmu piráti z karibiku",
		url: "pirati-z-karibiku",
		scrollTarget: scrollTargets.courses,
		info: {
			price: 3499,
			oldPrice: 4900,
			date: "24. 7. - 28. 7. 2023",
			actualCapacity: 0,
			maxCapacity: 30,
			event: "Plavba na člunech",
		},
	},
	{
		headline: "T4 - Harry Potter",
		text: "Tábor inspirovaný příběhy z filmu Harry Potter.",
		image: Harry,
		alt: "tři hlavní hrdinové filmu harry potter",
		url: "harry-potter",
		scrollTarget: scrollTargets.courses,
		info: {
			price: 3499,
			oldPrice: 4900,
			date: "31. 7. - 4. 8. 2023",
			actualCapacity: 0,
			maxCapacity: 30,
			event: "Přehrada, hrad Veveří",
		},
	},
	{
		headline: "T5 - Cesta za dobrodružstvím",
		text: "Tábor inspirovaný dobrodružnými příběhy.",
		image: Adventure,
		alt: "historická mapa s kompasem ukazující směr",
		url: "cesta-za-dobrodruzstvim",
		scrollTarget: scrollTargets.courses,
		info: {
			price: 3499,
			oldPrice: 4900,
			date: "7. 8. - 11. 8. 2023",
			actualCapacity: 0,
			maxCapacity: 30,
			event: "Moravský kras",
		},
	},
	{
		headline: "T6 - Trosečníci",
		text: "Tábor inspirovaný příběhy ze života trosečníka.",
		image: Trosečníci,
		alt: "loď ztroskotaná na pevnině",
		url: "trosecnik",
		scrollTarget: scrollTargets.courses,
		info: {
			price: 3499,
			oldPrice: 4900,
			date: "14. 8. - 18. 8. 2023",
			actualCapacity: 0,
			maxCapacity: 30,
			event: "Plavba na paddleboardech",
		},
	},
	{
		headline: "T7 - Vesmírná dobrodružství",
		text: "Tábor inspirovaný vesmírem.",
		image: Vesmír,
		alt: "malé planety ve vesmíru",
		url: "vesmir",
		scrollTarget: scrollTargets.courses,
		info: {
			price: 3499,
			oldPrice: 4900,
			date: "21. 8. - 25. 8. 2023",
			actualCapacity: 0,
			maxCapacity: 30,
			event: "Planetárium",
		},
	},
];
