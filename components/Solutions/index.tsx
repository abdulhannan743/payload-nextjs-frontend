import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import Analytics from "../sharedComponents/AnalyticsServices";
import SoftwareSolution from "./SoftwareSolution";
import SolutionProvider from "./SolutionProvider";

type ERPSolutionProps = {
  ERPSolutionData: any;
};
const ERPSolution = ({ ERPSolutionData }: ERPSolutionProps) => {
  const heroSectionData = ERPSolutionData?.find(
    (item: any) => item?.blockName === "Hero"
  );
  const SoftwareSectionData = ERPSolutionData?.find(
    (item: any) => item?.blockName === "software"
  );
  const analyticsSectionData = ERPSolutionData?.find(
    (item: any) => item?.blockName === "analytics"
  );
  const solutionProvidersData = ERPSolutionData?.find(
    (item: any) => item?.blockName === "provider"
  );
  return (
    <div>
      <HeroSection heroSectionData={heroSectionData} />
      <SoftwareSolution SoftwareSectionData={SoftwareSectionData} />
      <Analytics analyticsData={analyticsSectionData} />
      <SolutionProvider solutionProvidersData={solutionProvidersData} />
    </div>
  );
};

export default ERPSolution;
