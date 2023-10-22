import styled from 'styled-components';

import { useSanityContext } from '~/contexts';

import { Carousel } from './Carousel';
import * as S from './Testimonial.style';
import { TestimonialItem } from './TestimonialItem';

export const Item = styled.div<{ img: string }>`
  text-align: center;
  padding: 100px;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
`;

export const TestimonialSection = () => {
  const { testimonial } = useSanityContext();
  return (
    <S.Testimonial name="testimonial">
      <S.MaxWidth>
        <Carousel>
          {testimonial?.map((reference, index) => (
            <TestimonialItem
              key={`${reference?.title}_${index}`}
              author={reference?.title}
              source={reference?.origin}
              text={reference?.text}
            />
          ))}
        </Carousel>
      </S.MaxWidth>
    </S.Testimonial>
  );
};
