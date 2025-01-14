import Image from "next/image";
import React from "react";

export default function TextSeparator() {
  return (
    <div className="flex items-center justify-center w-full px-6 py-12 lg:pt-36 lg:pb-52 lg:min-h-screen">
      <div className="max-w-[1068px] flex flex-col items-center justify-center">
        <Image
          className="h-[80px] md:h-[100px] w-auto"
          src="/fleur.svg"
          alt="Fleur"
          width={0}
          height={0}
          priority
        />
        <h2 className="font-lora text-2xl lg:text-5xl lg:leading-normal leading-normal mt-5 lg:mt-14 text-center">
          Découvrez comment la phytothérapie peut s&apos;intégrer à votre
          quotidien, en toute sécurité et en complément de vos besoins.
        </h2>
      </div>
    </div>
  );
}
