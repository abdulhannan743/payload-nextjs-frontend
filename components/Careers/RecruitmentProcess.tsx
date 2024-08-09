import Image from "next/image";
import React from "react";

interface Icon {
  id: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  createdAt: string;
  updatedAt: string;
  url: string;
}

interface SubItem {
  icon: Icon;
  iconHeading: string;
  id: string;
}

interface RecruitmentData {
  heading: string;
  subItem: SubItem[];
  id: string;
  blockType: string;
}

interface RecruitmentProcessProps {
  recruitmentData: RecruitmentData;
}

const RecruitmentProcess: React.FC<RecruitmentProcessProps> = ({
  recruitmentData,
}) => {
  return (
    <div className="text-center bg-light-gray">
      <div className="text-center container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-light-gray">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16">
          {recruitmentData.heading}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-16 lg:gap-24 md:gap-10 ">
          {recruitmentData.subItem.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <Image
                src={item.icon.url}
                alt={item.icon.alt}
                width={item.icon.width}
                height={item.icon.height}
              />
              <p className="text-2xl md:text-lg  font-bold mt-4 sm:mt-6">
                {item.iconHeading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentProcess;
