import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import Image from "next/image";
import React from "react";
import vector from "../../public/Vector.png";
import dots from "../../public/Dots.png";
import dotSmall from "../../public/dots-small.svg.png";

type AboutDataProps = {
  AboutCompanyData: AboutLayoutItemType | undefined;
};

const AboutCompany = ({ AboutCompanyData }: AboutDataProps) => {
  return (
    <div className="container flex flex-row items-start pt-20 mt-8 px-28 justify-between w-full">
      <div className="absolute -left-60 top-2/3 z-[-10]">
        <Image src={vector} alt="vector" />
      </div>

      <Image
        src={dotSmall}
        alt="small dots"
        className="absolute -bottom-28 left-64"
      />
      <div className="h-full ml-16 w-2/4">
        <div className="relative flex justify-center h-full ">
          <div className="absolute left-16 top-0 h-full w-11 rounded-t-lg bg-primary z-[-1]"></div>
          <Image
            className="object-cover z-10"
            src={AboutCompanyData?.image?.url || ""}
            height={AboutCompanyData?.image?.height}
            width={AboutCompanyData?.image?.width}
            alt={AboutCompanyData?.image?.alt || ""}
          />
        </div>
        <p className="border rounded-md text-2xl px-12 py-10 text-center text-gray w-full ">
          <span className="font-bold text-5xl text-secondary">One </span> Decade
          Working Experience
        </p>
      </div>
      <div className="flex flex-col w-2/4 z-10 ml-16">
        <h2 className="font-bold text-2xl md:text-4xl text-[#1D2746] mb-4">
          {AboutCompanyData?.heading}
        </h2>

        <div className="whitespace-pre-wrap text-[15px] text-gray mt-8">
          {AboutCompanyData?.text}
        </div>
        <div className="mt-8 text-gray">
          <p className="text-secondary font-bold text-lg mb-2">
            Muhammad Irshad
          </p>
          <p className="text-sm">Chief Executive Officer</p>
        </div>
        <Image
          src={dots}
          alt="dots"
          className="relative inset-x-96 -inset-y-28"
        />
      </div>
    </div>
  );
};

export default AboutCompany;
