//styles
import { MaxWidth } from "@ui-library";
import * as S from "./ServiceSection.style";
//components
import Service from "./Service/Service";
//data
import { data } from "./ServiceSection.data";

export const ServiceSection = () => {
	return (
		<S.ServiceSection>
			<MaxWidth>
				<S.Container>
					{data.map((d, i) => (
						<Service
							headline={d?.headline}
							text={d?.text}
							image={d?.image}
							scrollTarget={d?.scrollTarget}
							info={d?.info}
							key={i}
							alt={d?.alt}
						/>
					))}
				</S.Container>
			</MaxWidth>
		</S.ServiceSection>
	);
};
