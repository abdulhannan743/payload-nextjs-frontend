import React from "react";

type Item = {
  id: string;
  title: string;
  description: string;
  iconName?: string;
};

type WhyAllZoneSectionProps = {
  whyAllzoneData: {
    id: string;
    title: string;
    blockName: string;
    blockType: string;
    items: Item[];
  };
};

function WhyAllZoneSection({ whyAllzoneData }: WhyAllZoneSectionProps) {
  // just a dummy data for the time being
  whyAllzoneData = {
    title:
      "Why AllZone Technologies For Software Development & Staff Augmentation?",
    items: [
      {
        title: "Tailored Solutions",
        description:
          "Our developers provide customized software development and consultancy following your needs. Our services are easy to adapt and scalable for the growth of your business.",
        iconName: "tailoredSolutions",
        id: "668547922c83d937dfa70da2",
      },
      {
        title: "Satisfied Customers",
        description:
          "Are you Looking for 100% accuracy and efficiency, and error-free coding? Employ our developers and put your development worries to rest-guaranteed.",
        iconName: "satisfiedCustomers",
        id: "668547bf2c83d937dfa70da3",
      },
      {
        title: "Full Stack Developers",
        description:
          "AllZone Technologies offers staff augmentation services, like junior, mid-level, and senior resources. They will provide emerging solutions to keep you ahead.",
        iconName: "fullStackDevelopers",
        id: "668547db2c83d937dfa70da4",
      },
      {
        title: "Cooperative partnership",
        description:
          "Cooperation is our priority with clients, and we take care of time zone, cost, and code quality. That’s why we are best at ideating and building software solutions.",
        iconName: "cooperativePartnership",
        id: "668547fa2c83d937dfa70da5",
      },
    ],
    id: "668547872c83d937dfa70da1",
    blockName: "Why Allzone Section",
    blockType: "services",
  };

  return (
    <div className="py-16 xl:px-40 px-12 bg-[#FFFFFFCC]">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 max-w-3xl mx-auto">
        {whyAllzoneData.title}
      </h1>
      <div className="flex justify-center align-center gap-1 mb-14">
        <hr className="bg-secondary border-none h-[2px] w-[10px]" />
        <hr className="bg-secondary border-none h-[2px] w-[50px]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyAllzoneData.items.map((item) => (
          <div
            key={item.id}
            className="bg-[#F5F5F5] p-6 pt-20 shadow-md rounded-lg flex flex-col text-left gap-5 relative"
          >
            <img
              src={`/assets/icons/cardEllipse.svg`}
              alt={`${item.title} icon`}
              className="absolute top-0 right-0 rounded-tr-lg"
            />
            <img
              src={`/assets/icons/${item.iconName}.svg`}
              alt={`${item.title} icon`}
              className="w-14 h-14"
            />
            <p className="text-sm text-gray font-medium max-w-5xl mx-auto">
              {item.description}
            </p>
            <div className="flex justify-center align-center bg-primary rounded-md p-3 mt-auto text-center">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyAllZoneSection;
