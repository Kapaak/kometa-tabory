//interfaces
import { StaticImageData } from "next/image";
import { scrollTargets } from "@/utils";

export interface IService {
	headline: string;
	text: string;
	image: StaticImageData;
	alt: string;
	scrollTarget: scrollTargets;
	info: IServiceInfo;
}

export interface IServiceInfo {
	price: number;
	oldPrice?: number;
	date: string;
	capacity: string;
	event: string;
}

export { scrollTargets };
