import React from "react";
import { Controller } from "react-hook-form";

type ControlledCheckboxProps = JSX.IntrinsicElements["input"] & {
	name: string;
};

export const ControlledCheckbox = ({
	children,
	name,
	...props
}: ControlledCheckboxProps) => {
	return (
		<Controller
			name={name}
			render={({ field: { value, ...restField } }) => (
				<label style={{ marginRight: "1em" }}>
					<input type="checkbox" {...props} {...restField} checked={value} />
					{children}
				</label>
			)}
			defaultValue={false}
		/>
	);
};
