import styled from 'styled-components';

import { dimensions, maxDimensions } from '../../../theme';

type HiddenProps = {
  down?: keyof typeof dimensions;
  up?: keyof typeof dimensions;
  isHidden?: boolean;
};

export const Hidden = styled.div.withConfig({
  shouldForwardProp: (prop) => !['up', 'down', 'isHidden'].includes(prop),
})<HiddenProps>`
  display: block;

  ${({ isHidden }) => {
    if (isHidden) {
      return 'visibility: hidden;';
    }
    return 'visibility: visible;';
  }}

  ${({ up }) => {
    switch (up) {
      case 'tablet':
        return `@media (${dimensions.tablet}) { display: none; }`;
      case 'tabletX':
        return `@media (${dimensions.tabletX}) { display: none; }`;
      case 'notebook':
        return `@media (${dimensions.notebook}) { display: none; }`;
      case 'desktop':
        return `@media (${dimensions.desktop}) { display: none; }`;
      case 'desktopX':
        return `@media (${dimensions.desktopX}) { display: none; }`;
      default:
        return '';
    }
  }}

  ${({ down }) => {
    switch (down) {
      case 'tablet':
        return `@media (${maxDimensions.tablet}) { display: none; }`;
      case 'tabletX':
        return `@media (${maxDimensions.tabletX}) { display: none; }`;
      case 'notebook':
        return `@media (${maxDimensions.notebook}) { display: none; }`;
      case 'desktop':
        return `@media (${maxDimensions.desktop}) { display: none; }`;
      case 'desktopX':
        return `@media (${maxDimensions.desktopX}) { display: none; }`;
      default:
        return '';
    }
  }}
`;
