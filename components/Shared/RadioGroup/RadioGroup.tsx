import { Flex } from "@ui-library";
import React from "react";
import * as S from "./RadioGroup.style";

export type RadioOption = {
	id: string;
	value: string;
	label: string;
};

interface RadioGroupProps {
	radioOptions: RadioOption[];
	onChange: (val: string) => void;
}

export const RadioGroup = ({ radioOptions, onChange }: RadioGroupProps) => {
	return (
		<S.RadioGroupRoot
			defaultValue={radioOptions[0]?.value}
			aria-label="View density"
			onValueChange={onChange}
		>
			{radioOptions?.map(radioOption => (
				<Flex align="center" direction="row">
					<S.RadioGroupItem value={radioOption?.value} id={radioOption?.id}>
						<S.RadioGroupIndicator />
					</S.RadioGroupItem>
					<S.Label htmlFor={radioOption?.id}>{radioOption?.label}</S.Label>
				</Flex>
			))}
		</S.RadioGroupRoot>
	);
};
