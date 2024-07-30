import Image from "next/image";
import React from "react";
import type {
  AboutLayoutItemType,
  TeamSectionLayout,
} from "@/src/types/AboutUsTypes";
import DottedLine from "../ui/DottedLine";

type OurCultureSectionProps = {
  OurCultureSectionData: AboutLayoutItemType | TeamSectionLayout | undefined;
};

function isOurCultureSectionLayout(
  data: AboutLayoutItemType | TeamSectionLayout | undefined
): data is TeamSectionLayout {
  return (data as TeamSectionLayout)?.content !== undefined;
}

const OurCultureSection = ({
  OurCultureSectionData,
}: OurCultureSectionProps) => {
  if (!isOurCultureSectionLayout(OurCultureSectionData)) {
    return null;
  }

  return (
    <div className="w-full mt-16">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[#1D2746] mb-3">
          {OurCultureSectionData?.heading}
        </h2>
        <DottedLine />
      </div>
      <div className="w-full mt-8 lg:mt-10">
        <div className="w-full lg:h-80 grid grid-cols-3 md:grid-cols-5 gap-0 place-items-center bg-white overflow-hidden">
          {OurCultureSectionData?.content.map((items, index) => (
            <div
              key={items.id}
              className={`${
                index >= 3 ? "hidden md:block" : ""
              } [&:nth-child(odd)]:origin-right [&:nth-child(even)]:origin-right [&:nth-child(odd)]:-rotate-6 [&:nth-child(even)]:rotate-6`}
            >
              <Image
                src={items.image.url}
                alt={items.image.alt}
                width={500}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCultureSection;
