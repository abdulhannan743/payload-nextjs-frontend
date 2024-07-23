import React from "react";
import DottedLine from "../ui/DottedLine";
import { ServiceBlockType } from "@/src/types/ServiceBlockTypes";
import ServicesSection from "../Home/ServicesSection";
import { AboutLayoutItemType } from "@/src/types/AboutUsTypes";

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
    <div>
      <div className="hidden container py-16 md:flex gap-28">
        <div className="flex flex-col gap-4 items-start w-1/2">
          <h2 className="text-4xl font-bold text-lightDark">
            {sectionData?.title}
          </h2>
          <DottedLine />
          <p className="text-lg text-gray">{sectionData?.description}</p>
        </div>
        <div className="w-1/2 flex flex-col gap-4 h-[500px] lg:h-[410px] overflow-y-auto p-1 hide_scrollbar">
          {sectionData?.items?.map((item) => (
            <div
              key={item.id}
              className="bg-white py-4 px-8 rounded-lg flex gap-4 items-start"
              style={{ boxShadow: "0px 0px 5px 1px #0000001A" }}
            >
              <img
                src={`/assets/icons/${item.iconName}.svg`}
                alt={`${item.iconName} icon`}
              />
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray text-wrap">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <ServicesSection
          serviceData={sectionData}
          isBackgroundWhite={true}
          isContentCentered={false}
        />
      </div>
    </div>
  );
}

export default ServiceInfoSection;
