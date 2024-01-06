import styled from 'styled-components';

import { Subheadline as SSubheadline, Text } from '~/ui/components';
import { dimensions } from '~/ui/theme';

export const Subheadline = styled(SSubheadline)`
  margin-bottom: 0;
`;

export const Service = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 44.5rem;
  border-radius: var(--small-border-rad);
  box-shadow: var(--shadow);
  font-family: var(--font1);
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  flex: 1;

  @media (${dimensions.notebook}) {
    padding: 3rem;
  }
`;

export const Price = styled(Text)`
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 600;
  font-family: var(--font2);
`;

export const DiscountPrice = styled(Text).attrs({
  variant: 'grey',
})`
  font-family: var(--font2);
  text-decoration: line-through 0.2rem;
  text-decoration-line: line-through;
  text-decoration-thickness: 0.1rem;
  -webkit-text-decoration-thickness: 0.1rem;
  -webkit-text-decoration-line: line-through;
`;
