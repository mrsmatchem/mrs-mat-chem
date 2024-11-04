import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Section from "../components/sections/section";
import {
  HeaderDataProps,
  IntersectionDataProps,
  NodeDataProps,
  OffersDataProps,
  TabsListDataProps,
} from "../../lib/types";

interface SectionsDataProps {
  allSectionsListItems: {
    nodes: NodeDataProps[];
  };
}

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const {
    allSectionsListItems: { nodes },
  } = data as SectionsDataProps;
  console.log(nodes);
  const sectionsGenerator = nodes.map((node) => {
    return <Section key={node.id} type={node.type} data={node} />;
  });

  return <main className="bg-secondary text-white">{sectionsGenerator}</main>;
};

export const Head: HeadFC = () => <title>MrsMatchem</title>;

export const query = graphql`
  query GetSections {
    allSectionsListItems {
      nodes {
        id
        type
        header {
          description
          text
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        intersection {
          variant
          elements {
            color
            text
            textType
          }
        }
        offers {
          data {
            bonuses
            new_price
            old_price
            points
            title
          }
        }
        tabsList {
          name
          title
          data {
            imageAlt
            text
            title
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
