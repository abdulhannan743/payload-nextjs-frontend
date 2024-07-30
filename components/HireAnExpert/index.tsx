import React from "react";
import Image from "next/image";
import DeveloperHeroSection from "./DeveloperHeroSection";
import LogoSection from "../Home/logoSection";
import DevelopersSection from "./DevelopersSection";
import HiringProcessSection from "./HiringProcessSection";
import BannerSection from "../sharedComponents/BannerSection";
type HireAnExpertProps = {
  hireAnExpertPageData: any;
};
function HireAnExpert({ hireAnExpertPageData }: HireAnExpertProps) {
  const heroSectionData = hireAnExpertPageData.find(
    (item: any) => item.blockName === "Hero Section"
  );
  const logoData = hireAnExpertPageData.find(
    (item: any) => item.blockName === "logo wide"
  );
  const developersSectionData = hireAnExpertPageData.find(
    (item: any) => item.blockName === "Developers Section"
  );
  const hiringProcessData = hireAnExpertPageData.find(
    (item: any) => item.blockName === "Hire a Developer Process"
  );
  const bannerSectionData = hireAnExpertPageData.find(
    (item: any) => item.blockName === "Presidential Award"
  );
  return (
    <div>
      <DeveloperHeroSection heroSectionData={heroSectionData} />
      <LogoSection logoData={logoData} />
      <div className="relative">
        <Image
          src={"/assets/images/frequency-layers-bg.png"}
          alt="background"
          width={781}
          height={536}
          className="absolute top-0 right-0 z-[-1]"
        />
        <DevelopersSection developersData={developersSectionData} />
      </div>
      <HiringProcessSection hiringProcessData={hiringProcessData} />
      <BannerSection bannerSectionData={bannerSectionData} />
    </div>
  );
}

export default HireAnExpert;
