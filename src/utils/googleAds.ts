declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS;
const GOOGLE_ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

/**
 * Sends the "application submitted" conversion to Google Ads.
 * Respects Consent Mode – gtag handles denied consent itself.
 */
export const trackGoogleAdsConversion = () => {
  if (
    typeof window === 'undefined' ||
    !window.gtag ||
    !GOOGLE_ADS_ID ||
    !GOOGLE_ADS_CONVERSION_LABEL
  ) {
    return;
  }

  window.gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
  });
};
