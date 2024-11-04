import { ImageDataLike } from "gatsby-plugin-image";

export interface SectionDataProps {
  type: string;
  header?: HeaderDataProps;
  intersection?: IntersectionDataProps;
  tabsList?: TabsListDataProps;
  offers?: OffersDataProps;
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
