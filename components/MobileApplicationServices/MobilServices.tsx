import React from "react";
import DottedLine from "../ui/DottedLine";
import RenderDescription from "../sharedComponents/RenderDescription";
import { ServiceBlockType } from "@/src/types/ServiceBlockTypes";

type MobilServicesProps = {
  mobilServicesData: ServiceBlockType;
};

function MobilServices({ mobilServicesData }: MobilServicesProps) {
  return (
    <div className="container py-16">
      <div className="flex flex-col gap-4 text-center max-w-5xl mx-auto mb-8">
        <h2 className="text-4xl font-bold text-lightDark">
          {mobilServicesData?.title}
        </h2>
        <DottedLine />
        <p className="text-lg text-gray">{mobilServicesData?.description}</p>
      </div>
      {mobilServicesData?.items?.map((item, index) => (
        <div key={item?.id}>
          <div
            className={`flex gap-4 flex-col md:flex-row md:${
              index % 2 !== 0 && "flex-row-reverse"
            } items-center`}
          >
            <div className="w-full md:w-1/2">
              <img src={item?.image?.url} alt={item?.image?.alt} />
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-lightDark">
                {item?.title}
              </h2>
              {item?.description && (
                <RenderDescription description={item?.description} />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MobilServices;
