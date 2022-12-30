import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  text-transform: uppercase;
`;

export const Filter = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const Popover = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 3rem;
  background-color: var(--colw);
  min-width: 15rem;
  z-index: 8;
  text-align: left;
  padding: 1.4rem 1.8rem;
  border-radius: var(--small-border-rad);
  box-shadow: var(--shadow);
`;

export const PopoverItem = styled.div`
  display: flex;
  gap: 1rem;

  label {
    font-weight: 300;
  }
`;
