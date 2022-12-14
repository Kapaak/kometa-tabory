//interfaces
import { StaticImageData } from "next/image";
import { ScrollTargets } from "@/utils";

export interface IService {
  headline: string;
  text: string;
  image: StaticImageData;
  alt: string;
  info: IServiceInfo;
  url: string;
  spreadsheetId: string;
}

export interface IServiceInfo {
  price: number;
  oldPrice?: number;
  date: string;
  actualCapacity: number;
  maxCapacity: number;
  event: string;
}

export { ScrollTargets };
