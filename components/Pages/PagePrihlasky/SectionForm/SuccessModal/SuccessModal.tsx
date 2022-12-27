import { Divider, Flex, Strong, Text } from "@ui-library";
import { IconButton, Modal } from "components/Shared";
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
			<Divider />
			<Text variant="dark">
				<Strong weight="400">Potřebujete pomoci? </Strong>
				Volejte na +420 606 354 747 nebo piště na taborpisarky@kometaplavani.cz
			</Text>
			<Divider width="50%" />

			<S.ButtonContainer justify="center" direction="row">
				<S.CreateButton onClick={addChild}>
					<UserCirclePlus size={34} color="var(--col2)" />
					PŘIDAT DALŠÍ DÍTĚ
				</S.CreateButton>
				<IconButton onClick={redirect} iconAfter={S.ArrowRightIcon}>
					vrátit na úvodní stránku
				</IconButton>
			</S.ButtonContainer>
		</Modal>
	);
};
