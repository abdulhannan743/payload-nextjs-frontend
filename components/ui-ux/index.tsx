import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import ProcessSection from "./ProcessSection";
import TechnologyStack from "./TechnologyStack";
import type { ServiceBlockType } from "@/src/types/ServiceBlockTypes";
import type { LayoutItemType } from "@/src/types/CommonTypes";

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
