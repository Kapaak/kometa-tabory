import { PropsWithChildren, createContext, useContext } from 'react';

import {
  SanityActuality,
  SanityCamp,
  SanityDocument,
  SanityFaq,
  SanityTestimonial,
} from '~/domains';

type SanityContext = {
  actualities: SanityActuality[];
  faqs: SanityFaq[];
  documents: SanityDocument[];
  testimonial: SanityTestimonial[];
  camps: SanityCamp[];
  spreadSheetsIds: number[];
};

const SanityContext = createContext<SanityContext>({
  actualities: [],
  faqs: [],
  documents: [],
  testimonial: [],
  camps: [],
  spreadSheetsIds: [],
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
