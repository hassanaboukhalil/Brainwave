import { roadmap } from "@/constants/roadmap";
import HeaderSection from "./layout/HeaderSection";
import Section from "./layout/Section";
import RoadmapCard from "./RoadmapCard";
import { Button } from "./ui/button";

const Roadmap = () => {
  return (
    <Section
      className="bg-gradient-to-b from-color-8 via-color-7 to-color-8 from-5% via-60% to-95%"
      id="roadmap"
    >
      <p className="uppercase text-xs text-txtColor-2 md:text-center">
        [ ready to get started ]
      </p>
      <HeaderSection className="pt-4">What we&#39;re working on</HeaderSection>
      <div className="flex flex-col pt-9 gap-6 md:grid md:grid-cols-2">
        {roadmap.map((item) => {
          return <RoadmapCard key={item.id} item={item} />;
        })}
      </div>

      <div className="w-full flex justify-center md:pt-28">
        <Button className="mt-9 py-4" variant="outline">
          Our Roadmap
        </Button>
      </div>
    </Section>
  );
};
export default Roadmap;
