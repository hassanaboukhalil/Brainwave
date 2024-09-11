import Image from "next/image";
import HeaderSection from "./layout/HeaderSection";
import Section from "./layout/Section";
import check from "@/assets/collaborations/check.svg";
import { collaborationFeatures } from "@/constants/collaborationFeatures";
import { Button } from "./ui/button";
import CollarborationsCircle from "./CollarborationsCircle";

const Collaboration = () => {
  return (
    <Section className="flex flex-col lg:flex-row bg-color-8">
      <div>
        <HeaderSection className="w-[70%] lg:text-left">
          AI Chat App for seamless collaboration
        </HeaderSection>
        <div>
          {collaborationFeatures.map((feature) => {
            return (
              <div className="flex flex-col pt-9" key={feature.id}>
                <p className="flex gap-4">
                  <Image src={check} alt="check" />
                  <span className="text-white">{feature.title}</span>
                </p>
                {feature.text ? (
                  <p className="pt-4 text-txtColor-3 body-2">{feature.text}</p>
                ) : null}
              </div>
            );
          })}
          <Button className="mt-9" variant="outline">
            Try it now
          </Button>
        </div>
      </div>
      <div className="pt-4">
        <p className="text-txtColor-3 body-2">
          With smart automation and top-notch security, it&#39;s the perfect
          solution for teams looking to work smarter.
        </p>
        <CollarborationsCircle className="md:mt-12 lg:mt-16" />
      </div>
    </Section>
  );
};
export default Collaboration;
