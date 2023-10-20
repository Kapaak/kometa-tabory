//libraries
import styled, { css } from "styled-components";
import { Flex } from "../../../../atoms/Flex";
//styles
import { dimensions } from "~/ui/theme";

export const NavLinks = styled.ul<{ isActive: boolean }>(
  ({ isActive }) => css`
    display: none;
    position: fixed;
    width: 100%;
    z-index: 9;
    top: 0;
    transition: all 0.4 ease;

    ${isActive &&
    css`
      display: flex;
      justify-content: center;
      flex-direction: column;
      background-color: var(--col2);
      height: 100vh;
      align-items: end;
      padding-right: 3rem;
    `}

    @media (${dimensions.notebook}) {
      position: relative;
      display: flex;
      align-items: center;
      background-color: initial;
      justify-content: flex-end;
      height: auto;
      flex-direction: row;
      gap: 4rem;
      padding: 1rem 0rem;
    }
  `
);

export const IconsWrapper = styled(Flex)`
  flex-direction: row;
  gap: 3rem;
  margin-top: 0.7rem;
  align-items: center;
`;
