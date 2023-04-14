//styles
import * as S from "./LocationSectionItem.style";
import { Flex } from "@ui-library";
import { IContact } from "../../LocationSection.interface";

interface Props extends IContact {}

const LocationSection = ({ title, description, icon }: Props) => {
  const Icon = icon;
  return (
    <S.LocationSectionItem direction="row" gap="2rem" align="center">
      <Icon size={35} weight="light" />
      <Flex gap=".5rem">
        <S.Headline>{title}</S.Headline>
        <S.TextElement>{description}</S.TextElement>
      </Flex>
    </S.LocationSectionItem>
  );
};

export default LocationSection;
