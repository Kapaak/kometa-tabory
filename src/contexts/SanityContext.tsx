import { PropsWithChildren, createContext, useContext } from 'react';

import {
  SanityActuality,
  SanityDocument,
  SanityFaq,
  SanityTestimonial,
} from '~/domains';

type SanityContext = {
  actualities: SanityActuality[];
  faqs: SanityFaq[];
  documents: SanityDocument[];
  testimonial: SanityTestimonial[];
};

const SanityContext = createContext<SanityContext>({
  actualities: [],
  faqs: [],
  documents: [],
  testimonial: [],
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
