import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';

import { Analytics } from '@vercel/analytics/react';

import { HeadComponent } from '~/components';
import { PageContextProvider } from '~/contexts/PageContext';
import { GlobalStyles } from '~/ui/theme';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isPrihlaskyPage = router.pathname === '/prihlasky/[taborId]';

  return (
    <PageContextProvider>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
							gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS}');

							${
                isPrihlaskyPage
                  ? `gtag('event', 'conversion', {'send_to': '${process.env.NEXT_PUBLIC_GOOGLE_ADS}/R7_GCPrj24oYEPmetKYp'}`
                  : ''
              })
            `}
      </Script>
      <Analytics />
      <HeadComponent />
      <GlobalStyles />
      <Component {...pageProps} />
    </PageContextProvider>
  );
}
