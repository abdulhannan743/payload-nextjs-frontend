import React from "react";
import Link from "next/link";
import type { NavLinkType } from "@/src/types/headerTypes";

interface MenuProps {
  navLinks: NavLinkType[];
}

const Menu: React.FC<MenuProps> = ({ navLinks }) => {
  // Filter parent links and child links
  const parentLinks = navLinks.filter((link) => !link.parent);
  const childLinks = navLinks.filter((link) => link.parent);

  return (
    <div>
      {parentLinks.map((parentLink) => (
        <div key={parentLink.label}>
          <div>{parentLink.label}</div>
          {parentLink.layout?.map((item, index) => (
            <div key={index}>
              <div>{item.heading}</div>
              <div>{item.text}</div>
            </div>
          ))}
          <ul>
            {childLinks
              .filter(
                (link) => link.parent && link.parent.id === parentLink.link.id
              )
              .map((childLink) => (
                <li key={childLink.label}>
                  <div>{childLink.label}</div>
                  {childLink.layout?.map((item, index) => (
                    <div key={index}>
                      <div>{item.heading}</div>
                      <div>{item.text}</div>
                    </div>
                  ))}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
