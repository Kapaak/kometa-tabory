import { ReactNode, useState } from 'react';

import { AvailableIcons, getAvailableIconByName } from '~/utils';

import { Flex } from '../../atoms';
import * as S from './Expandable.style';

interface FAQProps {
  title: string;
  subtitle?: string;
  description: ReactNode;
  icon?: AvailableIcons;
}

export const Expandable = ({
  title,
  description,
  icon,
  subtitle,
}: FAQProps) => {
  const [showMore, setShowMore] = useState(false);

  if (!icon)
    return (
      <S.Expandable>
        <S.ExpandingButton onClick={() => setShowMore((prev) => !prev)}>
          <Flex direction="column">
            <S.Title>{title}</S.Title>
            {subtitle && <S.Subtitle variant="dark">{subtitle}</S.Subtitle>}
          </Flex>
          <S.CaretIcon size={18} weight="bold" $isActive={showMore} />
        </S.ExpandingButton>
        {showMore && description}
      </S.Expandable>
    );

  const Icon = getAvailableIconByName(icon);

  return (
    <S.Expandable>
      <S.ExpandingButton onClick={() => setShowMore((prev) => !prev)}>
        {icon && <Icon size={30} weight="light" color="var(--colb)" />}
        <Flex direction="column">
          <S.Title>{title}</S.Title>
          {subtitle && <S.Subtitle variant="dark">{subtitle}</S.Subtitle>}
        </Flex>
        <S.CaretIcon size={18} weight="bold" $isActive={showMore} />
      </S.ExpandingButton>
      {showMore && <S.Text variant="dark">{description}</S.Text>}
    </S.Expandable>
  );
};
