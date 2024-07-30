import React from "react";
import Image from "next/image";
import DottedLine from "../ui/DottedLine";
import type { LayoutItemType } from "@/src/types/CommonTypes";

interface SoftwareSolutionProps {
  SoftwareSectionData: LayoutItemType;
}
const SoftwareSolution = ({ SoftwareSectionData }: SoftwareSolutionProps) => {
  return (
    <div className="md:flex justify-center items-center container mx-auto raletive mt-10 overflow-hidden">
      <Image
        src={"/images/Vector1.png"}
        alt=""
        width={900}
        height={900}
        className="absolute -bottom-64 -right-80 -z-10"
      />
      <div className=" flex-1">
        <h1>{SoftwareSectionData?.heading}</h1>
        <div className="my-5">
          <DottedLine />
        </div>
        <p>{SoftwareSectionData?.text}</p>
      </div>
      <div className="flex-1">
        <Image
          src={SoftwareSectionData?.image?.url || ""}
          alt=""
          width={800}
          height={800}
        />
      </div>
    </div>
  );
};

export default SoftwareSolution;
