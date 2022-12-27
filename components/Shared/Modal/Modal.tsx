import { Text } from "@ui-library";
import { UserCirclePlus } from "phosphor-react";
import { PropsWithChildren } from "react";
import ReactModal from "react-modal";
import { IconButton } from "../IconButton";
import * as S from "./Modal.style";

ReactModal.setAppElement("body");

interface ModalProps {
	isOpen: boolean;
	redirect: () => void;
	headline: string;
}

export const Modal = ({
	isOpen,
	redirect,
	headline,
	children,
}: PropsWithChildren<ModalProps>) => {
	const modalStyles = {
		content: {
			inset: "0",
			position: "relative",
			border: "none",
			borderRadius: "var(--small-border-rad)",
			width: "70rem",
			maxWidth: "80%",
			boxShadow: "var(--shadow)",
			margin: "0 auto",
			padding: "6rem",
		},
		overlay: { zIndex: "1000", display: "flex", alignItems: "center" },
	} as ReactModal.Styles;

	return (
		<ReactModal isOpen={isOpen} style={modalStyles}>
			<S.Headline center>{headline}</S.Headline>
			{children}
			<IconButton onClick={redirect} iconAfter={S.ArrowRightIcon}>
				vrátit na úvodní stránku
			</IconButton>
		</ReactModal>
	);
};
