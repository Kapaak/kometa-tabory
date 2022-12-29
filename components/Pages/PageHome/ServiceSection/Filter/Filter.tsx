import * as S from "./Filter.style";
import { RadioGroup, RadioOption, Popover } from "components/Shared";

interface FilterProps {
	onCriteriaChange: (e: string) => void;
	selectedOption: string;
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

export const Filter = ({ onCriteriaChange, selectedOption }: FilterProps) => {
	return (
		<S.Filter>
			<Popover
				buttonLabel="obsazenost"
				headline="Vyhledat:"
				accesibilityLabel="Řazení podle obsazenosti"
			>
				<RadioGroup
					selectedValue={selectedOption}
					radioOptions={filterOptions}
					onChange={onCriteriaChange}
				/>
			</Popover>
		</S.Filter>
	);
};
