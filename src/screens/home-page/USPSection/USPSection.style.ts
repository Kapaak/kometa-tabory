import styled from 'styled-components';

import { dimensions } from '~/ui/theme';

export const USPSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  background-color: #fff;
  padding: 3rem;
  gap: 3rem;
  border-radius: 1rem;
  box-shadow: var(--shadow);

  @media (${dimensions.notebook}) {
    padding: 3rem 6rem;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (${dimensions.desktop}) {
    padding: 3rem 5rem;
  }
`;
