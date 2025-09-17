import Image from "next/image";
import Section from "./layout/Section";
import { sponsers } from "@/constants/sponsers";
import Link from "next/link";

const Sponsors = () => (
  <Section className="flex flex-col gap-16 items-center lg:py-[7rem] bg-gradient-to-b from-color-8 via-color-8 to-color-8 from-10% via-60% to-99%">
    <p className="body-2 text-txtColor-1">
      Helping people create beautiful content at
    </p>
    <div className="w-full flex justify-center items-center gap-12">
      {sponsers.map((sponser) => {
        return (
          <Link
            className="flex justify-center items-center gap-2"
            key={sponser.id}
            href={sponser.link ? sponser.link : ""}
          >
            <Image
              src={sponser.img}
              alt={sponser.alt}
              color="white"
              width={32}
              height={32}
            />
            <span>{sponser.name}</span>
          </Link>
        );
      })}
    </div>
  </Section>
);

export { Sponsors };
