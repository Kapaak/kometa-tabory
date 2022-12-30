import { data as campData } from "components/Pages/PageHome/ServiceSection/ServiceSection.data";

export const getCampByName = (name: string) => {
  return campData.find((val) => val.url === name);
};

export const getAllCamps = () => {
  return campData;
};
