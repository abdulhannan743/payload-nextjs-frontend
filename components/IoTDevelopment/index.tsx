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
  const businessGrowthSoftware = IoTDevelopmentData?.find(
    (item: any) => item?.blockName === "IoT Hero Block"
  );
  const companyBenifitsInfoData = IoTDevelopmentData?.find(
    (item: any) => item?.blockName === "Top-Tier Benefits of AllZone"
  );
  const analyticsData = IoTDevelopmentData?.find(
    (item: any) => item?.blockName === "Why IoT Application"
  );
  const analytics = IoTDevelopmentData?.find(
    (item: any) => item?.blockName === "Build Software Across Industries"
  );
  const customDevelopmentData = IoTDevelopmentData?.find(
    (item: any) => item?.blockName === "Process IoT Development Block"
  );
  const technologySectionData = IoTDevelopmentData?.find(
    (item: any) => item?.blockName === "Technology Stacks And Tools"
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
      <HeroSection heroSectionData={businessGrowthSoftware} />
      <ServiceInfoSection sectionData={companyBenifitsInfoData} />
      <DataAnalyticsOverview analyticsData={analyticsData} />
      <Analytics analyticsData={analytics} />
      <TechnologyStack technologySectionData={technologySectionData} />
      <CustomDevelopment data={customDevelopmentData} />
    </div>
  );
}

export default IoTDevelopment;
