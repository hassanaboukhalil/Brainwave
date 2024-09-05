import Image from "next/image";
import HeaderSection from "./layout/HeaderSection";
import Section from "./layout/Section";
import check from "@/assets/collaborations/check.svg";
import imgService1 from "@/assets/howToUse/service-1.png";
import imgService2 from "@/assets/howToUse/service-2.png";
import imgService3 from "@/assets/howToUse/service-3.png";
import loading from "@/assets/hero/loading.png";
import { FlipWords } from "./ui/flip-words";
import {
  brainwaveServicesIcons,
  photoFeatures,
  photoMsgsPrompts,
} from "@/constants/howToUse";
import { Play } from "lucide-react";
import { Separator } from "./ui/separator";

const HowToUse = () => {
  return (
    <Section
      className="bg-gradient-to-b from-color-8 via-color-7 to-color-8 from-10% via-60% to-90%"
      id="how-to-use"
    >
      <HeaderSection>Generative AI made for creators.</HeaderSection>
      <p className="body-2 text-txtColor-3 pt-4">
        Brainwave unlocks the potential of AI-powered applications
      </p>

      {/* all cardsssssss */}
      <div className="flex flex-col pt-9 gap-4">
        {/*  card 1 */}
        <div className="rounded-3xl h-[39rem] flex-center relative z-10 overflow-hidden bg-color-8 border border-color-9">
          <div className="absolute left-0 w-full h-full">
            <Image
              className="w-full h-full object-cover"
              src={imgService1}
              alt="service 1"
            />
          </div>

          <div className="px-6 z-20">
            <h4 className="h3 text-txtColor-4">Smartest AI</h4>
            <p className="body-2 text-txtColor-2 pt-6">
              Brainwave unlocks the potential of AI-powered applications
            </p>
            <div className="pt-6">
              {photoFeatures.map((feature) => {
                return (
                  <p
                    className="flex gap-4 py-4 border-t-1 border-color-9"
                    key={feature.id}
                  >
                    <Image src={check} alt="check" />
                    <span className="text-white">{feature.title}</span>
                  </p>
                );
              })}
            </div>
          </div>

          <div className="absolute bottom-1 md:bottom-[5%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[80%] lg:w-[50%] h-10 rounded-full flex items-center bg-color-8 text-white opacity-90 pt-7 pb-7 pl-6 gap-4 border border-color-9">
            <Image className="w-6" src={loading} alt="loading" />
            <p className="text-txtColor-4">AI is generating</p>
          </div>
        </div>
        {/*  end card 1 */}

        {/* card 2 and 3 */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/*  card 2 */}
          <div className="rounded-3xl h-[39rem] flex flex-col items-center justify-between relative z-10 overflow-hidden bg-color-8 border border-color-9 p-6">
            <div className="absolute left-0 top-0 w-full h-full opacity-40">
              <Image
                className="w-full h-full object-cover"
                src={imgService2}
                alt="service 2"
              />
            </div>

            <div className="p-6 body-2 font-semibold bg-black z-20 border border-color-9 rounded-bl-[7rem] rounded-tr-[7rem] rounded-tl-[5rem]">
              <FlipWords className="text-txtColor-4" words={photoMsgsPrompts} />
            </div>

            <div className="z-20 pb-12">
              <h4 className="h3 text-txtColor-4">Photo editing</h4>
              <p className="body-2 text-txtColor-2 pt-6">
                Automatically enhance your photos using our AI app&#39;s photo
                editing feature. Try it now!
              </p>
            </div>
          </div>
          {/*  end card 2 */}
          {/* ------------- */}

          {/* card 3 */}
          <div className="rounded-3xl h-[39rem] py-4 px-4 flex flex-col items-center justify-between overflow-hidden bg-color-8 border border-color-9">
            <div className="px-4 py-12">
              <h4 className="h3 text-txtColor-4">Video generation</h4>
              <p className="body-2 text-txtColor-2 pt-6">
                The world&#39;s most powerful AI photo and video art generation
                engine. What will you create?
              </p>
              <div className="pt-6 flex w-full justify-between">
                {brainwaveServicesIcons.map((icon) => {
                  return <Image key={icon.id} src={icon.src} alt="icon" />;
                })}
              </div>
            </div>

            <div className="h-[20rem] rounded-xl bg-black z-10 relative">
              <Image
                className="w-full h-full object-cover"
                src={imgService3}
                alt="service 3"
              />
              <div className="absolute bottom-4 w-full px-4 flex justify-between gap-2">
                <Play
                  fill="white"
                  width="30"
                  height="30"
                  className="border-white"
                />
                <div className="flex items-center w-full">
                  <Separator className="bg-color-1 w-1/2 h-[2px]" />
                  <Separator className="bg-white w-1/2 h-[2px]" />
                </div>
              </div>
            </div>
          </div>
          {/* end card 3 */}
        </div>
        {/* end of card 2 and 3 */}
      </div>
      {/* end of all cardsssssss */}
    </Section>
  );
};
export default HowToUse;
