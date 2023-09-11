import { keyframes, css } from "styled-components";
import styled from "styled-components";
import { CircleNotch } from "phosphor-react";
import { ButtonColor, ButtonSize, ButtonVariant } from "./Button";

interface ButtonProps {
  disabled?: boolean;
  isLoading?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  position: relative;
  border: none;
  text-transform: uppercase;
  font-family: var(--font1);
  color: var(--col2);
  cursor: pointer;
  border-radius: 3rem;
  font-size: var(--fbutton);
  overflow: hidden;
  transition: all 0.3s ease;
  letter-spacing: 0.132rem;
  width: ${({ isLoading }) => isLoading && "14rem"};

  ${({ variant = "bordered", color = "primary" }) => {
    switch (variant) {
      case "bordered":
        return css`
          border: 2px solid var(--col2);
          background-color: transparent;

          &:hover {
            color: var(--colw);
            background-color: var(--col2);
            transition: all 0.3s ease;
          }
        `;
      case "filled": {
        if (color === "secondary")
          return css`
            background-color: var(--col1);
            color: var(--col2);
            min-height: 5rem;
            &:hover {
              background-color: var(--col1-hover);
            }
          `;
        return css`
          line-height: 1.6;
          background-color: var(--col2);
          color: var(--colw);
          &:hover {
            background-color: var(--col2-hover);
          }
        `;
      }

      case "plain":
        return css`
          background-color: transparent;
          line-height: 1.6;
        `;
      default:
        return css``;
    }
  }}

  ${({ size = "regular" }) => {
    switch (size) {
      case "small":
        return css`
          padding: 1rem 2rem;
        `;
      case "regular":
        return css`
          padding: 1.5rem 2rem;
        `;
    }
  }}


  background-color: ${({ disabled }) => disabled && "transparent"};
  border-color: ${({ disabled }) => disabled && "var(--collg)"};
  color: ${({ disabled }) => disabled && "var(--colg)"};
  pointer-events: ${({ disabled }) => disabled && "none"};
`;

const rollingKeyframe = keyframes`
  to {
    transform:translateY(-50%) rotate(360deg);
  }
`;

export const LoadingIcon = styled(CircleNotch)`
  position: absolute;
  right: 0.4rem;
  top: 50%;
  color: var(--colg);
  border-radius: 50%;
  padding: 0.6rem;
  transform: translateY(-50%) rotate(0deg);
  animation: ${rollingKeyframe} 1.2s linear infinite;
`;
