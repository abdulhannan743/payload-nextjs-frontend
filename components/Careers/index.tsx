import React from "react";
import HeaderBanner from "../sharedComponents/HeaderBanner";
import CareerOffers from "./CareerOffers";
import JobList from "./jobList";
import RecruitmentProcess from "./RecruitmentProcess";

type CareersProps = {
  CareersData: any;
};

function Careers({ CareersData }: CareersProps) {
  const SECTIONS = {
    HERO: "Hero Block",
    Offers: "Careers Offers",
    Jobs: "Open Jobs Block",
    Recruitment: "Recruitment Block",
  };

  const data = CareersData.reduce((acc: any, item: any) => {
    switch (item?.blockName) {
      case SECTIONS.HERO:
        acc.careersData = item;
        break;
      case SECTIONS.Offers:
        acc.careersOffers = item;
        break;
      case SECTIONS.Jobs:
        acc.openJobs = item;
        break;
      case SECTIONS.Recruitment:
        acc.recruitmentData = item;
        break;
      default:
        break;
    }
    return acc;
  }, {});

  return (
    <div>
      <div className="px-4">
        <HeaderBanner HeaderBannerData={data.careersData} />
      </div>
      <CareerOffers careersOffers={data.careersOffers} />
      <JobList openJobs={data.openJobs} />
      <RecruitmentProcess recruitmentData={data.recruitmentData} />
    </div>
  );
}

export default Careers;
