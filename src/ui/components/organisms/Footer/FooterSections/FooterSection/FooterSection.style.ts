//libraries
import styled, { css } from "styled-components";

//styles
import { Subheadline, Text } from "../../../../atoms";

export const FooterSection = styled.section``;

const lineHeight = () => css`
  line-height: 2;
`;

const smallerFont = () => css`
  font-size: 1.4rem;
`;

export const LinkElement = styled(Text).attrs({
  as: "a",
  variant: "light",
})<{ href: string }>`
  font-size: 1.4rem;
  display: block;
  text-decoration: none;

  ${lineHeight()}
  ${smallerFont()}
`;

export const TextElement = styled(Text).attrs({
  variant: "light",
})`
  font-size: 1.4rem;
  ${lineHeight()}
  ${smallerFont()}
`;

export const BoldText = styled(Text).attrs({ variant: "light" })`
  font-weight: 500;
  ${lineHeight()}
  ${smallerFont()}
`;

export const Headline = styled(Subheadline).attrs({ as: "h2" })`
  margin-bottom: 2rem;
  color: var(--col1);
`;
