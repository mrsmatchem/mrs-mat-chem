import React from "react";
import { TestimonialData } from ".";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const Testimonial = ({ data }: { data: TestimonialData }) => {
  const image = getImage(data.image);

  return (
    <div className="relative mb-3 p-4 rounded-2xl border-4 border-secondary-blue min-h-96">
      <div className="pt-12">
        <div
          className="absolute rounded-full w-24 h-24 overflow-hidden top-0 -translate-y-1/2
         border-4 border-secondary"
        >
          {image && <GatsbyImage image={image} alt="Avatar photo" />}
        </div>
        <h1>{data.name}</h1>
        <p className="relative bg-white bg-opacity-10">
          <FaQuoteLeft className="text-4xl" />
          {data.comment}
          <FaQuoteRight className="text-4xl" />
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Testimonial;
