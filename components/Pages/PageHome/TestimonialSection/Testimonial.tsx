import { MaxWidth, Text } from "@ui-library";
import Image from "next/image";

import * as S from "./Testimonial.style";

export const TestimonialSection = () => {
	return (
		<S.Testimonial name="testimonial">
			<S.MaxWidth>
				{/* <Image
					src={"/icons/quotes.svg"}
					width={100}
					height={100}
					alt="quotation marks"
				/> */}
				<S.Text center variant="dark">
					Za naše dcerky obrovská pochvala všem kteří se na táboře jakkoliv
					podíleli. Holky byly každý den nadšené a už oznámily, že příští rok
					chtejí znovu
				</S.Text>
				<S.AuthorContainer>
					<Text bold variant="dark" center>
						Barbora Nováková
					</Text>
					<Text variant="grey" center>
						facebook komentáře
					</Text>
				</S.AuthorContainer>
			</S.MaxWidth>
		</S.Testimonial>
	);
};
