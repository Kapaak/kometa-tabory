import styled from 'styled-components';

import { dimensions } from '~/ui/theme';

export const Headline = styled.h3`
  font-family: var(--font1);
  font-weight: 500;
  letter-spacing: 0.15rem;
  color: var(--col2);
  font-size: 2.5rem;

  @media (${dimensions.desktop}) {
    margin-bottom: 3.5rem;
  }
`;

export const FAQWrapper = styled.div`
  margin: 5rem 0;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 3.3rem;
`;

export const ListItem = styled.li`
  margin-left: 2rem;
`;
