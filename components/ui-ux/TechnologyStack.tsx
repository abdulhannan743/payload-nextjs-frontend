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
    <div className="container mx-auto my-16">
      <div className="w-full md:container text-2xl lg:text-4xl font-bold text-center text-lightDark">
        {technologySectionData?.heading}
      </div>
      <div className="my-3">
        <DottedLine />
      </div>
      <div className="w-full md:container text-center text-md lg:text-lg text-gray xl:px-16">
        {technologySectionData?.text}
      </div>
      {
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 gap-10 mt-10 ${
            technologySectionData?.content.length == 6 ? "md:grid-cols-3" : ""
          }`}
        >
          {technologySectionData?.content?.map((item, index) => (
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
