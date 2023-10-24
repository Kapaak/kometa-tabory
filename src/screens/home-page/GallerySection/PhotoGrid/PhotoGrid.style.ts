import styled from 'styled-components';

import { NextSanityImage } from '~/components';
import { dimensions } from '~/ui/theme';

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 1rem;
  margin-top: 3rem;

  @media (${dimensions.desktop}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 15rem;
  overflow: hidden;
  border-radius: 0.5rem;
`;

export const Image = styled(NextSanityImage)`
  object-fit: cover;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
