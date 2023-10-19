import { PropsWithChildren } from "react";
import { SanityInfoBar } from "~/domains";
import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";

interface PageLayoutProps {
  infoBar?: SanityInfoBar;
}

export const PageLayout = ({
  infoBar,
  children,
}: PropsWithChildren<PageLayoutProps>) => {
  return (
    <>
      <Header infoBar={infoBar} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
