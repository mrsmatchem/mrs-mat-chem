import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Header from "../components/sections/header";
import Offers from "../components/sections/offers";
import Testimonials from "../components/sections/testimonials";
import List from "../components/sections/lists/list";
import { DataProps } from "../../lib/types";

interface SectionsTypes {
  type: string[];
}

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const sectionsTypes = data as any;
  const { type } = sectionsTypes.allMdx.nodes[0].frontmatter;
  console.log(sectionsTypes);

  const renderSections =
    type.length > 0 ? (
      // type.map((section, index) => {
      //   switch (section.type) {
      //     case "header":
      //       return <Header />;
      //     default:
      //       return <p>Something went wrong!</p>;
      //   }
      // })
      <p>Sth is here!</p>
    ) : (
      <p>There is no section to show.</p>
    );

  return (
    <main className="bg-secondary text-white">
      {renderSections}

      {/* <Offers /> */}
      {/* <Testimonials /> */}
    </main>
  );
};

export const Head: HeadFC = () => <title>MrsMatchem</title>;

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        frontmatter {
          type
        }
      }
    }
  }
`;

export default IndexPage;
