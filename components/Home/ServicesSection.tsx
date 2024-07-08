import React from "react";
import ScrollableContainer from "../ui/ScrollableContainer";

type Service = {
  id: string;
  title: string;
  description: string;
  iconName?: string;
};

type ServicesProps = {
  serviceData: {
    title: string;
    description: string;
    id: string;
    blockName: string;
    blockType: string;
    items: Service[];
  };
};

function ServicesSection({ serviceData }: ServicesProps) {
  // just a dummy data for the time being
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
    <div className="pt-16 pb-10 px-12 md:px-20 lg:px-60 bg-[#F9F9F9]">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-6 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {serviceData?.title}
        </h1>
        <div className="flex justify-center align-center gap-1">
          <hr className="bg-secondary border-none h-[2px] w-[10px]" />
          <hr className="bg-secondary border-none h-[2px] w-[50px]" />
        </div>
        <p className="text-lg text-center text-gray">
          {serviceData?.description}
        </p>
      </div>
      <ScrollableContainer scrollAxis="x">
        <div className="flex gap-8 pb-8">
          {serviceData?.items?.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 shadow-md rounded-lg min-w-[350px] max-w-[350px] mx-auto"
            >
              <img
                src={`/assets/icons/${item.iconName}.svg`}
                alt={`${item.iconName} icon`}
                className="mb-3"
              />
              <h3 className="text-lg font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray text-wrap">{item.description}</p>
            </div>
          ))}
        </div>
      </ScrollableContainer>
    </div>
  );
}

export default ServicesSection;
