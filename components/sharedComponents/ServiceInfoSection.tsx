import React from "react";
import DottedLine from "../ui/DottedLine";
import { ServiceBlockType } from "@/src/types/ServiceBlockTypes";

type ServiceInfoSectionProps = {
  sectionData: ServiceBlockType;
};
function ServiceInfoSection({ sectionData }: ServiceInfoSectionProps) {
  return (
    <div className="container py-16 flex gap-28">
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
              src={item?.image?.url ?? `/assets/icons/${item.iconName}.svg`}
              alt={item?.image?.alt ?? `${item.iconName} icon`}
            />
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">
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
