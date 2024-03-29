//libraries
import NextLink from "next/link";

import styled from "styled-components";

//styles
import { MainHeadline as SMainHeadline } from "~/ui/components";

export const MainHeadline = styled(SMainHeadline)`
  color: var(--col2);
`;

export const Link = styled(NextLink)`
  position: relative;
  text-transform: uppercase;
  font-family: var(--font1);
  color: var(--col2);
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 2.4rem;
  font-size: var(--fbutton);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 2px solid var(--col2);
  background-color: transparent;

  &:hover {
    color: var(--colw);
    background-color: var(--col2);
    transition: all 0.3s ease;
  }
`;
