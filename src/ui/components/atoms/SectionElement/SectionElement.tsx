import { PropsWithChildren, forwardRef } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

interface Props {
  className?: string;
  name: string;
  ref?: any;
}
//element, that can be styled via styled-components -> thanks to passing className
//forwardRef only due to IntersectionObserver in AboutSection.tsx
export const SectionElement = forwardRef(
  (props: PropsWithChildren<Props>, ref) => {
    const { children, ...rest } = props;

    return (
      <Section ref={ref} {...rest}>
        {children}
      </Section>
    );
  }
);

//@ts-ignore -> fix this
const Section = styled(Element).attrs({ as: "section" })``;

SectionElement.displayName = "SectionElement";
