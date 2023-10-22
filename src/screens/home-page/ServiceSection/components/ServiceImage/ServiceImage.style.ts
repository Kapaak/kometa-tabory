import NextImage from 'next/image';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Text } from '~/ui/components';

export const ServiceImage = styled(motion.div)`
  position: relative;
  height: 50%;
  overflow: hidden;
`;

export const Image = styled(NextImage).withConfig({
  shouldForwardProp: (prop) => !['hasFilter'].includes(prop),
})<{ hasFilter?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${({ hasFilter }) => hasFilter && 'grayscale(20)'};
`;

export const WarningContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #08080880;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WarningText = styled(Text)`
  color: var(--col1);
  font-size: 2.5rem;
  letter-spacing: 0.1rem;
`;
