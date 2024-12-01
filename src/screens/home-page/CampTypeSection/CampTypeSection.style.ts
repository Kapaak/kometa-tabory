import styled from 'styled-components';

import { dimensions } from '~/ui/theme';

export const CampTypeCards = styled.div`
  display: grid;
  gap: 1.6rem;

  @media (${dimensions.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  }

  @media (${dimensions.notebook}) {
    gap: 3rem;
  }
`;
