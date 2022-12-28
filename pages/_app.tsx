import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Header, Footer, HeadSelector } from "@/components";
import { store } from "@/state";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<HeadSelector />
			<Header />
			<GlobalStyles />
			<Component {...pageProps} />
			<Footer />
		</Provider>
	);
}
