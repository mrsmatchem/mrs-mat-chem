import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import React from "react";
import Button from "../button";

interface DataProps {
  allMdx: {
    nodes: {
      frontmatter: {
        title: string;
        description: string;
        text: string;
        image: ImageDataLike;
      };
    }[];
  };
}

const Header = () => {
  const data: DataProps = useStaticQuery(graphql`
    query {
      allMdx(filter: { fields: { source: { eq: "header" } } }) {
        nodes {
          frontmatter {
            description
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            text
            title
          }
        }
      }
    }
  `);

  const headerData = data.allMdx.nodes[0].frontmatter;

  const image = getImage(headerData.image);

  return (
    <section
      className="min-h-screen md:h-screen flex flex-col md:flex-row justify-center items-center
     gap-20 md:px-12 overflow-hidden snap-start"
    >
      <div
        className="flex flex-col max-w-[1100px] text-center h-full justify-evenly
       px-12 md:px-40 relative"
      >
        <div>
          <h1 className="text-6xl font-extrabold mt-3 text-primary">
            {headerData.title}
          </h1>
          <h3 className="text-3xl font-bold mt-4">{headerData.description}</h3>
        </div>
        <p className="text-3xl font-medium">{headerData.text}</p>
        <Button primary>Zobacz oferty</Button>
      </div>
      <div
        className="absolute left-0 top-0 w-full overflow-hidden md:overflow-visible flex justify-center
       md:block md:relative h-screen md:w-[90rem] xl:w-[70rem] "
      >
        {image && (
          <GatsbyImage
            className="block absolute max-w-[35rem] right-0 bottom-0 drop-shadow-[0_0_60px_rgb(219,39,119)]"
            image={image}
            alt="MrsMatChem's portrait"
          />
        )}
      </div>
    </section>
  );
};

export default Header;
