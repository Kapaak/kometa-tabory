import Image from 'next/image';

import styled from 'styled-components';

import { Card, Text, VerticalStack } from '~/ui/components/atoms';
import { dimensions } from '~/ui/theme';

export const CampBannerTitle = styled(Text).attrs({ as: 'h1' })`
  position: relative;
  max-width: 60rem;
  color: var(--col4);
  line-height: 1.1;
  font-size: 2.4rem;
  font-weight: 500;
`;

export const CampBannerDescription = styled(Text)`
  position: relative;
  color: var(--colw);
`;

export const CampBannerWrapper = styled(VerticalStack)`
  justify-content: space-between;
  padding: 3rem 4.5rem;

  & > button {
    align-self: flex-start;
  }
`;

export const CampBanner = styled(Card)`
  display: grid;
  min-height: 29.2rem;
  grid-template-columns: 1fr;
  position: relative;
  padding: 0;
  background-color: var(--col2);

  @media (${dimensions.tabletX}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CampBannerImage = styled(Image)`
  object-fit: cover;
  border-radius: inherit;
`;

export const CampBannerImageWrapper = styled.div`
  display: none;
  position: relative;
  height: 100%;
  width: 100%;
  flex: 1 1 40%;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;

  @media (${dimensions.tabletX}) {
    display: block;
  }
`;
