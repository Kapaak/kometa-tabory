import styled from 'styled-components';

import { Divider, Flex, VerticalStack } from '~/ui/components';
import { dimensions } from '~/ui/theme';

export const CookieSettingsActions = styled(Flex)`
  gap: 1rem;
  margin-top: 3.4rem;
  width: 100%;

  @media (${dimensions.tabletX}) {
    flex-direction: row;
    justify-content: end;
  }

  @media (${dimensions.notebook}) {
    margin-top: 0;
  }
`;

export const CookieSettingsDivider = styled(Divider)`
  color: var(--collg);
  background-color: var(--collg);
  margin-block: 1rem;
`;

export const CookieConsentContainer = styled(VerticalStack)`
  height: auto;
  padding-inline: 1rem 2rem;
  max-height: 30rem;
  overflow-y: auto;

  @media (${dimensions.tabletX}) {
    padding-inline: 1rem;
    max-height: 100%;
  }
`;
