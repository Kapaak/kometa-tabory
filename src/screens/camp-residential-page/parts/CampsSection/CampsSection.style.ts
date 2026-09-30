import styled from 'styled-components';

import { dimensions } from '~/ui/theme';

export const CampsSection = styled.section.withConfig({
  shouldForwardProp: (prop) => !['hasError'].includes(prop),
})<{ hasError?: boolean }>`
  display: grid;
  gap: 1.6rem;

  @media (${dimensions.tablet}) {
    gap: 3rem;
    grid-template-columns: ${({ hasError }) =>
      hasError ? '1fr' : 'repeat(auto-fill, minmax(33rem, 1fr))'};
  }

  @media (${dimensions.notebook}) {
    gap: 4rem;
  }
`;
