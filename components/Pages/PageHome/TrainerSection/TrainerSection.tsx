import { Flex, MaxWidth } from "@ui-library";
import { Headline } from "components/Shared";
import { Trainer } from "./Trainer";
import { data } from "./TrainerSection.data";
import * as S from "./TrainerSection.style";

export const TrainerSection = () => {
	return (
		<div>
			<MaxWidth>
				<Headline>Trenéři</Headline>
				<S.Container>
					{data?.map((d, i) => (
						<Trainer
							key={i}
							name={d?.name}
							title={d?.title}
							image={d?.image}
							description={d?.description}
							email={d?.contact?.email}
							phone={d?.contact?.phone}
							alt={d?.alt}
						/>
					))}
				</S.Container>
			</MaxWidth>
		</div>
	);
};
