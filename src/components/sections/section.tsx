import React from "react";
import Header from "./header";
import { SectionDataProps } from "../../../lib/types";
import Offers from "./offers";
import Testimonials from "./testimonials";

interface SectionProps {
  type: string;
  data: SectionDataProps;
}

const Section = ({ type, data }: SectionProps) => {
  if (type === "header" && data.header) {
    return <Header data={data.header} />;
  }

  if (type === "offers" && data.offers) {
    return <Offers data={data.offers} />;
  }

  if (type === "testimonials" && data.testimonials) {
    return <Testimonials data={data.testimonials} />;
  }

  return <div>{type}</div>;
};

export default Section;
