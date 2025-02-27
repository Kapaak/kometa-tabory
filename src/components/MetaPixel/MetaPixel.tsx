import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { MetaPixelManager } from '~/utils/meta-pixel';

export function MetaPixel() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => MetaPixelManager.pageView();
    //This pageview only triggers the first time (its important for Pixel to have real info)
    handleRouteChange();

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
}
