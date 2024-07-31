import React from "react";
import type { LinkItem } from "@/src/types/footerTypes";
import CustomLink from "./CustomLink";
import Container from "./Container";

type TechnologiesCardProps = {
  linkHeading: { heading: string };
  link: LinkItem[];
};

const TechnologiesCard: React.FC<TechnologiesCardProps> = ({
  linkHeading,
  link,
}) => {
  return (
    <Container>
      <div className="text-blue-900 font-bold text-lg md:text-lg">
        {linkHeading.heading}
      </div>
      <div className="text-black">
        <div className="flex flex-col md:flex-row md:space-x-4 flex-wrap">
          <ul className="space-y-3 border-l border-dashed border-gray-500 pl-4 lg:text-xs">
            {link.map((tech) => (
              <li key={tech.id}>
                <CustomLink slug={tech.page.slug} label={tech.label} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default TechnologiesCard;
