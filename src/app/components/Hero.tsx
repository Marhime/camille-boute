// hero component
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="p-6 lg:px-14 pt-28 lg:pt-44">
      <div className="flex justify-center w-full">
        <div className="max-w-[1068px]">
          <p className="text-2xl lg:text-[40px] font-lora leading-normal">
            Depuis des millénaires, les plantes accompagnent l&apos;humanité
            pour soigner et apaiser. Aujourd&apos;hui, grâce à une expertise
            médicale et scientifique, je vous propose des solutions naturelles,
            sécurisées et adaptées à vos besoins, alliant tradition et modernité
            pour favoriser votre bien-être.
          </p>
          <div className="flex items-center gap-4 md:gap-8 mt-8">
            <a
              className="text-md font-bold px-6 py-3 text-[#448862] border border-[#448862] rounded-full button custom-ease"
              href="tel:0642424242"
            >
              <span className="relative z-10">Prendre rendez-vous</span>
            </a>
            <a className="text-md font-medium link" href="#qui-suis-je">
              Qui suis-je ?
            </a>
          </div>
        </div>
      </div>
      <Image
        className="mt-12 lg:mt-28 h-56 lg:h-[467px] rounded-3xl object-cover"
        src="/bg-phyto.jpg"
        alt="Phytothérapie et aromathérapie"
        width={1920}
        height={467}
        priority
      />
    </section>
  );
}
