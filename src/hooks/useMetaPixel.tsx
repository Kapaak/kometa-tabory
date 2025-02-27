import { Router } from 'next/router';
import { useCallback, useEffect, useRef } from 'react';

import { CookieConsent, MetaPixel } from '~/types';
import { hasEssentialAnalyticsConsents } from '~/utils';

export function useMetaPixel() {
  const reactPixelRef = useRef<MetaPixel>();

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(
          process.env.NEXT_PUBLIC_METAPIXEL_KEY ?? '',
          undefined,
          {
            autoConfig: true,
            debug: process.env.NODE_ENV === 'development',
          }
        );
        ReactPixel.pageView();

        reactPixelRef.current = ReactPixel;

        Router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  }, []);

  const grantConsent = useCallback(() => {
    if (reactPixelRef.current) {
      reactPixelRef.current.grantConsent();
    }
  }, [reactPixelRef]);

  const revokeConsent = useCallback(() => {
    if (reactPixelRef.current) {
      reactPixelRef.current.revokeConsent();
    }
  }, [reactPixelRef]);

  const trackPageView = useCallback(() => {
    if (reactPixelRef.current) {
      reactPixelRef.current.pageView();
    }
  }, [reactPixelRef]);

  const trackEvent = useCallback(
    (title: string, data?: any) => {
      if (reactPixelRef.current) {
        reactPixelRef.current.track(title, data);
      }
    },
    [reactPixelRef]
  );

  const trackCustomEvent = useCallback(
    (title: string, data?: any) => {
      if (reactPixelRef.current) {
        reactPixelRef.current.trackCustom(title, data);
      }
    },
    [reactPixelRef]
  );

  const trackSingle = useCallback(
    (pixel: string, title: string, data?: any) => {
      if (reactPixelRef.current) {
        reactPixelRef.current.trackSingle(pixel, title, data);
      }
    },
    [reactPixelRef]
  );

  const trackSingleCustom = useCallback(
    (pixel: string, title: string, data?: any) => {
      if (reactPixelRef.current) {
        reactPixelRef.current.trackSingleCustom(pixel, title, data);
      }
    },
    [reactPixelRef]
  );

  const updateConsent = useCallback(
    (cookieConsent: CookieConsent) => {
      if (reactPixelRef.current) {
        const metaPixelAllowed = hasEssentialAnalyticsConsents(cookieConsent);
        metaPixelAllowed ? grantConsent() : revokeConsent();
      }
    },
    [reactPixelRef, grantConsent, revokeConsent]
  );

  return {
    grantConsent,
    revokeConsent,
    trackPageView,
    trackEvent,
    trackCustomEvent,
    trackSingle,
    trackSingleCustom,
    updateConsent,
  };
}
