import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import { Hero } from "@/components/Hero";
import HowToUse from "@/components/HowToUse";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import { Sponsors } from "@/components/Sponsors";

export const metadata = {
  title: "Home Page",
  description: "Home Page of my web application",
  openGraph: {
    title: "Home Page",
    description: "Home Page of my web application",
    url: "https://my-nextjs-template.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function Home() {
  return (
    <div className="text-gray-600 antialiased">
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
