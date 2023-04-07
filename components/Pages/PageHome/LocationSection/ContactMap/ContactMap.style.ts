import styled from "styled-components";
import { dimensions } from "utils/breakpoints";

export const Map = styled.iframe`
  border: none;
  border-radius: var(--small-border-rad);
  height: 40rem;
  width: 100%;
  box-shadow: var(--shadow);

  @media (${dimensions.notebook}) {
    height: 55rem;
  }
`;
