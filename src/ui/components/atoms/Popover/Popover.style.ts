import styled, { keyframes } from "styled-components";
import * as Popover from "@radix-ui/react-popover";
import { CaretDown } from "phosphor-react";

export const PopoverTrigger = styled(Popover.Trigger)`
  all: unset;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  cursor: pointer;
`;

export const CaretIcon = styled(CaretDown)<{ $isActive?: boolean }>`
  margin-left: auto;
  transform: ${({ $isActive }) => ($isActive ? "rotate(180deg)" : "rotate(0)")};
  transition: all 0.5s ease;
  min-width: 2rem;
`;

export const PopoverArrow = styled(Popover.Arrow)`
  fill: var(--colw);
`;

export const slideLeftAndFade = keyframes`
 from {
        opacity: 0;
        transform: translateX(2px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const slideUpAndFade = keyframes`
from {
    opacity: 0;
    transform: translateY(2px);
}
to {
    opacity: 1;
    transform: translateY(0);
}
`;

export const slideRightAndFade = keyframes`
from {
    opacity: 0;
    transform: translateX(-2px);
}
to {
    opacity: 1;
    transform: translateX(0);
}
`;

export const slideDownAndFade = keyframes`
    from {
    opacity: 0;
    transform: translateY(-2px);
}
to {
    opacity: 1;
    transform: translateY(0);
}
`;

export const PopoverClose = styled(Popover.Close)`
  font-family: inherit;
  border-radius: 100%;
  height: 2.5rem;
  width: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  background-color: var(--colw);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--col1);
  }
  &:focus {
    box-shadow: var(--shadow);
  }
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 1.9rem;
  font-weight: 500;
`;

export const PopoverContent = styled(Popover.Content)`
  border-radius: var(--small-border-rad);
  padding: 2rem;
  width: 26rem;
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  z-index: 8;

  &:focus {
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px var(--col2);
  }

  &[data-state="open"][data-side="top"] {
    animation-name: ${slideDownAndFade};
  }
  &[data-state="open"][data-side="right"] {
    animation-name: ${slideLeftAndFade};
  }
  &[data-state="open"][data-side="bottom"] {
    animation-name: ${slideUpAndFade};
  }
  &[data-state="open"][data-side="left"] {
    animation-name: ${slideRightAndFade};
  }
`;
