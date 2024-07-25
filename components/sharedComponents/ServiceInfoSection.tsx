import React from "react";
import DottedLine from "../ui/DottedLine";
import type { ServiceBlockType } from "@/src/types/ServiceBlockTypes";
import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";

type ServiceInfoSectionProps = {
  sectionData: ServiceBlockType | AboutLayoutItemType | undefined;
};

function isAIDevelopmentServicesLayout(
  data: AboutLayoutItemType | ServiceBlockType | undefined
): data is ServiceBlockType {
  return (data as ServiceBlockType)?.items !== undefined;
}

function ServiceInfoSection({ sectionData }: ServiceInfoSectionProps) {
  if (!isAIDevelopmentServicesLayout(sectionData)) {
    return null;
  }

  return (
    <div className="container py-8 flex flex-col lg:flex-row gap-8 lg:gap-24">
      <div className="flex flex-col gap-4 items-start w-full lg:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold text-lightDark">
          {sectionData?.title}
        </h2>
        <DottedLine />
        <p className="text-base md:text-lg text-gray">
          {sectionData?.description}
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4 h-auto md:h-[410px] overflow-y-auto p-1 hide_scrollbar">
        {sectionData?.items?.map((item) => (
          <div
            key={item.id}
            className="bg-white py-4 px-8 rounded-lg flex gap-4 items-start shadow-md"
          >
            <img
              src={item?.image?.url ?? `/assets/icons/${item.iconName}.svg`}
              alt={`${item.iconName} icon`}
            />
            <div>
              <h3 className="text-base md:text-lg font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray text-wrap">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceInfoSection;
