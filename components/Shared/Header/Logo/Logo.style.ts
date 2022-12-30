//libraries
import styled from "styled-components";
//styles
import { dimensions } from "@/utils";
import Link from "next/link";
import NextImage from "next/image";

export const Image = styled(NextImage)`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

export const Logo = styled(Link)`
  position: relative;
  display: inline-block;
  z-index: 10;
  cursor: pointer;
  width: 6rem;
  margin: 0 2rem;
  height: 100%;
  z-index: 2;

  @media (${dimensions.notebook}) {
    width: 7rem;
  }

  @media (${dimensions.desktop}) {
    margin: 0;
  }
`;
