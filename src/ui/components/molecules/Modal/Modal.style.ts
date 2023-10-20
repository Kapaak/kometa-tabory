import * as Dialog from "@radix-ui/react-dialog";
import styled, { keyframes } from "styled-components";

import { dimensions } from "~/ui/theme";

import { Text } from "../../atoms";

const overlayShow = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const contentShow = keyframes`
  from{ opacity: 0; transform: translate(-50%, -48%) scale(.96) }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1) }
`;

export const DialogContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 2rem;
  box-shadow: var(--shadow);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 60rem;
  padding: 2rem;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 11;
  &:focus {
    outline: none;
  }

  @media (${dimensions.notebook}) {
    max-width: 70rem;
    padding: 3rem 4rem;
  }
`;
export const TextWrapper = styled.div`
  @media (${dimensions.notebook}) {
    padding-block: 4rem;
  }
`;

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: hsl(206 22% 7% / 25%);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 11;
`;

export const Headline = styled(Text)`
  font-family: var(--font1);
  font-size: var(--fsheadline);
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;
