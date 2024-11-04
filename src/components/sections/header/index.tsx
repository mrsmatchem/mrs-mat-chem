import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HeaderDataProps } from "../../../../lib/types";
import React from "react";
import Button from "../../button";

const Header = ({ data }: { data: HeaderDataProps }) => {
  const image = getImage(data.image);

  const scrollToOffers = () =>
    document
      .querySelector("#offers")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section
      className="min-h-screen lg:h-screen flex flex-col lg:flex-row justify-center items-center
      lg:px-12 overflow-hidden snap-start relative"
    >
      <div
        className="flex flex-col max-w-[1100px] text-center min-h-screen justify-center
       px-12 pb-20 z-10 bg-black bg-opacity-60 lg:bg-transparent"
      >
        <div>
          <h1 className="text-6xl font-extrabold mt-3 text-primary">
            {data.title}
          </h1>
          <h3 className="text-3xl font-bold mt-4">{data.description}</h3>
        </div>
        <p className="text-2xl font-medium py-12">{data.text}</p>
        <Button primary onClick={scrollToOffers}>
          Zobacz oferty
        </Button>
      </div>

      {image && (
        <div className="absolute bottom-0 max-h-full max-w-[25rem] lg:min-w-[25rem] flex lg:self-end lg:relative">
          <GatsbyImage
            className="h-full w-full drop-shadow-[0_0_60px_rgb(219,39,119)]"
            alt="MrsMatChem's portrait"
            image={image}
          />
        </div>
      )}
    </section>
  );
};

export default Header;
