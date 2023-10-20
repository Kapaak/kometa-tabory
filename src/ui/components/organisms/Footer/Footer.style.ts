//libraries
import styled from "styled-components";
//styles
import { Flex as SFlex, MaxWidth as SMaxWidth } from "../../atoms";
import { dimensions } from "~/ui/theme";

export const Footer = styled.div`
  padding: 2rem 0;
  background-color: var(--col2);

  @media (${dimensions.notebook}) {
    background-color: unset;
    padding: 2rem;
  }
`;

export const MaxWidth = styled(SMaxWidth)`
  @media (${dimensions.notebook}) {
    background-color: var(--col2);
    border-radius: 2rem;
    padding: var(--side-padding) var(--side-padding) 2rem;
  }
`;

export const Flex = styled(SFlex)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (${dimensions.notebook}) {
    gap: 8rem;
  }
`;
