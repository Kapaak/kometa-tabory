//libraries
import styled from "styled-components";
//styles
import { Flex, Text } from "@ui-library";

// custom made type, that will act as if it was an <a> tag
export const LinkElement = styled(Text).attrs({
  as: "a",
  variant: "dark",
})`
  font-size: 1.4rem;
`;

// custom made type, that will possess variant:"dark"
export const TextElement = styled(Text).attrs({ variant: "dark" })`
  font-size: 1.4rem;
`;

export const Headline = styled(Text).attrs({
  as: "h3",
  variant: "dark",
})`
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 500;
`;

export const ContactItem = styled(Flex)`
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--collg);
  max-width: 50rem;
  height: 7rem;
`;
