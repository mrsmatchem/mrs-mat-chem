import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { TestimonialDataProps } from "../../../../lib/types";

const Testimonial = ({ data }: { data: TestimonialDataProps }) => {
  const image = getImage(data.image);

  return (
    <div className="flex-1 basis-[28rem] p-4 rounded-2xl">
      <div className="flex gap-2">
        <div className="flex flex-col items-center justify-end my-3">
          <div className="rounded-3xl w-24 h-24 overflow-hidden border-2 border-secondary-blue">
            {image && <GatsbyImage image={image} alt="Avatar photo" />}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">{data.title}</h2>
          <p className="relative py-4 px-6 bg-white rounded-xl text-black font-medium mt-6 z-0">
            <FaQuoteLeft className="absolute text-4xl top-0 left-4 text-primary rounded-full -translate-y-[55%]" />
            {data.comment}
            <FaQuoteRight className="absolute text-4xl bottom-0 right-4 text-primary rounded-full translate-y-1/2" />
          </p>
          <h1 className="relative font-semibold text-xl mb-3 -mt-4 bg-secondary z-10 w-fit rounded-e-xl px-2">
            {data.name}
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap w-full gap-4">
        <div className="flex-1 basis-64 bg-white bg-opacity-20 rounded-xl overflow-hidden">
          <h2 className="px-6 py-3 text-lg font-semibold bg-primary-blue">
            {data.before_list_title}
          </h2>
          <ul className="px-6 pb-3 list-disc">
            {data.before_list.map((item, index) => (
              <li className="mt-3" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 basis-64 bg-white bg-opacity-20 rounded-xl overflow-hidden">
          <h2 className="px-6 py-3 text-lg font-semibold bg-primary">
            {data.after_list_title}
          </h2>
          <ul className="px-6 pb-3 list-disc">
            {data.after_list.map((item, index) => (
              <li className="mt-3" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
