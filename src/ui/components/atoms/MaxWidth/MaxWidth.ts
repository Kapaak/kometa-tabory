import styled from 'styled-components';

import { dimensions } from '~/ui/theme';

export const MaxWidth = styled.div.withConfig({
  shouldForwardProp: (prop) => !['maxWidth'].includes(prop),
})<{ maxWidth?: string }>`
  height: 100%;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'var(--max-width)')};
  margin: 0 auto;
  padding: var(--vertical-padding) var(--side-padding);

  @media (${dimensions.desktopX}) {
    padding: var(--vertical-padding) 2rem;
  }
`;
