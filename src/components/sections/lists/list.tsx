import { ImageDataLike, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { list } from "../../../testData";

interface ElementProps {
  title?: string;
  text: string;
  image?: ImageDataLike;
}

interface ListProps {
  type: string;
  name: string;
  title: string;
  elements: ElementProps[];
}

const List = ({ variant, dataType }: { variant: string; dataType: string }) => {
  return (
    <section
      className="py-10 sm:py-16 lg:py-24 relative before:absolute before:w-1/2 before:h-4/5
    before:bg-primary before:rounded-full before:left-0 before:-translate-x-3/4 before:blur-3xl"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {list.title}
          </h2>
        </div>

        <ul className="max-w-md mx-auto mt-16 space-y-12">
          {list.data.map((item, index) => {
            return (
              <li key={index} className="relative flex items-start">
                {index !== list.data.length - 1 && (
                  <div
                    className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                    aria-hidden="true"
                  ></div>
                )}

                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 p-4 bg-white rounded-full shadow">
                  <StaticImage
                    src="../../../images/icons/graduation-cap.svg"
                    alt={item.imageAlt}
                  />
                </div>
                <div className="ml-6">
                  <p className="mt-4 text-lg text-white">{item.text}</p>
                </div>
              </li>
            );
          })}

          {/* <li className="relative flex items-start">
            <div
              className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
              aria-hidden="true"
            ></div>

            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
              <FaBook className="text-primary w-full h-full p-4" />
            </div>
            <div className="ml-6">
              <p className="mt-4 text-lg text-white">
                Ciężko znaleźć Ci odpowiedniego korepetytora, który by Cię
                zrozumiał i przekazałby Ci odpowiednią wiedzę
              </p>
            </div>
          </li>

          <li className="relative flex items-start">
            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 p-4 bg-white rounded-full shadow">
              <StaticImage
                src="../../../images/icons/graduation-cap.svg"
                alt="Graduation Cap"
              />
            </div>
            <div className="ml-6">
              <p className="mt-4 text-lg text-white">
                Nie satysfakcjonują Cię Twoje wyniki z matematyki i chcesz to
                zmienić
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default List;
