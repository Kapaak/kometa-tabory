import { Flex } from "@ui-library";
import { SectionElement } from "components/Shared";
import styled from "styled-components";
import NextImage from "next/image";
import { dimensions } from "utils/breakpoints";

export const ContactSection = styled(SectionElement)`
  padding: 8rem 0;
  background: linear-gradient(
    266.41deg,
    rgba(33, 114, 221, 0.2) -2.58%,
    rgba(33, 114, 221, 0.04) -2.57%,
    rgba(115, 240, 192, 0.2) 100.35%
  );
`;

export const ContactSectionWrapper = styled(Flex)`
  padding-top: 2rem;
  @media (${dimensions.notebook}) {
    flex-direction: row;
    gap: 4rem;
  }

  @media (${dimensions.notebook}) {
    flex-direction: row;
    gap: 5rem;
  }
`;

export const Image = styled(NextImage)`
  width: 100%;
  height: 30rem;
  border-radius: var(--small-border-rad);
  object-fit: cover;
  flex: 1;

  @media (${dimensions.notebook}) {
    flex-direction: row;
    height: 40rem;
  }
`;
