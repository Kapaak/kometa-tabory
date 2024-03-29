//libraries
import Image from 'next/image';

import styled from 'styled-components';

//styles
import { dimensions } from '../../../../ui/theme';

export const Img = styled(Image)`
  position: relative;
  display: inline-block;
  z-index: 10;
  padding: 1rem 2rem;
  cursor: pointer;
  width: 11rem;
  height: 100%;
  z-index: 2;

  @media (${dimensions.notebook}) {
    width: 7rem;
    margin: 0;
    padding: 0;
  }
`;
