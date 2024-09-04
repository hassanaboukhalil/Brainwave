import Image from "next/image";
import { Button } from "./ui/button";
import check from "@/assets/collaborations/check.svg";

const PricingCard = ({ item }: any) => {
  return (
    <div className="rounded-[2rem] border border-color-9 px-4 py-9 flex flex-col h-[40rem] text-white bg-color-8">
      <h4 className={`h3 text-${item.titleColor}`}>{item.title}</h4>
      <p className="body-2 text-txtColor-2 pt-4">{item.description}</p>
      {item.price ? (
        <div className="flex items-center pt-5">
          <span className="h3 text-white font-semibold">$</span>
          <span className="text-[5.5rem] text-white">{item.price}</span>
        </div>
      ) : (
        <div className="flex items-center pt-6 opacity-0">
          <span className="h3 text-white font-semibold">$</span>
          <span className="text-[5.5rem]">dfdfdf</span>
        </div>
      )}
      <Button className="py-4" variant={item.buttonVariant}>
        {item.buttonText}
      </Button>
      <div className="pt-6 py-9">
        {item.features.map((feature: any) => {
          return (
            <p
              className="flex gap-4 py-4 border-t-[1px] border-[#2b273d]"
              key={feature.id}
            >
              <Image src={check} alt="check" />
              <span className="text-white">{feature.text}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default PricingCard;
