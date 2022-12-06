import React, { useId } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

type Option = {
	label: string;
	value: string;
};
interface ControlledSelectProps {
	name: string;
	placeholder: string;
	options: Option[];
}

export const ControlledSelect = ({
	name,
	placeholder,
	options,
}: ControlledSelectProps) => {
	return (
		<Controller
			name={name}
			render={({ field: { onChange, value, name, ...restField } }) => (
				<Select
					name={name}
					instanceId={useId()}
					isClearable
					isSearchable
					placeholder={placeholder}
					options={options}
					menuPosition="fixed"
					menuPlacement="auto"
					value={value}
					onChange={val => onChange(val)}
					{...restField}
				/>
			)}
		/>
	);
};
