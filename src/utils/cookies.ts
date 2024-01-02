import { NextPageContext } from 'next';
import nextCookie from 'next-cookies';

export const getCookieConsents = async (ctx: NextPageContext) => {
  try {
    const getCookieConsent = nextCookie(ctx)['cookie-consent'];

    if (!getCookieConsent) {
      return null;
    }

    return getCookieConsent;
  } catch (error) {
    return null;
  }
};
