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

export interface SanityCampType {
  id: string;
  title?: string;
  image?: SanityImage;
  alt?: string;
  value?: string;
  description?: string;
  price?: number;
  discountPrice?: number;
  swimmingFrequency?: number;
  age?: string;
}

export interface SanityTripCamp extends SanityCamp {
  trip?: string;
}

export interface SanitySwimmingCamp extends SanityCamp {}

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
  id?: string;
  title?: string;
  image?: SanityImage;
  alt?: string;
  campType?: string;
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
