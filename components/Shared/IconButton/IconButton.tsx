import { PropsWithChildren } from "react";
import { Icon as TIcon } from "phosphor-react";
import * as S from "./IconButton.style";

interface IconButtonProps extends PropsWithChildren {
	iconBefore?: TIcon;
	iconAfter?: TIcon;
}

export const IconButton = ({
	children,
	iconBefore,
	iconAfter,
}: IconButtonProps) => {
	const IconBefore = iconBefore as TIcon;
	const IconAfter = iconAfter as TIcon;
	return (
		<S.Button>
			{iconBefore && <IconBefore size={30} weight="light" />}
			{children}
			{iconAfter && <IconAfter size={30} weight="light" />}
		</S.Button>
	);
};
