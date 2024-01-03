import styled from 'styled-components';

import { Flex, MaxWidth as SMaxWidth } from '~/ui/components';
import { dimensions } from '~/ui/theme';

export const CookieConsent = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--colw);
  padding-block: 2rem;
  z-index: 10;
  box-shadow: var(--shadow);

  @media (${dimensions.tabletX}) {
    background-color: var(--col3);
    padding-block: 2.5rem;
  }
`;

export const Container = styled(Flex)`
  gap: 4rem;
  flex: 2;
  align-items: center;

  @media (${dimensions.tabletX}) {
    flex-direction: row;
  }

  @media (${dimensions.desktop}) {
    gap: 13rem;
  }
`;

export const ButtonContainer = styled(Flex)`
  flex: 1;
  gap: 1rem;

  @media (${dimensions.desktop}) {
    align-items: center;
    flex-direction: row;
    justify-content: end;
    gap: 2rem;
  }
`;

export const MaxWidth = styled(SMaxWidth)`
  @media (${dimensions.desktopX}) {
    padding: 0;
  }
`;
