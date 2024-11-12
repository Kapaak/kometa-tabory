import { PortableTextBlock } from '@portabletext/types';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type SanityActuality = {
  title?: string;
  text?: PortableTextBlock[];
};

export type SanityCamp = {
  id: string;
  title?: string;
  name?: string;
  date?: string;
  price?: number;
  discountedPrice?: number;
  capacity?: number;
  availability?: {
    label?: string;
    open?: boolean;
  };
  image?: SanityImage;
  alt?: string;
  slug?: string;
  spreadsheetId: number;
};

export interface SanityTripCamp extends SanityCamp {}

export interface SanitySwimmingCamp extends SanityCamp {
  trip?: string;
}

export type SanityFaq = {
  title?: string;
  faqItems?: {
    title: string;
    icon: any;
    // icon: KeyofIcons;
    text: PortableTextBlock[];
  }[];
};

export type SanityDocument = {
  title?: string;
  file?: {
    asset: {
      url: string;
    };
  };
};

export type SanityInfoBar = {
  title?: string;
  text?: string;
  visibility?: boolean;
};

export type SanityTestimonial = {
  title?: string;
  text?: string;
  origin?: string;
};

export type SanityImage = SanityImageObject & {
  asset: {
    metadata: {
      lqip: string;
      dimensions: {
        width: number;
        height: number;
      };
    };
  };
};

export type SanityPhotoGallery = {
  title?: string;
  image?: SanityImage;
  alt?: string;
};

export type SanityCourseDay = {
  start?: number;
  capacity?: number;
};

export type SanityVideo = {
  videoFile: {
    asset: {
      url: string;
    };
  };
};

export type CookieConsents = {
  adStorage: 'denied' | 'granted' | 'pending';
  analyticsStorage: 'denied' | 'granted' | 'pending';
};
