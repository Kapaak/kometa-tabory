import { StaticImageData } from "next/image";

export interface ISponsor {
  image: StaticImageData;
  href: string;
  name: string;
}
