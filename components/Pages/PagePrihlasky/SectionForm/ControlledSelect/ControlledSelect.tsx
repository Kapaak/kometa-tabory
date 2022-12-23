import { CaretCircleDown } from "phosphor-react";
import React, { useId } from "react";
import { Controller } from "react-hook-form";
import { ValidationRule } from "react-hook-form/dist/types";
import Select, {
	StylesConfig,
	components,
	DropdownIndicatorProps,
} from "react-select";

type Option = {
	label: string;
	value: string;
};
interface ControlledSelectProps {
	name: string;
	placeholder: string;
	options: Option[];
	required?: boolean | string;
	pattern?: ValidationRule<RegExp>;
}

export const ControlledSelect = ({
	name,
	placeholder,
	options,
	required,
	pattern,
}: ControlledSelectProps) => {
	const styles: StylesConfig = {
		control: (baseStyles, state) => ({
			// ...baseStyles,
			display: "flex",
			flexDirection: "row-reverse",
			borderBottom: "1px solid var(--collg)",
			fontFamily: "var(--font2)",
		}),
		placeholder: defaultStyles => ({
			...defaultStyles,
			fontSize: "1.3rem",
		}),
	};

	const DropdownIndicator = (props: DropdownIndicatorProps) => {
		return (
			<components.DropdownIndicator {...props}>
				<CaretCircleDown size={22} cursor="pointer" />
			</components.DropdownIndicator>
		);
	};

	const id = useId();

	return (
		<Controller
			name={name}
			rules={{ required, pattern }}
			render={({ field: { onChange, value, name, ...restField } }) => (
				<Select
					name={name}
					instanceId={id}
					isSearchable
					placeholder={placeholder}
					options={options}
					menuPosition="fixed"
					menuPlacement="auto"
					value={value}
					onChange={val => onChange(val)}
					styles={styles}
					components={{
						DropdownIndicator,
						IndicatorSeparator: null,
					}}
					{...restField}
				/>
			)}
		/>
	);
	// return (
	// 	<Controller
	// 		name={name}
	// 		rules={{ required, pattern }}
	// 		render={({ field: { onChange, value, name, ...restField } }) => (
	// 			<Select
	// 				name={name}
	// 				instanceId={id}
	// 				isSearchable
	// 				placeholder={placeholder}
	// 				options={options}
	// 				menuPosition="fixed"
	// 				menuPlacement="auto"
	// 				value={value}
	// 				onChange={val => onChange(val)}
	// 				styles={styles}
	// 				components={{
	// 					DropdownIndicator,
	// 					IndicatorSeparator: null,
	// 				}}
	// 				{...restField}
	// 			/>
	// 		)}
	// 	/>
	// );
};
