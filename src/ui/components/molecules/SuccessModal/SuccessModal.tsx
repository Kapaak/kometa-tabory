import { UserCirclePlus } from '@phosphor-icons/react';

import { Divider, Strong, Text } from '../../atoms';
import { Modal } from '../Modal';

import * as S from './SuccessModal.style';

interface ModalProps {
  open: boolean;
  onRedirect: () => void;
  onClose?: () => void;
}

export const SuccessModal = ({ open, onRedirect, onClose }: ModalProps) => {
  return (
    <Modal
      title="vaše přihláška byla úspěšně odeslána"
      open={open}
      onChange={onClose}
      actions={
        <S.ButtonContainer>
          <S.CreateButton onClick={onClose}>
            <UserCirclePlus size={34} color="var(--col2)" />
            PŘIDAT DALŠÍ DÍTĚ
          </S.CreateButton>
          <S.ReturnButton onClick={onRedirect}>
            vrátit na úvodní stránku
          </S.ReturnButton>
        </S.ButtonContainer>
      }
    >
      <Text variant="dark">
        Potvrzení objednávky a informace k platbě jsme Vám poslali na e-mail.
        Moc si vážíme Vaší důvěry.
      </Text>
      <Divider />
      <Text variant="dark">
        <Strong weight="400">
          V případě, že vám e-mail nedorazil, zkontrolujte prosím spam.
        </Strong>
      </Text>
      <Divider />
      <Text variant="dark">
        <Strong weight="400">Potřebujete pomoc? </Strong>
        Volejte na +420 773 708 287 nebo piště na info@primestak-brno.cz
      </Text>
      <Divider width="50%" />
    </Modal>
  );
};
