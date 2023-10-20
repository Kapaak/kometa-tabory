//libraries
import styled from "styled-components";
//styles
import { dimensions } from "~/ui/theme";
import { Flex as SFlex } from "../../../atoms";

export const Navigation = styled(SFlex).attrs({
  as: "nav",
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (${dimensions.notebook}) {
    padding: 0 6rem;
  }
`;
