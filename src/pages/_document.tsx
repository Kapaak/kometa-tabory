import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

import { CookieConsentType } from '~/types';

const consentKeys = JSON.stringify(Object.values(CookieConsentType));

/**
 * Google Consent Mode default, restored from the consent saved by CookieConsentBar
 * (localStorage key `cookie_consent`). Missing or invalid values fall back to 'denied'.
 *
 * Why it lives here and not in AnalyticsContext / <GoogleAnalytics defaultConsent>:
 * - gtag processes dataLayer in order, so `consent default` must be queued before
 *   `gtag('config', ...)`, otherwise the first page_view (session start, gclid/utm
 *   attribution) is sent as 'denied' even for visitors who already accepted.
 * - React state is filled from localStorage only in useEffect (after the first render),
 *   and nextjs-google-analytics runs its inline script only once, so it always got 'denied'.
 *   The library also can't express partial consent (e.g. analytics yes, ads no).
 * - Storing consent in a cookie and reading it on the server doesn't help: most pages
 *   are ISR/static, so their HTML is shared by all visitors and never sees request cookies.
 * - `next/script` with strategy="beforeInteractive" only works in _document (Pages Router).
 *
 * This inline script is part of the server HTML <head>, so it runs synchronously before
 * React, next/script and gtag.js. It also defines window.gtag early, so consent updates
 * from CookieConsentBar are queued instead of silently dropped.
 */
const consentDefaultScript = `
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);};
(function () {
  var keys = ${consentKeys};
  var stored = {};
  try {
    stored = JSON.parse(localStorage.getItem('cookie_consent') || '{}') || {};
  } catch (e) {}
  var consent = {};
  for (var i = 0; i < keys.length; i++) {
    consent[keys[i]] = stored[keys[i]] === 'granted' ? 'granted' : 'denied';
  }
  window.gtag('consent', 'default', consent);
})();
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="cs-CZ">
        <Head>
          {/*
            Google Consent Mode default must be set before gtag.js loads.
            Reads the consent saved by CookieConsentBar from localStorage
            synchronously, so returning visitors are not tracked as "denied".
          */}
          <script
            id="google-consent-default"
            dangerouslySetInnerHTML={{ __html: consentDefaultScript }}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
