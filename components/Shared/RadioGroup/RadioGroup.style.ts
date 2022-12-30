import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const RadioGroupRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RadioGroupItem = styled(RadioGroup.Item)`
  all: unset;
  background-color: #fff;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  box-shadow: 0 2px 10px var(--collg);
  border: 2px solid transparent;

  &:hover {
    border: 2px solid var(--col2);
  }
`;

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    top: 50%;
    left: 50%;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--col2);
  }
`;

export const Label = styled.label`
  font-size: 1.4rem;
  user-select: none;
  padding-left: 1.5rem;
`;
