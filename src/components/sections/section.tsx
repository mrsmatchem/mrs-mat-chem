import React from "react";
import Header from "./header";
import {
  HeaderDataProps,
  IntersectionDataProps,
  NodeDataProps,
  OffersDataProps,
  TabsListDataProps,
} from "../../../lib/types";
import Offers from "./offers";

interface SectionProps {
  type: string;
  data: NodeDataProps;
}

const Section = ({ type, data }: SectionProps) => {
  if (type === "header" && data.header) {
    return <Header data={data.header} />;
  }

  if (type === "offers" && data.offers) {
    return <Offers data={data.offers} />;
  }
  return <div>{type}</div>;
};

export default Section;
