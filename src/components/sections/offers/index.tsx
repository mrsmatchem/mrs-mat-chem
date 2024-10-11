import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { DataProps } from "../../../../lib/types";
import Offer from "./offer";

export interface OfferDataProps {
  title: string;
  points: string[];
  bonuses: string[];
  old_price: number | string;
  new_price: number;
}

const Offers = () => {
  // const data: DataProps<OfferDataProps> = useStaticQuery(graphql`
  //   query {
  //     allMdx(filter: {}) {
  //       edges {
  //         node {
  //           frontmatter {
  //             sections {
  //               offers {
  //                 data {
  //                   bonuses
  //                   new_price
  //                   old_price
  //                   points
  //                   title
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // console.log(data);

  // const offers = data.allMdx.nodes;

  return (
    <section id="offers" className="min-h-screen py-8 px-[3%]">
      <div className="flex justify-center items-stretch flex-wrap gap-8">
        {/* {offers.map((offer) => (
          <Offer key={offer.id} data={offer.frontmatter} />
        ))} */}
      </div>
    </section>
  );
};

export default Offers;
