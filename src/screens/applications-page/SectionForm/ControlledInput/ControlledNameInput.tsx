import React, { BaseSyntheticEvent } from "react";
import { Controller } from "react-hook-form";
import * as S from "./ControlledInput.style";

interface ControllerNameInputProps {
	name: string;
	placeholder: string;
	required?: boolean | string;
}

export const ControlledNameInput = ({
	name,
	placeholder,
	required = false,
}: ControllerNameInputProps) => {
	return (
		<Controller
			name={name}
			rules={{ required }}
			render={({ field: { onBlur, ...restField } }) => (
				<S.FormInput type="text" placeholder={placeholder} {...restField} />
			)}
			defaultValue=""
		/>
	);
};
