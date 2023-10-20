import styled from "styled-components";

import { dimensions } from "~/ui/theme";

import { Button } from "../Button/Button.style";

export const IconButton = styled(Button)`
  width: ${({ disabled }) => !disabled && "14rem"};

  svg {
    background-color: ${({ disabled }) => disabled && "transparent"};
  }

  @media (${dimensions.tablet}) {
    margin-left: auto;
  }
`;
