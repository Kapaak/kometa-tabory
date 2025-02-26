import { PropsWithChildren } from 'react';

import { Flex, Strong, Text } from '~/ui/components/atoms';
import { ControlledSwitch } from '~/ui/components/molecules';

import * as S from './CookieSettingsItem.style';

interface CookieSetingsItemProps {
  title: string;
  name: string;
}

export function CookieSetingsItem({
  title,
  name,
  children,
}: PropsWithChildren<CookieSetingsItemProps>) {
  return (
    <Flex direction="row">
      <div>
        <Text variant="dark">
          <Strong>{title}</Strong>
        </Text>
        <S.Description variant="dark">{children}</S.Description>
      </div>
      <ControlledSwitch name={name} />
    </Flex>
  );
}
