//libraries
import styled from "styled-components";
//styles
import { dimensions } from "~/ui/theme";
import { Text, MaxWidth as SMaxWidth, SectionElement } from "~/ui/components";
import NextImage from "next/image";

export const AboutSection = styled(SectionElement)`
  padding: 1.5rem 0;
`;

export const MaxWidth = styled(SMaxWidth)`
  text-align: center;
  max-width: 60rem;
`;

export const Image = styled(NextImage)`
  @media (${dimensions.desktopX}) {
    width: 6rem;
    height: 6rem;
  }
  @media (${dimensions.desktopX}) {
    width: 8rem;
    height: 8rem;
  }
`;

export const AboutText = styled(Text)`
  padding: 2rem 0;
`;
