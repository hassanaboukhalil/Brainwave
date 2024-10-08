import { benefits } from "@/constants/benefits";
import HeaderSection from "./layout/HeaderSection";
import Section from "./layout/Section";
import { ThreeDCardDemo } from "./ui/ThreeDCardDemo";

const Benefits = () => {
  return (
    <Section
      className="flex flex-col items-center bg-gradient-to-b from-color-8 via-color-7 to-color-8 from-5% via-60% to-95% md:pt-[7rem]"
      id="features"
    >
      <HeaderSection className="md:w-[70%] md:text-center">
        Chat Smarter, Not Harder with{" "}
        <span className="text-color-1">Brainwave</span>
      </HeaderSection>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 w-full justify-between lg:gap-0 lg:gap-y-12">
        {benefits.map((benefit) => {
          return (
            <ThreeDCardDemo
              key={benefit.id}
              title={benefit.title}
              text={benefit.text}
              icon={benefit.iconUrl}
              // backgroundImg={benefit.imageUrl}
            />
          );
        })}
      </div>
    </Section>
  );
};
export default Benefits;
