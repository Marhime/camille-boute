"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function BackgroundImage() {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      // gsap code here...
      gsap.to(".image-parallax", {
        backgroundPosition: "50% 40%",
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "20% bottom",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      });
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="h-56 lg:h-[467px] mt-12 lg:mt-28 rounded-3xl overflow-hidden"
    >
      <div className="w-full h-full image-parallax"></div>
    </div>
  );
}
