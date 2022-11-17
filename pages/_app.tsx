import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Header, Footer } from "@/components";
import { store } from "@/redux";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Header />
			<GlobalStyles />
			<Component {...pageProps} />
			<Footer />
		</Provider>
	);
}
