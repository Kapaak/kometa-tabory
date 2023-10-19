//libraries
import styled from "styled-components";
import Image from "next/image";
//icons
import Wave from "../../../../../public/icons/wave.svg";
//interfaces
import { PropsWithChildren } from "react";

type HeadlineType = "h1" | "h2";
interface Props {
  className?: string;
  headlineType?: HeadlineType;
}

interface StyleProps {
  headlineType: HeadlineType;
}

export const Headline = ({
  children,
  headlineType = "h2",
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <div>
      <SHeadline headlineType={headlineType} {...rest}>
        {children}
      </SHeadline>
      <Image src={Wave} alt="vlnka" />
    </div>
  );
};

const SHeadline = styled.h2.attrs<StyleProps>((props) => ({
  as: props.headlineType || "h2",
}))<StyleProps>`
  color: var(--col2);
  font-family: var(--font1);
  font-size: var(--fheadline);
  letter-spacing: 0.2rem;
  font-weight: 400;
`;
