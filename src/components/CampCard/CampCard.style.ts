import styled from 'styled-components';

import {
  HorizontalStack,
  Subheadline as SSubheadline,
  Text,
} from '~/ui/components';
import { dimensions } from '~/ui/theme';

export const Subheadline = styled(SSubheadline)`
  margin-bottom: 0;
`;

export const CampCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 44.5rem;
  border-radius: var(--small-border-rad);
  box-shadow: var(--shadow);
  font-family: var(--font1);
`;

export const CampCardImageContainer = styled.div`
  position: relative;
  height: 18.4rem;
  overflow: hidden;
  border-radius: var(--small-border-rad) var(--small-border-rad) 0 0;
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

export const PriceActionContainer = styled(HorizontalStack)`
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  height: auto;
`;
