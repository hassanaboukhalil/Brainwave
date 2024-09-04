import { roadmap } from "@/constants/roadmap";
import HeaderSection from "./layout/HeaderSection";
import Section from "./layout/Section";
import RoadmapCard from "./RoadmapCard";
import { Button } from "./ui/button";

const Roadmap = () => {
  return (
    <Section className="bg-gradient-to-b from-color-8 via-color-7 to-color-8 from-10% via-60% to-90%">
      <p className="uppercase text-xs text-txtColor-2">
        [ ready to get started ]
      </p>
      <HeaderSection className="pt-4">What we&#39;re working on</HeaderSection>
      <div className="flex flex-col pt-9 gap-6">
        {roadmap.map((item) => {
          return <RoadmapCard key={item.id} item={item} />;
        })}
      </div>

      <div className="w-full flex justify-center">
        <Button className="mt-9 py-4" variant="outline">
          Our Roadmap
        </Button>
      </div>
    </Section>
  );
};
export default Roadmap;
