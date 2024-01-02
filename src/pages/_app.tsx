import type { AppContext, AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';

import { Analytics } from '@vercel/analytics/react';

import { CookieConsent, HeadComponent } from '~/components';
import { PageContextProvider } from '~/contexts/PageContext';
import { CookieConsents } from '~/domains';
import { GlobalStyles } from '~/ui/theme';
import { getCookieConsents } from '~/utils';

interface MyAppProps extends AppProps {
  cookieConsents?: CookieConsents | null;
}

export default function App({
  Component,
  pageProps,
  cookieConsents,
}: MyAppProps) {
  return (
    <PageContextProvider>
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
      />
      <Analytics />
      <HeadComponent />
      <GlobalStyles />
      <Component {...pageProps} />
      <CookieConsent cookieConsents={cookieConsents} />
    </PageContextProvider>
  );
}

App.getInitialProps = async (
  appContext: AppContext
): Promise<Partial<MyAppProps>> => {
  const { ctx, Component } = appContext;

  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const cookieConsents = (await getCookieConsents(
    ctx
  )) as CookieConsents | null;

  return { pageProps, cookieConsents };
};
