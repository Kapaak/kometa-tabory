import styled from 'styled-components';

import { dimensions } from '~/ui/theme';

interface Props {
  half?: boolean;
}

export const Space = styled.div.withConfig({
  shouldForwardProp: (prop) => !['half'].includes(prop),
})<Props>`
  padding: ${({ half }) => (half ? 'calc(2rem / 2)' : '2rem 0')};

  @media (${dimensions.desktop}) {
    padding: ${({ half }) => (half ? 'calc(5rem / 2)' : '5rem 0')};
  }
`;
