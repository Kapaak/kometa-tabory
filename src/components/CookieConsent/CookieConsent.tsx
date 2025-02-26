import { consent } from 'nextjs-google-analytics';
import { useEffect, useState } from 'react';

import { updatePostHogConsent } from '~/libs/posthog';
import { CookieConsent } from '~/types';
import { Button } from '~/ui/components/atoms';
import {
  cookieConsentGiven,
  initializeCookieConsent,
  updateCookieConsent,
} from '~/utils/cookies';
import { updateMetaPixel } from '~/utils/meta-pixel';

import { CookieSettingsModal } from './parts';

import * as S from './CookieConsent.style';

export const CookieConsentBar = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showConsent, setShowConsent] = useState(false);

  const consentGiven = cookieConsentGiven();

  useEffect(() => {
    if (typeof window !== 'undefined' && !consentGiven) {
      setShowConsent(true);
    }
  }, [consentGiven]);

  const handleAcceptAll = () => {
    const grantedCookieConsents = initializeCookieConsent('granted');
    updateAllConsentProviders(grantedCookieConsents);

    setShowConsent(false);
  };

  const handleRejectAll = () => {
    const deniedCookieConsents = initializeCookieConsent('denied');
    updateAllConsentProviders(deniedCookieConsents);

    setShowConsent(false);
  };

  const handleSave = (acceptedConsent: CookieConsent) => {
    updateAllConsentProviders(acceptedConsent);

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
              <S.Description>
                Tato webová stránka používá soubory cookies k zajištění správné
                funkčnosti a pro analýzu návštěvnosti. Kliknutím na tlačítko
                &bdquo;Přijmout vše&rdquo; dáváte souhlas s jejich používáním.
              </S.Description>
              <S.ButtonContainer>
                <Button
                  type="button"
                  variant="bordered"
                  onClick={() => setShowSettings(true)}
                >
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

function updateAllConsentProviders(acceptedConsent: CookieConsent) {
  updatePostHogConsent(acceptedConsent);
  updateCookieConsent(acceptedConsent);
  updateMetaPixel(acceptedConsent);

  consent({
    arg: 'update',
    params: acceptedConsent,
  });
}
