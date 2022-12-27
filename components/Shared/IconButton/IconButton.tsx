import { PropsWithChildren } from "react";
import { Icon as TIcon } from "phosphor-react";
import * as S from "./IconButton.style";
import { ButtonProps } from "../Button";
import { LoadingIcon } from "../Button/Button.style";

interface IconButtonProps extends ButtonProps {
	iconBefore?: TIcon;
	iconAfter?: TIcon;
}

export const IconButton = ({
	children,
	iconBefore,
	iconAfter,
	loading,
	...rest
}: PropsWithChildren<IconButtonProps>) => {
	const IconBefore = iconBefore as TIcon;
	const IconAfter = iconAfter as TIcon;
	return (
		<S.Button {...rest}>
			{!loading && iconBefore && <IconBefore size={38} weight="regular" />}
			{!loading && children}
			{!loading && iconAfter && <IconAfter size={38} weight="regular" />}

			{loading && (
				<span>
					odesílám ... <LoadingIcon size={38} weight="fill" />
				</span>
			)}
		</S.Button>
	);
};
