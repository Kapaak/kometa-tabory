import { Controller } from "react-hook-form";
import * as S from "./ControlledInput.style";

interface ControlledInputProps {
	name: string;
	placeholder: string;
}

export const ControlledInput = ({
	name,
	placeholder,
}: ControlledInputProps) => {
	return (
		<Controller
			name={name}
			render={({ field }) => (
				<S.FormInput type="text" placeholder={placeholder} {...field} />
			)}
			defaultValue=""
		/>
	);
};
