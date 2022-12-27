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
				Potvrzení objednávky a informace k platbě jsme Vám poslali na e-mail.
				Moc si vážíme Vaší důvěry.
			</Text>
			<Text variant="dark">Potřebujete pomoci?</Text>
			<Text variant="dark">
				Volejte na +420 606 354 747 nebo piště na taborpisarky@kometaplavani.cz
			</Text>

			<S.CreateButton onClick={addChild}>
				<UserCirclePlus size={30} color="var(--col2)" />
				PŘIDAT DALŠÍ DÍTĚ
			</S.CreateButton>
		</Modal>
	);
};
