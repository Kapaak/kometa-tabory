//libraries
import styled from "styled-components";
//styles
import { Text as SText, Flex as SFlex } from "~/ui/components";
import { dimensions } from "~/ui/theme";

export const Text = styled(SText)`
  flex: 100%;
  font-size: 1.4rem;
  line-height: 2;
`;

export const Flex = styled(SFlex)`
  & > span {
    flex: 1;
  }

  @media (${dimensions.tablet}) {
    & > span {
      flex: 0 1 18%;
    }
  }

  @media (${dimensions.desktop}) {
    flex: 20%;
    max-width: 40rem;
    & > span {
      flex: 1 1 30%;
    }
  }
`;
