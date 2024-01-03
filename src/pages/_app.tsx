import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Analytics } from '@vercel/analytics/react';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

import { CookieConsent, HeadComponent } from '~/components';
import { PageContextProvider } from '~/contexts/PageContext';
import { GlobalStyles } from '~/ui/theme';

//disable posthog in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug();
    },
  });
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // const click = () => { //custom event
  //   posthog.capture('my event', { property: 'value' });
  // };

  return (
    <PostHogProvider client={posthog}>
      <PageContextProvider>
        {/* <GoogleAnalytics
          trackPageViews
          gaMeasurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
        /> */}
        <Analytics />
        <HeadComponent />
        <GlobalStyles />
        <Component {...pageProps} />
        <CookieConsent />
      </PageContextProvider>
    </PostHogProvider>
  );
}

// App.getInitialProps = async (
//   appContext: AppContext
// ): Promise<Partial<MyAppProps>> => {
//   const { ctx, Component } = appContext;

//   let pageProps = {};

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   const cookieConsents = (await getCookieConsents(
//     ctx
//   )) as CookieConsents | null;

//   return { pageProps, cookieConsents };
// };
