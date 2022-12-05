import React, { useId } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

interface ControlledSelectProps {
	name: string;
	placeholder: string;
	options: {
		label: string;
		value: string;
	}[];
}

export const ControlledSelect = ({
	name,
	placeholder,
	options,
}: ControlledSelectProps) => {
	return (
		<Controller
			name={name}
			render={({ field: { value, onChange, ...restField } }) => (
				<Select
					// inputRef={ref}
					instanceId={useId()}
					isClearable //asi tky smazat
					isSearchable
					placeholder={placeholder}
					options={options}
					menuPosition="fixed"
					menuPlacement="auto"
					value={options.find(c => c.value === value)}
					//protoze jinak tam je celej objekt {label,val}
					onChange={val => onChange(val?.value)}
					{...restField}
				/>
			)}
			defaultValue=""
		/>
	);
};
