import check from "@/assets/roadmap/check.svg";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";

const RoadmapCard = ({ item }: any) => {
  return (
    <div className="rounded-[2rem] border border-color-9 py-5 flex flex-col text-white bg-color-8">
      <div className="flex justify-between px-8 items-center">
        <span className="body-2 text-txtColor-2">
          {"[ " + item.date + " ]"}
        </span>
        <p className="flex px-4 py-[2px] bg-white gap-4 rounded-md">
          {item.status === "done" ? (
            <>
              <Image src={check} alt="check" />
              <span className="uppercase text-black">{item.status}</span>
            </>
          ) : (
            <>
              <LoaderCircle color="black" />
              <span className="uppercase text-black">{item.status}</span>
            </>
          )}
        </p>
      </div>

      <div className="w-full">
        <Image
          className="w-full object-cover"
          src={item.imageUrl}
          alt="roadmap image"
        />
      </div>

      <div className="px-8 py-12">
        <h4 className="h3 text-txtColor-4">{item.title}</h4>
        <p className="body-2 text-txtColor-2 pt-6">{item.text}</p>
      </div>
    </div>
  );
};
export default RoadmapCard;
