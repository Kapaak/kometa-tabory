import { PropsWithChildren } from 'react';

import { Icon } from '@phosphor-icons/react';

import { Text } from '~/ui/components';

import * as S from './CampCardListItem.style';

interface CampCardListItemProps {
  bold?: boolean;
  icon: Icon;
  label: string | number;
}

export function CampCardListItem({
  icon,
  bold = false,
  label,
  children,
}: PropsWithChildren<CampCardListItemProps>) {
  const Icon = icon;
  return (
    <S.CampCardListItem bold={bold}>
      <Icon size={22} />
      <Text variant="dark">{label}</Text>
      {children}
    </S.CampCardListItem>
  );
}
