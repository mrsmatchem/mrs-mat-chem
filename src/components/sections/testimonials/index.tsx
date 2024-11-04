import { ImageDataLike } from "gatsby-plugin-image";
import React from "react";
import Testimonial from "./testimonial";

export interface TestimonialData {
  name: string;
  title: string;
  image: ImageDataLike;
  comment: string;
  before_list_title: string;
  before_list: string[];
  after_list_title: string;
  after_list: string[];
}

const Testimonials = () => {
  // const data: DataProps<TestimonialData> = useStaticQuery(graphql`
  //   query {
  //     allMdx(filter: { fields: { source: { eq: "testimonials" } } }) {
  //       nodes {
  //         frontmatter {
  //           name
  //           image {
  //             childImageSharp {
  //               gatsbyImageData
  //             }
  //           }
  //           title
  //           comment
  //           before_list_title
  //           before_list
  //           after_list_title
  //           after_list
  //         }
  //         id
  //       }
  //     }
  //   }
  // `);

  // const testimonials = data.allMdx.nodes;

  return (
    <div className="p-8 flex flex-wrap justify-between gap-6 items-start">
      {/* {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.id} data={testimonial.frontmatter} />
      ))} */}
    </div>
  );
};

export default Testimonials;
