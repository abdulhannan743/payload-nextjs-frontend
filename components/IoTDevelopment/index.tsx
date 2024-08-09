import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import ServiceInfoSection from "../sharedComponents/ServiceInfoSection";
import Image from "next/image";
import Analytics from "../sharedComponents/AnalyticsServices";
import DataAnalyticsOverview from "../sharedComponents/DataAnalyticsOverview";
import TechnologyStack from "../ui-ux/TechnologyStack";
import CustomDevelopment from "./CustomDevelopment";
import EnterprisePlanning from "../AI-Development-Services/EnterpriseWebApplicationPlanning";

type IoTDevelopmentProps = {
  IoTDevelopmentData: any;
};

function IoTDevelopment({ IoTDevelopmentData }: IoTDevelopmentProps) {
  const SECTIONS = {
    HERO: "IoT Hero Block",
    BENEFITS: "Top-Tier Benefits of AllZone",
    WHY_IOT: "Why IoT Application",
    BUILD_SOFTWARE: "Build Software Across Industries",
    PROCESS_IOT: "Custom IoT Development",
    TECHNOLOGY_STACK: "Technology Stacks And Tools",
  };

  // Reduce the data to an object with relevant sections
  const data = IoTDevelopmentData.reduce(
    (acc: any, item: any) => {
      switch (item?.blockName) {
        case SECTIONS.HERO:
          acc.businessGrowthSoftware = item;
          break;
        case SECTIONS.BENEFITS:
          acc.companyBenifitsInfoData = item;
          break;
        case SECTIONS.WHY_IOT:
          acc.analyticsData = item;
          break;
        case SECTIONS.BUILD_SOFTWARE:
          acc.analytics = item;
          break;
        case SECTIONS.PROCESS_IOT:
          acc.customDevelopmentData = item;
          break;
        case SECTIONS.TECHNOLOGY_STACK:
          acc.technologySectionData = item;
          break;
        default:
          break;
      }
      return acc;
    },
    {} // Initial value for the accumulator
  );

  return (
    <div>
      <div className="relative">
        <div className="absolute max-sm:w-72 max-sm:h-96 top-0 right-0 max-sm:inset-y-[500px] z-[-1]">
          <Image
            src="/assets/images/Vector.png"
            alt="heroSectionBg"
            width={450}
            height={450}
          />
        </div>
        <HeroSection heroSectionData={data.businessGrowthSoftware} />
      </div>
      <ServiceInfoSection sectionData={data.companyBenifitsInfoData} />
      <div className="w-full overflow-hidden -z-1">
        <Image
          src="/assets/images/iot.png"
          alt="iotDevelopment"
          width={1400}
          height={1400}
          className="w-full h-full"
        />
      </div>
      <DataAnalyticsOverview analyticsData={data.analyticsData} />
      <Analytics analyticsData={data.analytics} />
      <TechnologyStack technologySectionData={data.technologySectionData} />
      <div className="hidden lg:block">
        <CustomDevelopment data={data.customDevelopmentData} />
      </div>
      <div className="block lg:hidden">
        <EnterprisePlanning planningSectionData={data.customDevelopmentData} />
      </div>
    </div>
  );
}

export default IoTDevelopment;
