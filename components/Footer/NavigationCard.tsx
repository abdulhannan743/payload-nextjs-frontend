import React from "react";
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
  <div className="bg-stone-200 p-6">
    <div className="text-blue-900 font-bold text-lg md:text-lg">{heading}</div>
    <div className="text-black lg:text-xs lg:border-l border-dashed border-gray-500 mt-2 md:mt-4">
      <nav className="pl-2 md:pl-4">
        <ul className="space-y-2 md:space-y-3">
          {navLinks.map((service, index) => (
            <li key={index}>
              <Link href={service.parent.slug}>
                <span>{service.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
);

export default NavigationCard;
