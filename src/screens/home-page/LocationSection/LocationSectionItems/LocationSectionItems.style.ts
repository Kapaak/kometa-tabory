//libraries
import styled from "styled-components";
//styles
import { Text as SText } from "~/ui/components";
import { dimensions } from "~/ui/theme";

export const Text = styled(SText)`
  @media (${dimensions.desktop}) {
    padding-top: 2rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem 4rem;
`;
