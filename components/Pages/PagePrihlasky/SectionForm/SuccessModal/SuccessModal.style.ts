import { Flex } from "@ui-library";
import { IconButton } from "components/Shared";
import { ArrowRight } from "phosphor-react";
import styled from "styled-components";
import { dimensions } from "utils/breakpoints";

export const TextWrapper = styled.div`
  @media (${dimensions.tablet}) {
    padding: 2rem;
  }

  @media (${dimensions.desktop}) {
    padding: 2rem 4rem;
  }
`;

export const CreateButton = styled.button`
  color: var(--col2);
  display: flex;
  gap: 1rem;
  font-family: var(--font1);
  font-size: var(--fbutton);
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const ReturnButton = styled(IconButton)`
  @media (${dimensions.tablet}) {
    margin-left: auto;
  }
`;

export const ArrowRightIcon = styled(ArrowRight)`
  position: absolute;
  right: 0.2rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--col2);
  color: var(--colw);
  border-radius: 50%;
  padding: 0.6rem;
`;

export const ButtonContainer = styled(Flex)`
  margin-top: 3rem;

  @media (${dimensions.tablet}) {
    flex-direction: row;
  }
`;
