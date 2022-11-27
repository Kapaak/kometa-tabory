//images or svgs
import Tabor from "@/public/images/tabor.jpg";
import WildWest from "@/public/images/wild-west.jpg";
import Madagaskar from "@/public/images/madagaskar.jpg";
import Adventure from "@/public/images/adventure.jpg";
import Harry from "@/public/images/harry-potter.jpg";
import Trosečníci from "@/public/images/castaway.jpg";
import Tarzan from "@/public/images/tarzan.jpg";
import Cesta from "@/public/images/baloon.jpg";

import { IService } from "./ServiceSection.interface";
import { scrollTargets } from "./ServiceSection.interface";

export const data: IService[] = [
	{
		headline: "T1 - Divoký západ",
		text: "Tábor inspirovaný příběhy divokého západu.",
		image: WildWest,
		alt: "člověk na koni s pozadím divokého západu",
		scrollTarget: scrollTargets.kindergardens,
		info: {
			price: 4000,
			oldPrice: 8000,
			date: "10. 7. - 14. 7. 2023",
			actualCapacity: 0,
			maxCapacity: 20,
			event: "Výlet do ZOO",
		},
	},
	{
		headline: "T2 - Madagaskar",
		text: "Tábor inspirovaný příběhy z filmu Madagaskar. ",
		image: Madagaskar,
		alt: "zvířata z filmu madagaskar ve žlutém autě",
		scrollTarget: scrollTargets.schools,
		info: {
			price: 2000,
			oldPrice: 3000,
			date: "17. 7. - 21. 7. 2023",
			actualCapacity: 20,
			maxCapacity: 20,
			event: "Výlet do ZOO",
		},
	},
	{
		headline: "T3 - Dobrodružství",
		text: "Tábor inspirovaný dobrodružnými příběhy.",
		image: Adventure,
		alt: "historická mapa s kompasem ukazující směr",
		scrollTarget: scrollTargets.courses,
		info: {
			price: 2000,
			date: "24. 7. - 28. 7. 2023",
			actualCapacity: 0,
			maxCapacity: 20,
			event: "Výlet do ZOO",
		},
	},
	{
		headline: "T4 - Harry Potter",
		text: "Tábor inspirovaný příběhy z filmu Harry Potter.",
		image: Harry,
		alt: "tři hlavní hrdinové filmu harry potter",
		scrollTarget: scrollTargets.courses,
		info: {
			price: 2000,
			oldPrice: 2500,
			date: "31. 7. - 4. 8. 2023",
			actualCapacity: 20,
			maxCapacity: 20,
			event: "Výlet do ZOO",
		},
	},
	{
		headline: "T5 - Trosečníci",
		text: "Tábor inspirovaný příběhy ze života trosečníka.",
		image: Trosečníci,
		alt: "loď stroskotaná na pevnině",
		scrollTarget: scrollTargets.courses,
		info: {
			price: 2000,
			oldPrice: 2500,
			date: "7. 8. - 11. 8. 2023",
			actualCapacity: 0,
			maxCapacity: 20,
			event: "Výlet do ZOO",
		},
	},
	{
		headline: "T6 - Tarzan",
		text: "Tábor inspirovaný příběhy z filmu Tarzan.",
		image: Tarzan,
		alt: "liány a listy z prostředí pralesa",
		scrollTarget: scrollTargets.courses,
		info: {
			price: 2000,
			oldPrice: 2500,
			date: "14. 8. - 18. 8. 2023",
			actualCapacity: 0,
			maxCapacity: 20,
			event: "Výlet do ZOO",
		},
	},
	{
		headline: "T7 - Cesta kolem světa",
		text: "Tábor inspirovaný příběhy z různých koutů světa.",
		image: Cesta,
		alt: "balóny při západu nad vyprahlou zemí",
		scrollTarget: scrollTargets.courses,
		info: {
			price: 2000,
			oldPrice: 2500,
			date: "21. 8. - 25. 8. 2023",
			actualCapacity: 0,
			maxCapacity: 20,
			event: "Výlet do ZOO",
		},
	},
];
