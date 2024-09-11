"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ThreeDCardDemoProps {
  title: string;
  text: string;
  icon: string;
  backgroundImg?: any;
}

export function ThreeDCardDemo({
  title,
  text,
  icon,
  backgroundImg,
}: ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var text-white w-[90%] md:w-auto z-10">
      <CardBody className="bg-[#0e0c15] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-96 h-auto p-6 border card">
        <CardItem translateZ="50" className="h4 z-20">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="body-2 max-w-sm mt-2 text-txtColor-2 z-20"
        >
          {text}
        </CardItem>
        {backgroundImg && (
          <div className="absolute h-full w-full top-0 left-0">
            <Image
              src={backgroundImg}
              // height="1000"
              // width="1000"
              className="opacity-20 object-cover w-full h-full card"
              alt="robot"
            />
          </div>
        )}
        <div className="flex justify-between items-center mt-20 z-20">
          {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem> */}
          <CardItem>
            <Image src={icon} alt="icon" />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal flex items-center cursor-pointer"
          >
            EXPLORE MORE <ChevronRight />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
