import { Text } from "@ui-library";
import { UserCirclePlus } from "phosphor-react";
import ReactModal from "react-modal";
import * as S from "./Modal.style";

ReactModal.setAppElement("body");

interface ModalProps {
	isOpen: boolean;
	addChild: () => void;
	redirect: () => void;
}

export const Modal = ({ isOpen, addChild, redirect }: ModalProps) => {
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
			<S.Headline center>VAŠE PŘIHLÁŠKA BYLA ÚSPĚŠNĚ ODESLÁNA</S.Headline>
			<Text variant="dark">
				Prosím vyčkejte na potvrzení přihlášky na e-mail. Pokud vám nepřijde do
				2 dnů, volejte +420 723 111 222. Děkujeme a budeme se na vás těšit v
				létě!
			</Text>

			<S.CreateButton onClick={addChild}>
				<UserCirclePlus size={30} color="var(--col2)" />
				PŘIDAT DALŠÍ DÍTĚ
			</S.CreateButton>

			<S.LeaveButton onClick={redirect}>
				vrátit na úvodní stránku <S.ArrowRightIcon size={38} />
			</S.LeaveButton>
		</ReactModal>
	);
};
