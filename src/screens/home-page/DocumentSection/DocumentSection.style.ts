import { Flex, SectionElement } from "~/ui/components";
import styled from "styled-components";
import { dimensions } from "~/ui/theme";

export const DocumentSection = styled(SectionElement)`
  padding: 8rem 0;
  background: linear-gradient(
    266.41deg,
    rgba(33, 114, 221, 0.2) -2.58%,
    rgba(33, 114, 221, 0.04) -2.57%,
    rgba(115, 240, 192, 0.2) 100.35%
  );
`;

export const TextContainer = styled.div`
  flex: 1 1 40%;
`;

export const FlexContainer = styled(Flex)`
  @media (${dimensions.tablet}) {
    flex-direction: row;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  flex: 1 1 60%;
  gap: 2rem 4rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;
