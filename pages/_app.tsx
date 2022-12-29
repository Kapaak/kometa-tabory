import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Header, Footer, HeadSelector, DiscountLabel } from "@/components";
import { store } from "@/state";
import { Provider } from "react-redux";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
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
            `}
			</Script>
			<HeadSelector />
			<DiscountLabel />
			<Header />
			<GlobalStyles />
			<Component {...pageProps} />
			<Footer />
		</Provider>
	);
}
