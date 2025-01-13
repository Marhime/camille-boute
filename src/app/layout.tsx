import type { Metadata } from "next";
import { Roboto, Lora } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phytothérapie et Aromathérapie | Praticienne diplômée à Aubenas",
  description:
    "Découvrez les bienfaits de la phytothérapie et de l'aromathérapie avec une praticienne diplômée en médecine naturelle, experte en solutions sur-mesure à Aubenas.",
  keywords:
    "phytothérapie, aromathérapie, médecine naturelle, santé holistique, bien-être, praticienne diplômée, plantes médicinales, solutions sur-mesure, Aubenas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${lora.variable} ${roboto.variable} antialiased bg-background`}
      >
        <div className="bg-body"></div>
        <Navigation />
        {children}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center bg-[#edeae1] justify-center p-3 bg-background">
          <p>
            Site réalisé par{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:contact@marhi.me"
              className="underline underline-offset-4"
            >
              Maxime Joyes
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
