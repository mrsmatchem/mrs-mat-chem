import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Header from "../components/sections/header";
import Offers from "../components/sections/offers";
import Testimonials from "../components/sections/testimonials";
import List from "../components/sections/lists/list";
import { DataProps, HeaderDataProps } from "../../lib/types";
import JSONData from "../../data/sections/sections.json";

interface SectionsTypes {
  type: string[];
}

const IndexPage: React.FC<PageProps> = () => {
  // const headerData = JSONData.sectionsList.find((el) => el.type === "header");
  // const types = JSONData.sectionsList.map((el) => el.type);

  // const header = { ...headerData } as HeaderDataProps;

  return (
    <main className="bg-secondary text-white">
      {/* {headerData && <Header data={header} />} */}
      {/* <Offers /> */}
      {/* <Testimonials /> */}
    </main>
  );
};

export const Head: HeadFC = () => <title>MrsMatchem</title>;

export default IndexPage;
