import React from "react";
import type { NavLinkType } from "@/src/types/headerTypes";

interface MenuProps {
  navLinks: NavLinkType[];
}

const Menu: React.FC<MenuProps> = ({ navLinks }) => {
  const parentLinks = navLinks.filter((link) => !link.parent);
  const childLinks = navLinks.filter((link) => link.parent);

  return (
    <div>
      {parentLinks.map((parentLink, index) => (
        <div key={index}>
          <div>{parentLink.label}</div>
          {parentLink.layout?.map((item, idx) => (
            <div key={idx}>
              <div>{item.heading}</div>
              <div>{item.text}</div>
            </div>
          ))}
          <ul>
            {childLinks
              .filter(
                (link) => link.parent && link.parent.id === parentLink.link.id
              )
              .map((childLink, index) => (
                <li key={index}>
                  <div>{childLink.label}</div>
                  {childLink.layout?.map((item, idx) => (
                    <div key={idx}>
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
