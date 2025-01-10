import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PhytoSection() {
  return (
    <section
      id="phyto"
      className="py-12 lg:pt-36 lg:pb-24 bg-white rounded-3xl w-full relative max-lg:space-y-12"
    >
      <div className="h-8 absolute top-0 w-full bg-background -z-10" />
      <Image
        src={"/plant-1.svg"}
        alt="Plante médicinale"
        width={0}
        height={0}
        className="z-0 hidden lg:block -translate-x-16 lg:absolute lg:top-0 lg:right-0 lg:w-auto lg:h-[740px] lg:transform lg:-translate-y-[116px] xl:-translate-x-28"
        priority
      />
      <div className="mx-auto px-6 lg:px-14 relative">
        <h2 className="font-lora text-2xl lg:text-5xl max-w-[576px]">
          Intégrer la phytothérapie à votre quotidien
        </h2>
        <p className="text-lg lg:text-xl mt-8 max-w-[738px] font-light">
          La phytothérapie propose une large gamme de solutions adaptées à vos
          besoins. Que ce soit sous forme{" "}
          <span className="font-medium">
            d&apos;extraits, d&apos;huiles essentielles, de tisanes ou
            d&apos;hydrolats
          </span>
          , chaque méthode offre des bienfaits uniques. Ces remèdes naturels
          viennent compléter efficacement vos traitements habituels, pour un
          bien-être global et harmonieux.
        </p>
      </div>
      <div className="w-full px-6 lg:px-14 lg:mt-[356px] relative">
        <div className="lg:ml-auto w-fit">
          <h2 className="font-lora text-2xl lg:text-5xl max-w-[576px]">
            L&apos;importance d&apos;un suivi médical.
          </h2>
          <p className="text-lg lg:text-xl mt-8 max-w-[738px] font-light">
            Cependant, pour une utilisation optimale et sécurisée, il est
            indispensable qu&apos;un{" "}
            <span className="font-medium">praticien diplômé d&apos;État</span>{" "}
            puisse étudier votre terrain, vos traitements et vos antécédents.
            Cela permet de s&apos;assurer qu&apos;il n&apos;y ait aucune
            interaction indésirable avec vos traitements en cours.
          </p>
        </div>
        <Image
          src={"/plant-2.svg"}
          alt="Plante médicinale"
          width={0}
          height={0}
          className="z-0 hidden lg:block lg:absolute translate-x-16 lg:top-0 lg:left-0 lg:w-auto lg:h-[550px] lg:transform lg:-translate-y-[116px] xl:translate-x-28"
          priority
        />
      </div>
      <div className="mx-auto px-6 lg:px-14 lg:mt-[356px]">
        <h2 className="font-lora text-2xl lg:text-5xl max-w-[576px]">
          Sécurité des plantes médicinales
        </h2>
        <p className="text-lg lg:text-xl mt-8 max-w-[738px] font-light">
          Les plantes et leurs principes actifs sont recensés, testés, puis
          validés par les sociétés savantes françaises et européennes, telles
          que l&apos;
          <span className="font-medium">Agence Européenne du Médicament</span>.
          Cette validation scientifique garantit leur efficacité et leur
          sécurité lorsqu&apos;elles sont utilisées correctement.
        </p>
      </div>
      <Image
        src={"/plant-3.svg"}
        alt="Plante médicinale"
        width={0}
        height={0}
        className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 lg:w-auto lg:h-[550px] lg:transform lg:-translate-x-32 z-0"
        priority
      />
      <div className="mt-40 flex justify-center">
        <Link
          className="inline-block text-md font-semibold px-6 py-3 text-[#448862] border border-[#448862] rounded-full"
          href="tel:0642424242"
        >
          Prendre rendez-vous
        </Link>
      </div>
    </section>
  );
}
