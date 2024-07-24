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
    <div className="container relative flex flex-col lg:flex-row items-center lg:items-start px-0 pt-4 mt-8 lg:px-12 justify-between lg:justify-around lg:w-full lg:mx-auto">
      <div className="absolute -left-72 -top-24 md:-left-60 md:-top-60 lg:-left-[38%] lg:-top-56 -z-10">
        <Image
          src={vector}
          alt="vector"
          className="w-[550px] h-[600px] md:w-[750px] md:h-[800px] lg:w-full lg:h-full"
        />
      </div>

      <Image
        src={dotSmall}
        alt="small dots"
        className="absolute top-0 left-6 md:left-10 lg:-bottom-28 lg:left-12 -z-1"
      />
      <div className="lg:w-1/2 z-10 lg:items-center lg:flex lg:flex-col">
        <div className="relative flex flex-col items-center lg:items-center w-full lg:mt-8">
          <div className="absolute left-8 lg:left-40 lg:top-0 h-full w-11 rounded-t-lg bg-primary z-[-1]"></div>
          <Image
            className="object-cover z-10 w-64 md:80 lg:w-96"
            src={AboutCompanyData?.image?.url || ""}
            height={AboutCompanyData?.image?.height}
            width={AboutCompanyData?.image?.width}
            alt={AboutCompanyData?.image?.alt || ""}
          />
        </div>
        <div className="w-72 md:w-80 lg:w-[440px] border rounded-md lg:text-2xl text-base bg-white lg:px-3 lg:py-10 py-6 text-center text-gray z-10 ">
          <span className="font-bold text-3xl lg:text-4xl text-secondary mr-2">
            One
          </span>
          Decade Working Experience
        </div>
      </div>
      <Image
        src={dots}
        alt="dots"
        className="absolute right-3 top-64 md:right-10 lg:top-[85%] -z-10"
      />

      <div className="container flex flex-col text-center lg:text-start mt-8 lg:w-1/2 z-10">
        <h2 className="font-bold text-3xl lg:text-4xl text-[#1D2746] mb-4">
          {AboutCompanyData?.heading}
        </h2>

        <div className="whitespace-pre-wrap text-sm text-gray lg:mt-8">
          {AboutCompanyData?.text}
        </div>
        <div className="mt-4 lg:mt-8 text-gray">
          <p className="text-secondary font-bold text-lg mb-2">
            Muhammad Irshad
          </p>
          <p className="text-sm">Chief Executive Officer</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
