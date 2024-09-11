import brainwaveSymbol from "@/assets/brainwave-symbol.svg";
import curve1 from "@/assets/collaborations/curve-1.svg";
import curve2 from "@/assets/collaborations/curve-2.svg";
import { collabApps } from "@/constants/collabApps";
import Image from "next/image";

type ICollarborationsCircleProps = {
  className?: string;
};

const CollarborationsCircle = (props: ICollarborationsCircleProps) => {
  return (
    <div
      className={`relative left-1/2 flex w-[22rem] aspect-square border border-[#252134] rounded-full -translate-x-1/2 scale-75 md:scale-100 ${props.className}`}
    >
      <div className="flex w-60 aspect-square m-auto border border-[#252134] rounded-full">
        <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
          <div className="flex items-center justify-center w-full h-full bg-[#0E0C15] rounded-full">
            <Image
              src={brainwaveSymbol}
              width={48}
              height={48}
              alt="brainwave"
            />
          </div>
        </div>
      </div>

      <ul>
        {collabApps.map((app, i) => (
          <li
            key={app.id}
            className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
              i * 45
            }`}
          >
            <div
              className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-[#15131D] border border-n-1/15 rounded-xl -rotate-${
                i * 45
              } animate-pulse`}
            >
              <Image
                src={app.icon}
                alt={app.title}
                width={app.height}
                height={app.height}
                className="m-auto"
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10  pointer-events-none select-none xl:block">
        <Image src={curve1} width={522} height={182} alt="Curve 1" />
      </div>
      <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10  pointer-events-none select-none xl:block">
        <Image src={curve2} width={162} height={76} alt="Curve 2" />
      </div>
    </div>
  );
};
export default CollarborationsCircle;
