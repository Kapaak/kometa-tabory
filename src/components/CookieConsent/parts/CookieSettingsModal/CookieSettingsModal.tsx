import { FormProvider, useForm } from 'react-hook-form';

import { Button, Divider, Modal, Text } from '~/ui/components';

import { CookieSetingsItem } from '../CookieSetingsItem';

import * as S from './CookieSettingsModal.style';

interface FormValues {
  adStorage: boolean;
  analyticsStorage: boolean;
}

interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRejectAll: () => void;
  onSave: (checkedSwitches: boolean) => void;
}

export const CookieSettingsModal = ({
  isOpen,
  onRejectAll,
  onSave,
  onClose,
}: CookieSettingsModalProps) => {
  const form = useForm<FormValues>({
    defaultValues: {
      adStorage: true,
      analyticsStorage: true,
    },
  });

  const { handleSubmit } = form;

  const handleRejectAll = () => {
    onRejectAll();
    onClose();
  };

  const handleSave = (formValues: FormValues) => {
    const hasAcceptedConsent = Object.values(formValues).some(
      (value) => value === true
    );

    onSave(hasAcceptedConsent);
    onClose();
  };

  return (
    <Modal
      title="Nastavení cookies"
      open={isOpen}
      onChange={onClose}
      actions={
        <S.CookieSettingsActions>
          <Button type="button" onClick={handleRejectAll}>
            Odmítnout vše
          </Button>
          <Button
            type="button"
            variant="filled"
            onClick={handleSubmit(handleSave)}
          >
            Uložit
          </Button>
        </S.CookieSettingsActions>
      }
    >
      <FormProvider {...form}>
        <form>
          <div>
            <Text variant="dark">
              Vyberte, jaké soubory cookies chcete přijmout.
            </Text>
            <Divider />
            <CookieSetingsItem title="Statistika" name="analyticsStorage">
              Abychom mohli zlepšit funkci a strukturu webu na základě toho, jak
              je web používán.
            </CookieSetingsItem>
            <Divider />
            <CookieSetingsItem title="Marketing" name="adStorage">
              Sdílením svých zájmů a chování při návštěvě našich stránek
              zvyšujete šanci na zobrazní personalizovaného obsahu.
            </CookieSetingsItem>
            <Divider />
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};
