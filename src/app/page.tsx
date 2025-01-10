import { infoCards } from "../../data";
import Hero from "./components/Hero";
import InfoCard from "./components/InfoCard";
import PhytoSection from "./components/PhytoSection";
import TextSeparator from "./components/TextSeparator";
import WhoAmISection from "./components/WhoAmISection";

export default function Home() {
  return (
    <>
      <main>
        <div className="bg-background flex flex-col items-center sm:items-start">
          <Hero />
          <div className="grid lg:grid-cols-3 gap-6 px-6 lg:px-14">
            {infoCards.map((infoCard) => (
              <InfoCard key={infoCard.stat} {...infoCard} />
            ))}
          </div>
          <TextSeparator />
        </div>
        <PhytoSection />
        <div className="pb-20 lg:pb-[200px]"></div>
        <WhoAmISection />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center p-6 bg-background">
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
    </>
  );
}
