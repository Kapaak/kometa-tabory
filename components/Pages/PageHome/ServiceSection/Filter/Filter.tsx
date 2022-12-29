import { CaretIcon } from "../../FAQSection/FAQ/FAQ.style";

import * as S from "./Filter.style";
import { RadioGroup, RadioOption } from "components/Shared";

interface FilterProps {
	isOpen: boolean;
	onClick: () => void;
	onCriteriaChange: (e: string) => void;
}

const filterOptions: RadioOption[] = [
	{
		id: "1",
		value: "all",
		label: "Vše",
	},
	{
		id: "2",
		value: "free",
		label: "Neobsazené",
	},
	{
		id: "3",
		value: "ocupied",
		label: "Obsazené",
	},
];

export const Filter = (props: FilterProps) => {
	const { isOpen, onClick, onCriteriaChange } = props;
	return (
		<S.Filter>
			<S.Button onClick={onClick}>
				<span>obsazenost</span>
				<CaretIcon />
			</S.Button>
			<S.Popover isOpen={isOpen}>
				<RadioGroup radioOptions={filterOptions} onChange={onCriteriaChange} />
			</S.Popover>
		</S.Filter>
	);
};
