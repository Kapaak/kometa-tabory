import NextImage from 'next/image';

import styled from 'styled-components';

import { Text } from '~/ui/components';
import { dimensions } from '~/ui/theme';

export const DiscountSection = styled.section`
  background-color: var(--col1-lighter);
  padding-block: 2rem;

  @media (${dimensions.tabletX}) {
    padding-block: 6.5rem;
  }
`;

export const DiscountHeadline = styled(Text).attrs({
  as: 'h2',
})`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.275rem;
`;

export const DiscountContainer = styled.div`
  display: grid;
  gap: 4rem;
  align-items: center;

  @media (${dimensions.tabletX}) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const BrnoIdImage = styled(NextImage)`
  @media (${dimensions.tabletX}) {
    margin-left: auto;
  }
`;
