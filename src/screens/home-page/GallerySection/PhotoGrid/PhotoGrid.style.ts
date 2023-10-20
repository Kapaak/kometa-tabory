import NextImage from "next/image";

import styled, { css } from "styled-components";

import { dimensions } from "~/ui/theme";

type ImageContainerProps = {
  colStart: number;
  colEnd: number;
  rowStart: number;
  rowEnd: number;
};

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 1rem;
  margin-top: 3rem;

  @media (${dimensions.desktop}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  height: 15rem;
  overflow: hidden;
  border-radius: 0.5rem;

  ${({ colStart, colEnd, rowStart, rowEnd }) => css`
    grid-column: ${colStart} ${colEnd};
    grid-row: ${rowStart} ${rowEnd};
  `}

  @media(${dimensions.desktop}) {
    height: 20rem;
    ${({ colStart, colEnd, rowStart, rowEnd }) => css`
      grid-column: ${colStart} / ${colEnd};
      grid-row: ${rowStart} / ${rowEnd};
    `}
  }
`;

export const Image = styled(NextImage)`
  object-fit: cover;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
