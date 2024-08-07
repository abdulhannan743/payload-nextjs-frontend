import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import AccordianSection from "../sharedComponents/AccordianSection";
import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import EnterprisePlanning from "./EnterpriseWebApplicationPlanning";
import ServiceInfoSection from "../sharedComponents/ServiceInfoSection";
import Image from "next/image";
import WhyChooseAI from "./WhyChooseAI";

type AIDevelopmentServicesProps = {
  AIDevelopmentData: AboutLayoutItemType[];
};

const AIDevelopmentServices = ({
  AIDevelopmentData,
}: AIDevelopmentServicesProps) => {
  const HeroSectionData = AIDevelopmentData.find(
    (item) => item.blockName === "Hero"
  );

  const matadata: any = AIDevelopmentData?.find(
    (item) => item?.blockName === "Industries FAQ's Section"
  );

  const DevelopmentPlanningSectionData = AIDevelopmentData?.find(
    (item) => item?.blockName === "Development Planning"
  );

  const SoftwareDevelopmentCompany = AIDevelopmentData?.find(
    (item) => item?.blockName === "Software Development Company"
  );

  const AIDevelopmentModels: any = AIDevelopmentData?.find(
    (item) => item?.blockName === "AI Development Services"
  );

  const WhyChooseAIData: any = AIDevelopmentData?.find(
    (item) => item?.blockName === "Why Choose AI"
  );

  return (
    <div className="relative">
      <div className="absolute max-sm:w-72 max-sm:h-96 top-0 right-0 max-sm:inset-y-[500px] z-[-1]">
        <Image
          src="/assets/images/Vector.png"
          alt="heroSectionBg"
          width={460}
          height={460}
        />
      </div>

      <HeroSection heroSectionData={HeroSectionData} />
      <ServiceInfoSection sectionData={SoftwareDevelopmentCompany} />
      <div className="relative  ">
        <div className="absolute w-full flex justify-center">
          <h2 className="w-full text-9xl text-center font-bold text-[#20C8971A]   z-[-1] overflow-hidden text-nowrap">
            Artificial Intelligence
          </h2>
        </div>
        <AccordianSection
          accordianSectionData={AIDevelopmentModels}
          backgroundStyling={false}
        />
      </div>
      <div className="relative">
        <div className="absolute right-0">
        <Image
            src="/assets/images/semiOval.png"
            alt="semi oval"
            width={250}
            height={250}
          />
        </div>
        <EnterprisePlanning
          planningSectionData={DevelopmentPlanningSectionData}
        />
      </div>

      <WhyChooseAI WhyChooseAIData={WhyChooseAIData} />
    </div>
  );
};

export default AIDevelopmentServices;
