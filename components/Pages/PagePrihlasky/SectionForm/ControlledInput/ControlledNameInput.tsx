import React, { BaseSyntheticEvent } from "react";
import { Controller } from "react-hook-form";
import * as S from "./ControlledInput.style";

interface ControllerNameInputProps {
	name: string;
	placeholder: string;
	onNameBlur: (
		e: BaseSyntheticEvent,
		callback: (e: BaseSyntheticEvent) => void
	) => void;
}

export const ControlledNameInput = ({
	name,
	placeholder,
	onNameBlur,
}: ControllerNameInputProps) => {
	return (
		<Controller
			name={name}
			render={({ field: { onBlur, ...restField } }) => (
				<S.FormInput
					type="text"
					placeholder={placeholder}
					onBlur={e => onNameBlur(e, onBlur)}
					{...restField}
				/>
			)}
			defaultValue=""
		/>
	);
};
