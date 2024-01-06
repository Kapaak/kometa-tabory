import styled from 'styled-components';

import { NextSanityImage } from '~/components';
import { Text } from '~/ui/components';

export const ServiceImage = styled.div`
  position: relative;
  height: 18.4rem;
  overflow: hidden;
  border-radius: var(--small-border-rad) var(--small-border-rad) 0 0;
`;

export const Image = styled(NextSanityImage).withConfig({
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
