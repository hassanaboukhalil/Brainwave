import Link from "next/link";
import { Button } from "./ui/button";
import Section from "./layout/Section";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import robot from "@/assets/hero/robot.jpg";
import loading from "@/assets/hero/loading.png";
import { Cover } from "./ui/cover";

const Hero = () => (
  <section className="my-container bg-gradient-to-b from-color-8 via-color-7 to-color-8 from-40% via-60% to-99% pt-20 md:pt-20 md:from-30%">
    <div className="text-center">
      <h1 className="h1 mb-6">
        Explore the Possibilities <br /> of AI Chatting with{" "}
        <span className="text-color-1">
          <Cover className="text-color-1">Brainwave</Cover>
        </span>
      </h1>
      <div className="body-1 text-txtColor-1 mb-6 lg:mb-8 max-w-3xl mx-auto">
        <TextGenerateEffect
          words="Unleash the power of AI within Brainwave. Upgrade your productivity with
        Brainwave, the open AI chat app."
        />
      </div>
      <Button className="bg-white text-black btn">
        <Link href="#">GET STARTED</Link>
      </Button>
    </div>
    <ContainerScroll titleComponent={<></>}>
      <Image
        src={robot}
        alt="hero"
        height={500}
        width={1400}
        className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%] pointer-events-none select-none"
        draggable={false}
      />
      <div className="absolute bottom-[1%] md:bottom-[5%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[80%] lg:w-[50%] h-10 rounded-full flex items-center bg-color-8 text-white opacity-90 pt-7 pb-7 pl-6 gap-4">
        <Image className="w-6" src={loading} alt="loading" />
        <p>AI is generating</p>
      </div>
    </ContainerScroll>
  </section>
);

export { Hero };
