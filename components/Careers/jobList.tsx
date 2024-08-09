"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import DottedLine from "../ui/DottedLine";
import { Button } from "../ui/button";

interface JobItem {
  title: string;
  description: string;
  id: string;
}

interface JobTab {
  heading: string;
  items: JobItem[];
  id: string;
}

interface JobListProps {
  openJobs?: {
    title: string;
    tabs: JobTab[];
  };
}

const JobList: React.FC<JobListProps> = ({ openJobs }) => {
  const { title = "Open Jobs", tabs = [] } = openJobs || {};
  const [selectedTab, setSelectedTab] = useState<string>("All");

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  const getFilteredJobs = (tabHeading: string) => {
    if (tabHeading === "All") {
      return tabs.reduce((acc, tab) => acc.concat(tab.items), [] as JobItem[]);
    }
    const selectedTabData = tabs.find((tab) => tab.heading === tabHeading);
    return selectedTabData ? selectedTabData.items : [];
  };

  const filteredJobs = getFilteredJobs(selectedTab);

  return (
    <div className="container mx-auto pb-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center lg:mb-8 mb-2">{title}</h1>
      <DottedLine />
      <div className="hidden lg:block">
        <div className="bg-primary text-white max-w-full flex gap-96 py-4 font-xl font-bold rounded-lg my-10 justify-evenly mx-4">
          <div className="">Job Title</div>
          <div className="mr-96">Location</div>
        </div>
      </div>

      <Tabs value={selectedTab} onValueChange={handleTabChange}>
        <TabsList className="grid grid-cols-2 sm:grid-cols-7 mt-10 bg-transparent gap-6 lg:gap-0 lg:ml-6 text-black">
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={tab.id}
              value={tab.heading}
              className={`border-2 w-full sm:w-28 md:w-24 font-bold rounded-lg ${
                index === tabs.length - 1
                  ? "sm:col-span-1 col-span-2 justify-center"
                  : ""
              }`}
            >
              {tab.heading}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={selectedTab}>
          <Table className="w-full">
            <TableBody className="w-full">
              {filteredJobs.map((job) => (
                <TableRow key={job.id} className="w-full block sm:table-row">
                  <TableCell className="block sm:table-cell w-full sm:w-auto text-center sm:text-left font-bold text-lg sm:font-normal sm:text-sm">
                    {job.title}
                  </TableCell>
                  <TableCell className="block sm:table-cell w-full sm:w-auto text-center sm:text-left">
                    {job.description}
                  </TableCell>
                  <TableCell className="block sm:table-cell w-full sm:w-auto text-center sm:text-right">
                    <Button className="bg-secondary mx-auto">Apply Now</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobList;
