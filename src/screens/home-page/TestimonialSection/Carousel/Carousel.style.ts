import styled from "styled-components";
import { PREV } from "./Carousel";

export const Item = styled.div<{ img: string }>`
  text-align: center;
  padding: 100px;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
`;

export const CarouselContainer = styled.div<{ sliding: boolean }>`
  display: flex;
  min-height: 30rem;
  transition: ${(props) => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${(props) => {
    if (!props.sliding) return "translateX(calc(-100%))";
    if (props.dir === PREV) return "translateX(calc(2 * (-100%)))";
    return "translateX(0%)";
  }};
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  max-width: 60rem;
  margin: 0 auto;
`;

export const CarouselSlot = styled.div<{ order: number }>`
  flex: 1 0 100%;
  flex-basis: 100%;
  /* margin-right: 20px; */
  order: ${(props) => props.order};
`;

export const SlideButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
  padding-top: 2rem;
  max-width: 14rem;
`;

export const SlideButton = styled.button<{ active: boolean }>`
  width: 1rem;
  height: 1rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ active }) =>
    active ? "var(--col1)" : "var(--collg)"};

  &:active {
    position: relative;
    top: 1px;
  }
  &:focus {
    outline: 0;
  }
`;

export const PatternBox = styled.div`
  border: 2px solid black;
  width: 60%;
  margin: 20px auto;
  padding: 30px 20px;
  white-space: pre-line;
`;

export const D = styled.span`
  padding: 3px;
`;
