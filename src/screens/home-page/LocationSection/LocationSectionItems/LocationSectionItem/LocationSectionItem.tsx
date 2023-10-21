import { Icon } from '@phosphor-icons/react';

import { Flex } from '~/ui/components';

import * as S from './LocationSectionItem.style';

export type LocationSection = {
  title: string;
  icon: Icon;
  description: string;
};

interface LocationSectionProps extends LocationSection {}

const LocationSection = ({
  title,
  description,
  icon,
}: LocationSectionProps) => {
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
