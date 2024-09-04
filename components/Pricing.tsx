import { pricing } from "@/constants/pricing";
import HeaderSection from "./layout/HeaderSection";
import Section from "./layout/Section";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <Section className="bg-gradient-to-b from-color-8 via-color-7 to-color-8 from-10% via-60% to-90%">
      <p className="uppercase text-xs text-txtColor-2">
        [ get started with brainwave ]
      </p>
      <HeaderSection className="pt-4">Pay once, use forever</HeaderSection>
      <div className="flex flex-col pt-9 gap-6">
        {pricing.map((item) => {
          return <PricingCard key={item.id} item={item} />;
        })}
      </div>
    </Section>
  );
};
export default Pricing;
