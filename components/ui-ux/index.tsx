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
import "./ui-ux.css";
import Image from "next/image";

interface HeroSectionProps {
  uiUxPageData: LayoutItemType[];
}
const UI_UX = ({ uiUxPageData }: HeroSectionProps) => {
  const heroSectionData: any = uiUxPageData?.find(
    (item: any) => item?.blockName === "Hero"
  );
  const ServiceSectionData: any = uiUxPageData?.find(
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

  return (
    <div>
      <HeroSection heroSectionData={heroSectionData} />
      <ServiceInfoSection sectionData={ServiceSectionData} />
      <div>
        <Image
          src="/assets/images/uiux-designing.png"
          alt="ui ux designing"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <AccordianSection
        accordianSectionData={WhyChoseSectionData}
        backgroundStyling={true}
      />
      <ProcessSection processSectionData={processSectionData} />
      <TechnologyStack technologySectionData={technologySectionData} />
      <ServicesSection
        serviceData={customerSectionData}
        shouldScrollEnable={false}
        isBackgroundWhite={true}
      />
    </div>
  );
};

export default UI_UX;
