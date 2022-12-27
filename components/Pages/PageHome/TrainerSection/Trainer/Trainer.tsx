import { A, Divider, Text } from "@ui-library";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { removeSpace } from "utils/functions";
import * as S from "./Trainer.style";
import { ArrowUp } from "phosphor-react";

interface TrainerProps {
	name: string;
	title: string;
	alt: string;
	phone?: string;
	email?: string;
	description: string;
	image: StaticImageData;
}

export const Trainer = ({
	name,
	title,
	image,
	alt,
	description,
	email,
	phone,
}: TrainerProps) => {
	const [isSelected, setIsSelected] = useState(false);

	return (
		<S.Trainer>
			<S.TextContainer selected={isSelected}>
				<S.H3>{name}</S.H3>
				<S.H4>{title}</S.H4>

				{isSelected && (
					<S.MoreInfoContainer>
						<Divider />
						<Text variant="dark">{description}</Text>
						<Divider width="50%" />
						<A href={`tel:${phone && removeSpace(phone)}`}>{phone}</A>
						<br />
						<A href={`mailto:${email}`}>{email}</A>
					</S.MoreInfoContainer>
				)}

				<S.Button
					selected={isSelected}
					onClick={() => setIsSelected(prev => !prev)}
				>
					<ArrowUp
						size={20}
						color="var(--col2)"
						weight="regular"
						aria-label="pointing blue arrow button"
						alt="pointing arrow blue"
					/>
				</S.Button>
			</S.TextContainer>

			<S.Image src={image} fill alt={alt} />
		</S.Trainer>
	);
};
