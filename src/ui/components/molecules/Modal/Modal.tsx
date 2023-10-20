import { PropsWithChildren, ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import * as S from './Modal.style';
import { HorizontalStack } from '../../atoms';

interface ModalProps {
  open: boolean;
  title: string;
  actions?: ReactNode;
  onChange?: () => void;
}

export function Modal({
  open,
  title,
  actions,
  children,
  onChange,
}: PropsWithChildren<ModalProps>) {
  return (
    <Dialog.Root open={open} onOpenChange={onChange}>
      <Dialog.Portal>
        <S.DialogOverlay />
        <S.DialogContent>
          <Dialog.Title>
            <S.Headline center>{title}</S.Headline>
          </Dialog.Title>
          <Dialog.Description>
            <S.TextWrapper>{children}</S.TextWrapper>
          </Dialog.Description>
          <HorizontalStack gap="1rem" justify="space-between">
            {actions}
          </HorizontalStack>
        </S.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
