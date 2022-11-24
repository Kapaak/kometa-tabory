//images or svgs
import Tabor from "@/public/images/tabor.jpg";
import { IService } from "./ServiceSection.interface";
import { scrollTargets } from "./ServiceSection.interface";

export const data: IService[] = [
	{
		headline: "Školky",
		text: "Cílem výuky je u dítěte odbourat strach z vody a naučit ho základním plaveckým dovednostem.",
		image: Tabor,
		alt: "dítě v bazénu pod vodou s brýlemi",
		scrollTarget: scrollTargets.kindergardens,
	},
	{
		headline: "Školy",
		text: "Cílem je plavce naučit základům plavání. ",
		image: Tabor,
		alt: "plavec s hlavou pod vodou a deskou",
		scrollTarget: scrollTargets.schools,
	},
	{
		headline: "Kurzy",
		text: "Učíme plavat děti od 4 do 17 let.",
		image: Tabor,
		alt: "dvě plavkyně na začátku dráhy",
		scrollTarget: scrollTargets.courses,
	},
	{
		headline: "Kurzy",
		text: "Učíme plavat děti od 4 do 17 let.",
		image: Tabor,
		alt: "dvě plavkyně na začátku dráhy",
		scrollTarget: scrollTargets.courses,
	},
	{
		headline: "Kurzy",
		text: "Učíme plavat děti od 4 do 17 let.",
		image: Tabor,
		alt: "dvě plavkyně na začátku dráhy",
		scrollTarget: scrollTargets.courses,
	},
	{
		headline: "Kurzy",
		text: "Učíme plavat děti od 4 do 17 let.",
		image: Tabor,
		alt: "dvě plavkyně na začátku dráhy",
		scrollTarget: scrollTargets.courses,
	},
];
