import { SanityActuality, SanityDocument, SanityFaq } from "~/domains";
import { PropsWithChildren, createContext, useContext } from "react";

type SanityContext = {
  actualities: SanityActuality[];
  faqs: SanityFaq[];
  documents: SanityDocument[];
};

const SanityContext = createContext<SanityContext>({
  actualities: [],
  faqs: [],
  documents: [],
});

export const SanityContextProvider = ({
  children,
  sanityData,
}: PropsWithChildren<{
  sanityData: SanityContext;
}>) => {
  return (
    <SanityContext.Provider value={sanityData}>
      {children}
    </SanityContext.Provider>
  );
};

export function useSanityContext() {
  return useContext(SanityContext);
}
