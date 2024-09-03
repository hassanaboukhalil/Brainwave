import { ReactNode } from "react";

type ISectionProps = {
  className?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => {
  return (
    <section className={`my-container pt-20 md:pt-28 ${props.className}`}>
      {props.children}
    </section>
  );
};
export default Section;
