import { ReactNode } from "react";

type ISectionProps = {
  className?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => {
  return (
    <section className={`my-container ${props.className}`}>
      {props.children}
    </section>
  );
};
export default Section;
