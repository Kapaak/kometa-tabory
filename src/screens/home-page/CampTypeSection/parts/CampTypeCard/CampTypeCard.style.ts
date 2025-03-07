import NextLink from 'next/link';

import styled from 'styled-components';

import { NextSanityImage } from '~/components';
import { dimensions } from '~/ui/theme';

type Disabled = {
  disabled?: boolean;
};

export const CampTypeCard = styled.article<Disabled>`
  position: relative;
  box-shadow: var(--shadow);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;

export const CampTypeCardTitle = styled.h3<Disabled>`
  font-size: 3rem;
  font-family: var(--font1);
  letter-spacing: 0.1rem;
  color: ${({ disabled }) => (disabled ? 'var(--col5)' : 'var(--col2)')};
`;

export const CampTypeCardDescription = styled.p`
  font-size: 1.6rem;
  margin-top: auto;
`;

export const CampTypeCardList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 55rem;
  gap: 0.5rem;

  @media (${dimensions.notebook}) {
    flex-direction: row;
  }
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
  height: 20rem;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
  background-color: var(--collg);

  @media (${dimensions.tablet}) {
    height: 33.6rem;
  }
`;

export const CampTypeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  gap: 2rem;
  flex: 1;
`;

export const CampTypeCardImage = styled(NextSanityImage)<Disabled>`
  object-fit: cover;
  border-radius: inherit;
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
`;

export const CampTypeCardLink = styled(NextLink)<Disabled>`
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  align-self: flex-start;
`;
