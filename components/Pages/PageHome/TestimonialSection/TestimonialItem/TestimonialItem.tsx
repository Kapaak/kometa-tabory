import { Text } from "@ui-library";
import * as S from "./TestimonialItem.style";

interface TestimonialItemProps {
	text: string;
	author: string;
	source: string;
}

export const TestimonialItem = ({
	author,
	source,
	text,
}: TestimonialItemProps) => {
	return (
		<S.TestimonialItem>
			<div style={{ maxWidth: "45rem" }}>
				<S.Text center variant="dark">
					{text}
				</S.Text>
				<S.AuthorContainer>
					<Text bold variant="dark" center>
						{author}
					</Text>
					<Text variant="grey" center>
						{source}
					</Text>
				</S.AuthorContainer>
			</div>
		</S.TestimonialItem>
	);
};
