import React from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { NavLink } from "@/src/types/footerTypes";

type NavigationCardProps = {
  heading: string;
  navLinks: NavLink[];
};

const NavigationCard: React.FC<NavigationCardProps> = ({
  heading,
  navLinks,
}) => (
  <Card className="ml-0 md:ml-6 pt-12 bg-slate-100 divide-x divide-dashed md:divide-solid mr-0 md:mr-0">
    <CardTitle className="text-blue-900 font-bold">{heading}</CardTitle>
    <CardDescription className="text-black text-xs	">
      <nav className="mt-4 pl-6">
        <ul className="space-y-2">
          {navLinks.map((service, index) => (
            <li key={index}>
              <Link href={service.parent.slug}>
                <span>{service.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </CardDescription>
  </Card>
);

export default NavigationCard;
