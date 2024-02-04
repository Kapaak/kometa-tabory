import Image from 'next/image';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

import { Flex, SectionElement, Text } from '~/ui/components';
import { dimensions } from '~/ui/theme';

export const AboutSection = styled(SectionElement)`
  padding: 1.5rem 0;
`;

export const AboutUsImage = styled(Image)`
  object-fit: cover;
  pointer-events: none;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const AboutText = styled(Text)`
  padding: 2rem 0;
`;

export const AboutUsCarousel = styled(Carousel)`
  flex: 1 1 60%;

  li {
    height: 45rem;
    width: 50rem;
  }

  button {
    z-index: 2;
  }
`;

export const AboutUsContainer = styled(Flex)`
  flex-direction: column;

  @media (${dimensions.notebook}) {
    flex-direction: row;
  }
`;
