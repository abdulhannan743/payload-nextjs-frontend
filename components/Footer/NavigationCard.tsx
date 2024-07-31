import React from "react";
import type { NavLink } from "@/src/types/footerTypes";
import CustomLink from "./CustomLink";
import Container from "./Container";

type NavigationCardProps = {
  heading: string;
  navLinks: NavLink[];
};

const NavigationCard: React.FC<NavigationCardProps> = ({
  heading,
  navLinks,
}) => (
  <Container>
    <div className="text-blue-900 font-bold text-lg md:text-lg">{heading}</div>
    <div className="text-black lg:text-xs border-l border-dashed border-gray-500 mt-2 md:mt-4">
      <nav className="pl-2 md:pl-4">
        <ul className="space-y-2 md:space-y-3">
          {navLinks.map((service, index) => (
            <li key={index}>
              <CustomLink slug={service.parent.slug} label={service.label} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </Container>
);

export default NavigationCard;
