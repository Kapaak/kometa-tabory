import styled from 'styled-components';

import { Flex } from '~/ui/components';
import { dimensions } from '~/ui/theme';

export const CookieSettingsActions = styled(Flex)`
  gap: 1rem;
  margin-top: 3.4rem;

  @media (${dimensions.tabletX}) {
    flex-direction: row;
    justify-content: end;
  }

  @media (${dimensions.notebook}) {
    margin-top: 0;
  }
`;
