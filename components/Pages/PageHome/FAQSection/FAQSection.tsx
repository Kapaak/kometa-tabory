import { MaxWidth } from "@ui-library";
import { Headline } from "components/Shared";
import { FAQ } from "./FAQ";
import { data } from "./FAQSection.data";
import * as S from "./FAQSection.style";

export const FAQSection = () => {
	return (
		<div>
			<MaxWidth>
				<Headline>Základní informace</Headline>
				<S.Container>
					{data?.map(d => (
						<S.FAQWrapper key={d?.id}>
							<S.Headline>{d?.headline}</S.Headline>
							{d?.items.map(item => (
								<FAQ
									key={item?.id}
									title={item?.title}
									description={item?.description}
									icon={item?.icon}
								/>
							))}
						</S.FAQWrapper>
					))}
				</S.Container>
			</MaxWidth>
		</div>
	);
};
