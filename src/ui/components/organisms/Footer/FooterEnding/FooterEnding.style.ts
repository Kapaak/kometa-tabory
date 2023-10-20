//libraries
import styled from "styled-components";

//styles
import { dimensions } from "~/ui/theme";

import { Flex } from "../../../atoms";

export const Creator = styled.p`
  color: var(--colw);
  font-size: 1.4rem;
  @media (${dimensions.desktop}) {
    text-align: right;
  }
`;

export const ImageFlexContainer = styled(Flex)`
  @media (${dimensions.desktop}) {
    justify-content: flex-end;
  }
`;
