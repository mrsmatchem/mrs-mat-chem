import React from "react";
import Offer from "./offer";
import { OffersDataProps } from "../../../../lib/types";

const Offers = ({ data }: { data: OffersDataProps }) => {
  return (
    <section id="offers" className="min-h-screen py-8 px-[3%]">
      <div className="flex justify-center items-stretch flex-wrap gap-8">
        {data.data.map((offer, index) => (
          <Offer key={index} data={offer} />
        ))}
      </div>
    </section>
  );
};

export default Offers;
