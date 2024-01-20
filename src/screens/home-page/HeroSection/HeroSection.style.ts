import NextImage from 'next/image';

import styled from 'styled-components';

import {
  Button,
  Flex,
  MaxWidth as SMaxWidth,
  SectionElement,
  Text,
} from '~/ui/components';
import { dimensions } from '~/ui/theme';

export const HeroSection = styled(SectionElement)`
  @media (${dimensions.notebook}) {
    padding: 4rem var(--side-padding);
    & > div {
      min-height: 50rem;
    }
  }

  @media (${dimensions.desktop}) {
    padding: var(--side-padding) 6rem;
  }
`;

export const MaxWidth = styled(SMaxWidth)`
  @media (${dimensions.notebook}) {
    max-width: 100%;
    padding: var(--side-padding);
  }

  @media (${dimensions.notebook}) {
    max-width: 100%;
    padding: 6rem var(--side-padding);
  }
`;

export const Image = styled(NextImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 0;
`;

export const LightButton = styled(Button)`
  background-color: var(--col1-light);
`;

export const ImageContainer = styled.div`
  position: absolute;
  height: 100%;
  max-height: 100%;
  width: 100%;
  top: 0;
  z-index: -1;
  overflow: hidden;
  border-radius: inherit;
`;

export const FlexWrapper = styled(Flex)`
  padding-bottom: 3rem;

  @media (${dimensions.tablet}) {
    gap: 2rem;
  }

  @media (${dimensions.desktop}) {
    gap: 3rem;
    padding-bottom: 0;
  }
`;

export const TextContainer = styled(Text)`
  margin-bottom: 1rem;
  max-width: 40rem;

  @media (${dimensions.tablet}) {
    text-align: left;
  }

  @media (${dimensions.notebook}) {
    text-align: left;
  }

  @media (${dimensions.desktop}) {
    margin-bottom: 1rem;
  }
`;

export const PlayVideoButton = styled(Button)`
  color: var(--colw);
  display: inline-flex;
  gap: 0.5rem;
  padding: 0;
`;
