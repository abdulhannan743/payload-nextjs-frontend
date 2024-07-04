import React from "react";
import { LinkItem } from "@/src/types/footerTypes";
import Link from "next/link";

type TechnologiesCardProps = {
  linkHeading: { heading: string };
  link: LinkItem[];
};

const TechnologiesCard: React.FC<TechnologiesCardProps> = ({
  linkHeading,
  link,
}) => {
  return (
    <div className="bg-stone-200 p-4 md:p-6 space-y-4">
      <div className="text-blue-900 font-bold text-lg md:text-lg">
        {linkHeading.heading}
      </div>
      <div className="text-black">
        <div className="flex flex-col md:flex-row md:space-x-4 flex-wrap">
          <ul className="space-y-3 lg:border-l border-dashed border-gray-500 pl-4 lg:text-xs">
            {link.map((tech) => (
              <li key={tech.id}>
                <Link
                  href={tech.page.slug}
                  className="hover:text-blue-500 hover:underline"
                >
                  {tech.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesCard;
