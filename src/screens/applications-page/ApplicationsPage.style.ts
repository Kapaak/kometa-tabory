import styled from "styled-components";
import { dimensions } from "~/ui/theme";

export const Headline = styled.h1`
  font-family: var(--font1);
  font-weight: 500;
  color: var(--col2);
  font-size: var(--fheadline);

  @media (${dimensions.desktop}) {
    margin-top: 4rem;
  }
`;

export const Subheadline = styled.h2`
  font-family: var(--font1);
  font-weight: 500;
  color: var(--col2);
  font-size: var(--fsheadline);
  margin: 0.5rem 0 6rem;
`;

export const Wrapper = styled.div`
  padding-top: 4rem;
`;
