import React from "react";
import ScrollableContainer from "../ui/ScrollableContainer";
import { ServiceBlockType } from "@/src/types/ServiceBlockTypes";
import DottedLine from "../ui/DottedLine";
import Image from "next/image";

type ServicesProps = {
  serviceData: ServiceBlockType | undefined;
  isBackgroundWhite?: boolean;
  isContentCentered?: boolean;
  shouldScrollEnable?: boolean;
};

function ServicesSection({
  serviceData,
  isBackgroundWhite = false,
  isContentCentered = true,
  shouldScrollEnable = true,
}: ServicesProps) {
  return (
    <div
      className={`bg-${
        isBackgroundWhite ? "white" : "light-gray"
      } py-12 mt-10 md:mt-0`}
    >
      <div className="container mx-auto">
        <div
          className={`flex flex-col justify-center gap-6 mb-12 ${
            isContentCentered ? "items-center text-center" : "items-baseline"
          }`}
        >
          <h1 className="text-lightDark">{serviceData?.title}</h1>
          <DottedLine />
          <p className="text-gray max-w-4xl mx-auto">
            {serviceData?.description}
          </p>
        </div>
        <ScrollableContainer
          scrollAxis="x"
          shouldScrollEnable={shouldScrollEnable}
        >
          <div className="flex gap-8 p-1 pb-8">
            {serviceData?.items?.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 shadow-md rounded-lg min-w-[350px] max-w-[350px] mx-auto"
                style={{ boxShadow: "0px 0px 5px 1px #0000000D" }}
              >
                <Image
                  src={item?.image?.url ?? `/assets/icons/${item.iconName}.svg`}
                  alt={item?.image?.alt ?? `${item.iconName} icon`}
                  width={item?.image?.width ?? 50}
                  height={item?.image?.height ?? 50}
                  className="mb-3"
                />
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray text-wrap">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollableContainer>
      </div>
    </div>
  );
}

export default ServicesSection;
