//libraries
import styled from "styled-components";

//styles
import { Flex as SFlex, SectionElement } from "~/ui/components";
import { dimensions } from "~/ui/theme";

export const Flex = styled(SFlex)`
  overflow-y: auto;
`;

export const SponsorSection = styled(SectionElement)`
  padding: 4rem;

  @media (${dimensions.notebook}) {
    height: 25rem;
  }
`;
