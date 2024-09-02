import Image from "next/image";
import Section from "./layout/Section";
import { sponsers } from "@/constants/sponsers";

const Sponsors = () => (
  <Section className="hidden lg:flex flex-col gap-16 items-center">
    <p className="body-2 text-txtColor-1">
      Helping people create beautiful content at
    </p>
    <div className="w-full lg:grid lg:grid-cols-5 justify-between">
      {sponsers.map((sponser) => {
        return (
          <div key={sponser.id}>
            <Image src={sponser.img} alt={sponser.alt} color="white" />
          </div>
        );
      })}
    </div>
  </Section>
);

export { Sponsors };
