// src/sharedComponents/DataAnalyticsOverview.tsx
import React from "react";
import DottedLine from "../ui/DottedLine";
import RenderDescription from "./RenderDescription";
import { DataAnalyticsOverviewType } from "@/src/types/DataAnalyticsTypes";

type analyticsDataProps = {
  analyticsData: DataAnalyticsOverviewType;
};

function DataAnalyticsOverview({ analyticsData }: analyticsDataProps) {
  const ChangeDescriptionStyle =
    analyticsData?.blockName === "Why IoT Application" ? true : false;

  return (
    <div className="container flex flex-col gap-5 lg:gap-0 lg:flex-row  items-start justify-between">
      <div className="w-full lg:w-1/3 xl:w-1/2 flex justify-center items-center">
        <img
          src={analyticsData?.Image?.url}
          alt={analyticsData?.Image?.alt}
          className={`${
            ChangeDescriptionStyle ? "w-full h-full" : "w-[450px] h-[600px]"
          }`}
        />
      </div>
      <div className="flex flex-col gap-8 w-full lg:w-1/2 items-baseline">
        <h2 className="text-4xl font-bold text-lightDark">
          {analyticsData.heading}
        </h2>
        <DottedLine />

        <div
          className={`whitespace-pre-wrap ${
            ChangeDescriptionStyle
              ? "text-base font-semibold"
              : "text-xl font-normal"
          } text-gray`}
        >
          {ChangeDescriptionStyle ? (
            analyticsData.text
          ) : (
            <RenderDescription description={analyticsData.text} />
          )}
        </div>
      </div>
    </div>
  );
}

export default DataAnalyticsOverview;
