import { Icon } from "phosphor-react";

import { Flex } from "~/ui/components";

import * as S from "./ContactSectionItem.style";

export interface ContactItem {
  title: string;
  icon: Icon;
  description: string;
}

export const ContactSectionItem = ({
  icon,
  description,
  title,
}: ContactItem) => {
  const Icon = icon;
  return (
    <S.FlexContainer direction="row" gap="2rem" align="center">
      <Icon size={35} weight="light" />
      <Flex gap=".5rem">
        <S.Headline>{title}</S.Headline>
        <S.TextElement>{description}</S.TextElement>
      </Flex>
    </S.FlexContainer>
  );
};
