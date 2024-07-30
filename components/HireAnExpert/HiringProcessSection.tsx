import React from "react";
import { ServiceBlockType } from "@/src/types/ServiceBlockTypes";
import ArrowRightIcon from "../SVG/ArrowRightIcon";
import { splitTitle } from "@/src/utilities/splitTitle";

type HiringProcessSectionProps = {
  hiringProcessData: ServiceBlockType;
};
function HiringProcessSection({
  hiringProcessData,
}: HiringProcessSectionProps) {
  const { titleWithoutLastWord, lastWord } = splitTitle(
    hiringProcessData.title
  );
  return (
    <div className="container pb-16 flex flex-col gap-4 items-center">
      <div className="flex flex-col text-center gap-6  max-w-3xl">
        <h1 className="text-primary">
          {titleWithoutLastWord}
          <span className="text-lightDark"> {lastWord}</span>
        </h1>
        <p className="text-lightDark">{hiringProcessData.description}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
        <div className="absolute top-[17%] left-[-5%] hidden lg:block">
          <ArrowRightIcon />
        </div>
        {hiringProcessData?.items.map((item, index) => (
          <div
            key={item?.id}
            className="flex flex-col gap-4 items-center text-center text-lightDark relative"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary text-white my-8">
              <h1>{index + 1}</h1>
              <div
                className={`absolute hidden lg:block ${
                  index <= 1 ? "right-[-27%]" : "right-[-15%]"
                }`}
              >
                <ArrowRightIcon color={index <= 1 ? "#20C897" : "#00000033"} />
              </div>
            </div>
            <h3>{item?.title}</h3>
            <h5 className="font-normal max-w-sm">{item?.description}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HiringProcessSection;
