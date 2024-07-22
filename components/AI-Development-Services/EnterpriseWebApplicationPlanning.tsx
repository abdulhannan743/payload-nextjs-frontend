import Image from "next/image";
import React from "react";
import Line1 from "../../public/Line1.png";
import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import type { AIDevelopmentServicesTypes } from "@/src/types/AIDevelopmentServicesTypes";
import DottedLine from "../ui/DottedLine";

type EnterprisePlanningSectionProps = {
  planningSectionData:
    | AboutLayoutItemType
    | AIDevelopmentServicesTypes
    | undefined;
};

function isAIEnterprisePlanningLayout(
  data: AboutLayoutItemType | AIDevelopmentServicesTypes | undefined
): data is AIDevelopmentServicesTypes {
  return (data as AIDevelopmentServicesTypes)?.layout !== undefined;
}

const EnterprisePlanning = ({
  planningSectionData,
}: EnterprisePlanningSectionProps) => {
  if (!isAIEnterprisePlanningLayout(planningSectionData)) {
    return null;
  }

  return (
    <div className="w-full bg-[#0D2234]">
      <div className="container relative py-8 px-8">
        <div className="lg:w-2/3 w-full pt-8 flex flex-col items-start justify-between">
          <h2 className="lg:text-4xl text-3xl font-bold text-white leading-normal mb-3">
            {planningSectionData?.heading}
          </h2>
          <DottedLine />
          <p className="text-lg text-white mt-3 ">
            {planningSectionData?.text}
          </p>
        </div>

        {planningSectionData?.layout.map((item, index: number) => (
          <div key={index} className="relative">
            <div
              className={`flex lg:flex-row flex-col-reverse w-full lg:mb-20 mb-10 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse flex-col" : ""
              }`}
            >
              <div className="lg:w-[489px] w-96 md:w-4/5 bg-[#0F333E] flex flex-col justify-start items-center align-middle rounded-lg px-5 lg:mx-28 mx-0 my-auto">
                <div className="py-8 px-6">
                  <Image
                    src={item.icon.url || ""}
                    alt={item.icon.alt || ""}
                    width={60}
                    height={60}
                  />

                  <h2 className="text-secondary font-bold text-lg mt-4">
                    {item.heading}
                  </h2>
                  <p className="text-white text-sm mt-2">{item.text}</p>
                </div>
              </div>
              <div className="lg:w-1/2 w-3/4">
                <Image
                  src={item.image.url}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                />
              </div>
            </div>
            {index < planningSectionData.layout.length - 1 ? (
              <Image
                src={Line1}
                alt="line"
                className={`absolute top-full translate-y-[-25%] left-1/2 transform -translate-x-1/2 hidden lg:flex ${
                  index % 2 !== 0 ? "scale-x-[-1] " : ""
                }`}
                width={300}
              />
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnterprisePlanning;
