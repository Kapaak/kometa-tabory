import { contentType, fragmentType } from "@/utils";

export interface IData {
	headline: string;
	fragment: Array<fragmentType>;
}

export { contentType };
export type { fragmentType };
