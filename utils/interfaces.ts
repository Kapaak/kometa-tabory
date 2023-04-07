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

export type FragmentType = {
  output: string;
  type: ContentType;
  href?: string;
};
