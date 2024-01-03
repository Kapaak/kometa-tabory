import { useEffect, useState } from 'react';

import posthog from 'posthog-js';

import { Button, Text } from '~/ui/components';

import { CookieSettingsModal } from './parts';

import * as S from './CookieConsent.style';

export const CookieConsent = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    if (
      !posthog.has_opted_in_capturing() &&
      !posthog.has_opted_out_capturing()
    ) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptAll = () => {
    posthog.opt_in_capturing();

    setShowConsent(false);
  };

  const handleRejectAll = () => {
    posthog.opt_out_capturing();

    setShowConsent(false);
  };

  const handleSave = (hasAcceptedConsents: boolean) => {
    if (hasAcceptedConsents) {
      posthog.opt_in_capturing();
    } else {
      posthog.opt_out_capturing();
    }
    setShowConsent(false);
  };

  return (
    <>
      <CookieSettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        onSave={handleSave}
        onRejectAll={handleRejectAll}
      />
      {showConsent && (
        <S.CookieConsent>
          <S.MaxWidth>
            <S.Container>
              <Text variant="dark">
                Tato webová stránka používá soubory cookies k zajištění správné
                funkčnosti a pro analýzu návštěvnosti. Kliknutím na tlačítko
                &bdquo;Přijmout vše&rdquo; dáváte souhlas s jejich používáním.
              </Text>
              <S.ButtonContainer>
                <Button type="button" onClick={() => setShowSettings(true)}>
                  Nastavení
                </Button>
                <Button
                  type="button"
                  variant="filled"
                  onClick={handleAcceptAll}
                >
                  Přijmout vše
                </Button>
              </S.ButtonContainer>
            </S.Container>
          </S.MaxWidth>
        </S.CookieConsent>
      )}
    </>
  );
};
