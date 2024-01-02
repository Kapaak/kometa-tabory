import { consent } from 'nextjs-google-analytics';
import { useEffect, useState } from 'react';

import cookie from 'js-cookie';
import posthog from 'posthog-js';

import { CookieConsents } from '~/domains';
import { Button, Text } from '~/ui/components';

import { CookieSettingsModal } from './parts';

import * as S from './CookieConsent.style';

type CookieConsentProps = {
  cookieConsents?: CookieConsents | null;
};

const setCookieConsents = (cookieConsents: CookieConsents) => {
  cookie.set('cookie-consent', JSON.stringify(cookieConsents), {
    expires: 365,
  });
};

export const CookieConsent = ({ cookieConsents }: CookieConsentProps) => {
  const [selectedCookies, setSelectedCookies] = useState(cookieConsents);
  const [showSettings, setShowSettings] = useState(false);

  const handleAcceptAll = () => {
    const acceptConsents: CookieConsents = {
      adStorage: 'granted',
      analyticsStorage: 'granted',
    };
    console.log('accept all', posthog);

    posthog.opt_in_capturing();

    setSelectedCookies(acceptConsents);
  };

  const handleRejectAll = () => {
    const deniedConsents: CookieConsents = {
      adStorage: 'denied',
      analyticsStorage: 'denied',
    };

    console.log('reject all', posthog);

    posthog.opt_out_capturing();

    setSelectedCookies(deniedConsents);
  };

  const handleSave = (savedCookies: CookieConsents) => {
    setShowSettings(true);
    setSelectedCookies(savedCookies);
  };

  useEffect(() => {
    setSelectedCookies(cookieConsents);
  }, [cookieConsents]);

  useEffect(() => {
    if (selectedCookies) {
      setCookieConsents(selectedCookies);

      consent({
        arg: 'update',
        params: {
          ad_storage: selectedCookies?.adStorage,
          analytics_storage: selectedCookies?.analyticsStorage,
        },
      });
    }
  }, [selectedCookies]);

  return (
    <>
      <CookieSettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        onSave={handleSave}
        onRejectAll={handleRejectAll}
      />
      {!selectedCookies && !showSettings && (
        <S.CookieConsent>
          <S.MaxWidth>
            <S.Container>
              <Text variant="dark">
                Tato webová stránka používá soubory cookies k zajištění správné
                funkčnosti a pro analýzu návštěvnosti. Kliknutím na tlačítko
                &bdquo;Přijmout vše&rdquo; dáváte souhlas s jejich používáním.
              </Text>
              <S.ButtonContainer>
                <Button onClick={() => setShowSettings(true)}>Nastavení</Button>
                <Button variant="filled" onClick={handleAcceptAll}>
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
