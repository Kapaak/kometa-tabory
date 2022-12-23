import { Text } from "@ui-library";
import { Modal } from "components/Shared";
import { UserCirclePlus } from "phosphor-react";
import * as S from "./SuccessModal.style";

interface ModalProps {
	isOpen: boolean;
	addChild: () => void;
	redirect: () => void;
}

export const SuccessModal = ({ addChild, isOpen, redirect }: ModalProps) => {
	return (
		<Modal
			headline={"vaše přihláška byla úspěšně odeslána"}
			isOpen={isOpen}
			redirect={redirect}
		>
			<Text variant="dark">
				Prosím vyčkejte na potvrzení přihlášky na e-mail. Pokud vám nepřijde do
				2 dnů, volejte +420 723 111 222. Děkujeme a budeme se na vás těšit v
				létě!
			</Text>

			<S.CreateButton onClick={addChild}>
				<UserCirclePlus size={30} color="var(--col2)" />
				PŘIDAT DALŠÍ DÍTĚ
			</S.CreateButton>
		</Modal>
	);
};
