import { createContext, PropsWithChildren, useContext } from 'react';

import { useMetaPixel } from '~/hooks/useMetaPixel';
import { CookieConsent } from '~/types';

interface MetaPixelContext {
  grantConsent: () => void;
  revokeConsent: () => void;
  trackPageView: () => void;
  trackEvent: (title: string, data?: any) => void;
  trackCustomEvent: (title: string, data?: any) => void;
  trackSingle: (pixel: string, title: string, data?: any) => void;
  trackSingleCustom: (pixel: string, title: string, data?: any) => void;
  updateConsent: (cookieConsent: CookieConsent) => void;
}

export const MetaPixelContext = createContext<MetaPixelContext>({
  grantConsent: () => {},
  revokeConsent: () => {},
  trackPageView: () => {},
  trackEvent: () => {},
  trackCustomEvent: () => {},
  trackSingle: () => {},
  trackSingleCustom: () => {},
  updateConsent: () => {},
});

export const MetaPixelProvider = ({ children }: PropsWithChildren) => {
  const metaPixel = useMetaPixel();

  return (
    <MetaPixelContext.Provider value={metaPixel}>
      {children}
    </MetaPixelContext.Provider>
  );
};

export function useMetaPixelContext() {
  return useContext(MetaPixelContext);
}
