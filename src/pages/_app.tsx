import type { AppProps } from "next/app";
import { HeadComponent } from "~/components";
import { store } from "~/state";
import { Provider } from "react-redux";
import Script from "next/script";
import { useRouter } from "next/router";
import { GlobalStyles } from "~/ui/theme";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isPrihlaskyPage = router.pathname === "/prihlasky/[taborId]";

  return (
    <Provider store={store}>
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
                  : ""
              })
            `}
      </Script>
      <HeadComponent />
      {/* <DiscountLabel /> */}
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}
