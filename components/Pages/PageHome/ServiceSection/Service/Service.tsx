//libraries
import { useState } from "react";
import { StaticImageData } from "next/image";
//components
import { ServiceInfo } from "./ServiceInfo";
import { DiscountLabel } from "./DiscountLabel";
import { FullTerm } from "./FullTerm";
//styles
import * as S from "./Service.style";
import { Button, Text } from "@ui-library";
//interfaces
import { IServiceInfo } from "../ServiceSection.interface";
//others
import { imageVariant, textVariant } from "./Service.variant";

interface Props {
	headline: string;
	text: string;
	image: StaticImageData;
	alt: string;
	info: IServiceInfo;
	url: string;
	currentCapacity: number;
}

const Service = (props: Props) => {
	const { headline, text, image, alt, info, url, currentCapacity } = props;
	const isCapacityFull = currentCapacity >= info?.maxCapacity;

	const [showMore, setShowMore] = useState(false);

	return (
		<S.Service
			initial="hidden"
			whileHover="visible"
			animate={showMore ? "visible" : "hidden"}
		>
			<S.ImageContainer variants={imageVariant} transition={{ bounce: 0 }}>
				<S.Image
					src={image}
					placeholder="blur"
					alt={alt}
					$toGrayscale={isCapacityFull}
				/>
				{isCapacityFull && <FullTerm />}
			</S.ImageContainer>
			<S.Container layout variants={textVariant}>
				{info?.oldPrice && (
					<DiscountLabel price={info?.price} oldPrice={info?.oldPrice} />
				)}
				<S.Subheadline variant="dark">{headline}</S.Subheadline>
				<Text variant="grey">{text}</Text>
				<ServiceInfo
					currentCapacity={currentCapacity}
					date={info?.date}
					maxCapacity={info?.maxCapacity}
					price={info?.price}
					oldPrice={info?.oldPrice}
					specialEvent={info?.event}
				/>
				<S.ButtonContainer>
					<S.ShowMoreButton
						variant="plain"
						onClick={() => setShowMore(prev => !prev)}
					>
						Více o táboru
					</S.ShowMoreButton>
					{isCapacityFull && <Button disabled>Termín je již zaplněný</Button>}
					{!isCapacityFull && <S.A href={`/prihlasky/${url}`}>Přihláška</S.A>}
				</S.ButtonContainer>
			</S.Container>
		</S.Service>
	);
};

export default Service;
