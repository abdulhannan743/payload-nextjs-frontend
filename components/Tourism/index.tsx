import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import TwoColumnSection from "../sharedComponents/TwoColumnSection";
import WhyAllZoneSection from "../Home/WhyAllZoneSection";
import TechnologyStack from "../ui-ux/TechnologyStack";

type TourismProps = {
  tourismPageData: AboutLayoutItemType[];
};

const Tourism = ({ tourismPageData }: TourismProps) => {
  const HeroSectionData = tourismPageData.find(
    (item) => item.blockName === "Hero"
  );

  const TravellingAppBenefitsData = tourismPageData.find(
    (item) => item.blockName === "Travelling App Benefits"
  );

  const TourismOutsourcingData = tourismPageData.find(
    (item) => item.blockName === "Key-Factors to Outsource Tourism"
  );

  const TourismAppTypes = tourismPageData.find(
    (item) => item.blockName === "Types of Our Tourism and Travel App"
  );

  const ProcessBuildingAppData: any = tourismPageData.find(
    (item) => item.blockName === "Process of Building Apps for the Tourism"
  );

  const TechnologiesForTravelAppData: any = tourismPageData.find(
    (item) => item.blockName === "Technologies for Business Travel App"
  );

  const twoColumnData: any = [
    TravellingAppBenefitsData,
    TourismOutsourcingData,
    TourismAppTypes,
  ];

  return (
    <>
      <HeroSection heroSectionData={HeroSectionData} />
      <TwoColumnSection twoColumnSectionData={twoColumnData} />
      <WhyAllZoneSection whyAllzoneData={ProcessBuildingAppData} />
      <TechnologyStack technologySectionData={TechnologiesForTravelAppData} />
    </>
  );
};

export default Tourism;
