import { useRouter } from 'next/router';

import { X } from '@phosphor-icons/react';

import { Button, HorizontalStack, Text } from '~/ui/components';

import * as S from './CampSectionError.style';

export function CampSectionError() {
  const router = useRouter();

  return (
    <S.CampSectionError>
      <HorizontalStack align="center" justify="center" gap="1rem">
        <X size={30} color="var(--colr)" weight="bold" />
        <S.CampSectionErrorTitle>
          Nepodařilo se načíst tábory
        </S.CampSectionErrorTitle>
      </HorizontalStack>
      <Text variant="dark" center>
        Omlouváme se, ale došlo k chybě při načítání dat. Zkuste stránku načíst
        znovu.
      </Text>
      <S.ButtonContainer>
        <Button onClick={() => router.reload()}>Znovu načíst</Button>
      </S.ButtonContainer>
    </S.CampSectionError>
  );
}
