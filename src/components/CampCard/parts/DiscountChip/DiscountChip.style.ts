import { motion } from 'framer-motion';
import styled from 'styled-components';

import { dimensions } from '~/ui/theme';

export const DiscountChip = styled(motion.span)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 0.5rem 2rem;
  font-family: var(--font2);
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 4rem;
  background-color: var(--col1);
  z-index: 2;
  box-shadow: var(--shadow);

  @media (${dimensions.notebook}) {
    right: 3rem;
  }
`;
