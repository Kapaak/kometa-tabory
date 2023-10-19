import { dimensions } from "~/ui/theme";
import styled from "styled-components";

export const MainHeadline = styled.h1`
  color: var(--colw);
  font-family: var(--font1);
  font-weight: 500;
  font-size: var(--fmheadline);
  letter-spacing: 0.35rem;

  @media (${dimensions.desktop}) {
    line-height: 1;
  }
`;
