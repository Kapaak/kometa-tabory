import { PropsWithChildren } from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import * as S from "./Popover.style";
import { Flex } from "@ui-library";
import { X } from "phosphor-react";

interface PopoverProps extends PropsWithChildren {
	buttonLabel?: string;
	headline?: string;
	accesibilityLabel?: string;
}

export const Popover = ({
	buttonLabel,
	headline,
	accesibilityLabel,
	children,
}: PopoverProps) => {
	return (
		<RadixPopover.Root>
			<S.PopoverTrigger asChild>
				<button aria-label={accesibilityLabel}>
					<span>{buttonLabel}</span>
					<S.CaretIcon />
				</button>
			</S.PopoverTrigger>
			<RadixPopover.Portal>
				<S.PopoverContent sideOffset={5}>
					<Flex gap="1rem">
						<S.Text>{headline}</S.Text>
						{children}
					</Flex>
					<S.PopoverClose aria-label="Close">
						<X />
					</S.PopoverClose>
					<S.PopoverArrow />
				</S.PopoverContent>
			</RadixPopover.Portal>
		</RadixPopover.Root>
	);
};
