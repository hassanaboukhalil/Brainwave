import Link from "next/link";
import { Button } from "./ui/button";
import Section from "./layout/Section";

const Hero = () => (
  <Section className="pt-20 pb-32">
    <div className="text-center">
      <h1 className="whitespace-pre-line text-5xl font-bold leading-normal">
        Explore the Possibilities of AI Chatting with Brainwave
      </h1>
      <div className="mb-16 mt-4 text-2xl">
        Unleash the power of AI within Brainwave. Upgrade your productivity with
        Brainwave, the open AI chat app.
      </div>
      <Button className="bg-sky-500 text-xl font-extrabold h-fit py-4 px-6">
        <Link href="#">GET STARTED</Link>
      </Button>
    </div>
  </Section>
);

export { Hero };
