"use client";
// Navigation component
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          setMenuOpen(false);
        }
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleRedirect = (anchor: string) => {
    setMenuOpen(false);
    redirect(`#${anchor}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 xl:px-6 bg-background z-20 xl:rounded-b-3xl">
      <Link className="flex flex-col" href="/">
        <h1 className="text-[#448862] text-2xl font-lora font-bold leading-none">
          Camille Bouté
        </h1>
        <h2 className="text-sm text-[#2a2a2a]">
          Phytothérapeute - Aromathérapeute
        </h2>
      </Link>
      <ul className="hidden gap-6 text-[#2a2a2a] md:flex">
        <li>
          <Link className="text-md font-medium link" href="#phyto">
            Phytothérapie
          </Link>
        </li>
        <li>
          <Link className="text-md font-medium link" href="#qui-suis-je">
            Qui suis-je ?
          </Link>
        </li>
        <li>
          <Link
            className="text-md font-semibold px-6 py-3 text-[#448862] border border-[#448862] rounded-full button"
            href="tel:0782281827"
          >
            <span className="relative z-10">Prendre rendez-vous</span>
          </Link>
        </li>
      </ul>
      {/* mobile only */}
      <div className="md:hidden">
        <button
          className="text-[#2a2a2a] focus:outline-none"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden h-screen w-screen bg-background fixed inset-0 z-30 p-6 custom-ease ${
          menuOpen ? "open-menu" : "close-menu"
        }`}
      >
        <div className="flex justify-between items-center">
          <Link className="flex flex-col" href="/">
            <h1 className="text-[#2a2a2a] text-2xl font-bold">Camille Bouté</h1>
            <h2 className="text-sm text-[#448862]">
              Phytothérapeute - Aromathérapeute
            </h2>
          </Link>
          <button
            className="text-[#2a2a2a] focus:outline-none"
            aria-label="Fermer le menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/
              2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="gap-12 text-[#2a2a2a] flex flex-col items-center justify-center h-full">
          <li>
            <a
              className="text-2xl font-medium"
              onClick={() => handleRedirect("phyto")}
            >
              Phytothérapie
            </a>
          </li>
          <li>
            <a
              className="text-2xl font-medium"
              onClick={() => handleRedirect("qui-suis-je")}
            >
              Qui suis-je ?
            </a>
          </li>
          <li>
            <Link
              className="text-2xl font-semibold px-6 py-3 text-[#448862] border border-[#448862] rounded-full"
              href="tel:0782281827"
            >
              Prendre rendez-vous
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
