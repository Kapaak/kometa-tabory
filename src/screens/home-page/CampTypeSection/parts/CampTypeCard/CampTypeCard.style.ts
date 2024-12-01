import styled from 'styled-components';

import { NextSanityImage } from '~/components';
import { HorizontalStack } from '~/ui/components';

export const CampTypeCard = styled.article`
  box-shadow: var(--shadow);
  border-radius: 1rem;
`;

export const CampTypeCardTitle = styled.h3`
  font-size: 3rem;
  font-family: var(--font1);
  letter-spacing: 0.1rem;
  color: var(--col2);
`;

export const CampTypeCardDescription = styled.p`
  font-size: 1.6rem;
`;

export const CampTypeCardList = styled(HorizontalStack).attrs({
  as: 'ul',
})`
  justify-content: space-between;
  height: auto;
  max-width: 55rem;
`;

export const CampTypeCardListItem = styled.li`
  list-style: none;
  display: inline-flex;
  align-items: center;
  gap: 1.6rem;
`;

export const CampTypeCardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 33.6rem;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
  background-color: var(--collg);
`;

export const CampTypeCardImage = styled(NextSanityImage)`
  object-fit: cover;
  border-radius: inherit;
`;
