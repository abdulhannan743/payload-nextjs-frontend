import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import ProcessSection from "./ProcessSection";
import TechnologyStack from "./TechnologyStack";
import type { ServiceBlockType } from "@/src/types/ServiceBlockTypes";
import type { LayoutItemType } from "@/src/types/CommonTypes";
import ServiceInfoSection from "../sharedComponents/ServiceInfoSection";
import UiUxDesign from "./uiux-Design";
import AccordianSection from "../sharedComponents/AccordianSection";
import ServicesSection from "../Home/ServicesSection";

interface HeroSectionProps {
  uiUxPageData: LayoutItemType[];
}
const UI_UX = ({ uiUxPageData }: HeroSectionProps) => {
  const heroSectionData = uiUxPageData?.find(
    (item: any) => item?.blockName === "Hero"
  );
  const ServiceSectionData = uiUxPageData?.find(
    (item: any) => item?.blockName === "service"
  );
  const WhyChoseSectionData = uiUxPageData?.find(
    (item: any) => item?.blockName === "whychose"
  ) as ServiceBlockType | undefined;
  const processSectionData = uiUxPageData?.find(
    (item: any) => item?.blockName === "process"
  );
  const technologySectionData = uiUxPageData?.find(
    (item: any) => item?.blockName === "technology"
  );
  const customerSectionData: ServiceBlockType | undefined = uiUxPageData?.find(
    (item: any) => item?.blockName === "customer"
  ) as ServiceBlockType | undefined;
  console.log(customerSectionData, "customerSectionData");
  return (
    <div>
      <HeroSection heroSectionData={heroSectionData} />
      <ServiceInfoSection sectionData={ServiceSectionData} />
      <UiUxDesign />
      <AccordianSection accordianSectionData={WhyChoseSectionData} />
      <ProcessSection processSectionData={processSectionData} />
      <TechnologyStack technologySectionData={technologySectionData} />
      <ServicesSection
        serviceData={customerSectionData}
        shouldScrollEnable={false}
      />
    </div>
  );
};

export default UI_UX;
