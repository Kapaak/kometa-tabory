import { Controller } from "react-hook-form";
import * as S from "./ControlledInput.style";

interface ControlledInputProps {
	name: string;
	placeholder: string;
	required?: boolean | string;
}

export const ControlledInput = ({
	name,
	placeholder,
	required,
}: ControlledInputProps) => {
	return (
		<Controller
			name={name}
			rules={{ required }}
			render={({ field }) => (
				<S.FormInput type="text" placeholder={placeholder} {...field} />
			)}
			defaultValue=""
		/>
	);
};
