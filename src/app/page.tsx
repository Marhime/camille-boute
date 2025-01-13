import { infoCards } from "../../data";
import Hero from "./components/Hero";
import InfoCard from "./components/InfoCard";
import PhytoSection from "./components/PhytoSection";
import TextSeparator from "./components/TextSeparator";
import WhoAmISection from "./components/WhoAmISection";

export default function Home() {
  return (
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
  );
}
