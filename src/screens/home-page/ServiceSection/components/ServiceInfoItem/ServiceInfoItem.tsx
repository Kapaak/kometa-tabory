import { PropsWithChildren } from 'react';

import { Icon } from '@phosphor-icons/react';

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
      <span>{label}</span>
      {children}
    </S.ServiceItem>
  );
}
