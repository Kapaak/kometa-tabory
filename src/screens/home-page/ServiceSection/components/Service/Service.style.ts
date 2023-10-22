import NextLink from 'next/link';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Button, Subheadline as SSubheadline } from '~/ui/components';
import { dimensions } from '~/ui/theme';

export const ImageContainer = styled(motion.div)`
  position: relative;
  height: 50%;
  overflow: hidden;
`;

export const Subheadline = styled(SSubheadline)`
  margin-bottom: 0;
`;

export const Service = styled(motion.article)`
  display: flex;
  flex-direction: column;
  height: 48rem;
  border-radius: var(--small-border-rad);
  box-shadow: var(--shadow);
  font-family: var(--font1);
  overflow: hidden;

  ul {
    display: none;
  }
`;

export const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  flex: 1;

  @media (${dimensions.tablet}) {
    padding: 3rem 4rem;
  }

  @media (${dimensions.notebook}) {
    padding: 3rem;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  margin-top: auto;
  margin-left: auto;
  flex-wrap: wrap;
`;

export const ShowMoreButton = styled(Button)`
  display: block;
  @media (${dimensions.notebook}) {
    display: none;
  }
  @media all and (device-width: 768px) and (device-height: 1024px) and (orientation: portrait) {
    display: block;
  }
`;

export const Link = styled(NextLink)`
  border-radius: 3rem;
  font-size: var(--fbutton);
  letter-spacing: 0.1rem;
  transition: all 0.2s ease;
  cursor: pointer;
  align-self: end;
  padding: 1.5rem 4rem;
  margin-top: auto;

  color: var(--col2);
  border: 2px solid var(--col2);

  &:hover {
    transition: all 0.35s ease;
    background-color: var(--col2);
    color: var(--colw);
  }
`;
