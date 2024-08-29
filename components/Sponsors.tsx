import Image from "next/image";
import Section from "./layout/Section";
import image1 from "../assets/sponsers/sentry-dark.png";
import image2 from "../assets/sponsers/better-stack-dark.png";
import image3 from "../assets/sponsers/nextlessjs.png";
import image4 from "../assets/sponsers/clerk.png";
import image5 from "../assets/sponsers/turso.png";
import Link from "next/link";

const Sponsors = () => (
  <Section className="py-4">
    <div className="grid grid-cols-3 lg:grid-cols-6 justify-center items-center gap-9">
      <div className="flex items-center">
        <Link href="https://www.facebook.com/" target="_blank">
          <Image src={image1} alt="Sentry" />
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="https://www.facebook.com/" target="_blank">
          <Image src={image2} alt="Better Stack" />
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="https://www.facebook.com/">
          <Image
            src={image3}
            alt="React SaaS Boilerplate Next.js"
            width={200}
            height={180}
          />
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="https://www.facebook.com/" target="_blank">
          <Image
            src={image4}
            alt="Clerk – Authentication & User Management for Next.js"
            width={200}
            height={180}
          />
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="https://www.facebook.com/" target="_blank">
          <Image
            src={image5}
            alt="SQLite Developer Experience"
            width={200}
            height={180}
          />
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="https://www.facebook.com/" target="_blank">
          <Image
            src={image5}
            alt="SQLite Developer Experience"
            width={200}
            height={180}
          />
        </Link>
      </div>
    </div>
  </Section>
);

export { Sponsors };
