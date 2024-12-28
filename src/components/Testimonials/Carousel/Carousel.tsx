import React, { PropsWithChildren } from 'react';
import { useSwipeable } from 'react-swipeable';

import * as S from './Carousel.style';

export const NEXT = 'NEXT';
export const PREV = 'PREV';
export const NTH = 'NTH';

type Direction = typeof PREV | typeof NEXT | typeof NTH;

interface CarouselState {
  pos: number;
  sliding: boolean;
  dir: Direction;
}

type CarouselAction =
  | { type: Direction; numItems: number; payload?: number }
  | { type: 'stopSliding' };

const getOrder = (index: number, pos: number, numItems: number) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

const initialState: CarouselState = {
  pos: 0,
  sliding: false,
  dir: NEXT,
};

export const Carousel = (props: PropsWithChildren) => {
  const numItems = React.Children.count(props.children);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const slide = (dir: Direction, payload?: number) => {
    dispatch({ type: dir, numItems, payload });
    setTimeout(() => {
      dispatch({ type: 'stopSliding' });
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div {...handlers}>
      <S.Wrapper>
        <S.CarouselContainer dir={state.dir} sliding={state.sliding}>
          {React.Children.map(props.children, (child, index) => (
            <S.CarouselSlot order={getOrder(index, state.pos, numItems)}>
              {child}
            </S.CarouselSlot>
          ))}
        </S.CarouselContainer>
      </S.Wrapper>
      <S.SlideButtonContainer>
        {React.Children.map(props.children, (_, i) => (
          <S.SlideButton
            //kdybych chtel v budoucnu dat jen dopredu a nebo dozadu, tak staci slide(NEXT) slide(PREV)
            onClick={() => slide(NTH, i)}
            active={state.pos === i}
          />
        ))}
      </S.SlideButtonContainer>
    </div>
  );
};

function reducer(state: CarouselState, action: CarouselAction): CarouselState {
  switch (action.type) {
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? action.numItems - 1 : state.pos - 1,
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === action.numItems - 1 ? 0 : state.pos + 1,
      };
    case NTH:
      return {
        ...state,
        sliding: false,
        pos: action.payload || 0,
      };
    case 'stopSliding':
      return { ...state, sliding: false };
    default:
      return state;
  }
}

export default Carousel;
