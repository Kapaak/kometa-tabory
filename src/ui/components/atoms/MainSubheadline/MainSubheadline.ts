import styled from "styled-components";
import { dimensions } from "~/ui/theme";

export const MainSubheadline = styled.h2`
  font-family: var(--font1);
  color: var(--colw);
  font-weight: 300;
  letter-spacing: 0.35rem;
  text-transform: uppercase;
  font-size: var(--fmsheadline);

  @media (${dimensions.desktop}) {
    letter-spacing: 0.58rem;
  }
`;
