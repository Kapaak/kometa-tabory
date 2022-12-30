//libraries
import styled from "styled-components";
//styles
import { Flex as SFlex } from "@ui-library";
import { dimensions } from "@/utils";
import { SectionElement } from "components/Shared";

export const Flex = styled(SFlex)`
  @media (${dimensions.notebook}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
  gap: 4rem;
`;

export const ServiceSection = styled(SectionElement)`
  padding: 1.5rem 0;
`;
