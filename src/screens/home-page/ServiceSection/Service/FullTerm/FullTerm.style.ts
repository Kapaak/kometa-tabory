import styled from "styled-components";

import { Text } from "~/ui/components";

export const FullContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  background-color: #08080880;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FullText = styled(Text)`
  color: var(--col1);
  font-size: 2.5rem;
  letter-spacing: 0.1rem;
`;
