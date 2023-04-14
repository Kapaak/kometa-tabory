//images
import { Car, Bus } from "phosphor-react";
//interfaces
import { IContact } from "./LocationSection.interface";

export const data: IContact[] = [
  {
    title: "Příjezd autem",
    icon: Car,
    description:
      "Když přijedete autem, tak můžete zastavit naproti přes ulici, kde je veliké parkoviště.",
  },
  {
    title: "Městská hromadná doprava",
    icon: Bus,
    description:
      "Pokud se k nám chcete vydat MHD, tak je nejlepší vystoupit na zastávce BAUEROVA.",
  },
];
