import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Header from "../components/sections/header";
import Offers from "../components/sections/offers";
import Testimonials from "../components/sections/testimonials";
import List from "../components/sections/lists/list";
import { DataProps } from "../../lib/types";
import JSONData from "../../data/sections/data.json";

interface SectionsTypes {
  type: string[];
}

const IndexPage: React.FC<PageProps> = () => {
  console.log(JSONData.sections);

  return (
    <main className="bg-secondary text-white">
      <p>Upsss</p>
      {/* <Offers /> */}
      {/* <Testimonials /> */}
    </main>
  );
};

export const Head: HeadFC = () => <title>MrsMatchem</title>;

export default IndexPage;
