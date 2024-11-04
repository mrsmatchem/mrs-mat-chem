import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Section from "../components/sections/section";
import { SectionDataProps } from "../../lib/types";

interface SectionsDataProps {
  mdx: {
    frontmatter: {
      sections: SectionDataProps[];
    };
  };
}

const IndexPage: React.FC<PageProps> = ({ data }) => {
  console.log(data);
  const {
    mdx: {
      frontmatter: { sections },
    },
  } = data as SectionsDataProps;
  console.log(sections);
  const sectionsGenerator = sections.map((section, index) => {
    return <Section key={index} type={section.type} data={section} />;
  });

  return <main className="bg-secondary text-white">{sectionsGenerator}</main>;
};

export const Head: HeadFC = () => <title>MrsMatchem</title>;

export const query = graphql`
  query GetSections {
    mdx {
      frontmatter {
        sections {
          type
          header {
            description
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            text
            title
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
  }
`;

export default IndexPage;
