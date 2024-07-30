"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { splitTitle } from "@/src/utilities/splitTitle";
import { DeveloperSectionType } from "@/src/types/DeveloperType";
import Link from "next/link";
import { RESOURCE_TYPES } from "@/src/constants/common";
import HireDeveloperButton from "../ui/HireDeveloperButton";

type DevelopersSectionProps = {
  developersData: DeveloperSectionType;
};
function DevelopersSection({ developersData }: DevelopersSectionProps) {
  const tabs = developersData?.tabs;
  const [activeTab, setActiveTab] = React.useState(tabs[0]?.label);
  const [visibleDevelopersCount, setVisibleDevelopersCount] = React.useState(8);
  const onTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisibleDevelopersCount(8);
  };
  const allDevelopers = developersData?.developers;
  const specificDevelopers = allDevelopers.filter((developer) =>
    developer?.skills?.some((skill) => skill?.title === activeTab)
  );

  const developers = activeTab === "All" ? allDevelopers : specificDevelopers;

  const handleLoadMore = () => {
    setVisibleDevelopersCount((prevCount) => prevCount + 8);
  };
  const { titleWithoutLastWord, lastWord } = splitTitle(developersData.title);
  return (
    <div className="container py-16 flex flex-col gap-8">
      <h1 className="text-center">
        {titleWithoutLastWord}
        <span className="text-primary"> {lastWord}</span>
      </h1>
      <div className="flex flex-wrap gap-4 justify-center align-center">
        {developersData?.tabs?.map((tab) => (
          <Button
            key={tab?.id}
            variant={activeTab === tab?.label ? "default" : "outline"}
            onClick={() => onTabChange(tab?.label)}
            className={`border-primary text-${
              activeTab === tab?.label ? "white" : "primary"
            }`}
          >
            {tab?.label}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {developers.slice(0, visibleDevelopersCount).map((developer) => {
          const displayedSkills = developer?.skills?.slice(0, 2);
          const remainingSkillsCount =
            developer?.skills?.length - displayedSkills.length;
          return (
            <div
              key={developer.id}
              className="bg-white pt-0 p-8 rounded-lg flex gap-2 items-center flex-col"
              style={{ boxShadow: "0px 0px 5px 1px #0000001A" }}
            >
              <Image
                src={developer?.image?.url || ""}
                alt={developer?.image?.alt || "icon"}
                width={developer?.image?.width}
                height={developer?.image?.height}
              />
              <h5 className="text-dark-blue">{developer?.title}</h5>
              <p className="text-primary font-bold">{developer?.description}</p>
              <div className="flex flex-wrap gap-2 justify-center align-center">
                {displayedSkills?.map((skill) => (
                  <div
                    key={skill?.id}
                    className="px-2 border rounded border-primary text-primary"
                  >
                    <p>{skill?.title}</p>
                  </div>
                ))}
                {remainingSkillsCount > 0 && (
                  <div className="px-2 border rounded border-primary text-white bg-primary">
                    <p>+{remainingSkillsCount}</p>
                  </div>
                )}
              </div>
              {developer?.link?.map((link) => (
                <HireDeveloperButton className="mt-4" key={link?.id}>
                  {link?.label}
                </HireDeveloperButton>
              ))}
            </div>
          );
        })}
      </div>
      {visibleDevelopersCount < developers.length && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleLoadMore}
            variant="outline"
            className="border-primary text-primary"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}

export default DevelopersSection;
