import React from "react";
import { OfferDataProps } from ".";

const Offer = ({ data }: { data: OfferDataProps }) => {
  return (
    <div
      className="grow shrink basis-[25rem] flex flex-col justify-between bg-[rgb(9_7_66)]
   rounded-3xl overflow-hidden border-[0.2rem] border-solid border-primary duration-500
    hover:scale-105"
    >
      <div className="pt-12 pl-8 pr-8">
        <h3 className="text-3xl font-bold text-center">{data.title}</h3>
        <ul className="list-disc text-xl mt-8 text-left">
          {data.points.map((point, index) => (
            <li key={index} className="mt-4 mr-8">
              {point}
            </li>
          ))}
        </ul>
        <ul className="text-3xl mt-12 mb-8 text-left">
          {data.bonuses.map((bonus, index) => (
            <li key={index} className="mt-3">
              <h5 className="font-bold text-primary text-2xl">
                BONUS {index + 1}:
              </h5>
              <p className="font-semibold text-xl">{bonus}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex min-h-40 flex-col justify-center py-5 px-7 bg-primary">
        {data.old_price !== "" && (
          <h5 className="line-through decoration-secondary decoration-2 text-3xl">
            {data.old_price}
          </h5>
        )}
        <p className="mt-8 text-2xl text-center">Tylko teraz</p>
        <div className="flex justify-evenly gap-4">
          <h4 className="block text-3xl font-bold">{data.new_price}&nbsp;zł</h4>
        </div>
      </div>
    </div>
  );
};

export default Offer;
