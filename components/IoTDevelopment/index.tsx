import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import ServiceInfoSection from "../sharedComponents/ServiceInfoSection";
import Image from "next/image";
import Analytics from "../sharedComponents/AnalyticsServices";
import DataAnalyticsOverview from "../sharedComponents/DataAnalyticsOverview";
import TechnologyStack from "../ui-ux/TechnologyStack";
import CustomDevelopment from "./CustomDevelopment";

type IoTDevelopmentProps = {
  IoTDevelopmentData: any;
};

function IoTDevelopment({ IoTDevelopmentData }: IoTDevelopmentProps) {
  const SECTIONS = {
    HERO: "IoT Hero Block",
    BENEFITS: "Top-Tier Benefits of AllZone",
    WHY_IOT: "Why IoT Application",
    BUILD_SOFTWARE: "Build Software Across Industries",
    PROCESS_IOT: "Process IoT Development Block",
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
    <div className="relative">
      <div className="absolute max-sm:w-72 max-sm:h-96 top-0 right-0 max-sm:inset-y-[500px] z-[-1]">
        <Image
          src="/assets/images/Vector.png"
          alt="heroSectionBg"
          width={60}
          height={60}
        />
      </div>
      <div className="absolute top-[20%] lg:top-[26%] md:top-[15%] z-[0] w-full">
        <Image
          src="/assets/images/ArtificailIntelligence.png"
          alt="heroSectionBg"
          height={50}
          width={1500}
        />
      </div>
      <HeroSection heroSectionData={data.businessGrowthSoftware} />
      <ServiceInfoSection sectionData={data.companyBenifitsInfoData} />
      <DataAnalyticsOverview analyticsData={data.analyticsData} />
      <Analytics analyticsData={data.analytics} />
      <TechnologyStack technologySectionData={data.technologySectionData} />
      <CustomDevelopment data={data.customDevelopmentData} />
    </div>
  );
}

export default IoTDevelopment;
