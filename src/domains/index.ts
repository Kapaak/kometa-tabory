import { PortableTextBlock } from '@portabletext/types';

export type SanityActuality = {
  title: string;
  text: PortableTextBlock[];
};

export type SanityFaq = {
  title: string;
  faqItems: {
    title: string;
    icon: any;
    // icon: KeyofIcons;
    text: PortableTextBlock[];
  }[];
};

export type SanityDocument = {
  title: string;
  file: {
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

export type SanityCourse = {
  value: string;
  title: string;
  price: string;
  age: string;
  file: {
    asset: {
      url: string;
    };
  };
  duration: number;
  pondeli?: SanityCourseDay[];
  utery?: SanityCourseDay[];
  streda?: SanityCourseDay[];
  ctvrtek?: SanityCourseDay[];
  patek?: SanityCourseDay[];
};

export type SanityCourseDay = {
  start: number;
  capacity: number;
};
