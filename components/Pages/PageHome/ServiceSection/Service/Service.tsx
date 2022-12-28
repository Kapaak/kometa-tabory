//libraries
import { StaticImageData } from "next/image";
//styles
import * as S from "./Service.style";
import { A, Button, Text } from "@ui-library";
//interfaces
import { IServiceInfo, scrollTargets } from "../ServiceSection.interface";
//others
import { imageVariant, textVariant } from "./Service.variant";
import { FullTerm } from "./FullTerm";
import { DiscountLabel } from "./DiscountLabel";
import { ServiceInfo } from "./ServiceInfo";

interface Props {
	headline: string;
	text: string;
	image: StaticImageData;
	alt: string;
	scrollTarget: scrollTargets;
	info: IServiceInfo;
	url: string;
	currentCapacity: number;
}

const Service = (props: Props) => {
	const { headline, text, image, alt, info, url, currentCapacity } = props;
	const isFull = currentCapacity === info?.maxCapacity;

	return (
		<S.Service initial="hidden" whileHover="visible" whileTap="visible">
			<S.ImageContainer variants={imageVariant} transition={{ bounce: 0 }}>
				<S.Image
					src={image}
					placeholder="blur"
					alt={alt}
					$toGrayscale={isFull}
				/>
				{isFull && <FullTerm />}
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
				{isFull && <S.Button disabled>Termín je již zaplněný</S.Button>}
				{!isFull && <S.A href={`/prihlasky/${url}`}>Přihláška</S.A>}
				{/* <S.Button disabled>Přihlášky budou spuštěny 1.1.2023</S.Button> */}
			</S.Container>
		</S.Service>
	);
};

export default Service;
