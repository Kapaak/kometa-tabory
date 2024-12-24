import styled from "styled-components";

import { MaxWidth as SMaxWidth, SectionElement } from "~/ui/components";
import { dimensions } from "~/ui/theme";

export const Testimonial = styled(SectionElement)`
  padding: 8rem 0;
  background: linear-gradient(
    266.41deg,
    rgba(33, 114, 221, 0.2) -2.58%,
    rgba(33, 114, 221, 0.04) -2.57%,
    rgba(115, 240, 192, 0.2) 100.35%
  );
`;

export const MaxWidth = styled(SMaxWidth)`
  position: relative;
  &::before {
    content: "";
    left: 4rem;
    position: absolute;
    background-repeat: no-repeat;
    background-image: url("/icons/quotes.svg");
    background-size: 5rem;
    width: 5rem;
    height: 5rem;
    opacity: 0.3;
    z-index: -1;

    @media (${dimensions.tablet}) {
      background-size: 10rem;
      width: 10rem;
      height: 10rem;
      opacity: 1;
    }

    @media (${dimensions.desktop}) {
      left: 30rem;
    }
  }
  &::after {
    content: "";
    position: absolute;
    right: 4rem;
    bottom: 0;
    background-repeat: no-repeat;
    background-image: url("/icons/quotes.svg");
    background-size: 5rem;
    width: 5rem;
    height: 5rem;
    opacity: 0.3;
    transform: rotate(180deg);
    z-index: -1;

    @media (${dimensions.tablet}) {
      background-size: 10rem;
      width: 10rem;
      height: 10rem;
      opacity: 1;
    }

    @media (${dimensions.desktop}) {
      right: 30rem;
    }
  }
`;
