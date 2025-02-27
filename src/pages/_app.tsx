import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CookieConsentBar, HeadComponent } from '~/components';
import { AnalyticsProvider } from '~/contexts/AnalyticsContext';
import { MetaPixelProvider } from '~/contexts/MetaPixelContext';
import { PageContextProvider } from '~/contexts/PageContext';
import { GlobalStyles } from '~/ui/theme';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PageContextProvider>
        <MetaPixelProvider>
          <AnalyticsProvider>
            <HeadComponent />
            <GlobalStyles />
            <Component {...pageProps} />
            <CookieConsentBar />
          </AnalyticsProvider>
        </MetaPixelProvider>
      </PageContextProvider>
    </QueryClientProvider>
  );
}
