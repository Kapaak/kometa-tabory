//libraries
import styled from "styled-components";

//styles
import { Flex, Text } from "~/ui/components";
import { dimensions } from "~/ui/theme";

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

export const LocationSectionItem = styled(Flex)`
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--collg);
  max-width: 50rem;
  height: 11rem;

  @media (${dimensions.notebook}) {
    height: 12rem;
  }

  @media (${dimensions.desktopX}) {
    height: 13rem;
  }
`;
