import React from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
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
  const halfIndex = Math.ceil(link.length / 2);
  const firstHalf = link.slice(0, halfIndex);
  const secondHalf = link.slice(halfIndex);

  return (
    <Card className="p-6 bg-slate-100 space-y-4 pt-12">
      <CardTitle className="text-blue-900 font-bold">
        {linkHeading.heading}
      </CardTitle>
      <CardDescription className="text-black max-w-2xl">
        <div className="grid grid-cols-2">
          <ul className="space-y-4 pr-4 border-l border-dashed pl-4 text-xs	">
            {firstHalf.map((tech) => (
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
          <ul className="space-y-4 pl-4 border-l border-dashed pl-4 text-xs	">
            {secondHalf.map((tech) => (
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
      </CardDescription>
    </Card>
  );
};

export default TechnologiesCard;
