import { pricing } from "@/constants/pricing";
import HeaderSection from "./layout/HeaderSection";
import Section from "./layout/Section";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <Section
      className="bg-gradient-to-b from-color-8 via-color-7 to-color-8 from-5% via-60% to-90% lg:from-20% lg:to-95%"
      id="pricing"
    >
      <p className="uppercase text-xs text-txtColor-2 md:text-center">
        [ get started with brainwave ]
      </p>
      <HeaderSection className="pt-4">Pay once, use forever</HeaderSection>
      <div className="flex flex-col pt-9 gap-6 lg:flex-row">
        {pricing.map((item) => {
          return <PricingCard key={item.id} item={item} />;
        })}
      </div>
    </Section>
  );
};
export default Pricing;
