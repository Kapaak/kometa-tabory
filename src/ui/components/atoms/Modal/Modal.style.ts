import { Text } from "../Text";
import styled from "styled-components";
import { Button } from "../../atoms/Button";

export const Headline = styled(Text)`
  font-family: var(--font1);
  font-size: var(--fsheadline);
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

export const LeaveButton = styled(Button)`
  display: flex;
  margin-top: 5rem;
  margin-left: auto;
`;
