import { PropsWithChildren } from "react";
import { SanityInfoBar } from "~/domains";
import {Header,Footer} from "../../organisms";

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
