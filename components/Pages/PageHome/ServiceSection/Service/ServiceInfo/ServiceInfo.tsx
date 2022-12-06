import { Backpack, BatteryMedium, CalendarBlank, Coin } from "phosphor-react";
import { ulVariant } from "../Service.variant";
import * as S from "./ServiceInfo.style";

interface ServiceInfoProps {
	price: number;
	oldPrice?: number;
	date: string;
	currentCapacity: number;
	maxCapacity: number;
	specialEvent: string;
}

export const ServiceInfo = (props: ServiceInfoProps) => {
	const { currentCapacity, date, maxCapacity, price, specialEvent, oldPrice } =
		props;
	return (
		<S.ServiceItems layout variants={ulVariant}>
			<S.ServiceItem bold>
				<Coin size={22} />
				<span>{price} Kč</span>
				{oldPrice && <S.LineThroughText>{oldPrice} Kč</S.LineThroughText>}
			</S.ServiceItem>
			<S.ServiceItem>
				<CalendarBlank size={22} />
				<span>{date}</span>
			</S.ServiceItem>
			<S.ServiceItem>
				<BatteryMedium size={22} />
				<span>
					{currentCapacity} / {maxCapacity}
				</span>
			</S.ServiceItem>
			<S.ServiceItem>
				<Backpack size={22} />
				<span>{specialEvent}</span>
			</S.ServiceItem>
		</S.ServiceItems>
	);
};
