import Script from 'next/script';
import { consent, GoogleAnalytics } from 'nextjs-google-analytics';
import { PropsWithChildren, useEffect, useState } from 'react';

import { Analytics } from '@vercel/analytics/react';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

import { PostHog } from '~/components/PostHog';
import { CookieConsent } from '~/types';
import {
  cookieConsentGiven,
  hasEssentialAnalyticsConsents,
} from '~/utils/cookies';

import { useMetaPixelContext } from './MetaPixelContext';

export const AnalyticsProvider = ({ children }: PropsWithChildren) => {
  const [defaultCookieConsent, setDefaultCookieConsent] =
    useState<CookieConsent>();

  const { grantConsent, revokeConsent } = useMetaPixelContext();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDefaultCookieConsent(cookieConsentGiven());
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && defaultCookieConsent) {
      consent({
        arg: 'update',
        params: defaultCookieConsent,
      });

      const hasEssentialConsents = hasEssentialAnalyticsConsents(
        cookieConsentGiven()
      );

      if (hasEssentialConsents) {
        posthog.opt_in_capturing();
        grantConsent();
      } else {
        posthog.opt_out_capturing();
        revokeConsent();
      }
    }
  }, [defaultCookieConsent, grantConsent, revokeConsent]);

  return (
    <PostHogProvider client={posthog}>
      <Analytics />
      <PostHog />

      <GoogleAnalytics
        debugMode={process.env.NODE_ENV === 'development'}
        trackPageViews
        gaMeasurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
      />

      {/* Google Ads – reuses gtag.js loaded by <GoogleAnalytics> above */}
      {process.env.NEXT_PUBLIC_GOOGLE_ADS && (
        <Script id="google-ads" strategy="afterInteractive">
          {`window.gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS}');`}
        </Script>
      )}

      {children}
    </PostHogProvider>
  );
};
