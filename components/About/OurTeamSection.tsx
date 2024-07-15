import Image from "next/image";
import React from "react";

import type {
  AboutLayoutItemType,
  TeamSectionLayout,
} from "@/src/types/AboutUsTypes";

type OurTeamProps = {
  TeamSectionData: AboutLayoutItemType | TeamSectionLayout | undefined;
};

function isTeamSectionLayout(
  data: AboutLayoutItemType | TeamSectionLayout | undefined
): data is TeamSectionLayout {
  return (data as TeamSectionLayout)?.content !== undefined;
}

const OurTeamSection = ({ TeamSectionData }: OurTeamProps) => {
  if (!isTeamSectionLayout(TeamSectionData)) {
    return null;
  }

  return (
    <div className="container mt-16 mb-14">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[#1D2746]">
          {TeamSectionData?.heading}
        </h2>
        <hr className="w-20 h-1 rounded-full bg-secondary mt-4" />
      </div>
      <div className="container mt-10">
        <div className="grid grid-cols-4 gap-10">
          {TeamSectionData?.content.map((content, index: number) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-72 h-72">
                <Image
                  src={content?.image.url || ""}
                  width={content?.image.width}
                  height={content?.image.height}
                  alt={content?.image.alt || ""}
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mt-4">
                {content?.heading}
              </h3>
              <p className="text-base text-secondary mt-1 font-medium">
                {content.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
