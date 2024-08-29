"use client";
import Link from "next/link";
import { footerLinks } from "@/constants/footerLinks";
import { socialMedia } from "@/constants/socialMedia";
import Image from "next/image";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <section className="flex justify-center items-center my-container flex-col">
      <div
        className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}
      >
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <Image
            src={logo}
            alt="hoobank"
            className="mt-[1rem] w-[200px] lg:w-[266px] lg:h-[72.14px] object-contain"
          />
          <p
            className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]`}
          >
            Your Favorate AI chating App that has many awsome features.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-sky-500">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <Link key={link.name} href={link.link}>
                    <li
                      key={link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:underline cursor-pointer ${
                        index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                    >
                      {link.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#cbc3fc]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px]">
          Copyright Ⓒ 2024 Brainwave. All Rights Reserved.
        </p>

        <div className="flex flex-row mb-3 md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <Link href={social.link} key={social.id}>
              <Image
                src={social.icon}
                alt={social.id}
                className={`text-black w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Footer;
