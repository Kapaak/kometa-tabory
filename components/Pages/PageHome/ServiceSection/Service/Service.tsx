//libraries
import { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { Coin, CalendarBlank, BatteryMedium, Backpack } from "phosphor-react";
//styles
import * as S from "./Service.style";
import { Text } from "@ui-library";
//interfaces
import { IServiceInfo, scrollTargets } from "../ServiceSection.interface";
//others
import { scrollTo } from "@/utils";
import {
	imageVariant,
	labelVariant,
	textVariant,
	ulVariant,
} from "./Service.variant";

interface Props {
	headline: string;
	text: string;
	image: StaticImageData;
	alt: string;
	scrollTarget: scrollTargets;
	info: IServiceInfo;
	url: string;
}

const Service = (props: Props) => {
	const { headline, text, image, scrollTarget, alt, info, url } = props;

	const router = useRouter();

	return (
		<S.Service initial="hidden" whileHover="visible">
			<S.ImageContainer variants={imageVariant} transition={{ bounce: 0 }}>
				<S.Image src={image} placeholder="blur" alt={alt} />
			</S.ImageContainer>
			<S.Container layout variants={textVariant}>
				{info?.oldPrice && (
					<S.Label variants={labelVariant}>
						{Math.ceil(100 - (info?.price / info?.oldPrice) * 100)}% sleva
					</S.Label>
				)}
				<S.Subheadline variant="dark">{headline}</S.Subheadline>
				<Text variant="grey">{text}</Text>
				<S.ServiceItems layout variants={ulVariant}>
					<S.ServiceItem bold>
						<Coin size={22} />
						<span>{info?.price} Kč</span>
						{info?.oldPrice && (
							<S.LineThroughText>{info?.oldPrice} Kč</S.LineThroughText>
						)}
					</S.ServiceItem>
					<S.ServiceItem>
						<CalendarBlank size={22} />
						<span>{info?.date}</span>
					</S.ServiceItem>
					<S.ServiceItem>
						<BatteryMedium size={22} />
						<span>
							{info?.actualCapacity} / {info?.maxCapacity}
						</span>
					</S.ServiceItem>
					<S.ServiceItem>
						<Backpack size={22} />
						<span>{info?.event}</span>
					</S.ServiceItem>
				</S.ServiceItems>
				<S.A href={`/prihlasky/${url}`}>Přihláška</S.A>
			</S.Container>
		</S.Service>
	);
};

export default Service;
