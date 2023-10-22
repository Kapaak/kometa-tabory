import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ServiceItems = styled(motion.ul)`
  margin: 1rem 0 0 1rem;
  gap: 1rem;
  font-family: var(--font2);
`;

export const LineThroughText = styled.span`
  text-decoration: line-through 0.2rem;
  text-decoration-line: line-through;
  text-decoration-thickness: 0.2rem;
  -webkit-text-decoration-thickness: 0.2rem;
  -webkit-text-decoration-line: line-through;
`;

export const CapacityText = styled.span.withConfig({
  shouldForwardProp: (prop) => !['smallCapacity'].includes(prop),
})<{ smallCapacity: boolean }>`
  color: ${({ smallCapacity }) => smallCapacity && 'var(--colr)'};
`;
