import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";
import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import ServicesSection from "../Home/ServicesSection";
import SymbolOfExcellence from "./SymbolOfExcellence";
import ClientsSection from "../Home/ClientsSection";
import TechnologyStackSection from "../EnterpriseSoftwareServices/TechnologyStackSection";
import AccordianSection from "../sharedComponents/AccordianSection";
import type { ServiceBlockItemType } from "@/src/types/ServiceBlockTypes";

type DedicatedTeamDataProps = {
  DedicatedTeamData: AboutLayoutItemType[];
};

const extractAccordionData = (typoPara: any["typoPara"]): any => {
  return typoPara?.map(({ typography, paragraph }: any) => {
    const question =
      typography?.root?.children?.[0]?.children?.[0]?.text ||
      "No question available";

    const answer = paragraph?.root?.children?.[0]?.children?.map(
      (child: any) => child?.children?.[0]?.text
    ) || ["No answer available"];

    return { question, answer };
  });
};

const accordianContentCard = (item: ServiceBlockItemType) => {
  const typoParaContent = extractAccordionData(
    item?.block?.[0]?.matadata.typoPara
  );

  return (
    <div className="flex flex-col justify-between gap-2">
      <h4 className="text-2xl md:text-3xl font-medium">
        {item?.block?.[0].matadata.heading}
      </h4>
      <p className="text-lg md:text-2xl font-medium">
        {typoParaContent[0].question}
      </p>
      <ul className="text-secondary text-lg md:text-2xl font-medium font-sans">
        {typoParaContent[0].answer.map((text: string, index: number) => (
          <li key={index}>{`• ${text}`}</li>
        ))}
      </ul>
      <p className="text-base md:text-xl font-normal">{item?.description}</p>
    </div>
  );
};
const DedicatedTeam = ({ DedicatedTeamData }: DedicatedTeamDataProps) => {
  const HeroSectionData = DedicatedTeamData.find(
    (item) => item.blockName === "Hero"
  );

  const matadata: any = DedicatedTeamData?.find(
    (item) => item?.blockName === "Industries FAQ's Section"
  );

  const WhatMakeExcellent: any = DedicatedTeamData?.find(
    (item) => item?.blockName === "What make us Excellent"
  );

  const WhyAllZoneBest: any = DedicatedTeamData?.find(
    (item) => item?.blockName === "Why AllZone Best"
  );

  const OurClients: any = DedicatedTeamData?.find(
    (item) => item?.blockName === "Our Clients"
  );

  const DevelopmentTechnologiesData: any = DedicatedTeamData?.find(
    (item) => item?.blockName === "Development Technologies"
  );

  const HireTeamData: any = DedicatedTeamData?.find(
    (item) => item?.blockName === "Hire Team"
  );

  return (
    <div>
      <HeroSection heroSectionData={HeroSectionData} />
      <AccordianSection
        accordianSectionData={HireTeamData}
        accordianContent={accordianContentCard}
      />
      <div className="relative">
        <div className="absolute top-16 md:top-0 z-[0] w-full">
          <img
            src="/assets/images/dedicatedTeamBG.png"
            alt="Technology Background"
            className="w-full h-full"
          />
        </div>
        <ServicesSection serviceData={WhyAllZoneBest} />
      </div>
      <TechnologyStackSection
        technologyStacksData={DevelopmentTechnologiesData}
      />
      <SymbolOfExcellence SymbolOfExcellenceData={WhatMakeExcellent} />
      <ClientsSection clientsData={OurClients} />
    </div>
  );
};

export default DedicatedTeam;
