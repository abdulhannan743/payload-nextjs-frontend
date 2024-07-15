"use client";

import Image from "next/image";
import React from "react";
import styledBox from "../../public/images/RightBox.png";
import squareVector from "../../public/images/Vector.png";
import dotsStyle from "../../public/images/Group 39932.png";
import Hamburger from "../../public/images/Hamburger.png";
import type { AboutLayoutItemType } from "@/src/types/AboutUsTypes";

type CoreValuesSectionProps = {
  CoreValuesSectionData: AboutLayoutItemType | undefined;
};

type tabsDataTypes = {
  value: string;
  name: string;
};

const tabsData: tabsDataTypes[] = [
  { value: "01", name: "Leadership" },
  { value: "02", name: "Commitments" },
  { value: "03", name: "Quality" },
  { value: "04", name: "Teamwork" },
  { value: "05", name: "Innovation" },
  { value: "06", name: "Respect" },
];

const CoreValuesSection = ({
  CoreValuesSectionData,
}: CoreValuesSectionProps) => {
  const coreValuesData = CoreValuesSectionData?.content[0].layout;

  const InitialData = coreValuesData?.find(
    (item) => item.blockName === "Leadership"
  );

  const [activeLink, setActiveLink] = React.useState<string>("Leadership");
  const [activeSection, setActiveSection] = React.useState<string>("01");
  const [activeSectionInfo, setActiveSectionInfo] = React.useState<
    AboutLayoutItemType | undefined
  >(InitialData);

  const nextSection = () => {
    const currentIndex = tabsData.findIndex((tab) => tab.name === activeLink);

    const nextIndex = (currentIndex + 1) % tabsData.length;

    const nextTab = tabsData[nextIndex];

    const nextActiveSection = coreValuesData?.find(
      (item) => item.blockName === nextTab.name
    );
    setActiveLink(nextTab.name);
    setActiveSection(nextTab.value);
    setActiveSectionInfo(nextActiveSection);
  };
  const previousSection = () => {
    const currentIndex = tabsData.findIndex((tab) => tab.name === activeLink);

    const prevIndex = (currentIndex - 1 + tabsData.length) % tabsData.length;

    const prevTab = tabsData[prevIndex];

    const prevActiveSection = coreValuesData?.find(
      (item) => item.blockName === prevTab.name
    );
    setActiveLink(prevTab.name);
    setActiveSection(prevTab.value);
    setActiveSectionInfo(prevActiveSection);
  };
  return (
    <div className="relative w-full mb-10">
      <div className="flex flex-col align-middle justify-center items-center">
        <h2 className="text-4xl font-semibold text-[#1D2746]">
          Our Core Values
        </h2>
        <hr className="w-24 h-1 bg-secondary mt-3 rounded-full" />
      </div>
      <div className="container flex flex-row items-center justify-between mt-10">
        {tabsData.map((tab: tabsDataTypes, index) => (
          <div key={index} className="text-base font-bold relative z-20">
            <p
              className="text-gray cursor-pointer"
              onClick={() => {
                const activeData = coreValuesData?.find(
                  (item) => item.blockName === tab.name
                );
                setActiveLink(tab.name);
                setActiveSection(tab.value);
                setActiveSectionInfo(activeData);
              }}
            >
              <span className="text-primary">{tab.value} </span>
              {tab.name}
            </p>
            <hr
              className={`w-4 h-4 rounded-full border ${
                activeLink === tab.name ? "bg-primary" : "bg-white"
              } mt-1.5`}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-y-32 w-full h-0.5 bg-[#E9EDF5]"></div>

      <div className="container w-full absolute inset-y-64">
        <div className="container w-2/3 flex flex-row justify-between mb-4">
          <div>
            <Image src={dotsStyle} alt="dots" />
          </div>
          <div>
            <Image src={Hamburger} alt="Hamburger" />
          </div>
        </div>
        <hr className="container h-1 bg-[#CACACA] w-2/3 rounded-full" />
      </div>

      <div className="w-full mt-8">
        <div className="realtive flex flex-row items-center justify-evenly">
          <div className="w-80">
            <Image src={styledBox} alt="Styled Box" />
          </div>
          <div className="absolute inset-x-96">
            <Image src={squareVector} alt="squareBox" />
          </div>
          <div className="absolute inset-x-1/4 inset-y-2/4 ">
            <Image
              src={activeSectionInfo?.image?.url || ""}
              width={activeSectionInfo?.image?.width}
              height={activeSectionInfo?.image?.height}
              alt={activeSectionInfo?.image?.alt || ""}
            />
          </div>

          <div className="w-[806px] h-[717px] bg-[rgba(32,200,151,0.1)] rounded-[24px] flex flex-row justify-around items-center">
            <div></div>
            <div className="w-72">
              <h2 className="font-bold text-3xl text-primary mb-3">
                {activeSectionInfo?.heading}
              </h2>
              <p className="text-gray text-xl">{activeSectionInfo?.text}</p>
            </div>
          </div>
          <div className="absolute right-20 inset-y-1/3 w-16">
            <Image src={styledBox} alt="Styled Box" />
          </div>
        </div>
      </div>
      <div className="container absolute inset-y-[94%] inset-x-0 w-1/2 flex felx-row justify-between">
        <div className="text-primary cursor-pointer" onClick={previousSection}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 w-10 h-10"
          >
            <path
              fillRule="evenodd"
              d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p className="text-lg font-bold text-secondary">
            {activeSection.split("0")} / 6
          </p>
        </div>
        <div className="text-primary cursor-pointer" onClick={nextSection}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;
