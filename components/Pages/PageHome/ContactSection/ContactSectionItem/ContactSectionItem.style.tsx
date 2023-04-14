import { Flex, Text } from "@ui-library";
import styled from "styled-components";

export const Headline = styled(Text).attrs({
  as: "h3",
  variant: "dark",
})`
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 500;
`;

export const FlexContainer = styled(Flex)`
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--collg);
`;

export const TextElement = styled(Text).attrs({ variant: "dark" })`
  font-size: 1.4rem;
`;
