import { MaxWidth, Text } from "@ui-library";
import styled from "styled-components";
import { Carousel } from "./Carousel";
import * as S from "./Testimonial.style";
import { data } from "./Testimonial.data";
import { TestimonialItem } from "./TestimonialItem";

export const Item = styled.div<{ img: string }>`
	text-align: center;
	padding: 100px;
	background-image: ${props => `url(${props.img})`};
	background-size: cover;
`;

export const TestimonialSection = () => {
	return (
		<S.Testimonial name="testimonial">
			<S.MaxWidth>
				<Carousel>
					{data?.map(d => (
						<TestimonialItem
							key={d?.id}
							author={d?.author}
							source={d?.source}
							text={d?.text}
						/>
					))}
				</Carousel>
			</S.MaxWidth>
		</S.Testimonial>
	);
};
