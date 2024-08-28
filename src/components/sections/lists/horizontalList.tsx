import { getImage, getImageData } from "gatsby-plugin-image";
import React from "react";

const HorizontalList = () => {

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Twoje wyniki po programie!
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden top-2 md:block md:px-20">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-5 gap-x-12">
            <div>
              <div
                className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2
           border-primary rounded-full shadow-[0_0_1rem] shadow-primary"
              >
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-white">
                Opanujesz matematyczną teorię
              </h3>
            </div>

            <div>
              <div className="flex md:mt-4 lg:mt-6 xl:mt-8 items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700">2</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Poznasz najlepsze matematyczne tricki
              </h3>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700">3</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Pozbędziesz się stresu przed egzaminem
              </h3>
            </div>
            <div>
              <div className="flex md:-mt-6 items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700">4</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Opanujesz maturalne pewniaki
              </h3>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700">5</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Zdasz maturę z najlepszym dla siebie wynikiem
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalList;
