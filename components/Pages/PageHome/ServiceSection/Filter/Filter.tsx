import React, { ChangeEvent } from "react";
import { CaretIcon } from "../../FAQSection/FAQ/FAQ.style";

import * as S from "./Filter.style";

interface FilterProps {
	isOpen: boolean;
	onClick: () => void;
	selectedCriteria: string;
	onCriteriaChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const filterOptions = [
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
	const { isOpen, onClick, selectedCriteria, onCriteriaChange } = props;
	return (
		<S.Filter>
			<S.Button onClick={onClick}>
				<span>obsazenost</span>
				<CaretIcon />
			</S.Button>
			<S.Popover isOpen={isOpen}>
				{filterOptions.map(option => (
					<S.PopoverItem key={option?.id}>
						<input
							type="radio"
							name="filter-option"
							value={option?.value}
							checked={selectedCriteria === option?.value}
							onChange={onCriteriaChange}
						/>
						<label htmlFor="all">{option?.label}</label>
					</S.PopoverItem>
				))}
			</S.Popover>
		</S.Filter>
	);
};
