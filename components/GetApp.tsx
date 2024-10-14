import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app flex flex-col items-center lg:flex-row lg:justify-between">
        {/* Texto e botões */}
        <div className="z-20 flex w-full flex-1 flex-col items-center gap-8">
          <h2 className="bold-40 lg:bold-52 xl:max-w-[500px] text-center">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10 text-center">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        {/* Imagem do telefone */}
        <div className="flex items-center justify-center w-full lg:w-auto">
          <Image
            src="/phones.png"
            alt="phones"
            width={550}
            height={700}
            className="lg:mt-10 lg:w-[415px] lg:h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
