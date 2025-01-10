import Image from "next/image";
import React from "react";

type Props = {
  stat: string;
  description: string;
  icon: string;
  alt: string;
};

export default function InfoCard({ stat, description, icon, alt }: Props) {
  return (
    <div className="p-6 md:pt-12 md:px-10 bg-[#ACCDB2] text-white rounded-3xl">
      <p className="text-4xl md:text-6xl font-medium mb-2 md:mb-8">{stat}</p>
      <p className="md:text-xl font-light">{description}</p>
      <Image
        className="mt-6 md:mt-[115px] h-8 md:h-14 w-auto"
        src={icon}
        width={0}
        height={0}
        alt={alt}
      />
    </div>
  );
}
