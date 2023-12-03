import type { AppProps } from 'next/app';
import Script from 'next/script';
import { GoogleAnalytics } from 'nextjs-google-analytics';

import { Analytics } from '@vercel/analytics/react';

import { HeadComponent } from '~/components';
import { PageContextProvider } from '~/contexts/PageContext';
import { GlobalStyles } from '~/ui/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageContextProvider>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
      />
      <Analytics />
      <HeadComponent />
      <GlobalStyles />
      <Component {...pageProps} />
    </PageContextProvider>
  );
}
