import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import { Hero } from "@/components/Hero";
import HowToUse from "@/components/HowToUse";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import { Sponsors } from "@/components/Sponsors";

export const metadata = {
  title: "Brainwave",
  description: "Explore the Possibilities of AI Chatting with Brainwave",
  openGraph: {
    title: "Brainwave",
    description: "Explore the Possibilities of AI Chatting with Brainwave",
    url: "https://brainwave-ai-project.vercel.app/",
    siteName: "Next.js",
    images: [
      {
        url: "https://brainwave-ai-project.vercel.app/assets/logo.svg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://brainwave-ai-project.vercel.app/assets/logo.svg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Brainwave Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function Home() {
  return (
    <div className="antialiased">
      <Hero />
      <Sponsors />
      <Benefits />
      <Collaboration />
      <HowToUse />
      <Pricing />
      <Roadmap />
    </div>
  );
}
