import { ImageDataLike } from "gatsby-plugin-image";
import React from "react";
import Testimonial from "./testimonial";
import { TestimonialsDataProps } from "../../../../lib/types";

const Testimonials = ({ data }: { data: TestimonialsDataProps }) => {
  return (
    <div className="p-8 flex flex-wrap justify-between gap-10 items-start max-w-[900px] mx-auto">
      {data.data.map((testimonial, index) => (
        <Testimonial key={index} data={testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
