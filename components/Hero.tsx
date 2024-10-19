import Image from "next/image";
import Button from "./Button";
import { HERO } from "@/constants";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-10 py-10 pb-32 md:gap-28 lg:py-8 lg:relative lg:flex  xl:flex-row overflow-hidden">
      <div className="hero-map hidden md:block" />
      
      {/* Texto e botões */}
      <div className="relative z-20 flex flex-1 flex-col py-7 px-2 sm:w-full md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-3/4">
        {/* Imagem do acampamento */}
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-4px] top-[2px] w-10 lg:w-[50px]"
        />
        
        {/* Título */}
        <h1 className="bold-52 lg:bold-64">Putuk Truno <a className="lg:underline decoration-4 underline-offset-4 decoration-green-50" >Camp Area</a></h1>
        
        {/* Descrição */}
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          {HERO.description}
        </p>
        
        {/* Avaliações */}
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        {/* Botões */}
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Download App"
            variant="btn_green"
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      {/* Informações adicionais sobre a localização */}
      <div className="relative flex flex-1 items-start justify-center">
        <div className="relative z-20 flex w-[350px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="regular-16 text-gray-20">Location</p>
              <Image
                src="/close.svg"
                alt="close"
                width={24}
                height={24}
              />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
