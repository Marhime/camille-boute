import Image from "next/image";
import React from "react";

export default function WhoAmISection() {
  return (
    <section
      id="qui-suis-je"
      className="py-12 lg:py-24 px-6 lg:px-14 bg-white rounded-t-3xl w-full relative"
    >
      <p className="text-xs uppercase font-bold text-gray-400 mb-4">
        Qui suis-je ?
      </p>
      <div className="mx-auto flex items-center flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-3/5">
          <h2 className="font-lora text-2xl lg:text-5xl max-w-[576px] mt-8 lg:mt-0">
            Camille Bouté
            <span className="block text-sm lg:text-xl">
              Phytothérapeute - Aromathérapeute
            </span>
          </h2>
          <div className="text-lg mt-8 lg:mt-16 max-w-[738px] font-light">
            <p>
              Diplômée de la faculté de pharmacie de Lyon, j&apos;ai approfondi
              ma passion pour la médecine naturelle en obtenant un{" "}
              <span className="font-medium">
                diplôme universitaire en Phytothérapie et Aromathérapie
              </span>
              , délivré par l&apos;un des centres les plus renommés en Europe.
            </p>
            <p className="mt-4 lg:mt-8">
              Cette spécialisation vient compléter une{" "}
              <span className="font-medium">
                formation médicale solide, couronnée par ma thèse en 2007
              </span>
              . Elle me permet aujourd&apos;hui d&apos;apporter une expertise
              éclairée et personnalisée pour répondre à vos besoins de santé. En
              tenant compte de vos antécédents, de vos traitements en cours et
              des interactions possibles avec les plantes, je m&apos;engage à
              vous offrir des{" "}
              <span className="font-medium">
                solutions sur-mesure, adaptées à votre bien-être global
              </span>
              .
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-2/5">
          <Image
            src={"/camille-presiozi-1.png"}
            alt="Camille Bouté"
            width={400}
            height={400}
            className="block w-60 h-60 lg:w-80 lg:h-80"
            priority
          />
        </div>
      </div>
    </section>
  );
}
