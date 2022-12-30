import styled from "styled-components";
import { dimensions } from "utils/breakpoints";

export const DiscountLabel = styled.div`
  position: fixed;
  display: none;
  justify-content: space-between;
  align-items: center;
  top: 0rem;
  left: 0;
  width: 100%;
  padding: 0.4rem var(--side-padding);
  background-color: var(--col1);
  z-index: 10;

  @media (${dimensions.notebook}) {
    display: flex;
  }
`;

export const BiggerText = styled.span`
  font-family: var(--font1);
  font-size: 2rem;
`;

export const SmallerText = styled.span`
  font-size: 1.4rem;
`;
