import styled from 'styled-components';

import { Text, VerticalStack } from '~/ui/components';

export const USP = styled(VerticalStack)`
  gap: 1rem;
  height: auto;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  text-align: center;
`;

export const Description = styled(Text)`
  font-size: 1.4rem;
  line-height: 1.4;
  text-align: center;
  color: var(--colg);
`;
