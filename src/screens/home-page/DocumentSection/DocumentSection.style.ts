import styled from 'styled-components';

import { Flex, SectionElement } from '~/ui/components';
import { dimensions } from '~/ui/theme';

export const DocumentSection = styled(SectionElement)`
  padding: 8rem 0;
`;

export const TextContainer = styled.div`
  flex: 1 1 40%;
`;

export const FlexContainer = styled(Flex)`
  @media (${dimensions.tablet}) {
    flex-direction: row;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  flex: 1 1 60%;
  gap: 2rem 4rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;
