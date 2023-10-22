import styled from 'styled-components';

import { dimensions } from '~/ui/theme';

export const DiscountLabel = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  top: 0rem;
  left: 0;
  width: 100%;
  padding: 1rem var(--side-padding);
  background-color: var(--col1);
  z-index: 10;

  @media (${dimensions.notebook}) {
    display: flex;
  }
`;

export const BiggerText = styled.span`
  font-family: var(--font1);
  font-size: 2rem;
  letter-spacing: 0.2rem;
`;

export const SmallerText = styled.span`
  font-size: 1.6rem;
`;
