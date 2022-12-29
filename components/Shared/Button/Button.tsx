import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import * as S from "./Button.style";

export type ButtonVariant = "plain" | "bordered" | "filled";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	loading?: boolean;
	variant?: ButtonVariant;
}

export const Button = ({
	children,
	loading,
	...rest
}: PropsWithChildren<ButtonProps>) => {
	return (
		<S.Button {...rest}>
			{!loading && children}
			{loading && (
				<span>
					odesílám ... <S.LoadingIcon size={32} weight="fill" />
				</span>
			)}
		</S.Button>
	);
};
