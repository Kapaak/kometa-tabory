import { useGetAllTestimonialsByCampType } from '~/adapters/testimonialsAdapter';
import { CampType } from '~/types';

import { Carousel } from './Carousel';
import { TestimonialItem } from './TestimonialItem';

import * as S from './Testimonials.style';

interface TestimonialsProps {
  campType?: CampType;
}

export const Testimonials = ({ campType }: TestimonialsProps) => {
  const { data, isLoading } = useGetAllTestimonialsByCampType(campType);

  if (!isLoading && (data?.length === 0 || !data)) {
    return null;
  }

  return (
    <S.Testimonial name="testimonial">
      <S.MaxWidth>
        <Carousel>
          {data?.map((reference, index) => (
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
