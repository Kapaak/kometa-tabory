import styled from 'styled-components';

import { dimensions } from '~/ui/theme';

export const Headline = styled.h1`
  font-family: var(--font1);
  font-weight: 500;
  color: var(--col2);
  font-size: var(--fheadline);
  margin-bottom: 2rem;

  @media (${dimensions.desktop}) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;
