import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CookieConsentBar, HeadComponent } from '~/components';
import { AnalyticsProvider } from '~/contexts/AnalyticsContext';
import { PageContextProvider } from '~/contexts/PageContext';
import { GlobalStyles } from '~/ui/theme';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PageContextProvider>
        <AnalyticsProvider>
          <HeadComponent />
          <GlobalStyles />
          <Component {...pageProps} />
          <CookieConsentBar />
        </AnalyticsProvider>
      </PageContextProvider>
    </QueryClientProvider>
  );
}
