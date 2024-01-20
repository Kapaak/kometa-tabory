import styled from 'styled-components';

import { dimensions } from '~/ui/theme';

interface Props {
  variant: 'light' | 'dark';
}

export const Subheadline = styled.h3.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop),
})<Props>`
  font-size: var(--fsheadline);
  color: ${({ variant }) =>
    variant === 'light' ? 'var(--colw)' : 'var(--colb)'};
  font-family: var(--font1);
  font-weight: 500;

  @media (${dimensions.tablet}) {
    margin-bottom: 1rem;
  }
`;
