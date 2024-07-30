import React from "react";
import Image from "next/image";
import DottedLine from "../ui/DottedLine";
import type { LayoutItemType } from "@/src/types/CommonTypes";

interface technologySectionDataProps {
  technologySectionData?: LayoutItemType | undefined;
}
const TechnologyStack = ({
  technologySectionData,
}: technologySectionDataProps) => {
  return (
    <div className="max-w-[1060px] mx-auto py-5">
      <div className="text-2xl lg:text-4xl font-bold px-5 text-center">
        {technologySectionData?.heading}
      </div>
      <div className="my-3">
        <DottedLine />
      </div>
      <div className="text-center text-md lg:text-lg">
        {technologySectionData?.text}
      </div>
      {
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mt-5">
          {technologySectionData?.content.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[60px] h-[60px]">
                <Image
                  src={item.image?.url || ""}
                  alt={item.image?.alt || ""}
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <div className="text-center mt-3">{item.heading}</div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default TechnologyStack;
