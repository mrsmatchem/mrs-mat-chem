import { ImageDataLike } from "gatsby-plugin-image";

export interface SectionDataProps {
  type: string;
  header?: HeaderDataProps;
  intersection?: IntersectionDataProps;
  tabsList?: TabsListDataProps;
  offers?: OffersDataProps;
  testimonials?: TestimonialsDataProps;
}

export interface HeaderDataProps {
  title: string;
  description: string;
  text: string;
  image: ImageDataLike;
}

export interface IntersectionDataProps {
  variant: "inline" | "column";
  elements: {
    text: string;
    textType: "title" | "paragraph";
    color: "primary" | "base";
  }[];
}

export interface OffersDataProps {
  data: OfferDataProps[];
}

export interface OfferDataProps {
  title: string;
  points: string[];
  bonuses: string[];
  new_price: number;
  old_price: number | null | string;
}

export interface TabsListDataProps {
  name: string;
  title: string;
  data: {
    title: string;
    text: string;
    image: ImageDataLike;
    imageAlt: string;
  };
}

export interface TestimonialsDataProps {
  title: string;
  data: TestimonialDataProps[];
}

export interface TestimonialDataProps {
  name: string;
  title: string;
  image: ImageDataLike;
  comment: string;
  before_list_title: string;
  before_list: string[];
  after_list_title: string;
  after_list: string[];
}
