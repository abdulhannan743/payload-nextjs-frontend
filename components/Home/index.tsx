"use client";

import React from "react";
import ServicesSection from "./ServicesSection";
import WhyAllZoneSection from "./WhyAllZoneSection";
import ClientsSection from "./ClientsSection";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import LogoSection from "./logoSection";
import AwardWinningSection from "./AwardWinningSection";
import { useWindowSize } from "@/src/utils/useWindowSizeForResponsiveness";
import AccordianSection from "../sharedComponents/AccordianSection";
import DeveloperHeroSection from "../HireAnExpert/DeveloperHeroSection";

type HomeProps = {
  homePageData: any;
};

export default function Home({ homePageData }: HomeProps) {
  const windowSize = useWindowSize();

  let logoData;
  if (windowSize.width < 1024) {
    logoData = homePageData?.find(
      (item: any) => item?.blockName === "logo mobile"
    );
  } else {
    logoData = homePageData?.find(
      (item: any) => item?.blockName === "logo wide"
    );
  }

  const servicesData = homePageData?.find(
    (item: any) => item?.blockName === "Services Section"
  );
  const whyAllzoneData = homePageData?.find(
    (item: any) => item?.blockName === "Why Allzone Section"
  );
  const clientsData = homePageData?.find(
    (item: any) => item?.blockName === "Our Clients"
  );

  const heroData: any = homePageData?.filter(
    (item: any) => item?.blockName === "Hero Section"
  );

  const portfolioData = homePageData?.find(
    (item: any) => item?.blockName === "Our Work"
  );

  const industries = homePageData?.find(
    (item: any) => item?.blockName === "Industries Services Section"
  );

  return (
    <div>
      <HeroSection heroSectionData={heroData} />
      <LogoSection logoData={logoData} />
      <ServicesSection serviceData={servicesData} />
      <AccordianSection accordianSectionData={industries} />
      <AwardWinningSection />
      <WhyAllZoneSection whyAllzoneData={whyAllzoneData} />
      <PortfolioSection portfolioData={portfolioData} />
      <ClientsSection clientsData={clientsData} />
    </div>
  );
}
