// src/sharedComponents/DataAnalyticsOverview.tsx
import React from "react";
import Image from "next/image";
import DottedLine from "../ui/DottedLine";
import { DataAnalyticsOverviewType } from "@/src/types/DataAnalyticsTypes";
import RenderDescription from "./RenderDescription";
type analyticsDataProps = {
  analyticsData: DataAnalyticsOverviewType;
};

function DataAnalyticsOverview({ analyticsData }: analyticsDataProps) {
  return (
    <div className="container flex flex-col gap-12 md:flex-row  items-start py-8 justify-between">
      <div className="w-full md:w-1/3">
        <img src={analyticsData?.Image?.url} alt={analyticsData?.Image?.alt} />
      </div>
      <div className="flex flex-col gap-8 w-full md:w-2/3 items-baseline pr-32">
        <h2 className="text-4xl font-bold text-lightDark ">
          {analyticsData.heading}
        </h2>
        <DottedLine />
        <RenderDescription description={analyticsData.text} />
      </div>
    </div>
  );
}

export default DataAnalyticsOverview;
