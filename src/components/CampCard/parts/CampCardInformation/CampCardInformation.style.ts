import styled from 'styled-components';

import { VerticalStack } from '~/ui/components';

export const CampCardInformationList = styled(VerticalStack).attrs({
  as: 'ul',
})`
  gap: 0.2rem;
  font-family: var(--font2);
`;

export const CapacityText = styled.span.withConfig({
  shouldForwardProp: (prop) => !['smallCapacity'].includes(prop),
})<{ smallCapacity: boolean }>`
  color: ${({ smallCapacity }) => smallCapacity && 'var(--colr)'};
`;
