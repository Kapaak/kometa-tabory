export enum ScrollTargets {
  home = "home",
  about = "about",
  application = "application",
  contact = "contact",
  skolky = "skolky",
  skoly = "skoly",
  kurzy = "kurzy",
  kindergardens = "kindergardens",
  schools = "schools",
  courses = "courses",
  trainer = "trainer",
  testimonial = "testimonial",
  gallery = "gallery",
  faq = "faq",
  services = "services",
  location = "location",
}

export enum ContentType {
  normal = "normal",
  bold = "bold",
  link = "link",
  blank = "blank",
}

export enum Content {
  normal = "normal",
  bold = "bold",
  link = "link",
  blank = "blank",
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
