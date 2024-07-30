import React from "react";
import ScrollableContainer from "../ui/ScrollableContainer";
import { ServiceBlockType } from "@/src/types/ServiceBlockTypes";
import DottedLine from "../ui/DottedLine";

type ServicesProps = {
  serviceData: ServiceBlockType | undefined;
  isBackgroundWhite?: boolean;
  isContentCentered?: boolean;
  shouldScrollEnable?: boolean;
};

function ServicesSection({
  serviceData,
  isBackgroundWhite = false,
  isContentCentered = true,
  shouldScrollEnable = true,
}: ServicesProps) {

  //just a dummy data for the time being
  serviceData = {
    title: "Services We offer For Software Development & Consultancy",
    description:
      "we at, AllZone Technologies provide custom software development and consultancy services. Moreover, we have expertise in cross-platform mobile app development, and AllZone Technologies is second to none. Also, have expertise in AI, IoT, and data analytics. Make a Call for a Software Consultancy. Be a partner with one of the finest software development firms.",
    items: [
      {
        title: "Custom Software Development",
        description:
          "With our Custom software development and consultancy service create, maintain, and deploy applications for particular users and organizations.",
        id: "6683df2a39a2cc0333e61dcc",
        iconName: "customService",
      },
      {
        title: "Mobile Application Development",
        description:
          "App development services for Android, iOS, and hybrid are free from coding errors, use full features, and with security.",
        id: "6683df3d39a2cc0333e61dcd",
        iconName: "mobileService",
      },
      {
        title: "AI/ Machine Learning",
        description:
          "Employ our AI services to boost vital decision-making processes and efficiency. Our developers will integrate AI models and machine learning.",
        id: "6683df5239a2cc0333e61dce",
        iconName: "aiService",
      },
      {
        title: "Data Analytics",
        description:
          "We outsource advanced analytics through our data scientists that deliver crucial insights to support clients.",
        id: "6683df6539a2cc0333e61dcf",
        iconName: "dataService",
      },
      {
        title: "DevOps",
        description:
          "Increase your company’s ability to be productive in delivering apps, and services at pace with our DevOps services.",
        id: "6683df7639a2cc0333e61dd0",
        iconName: "devopsService",
      },
      {
        title: "IoT & Technology",
        description:
          "AllZone Technologies has the best, and most flexible IoT software development and consultancy services to streamline workflows.",
        id: "6683df8339a2cc0333e61dd1",
        iconName: "iotService",
      },
    ],
    id: "6683df1739a2cc0333e61dcb",
    blockName: "Services Section",
    blockType: "services",
  };

  return (
    <div className={`bg-${isBackgroundWhite ? "white" : "light-gray"} my-12`}>
      <div className="container mx-auto">
        <div
          className={`max-w-5xl mx-auto flex flex-col justify-center gap-6 mb-12 ${
            isContentCentered ? "items-center text-center" : "items-baseline"
          }`}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-lightDark">
            {serviceData?.title}
          </h1>
          <DottedLine />
          <p className="text-base md:text-lg text-gray">
            {serviceData?.description}
          </p>
        </div>
        <ScrollableContainer
          scrollAxis="x"
          shouldScrollEnable={shouldScrollEnable}
        >
          <div className="flex gap-8 p-1 pb-8">
            {serviceData?.items?.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 shadow-md rounded-lg min-w-[350px] max-w-[350px] mx-auto"
                style={{ boxShadow: "0px 0px 5px 1px #0000000D" }}
              >
                <img
                  src={item?.image?.url ?? `/assets/icons/${item.iconName}.svg`}
                  alt={item?.image?.alt ?? `${item.iconName} icon`}
                  className="mb-3"
                />
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray text-wrap">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollableContainer>
      </div>
    </div>
  );
}

export default ServicesSection;
