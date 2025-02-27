import { SanitySwimmingCamp, SanityTripCamp } from '~/domains';

//TODO: zapisuj enum membery v pascal case - napr ScrollTargets

export enum ScrollTargets {
  home = 'home',
  about = 'about',
  application = 'application',
  contact = 'contact',
  skolky = 'skolky',
  skoly = 'skoly',
  kurzy = 'kurzy',
  kindergardens = 'kindergardens',
  schools = 'schools',
  courses = 'courses',
  trainer = 'trainer',
  testimonial = 'testimonial',
  gallery = 'gallery',
  faq = 'faq',
  services = 'services',
  location = 'location',
  campTypes = 'camp-types',
}

export enum ContentType {
  normal = 'normal',
  bold = 'bold',
  link = 'link',
  blank = 'blank',
}

export enum Content {
  normal = 'normal',
  bold = 'bold',
  link = 'link',
  blank = 'blank',
}

export enum CampType {
  Swimming = 'swimming-camp',
  Trip = 'trip-camp',
}

export type Fragment = {
  output: string;
  type: Content;
  href?: string;
};

export type HeadlineFragment = {
  headline: string;
  fragment: Array<FragmentType>;
};

export type FragmentType = {
  output: string;
  type: ContentType;
  href?: string;
};

export interface Dropdown {
  href: string;
  scrollTarget?: ScrollTargets;
  output: string;
}

export interface NavLink extends Dropdown {
  dropdown?: Array<Dropdown>;
}

export interface TripCamp extends SanityTripCamp {
  currentCapacity: number;
}

export interface SwimmingCamp extends SanitySwimmingCamp {
  currentCapacity: number;
}

export enum CookieConsentType {
  AD_STORAGE = 'ad_storage',
  AD_PERSONALIZATION = 'ad_personalization',
  AD_USER_DATA = 'ad_user_data',
  ANALYTICS_STORAGE = 'analytics_storage',
}

export type CookieConsentState = 'granted' | 'denied';

export type CookieConsent = Record<string, CookieConsentState>;

export type MetaPixel = {
  pageView: () => void;
  init: (key: string, undefined: any, config: any) => void;
  revokeConsent: () => void;
  grantConsent: () => void;
  fbq: (...args: Array<unknown>) => void;
  track: (title: string, data?: any) => void;
  trackCustom: (title: string, data?: any) => void;
  trackSingle: (pixel: string, title: string, data?: any) => void;
  trackSingleCustom: (pixel: string, title: string, data?: any) => void;
};
