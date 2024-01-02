import { PropsWithChildren } from 'react';

import {
  ControlledSwitch,
  HorizontalStack,
  Text,
  VerticalStack,
} from '~/ui/components';

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
    <HorizontalStack>
      <VerticalStack>
        <Text variant="dark" bold>
          {title}
        </Text>
        <Text variant="dark">{children}</Text>
      </VerticalStack>
      <ControlledSwitch name={name} />
    </HorizontalStack>
  );
}
