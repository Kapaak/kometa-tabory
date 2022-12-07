import { Controller, ValidationRule } from "react-hook-form";
import * as S from "./ControlledInput.style";

interface ControlledInputProps {
	name: string;
	placeholder: string;
	required?: boolean | string;
	pattern?: ValidationRule<RegExp>;
}

export const ControlledInput = ({
	name,
	placeholder,
	required,
	pattern,
}: ControlledInputProps) => {
	return (
		<Controller
			name={name}
			rules={{ required, pattern }}
			render={({ field }) => (
				<S.FormInput type="text" placeholder={placeholder} {...field} />
			)}
			defaultValue=""
		/>
	);
};
