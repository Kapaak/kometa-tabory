import { FragmentType } from "@/utils";
import { StaticImageData } from "next/image";

export interface IContact {
  headline: string;
  icon: StaticImageData;
  fragment: Array<FragmentType>;
}

export { ContentType } from "@/utils";
