import { useState } from "react";
import * as S from "./FAQ.style";
import { Icon as TIcon } from "phosphor-react";

interface FAQProps {
	title: string;
	description: string;
	icon?: TIcon;
}

export const FAQ = ({ title, description, icon }: FAQProps) => {
	const [showMore, setShowMore] = useState(false);
	const Icon = icon as TIcon;
	return (
		<S.FAQ>
			<S.TitleButton onClick={() => setShowMore(prev => !prev)}>
				{icon && <Icon size={30} weight="light" color="var(--colb)" />}
				<S.H4>{title}</S.H4>
				{/* <S.CaretIcon size={20} weight="light" active={showMore} /> */}
			</S.TitleButton>
			{showMore && <S.Text variant="dark">{description}</S.Text>}
		</S.FAQ>
	);
};
