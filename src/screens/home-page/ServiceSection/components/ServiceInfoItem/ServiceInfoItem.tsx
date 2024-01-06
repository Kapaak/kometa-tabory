import { PropsWithChildren } from 'react';

import { Icon } from '@phosphor-icons/react';

import { Text } from '~/ui/components';

import * as S from './ServiceInfoItem.style';

interface ServiceInfoItemProps {
  bold?: boolean;
  icon: Icon;
  label: string | number;
}

export function ServiceInfoItem({
  icon,
  bold = false,
  label,
  children,
}: PropsWithChildren<ServiceInfoItemProps>) {
  const Icon = icon;
  return (
    <S.ServiceItem bold={bold}>
      <Icon size={22} />
      <Text variant="dark">{label}</Text>
      {children}
    </S.ServiceItem>
  );
}
