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
      className="min-h-screen lg:h-screen flex flex-col lg:flex-row justify-center items-center
     gap-20 lg:px-12 overflow-hidden snap-start relative"
    >
      <div
        className="flex flex-col max-w-[1100px] text-center min-h-screen justify-evenly
       px-12 lg:px-40 z-10 bg-black bg-opacity-60 lg:bg-transparent"
      >
        <div>
          <h1 className="text-6xl font-extrabold mt-3 text-primary">
            {headerData.title}
          </h1>
          <h3 className="text-3xl font-bold mt-4">{headerData.description}</h3>
        </div>
        <p className="text-2xl font-medium py-12">{headerData.text}</p>
        <Button primary>Zobacz oferty</Button>
      </div>
      {image && (
        <div className="absolute bottom-0 max-h-full max-w-[30rem] flex lg:relative">
          <GatsbyImage
            className=" drop-shadow-[0_0_60px_rgb(219,39,119)]"
            image={image}
            alt="MrsMatChem's portrait"
          />
        </div>
      )}
    </section>
  );
};

export default Header;
