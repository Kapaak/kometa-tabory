import styled from "styled-components";
import { Text as SText } from "@ui-library";
import { CaretDown } from "phosphor-react";

export const FAQ = styled.div`
  margin: 1rem 0;
  border-bottom: 1px solid var(--col2);
`;

export const TitleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 2rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-align: left;

  width: 100%;
  padding: 1rem 0rem 2rem;

  & > svg:first-of-type {
    min-width: 3rem;
  }
`;

export const H4 = styled.h4`
  color: var(--colb);
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
  font-family: var(--font2);
`;

export const Text = styled(SText)`
  font-weight: 300;
  padding-bottom: 1rem;
`;

export const CaretIcon = styled(CaretDown)<{ $isActive?: boolean }>`
  margin-left: auto;
  transform: ${({ $isActive }) => ($isActive ? "rotate(180deg)" : "rotate(0)")};
  transition: all 0.5s ease;
  min-width: 2rem;
`;
