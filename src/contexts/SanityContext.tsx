import { PropsWithChildren, createContext, useContext } from 'react';

import {
  SanityActuality,
  SanityCamp,
  SanityDocument,
  SanityFaq,
  SanityPhotoGallery,
  SanityTestimonial,
  SanityVideo,
} from '~/domains';

type SanityContext = {
  actualities: SanityActuality[];
  faqs: SanityFaq[];
  documents: SanityDocument[];
  testimonial: SanityTestimonial[];
  camps: SanityCamp[];
  spreadSheetsIds: number[];
  photoGallery: SanityPhotoGallery[];
  videos: SanityVideo[];
};

const SanityContext = createContext<SanityContext>({
  actualities: [],
  faqs: [],
  documents: [],
  testimonial: [],
  camps: [],
  spreadSheetsIds: [],
  photoGallery: [],
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
