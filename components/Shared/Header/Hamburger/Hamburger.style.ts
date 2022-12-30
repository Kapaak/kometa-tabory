//libraries
import styled from "styled-components";
//styles
import { dimensions } from "@/utils";

export const Hamburger = styled.div<{ isActive: boolean }>`
  position: relative;
  height: 2.6rem;
  width: 3.4rem;
  display: flex;
  margin: 1rem 2rem;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 10;

  p {
    background-color: ${({ isActive }) =>
      isActive ? "var(--colw)" : "var(--col2)"};
    width: 100%;
    height: 0.3rem;
    border-radius: 0.2rem;
    transition: all 0.3s ease-in;
    transform-origin: center;

    &:first-child {
      transform: ${({ isActive }) =>
        isActive ? "rotate(45deg)" : "rotate(0)"};
      margin-left: ${({ isActive }) => (isActive ? ".5rem" : "0")};
      width: ${({ isActive }) => (isActive ? "80%" : "100%")};
    }

    &:nth-child(2) {
      transform: ${({ isActive }) =>
        isActive ? "rotate(-45deg)" : "rotate(0)"};
      margin: ${({ isActive }) => (isActive ? "-2.5rem 0 0 .5rem" : "0")};
      width: ${({ isActive }) => (isActive ? "80%" : "100%")};
    }

    &:last-child {
      width: ${({ isActive }) => (isActive ? "100%" : "50%")};
      transition: all 0.3s ease-in;
    }
  }
  @media (${dimensions.notebook}) {
    display: none;
  }
`;
