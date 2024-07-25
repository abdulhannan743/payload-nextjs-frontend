import React from "react";
// import HeroSection from "./HeroSection";
// import ServicesSection from "./ServicesSection";
import HeroSection from "../sharedComponents/HeroSection";
import { LayoutItemType } from "@/src/types/CommonTypes";
import ProcessSection from "./ProcessSection";
import TechnologyStack from "./TechnologyStack";
import { ServiceBlockType } from "@/src/types/ServiceBlockTypes";

interface HeroSectionProps {
  uiUxPageData: LayoutItemType[];
}

const UI_UX = ({ uiUxPageData }: HeroSectionProps) => {
  const heroSectionData = uiUxPageData?.find(
    (item: any) => item?.blockName === "Hero"
  );
  const processSectionData = uiUxPageData?.find(
    (item: any) => item?.blockName === "process"
  );
  const technologySectionData = uiUxPageData?.find(
    (item: any) => item?.blockName === "technology"
  );
  const customerSectionData: ServiceBlockType | undefined = uiUxPageData?.find(
    (item: any) => item?.blockName === "customer"
  ) as ServiceBlockType | undefined;
  return (
    <div>
      <HeroSection heroSectionData={heroSectionData} />
      <ProcessSection processSectionData={processSectionData} />
      <TechnologyStack technologySectionData={technologySectionData} />
    </div>
  );
};

export default UI_UX;
