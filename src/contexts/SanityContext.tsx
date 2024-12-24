import { PropsWithChildren, createContext, useContext } from 'react';

import {
  SanityActuality,
  SanityDocument,
  SanityTestimonial,
  SanityVideo,
} from '~/domains';

type SanityContext = {
  actualities: SanityActuality[];
  documents: SanityDocument[];
  testimonial: SanityTestimonial[];
  videos: SanityVideo[];
};

const SanityContext = createContext<SanityContext>({
  actualities: [],
  documents: [],
  testimonial: [],
  videos: [],
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
