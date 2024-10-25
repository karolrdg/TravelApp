import Image from "next/image";
import React from "react";
import { GUIDE } from "../constants/index";

const Guide = () => {
  return (
    <section className="flexCenter flex-col pb-2">
      <div className="container-guide max-container w-full py-20">
        <Image
          src="/camp.svg"
          alt="camp"
          width={70}
          height={70}
          className="mb-12 lg:mx-auto lg:mb-16"
        />
        <p className="uppercase regular-18 mb-5 text-green-50 lg:mx-auto lg:mb-8">
          We are here for you
        </p>
        <div className="flex flex-col items-center lg:mx-auto lg:rounded-5xl lg:shadow-md lg:bg-green-50 lg:p-5 lg:transition lg:ease-in-out lg:delay-200 lg:hover:-translate-y-1 lg:hover:scale-105 lg:duration-700">
          <h2 className="flex flex-col text-center mb-10 bold-40 uppercase overflow-y-hidden lg:bold-40 lg:text-white xl:max-w-[390px]">
            <p>
              Guide{" "}
              <a className="underline decoration-4 underline-offset-4 decoration-green-50">
                You
              </a>
            </p>
            <p>to Easy Path</p>
          </h2>
          <p className="text-center regular-16 text-gray-30 xl:max-w-[520px] lg:text-white lg:flex lg:items-center">
            {GUIDE.description}
          </p>
        </div>
      </div>

      <div className="flexCenter flex flex-col mx-8 gap-4 lg:relative w-full overflow-y-hidden">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full h-full object-cover "
        />

        {/* Card Aguas Calientes com animação de ondas suaves */}
        <div className="animate-sailing-waves lg:absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
