import React from "react";
import Link from "next/link";
import type { NavLinkType } from "@/src/types/headerTypes";

interface MenuProps {
  navLinks: NavLinkType[];
}

const Menu: React.FC<MenuProps> = ({ navLinks }) => {
  return (
    <div>
      {navLinks.map((link) => {
        if (link.parent) {
          return null;
        } else {
          return (
            <div key={link.label}>
              <div>{link.label}</div>
              {link.layout?.map((item, index) => (
                <div key={index}>
                  <div>{item.heading}</div>
                  <div>{item.text}</div>
                </div>
              ))}
            </div>
          );
        }
      })}
    </div>
  );
};

const SubMenu: React.FC<{
  parentLink: NavLinkType;
  navLinks: NavLinkType[];
}> = ({ parentLink, navLinks }) => {
  return (
    <div key={parentLink.label}>
      <div>{parentLink.label}</div>
      <ul>
        {navLinks
          .filter(
            (link) => link.parent && link.parent.id === parentLink.link.id
          )
          .map((sublink) => (
            <li key={sublink.label}>
              <div>{sublink.label}</div>
              {sublink.layout?.map((item, index) => (
                <div key={index}>
                  <div>{item.heading}</div>
                  <div>{item.text}</div>
                </div>
              ))}
            </li>
          ))}
      </ul>
    </div>
  );
};

const MenuWithSubmenu: React.FC<MenuProps> = ({ navLinks }) => {
  return (
    <div>
      {navLinks.map((link) => {
        if (link.parent) {
          return (
            <SubMenu key={link.label} parentLink={link} navLinks={navLinks} />
          );
        } else {
          return (
            <div key={link.label}>
              <div>{link.label}</div>
              <Link href={link.link.slug}>{link.label}</Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default MenuWithSubmenu;
