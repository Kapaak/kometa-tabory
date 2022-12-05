import React, { useId, useState } from "react";
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
	const [val, setVal] = useState({ label: "", value: "" });

	const handleChange = (v, callback) => {
		console.log(v, "val");
		setVal(v);
		callback(v);
	};
	return (
		<Controller
			name={name}
			render={({ field: { onChange, value, name, ...restField } }) => {
				console.log(value, "xx");

				return (
					<Select
						name={name}
						instanceId={useId()}
						isClearable
						isSearchable
						placeholder={placeholder}
						options={options}
						menuPosition="fixed"
						menuPlacement="auto"
						// value={value}
						// value={options.find(c => c.value === value)}
						//protoze jinak tam je celej objekt {label,val}

						// onChange={val => onChange(val?.value)}
						value={value}
						onChange={val => handleChange(val, onChange)}
						{...restField}
					/>
				);
			}}
			// defaultValue={{ label: "", value: "" }}
		/>
	);
};
