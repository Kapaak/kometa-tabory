import styled from 'styled-components';

export const GalleryImage = styled.div.withConfig({
  shouldForwardProp: (prop) => !['width', 'height'].includes(prop),
})<{ width: number; height: number }>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
