import React from "react";
import Link from "next/link";
const Menu = ({ navLinks }) => {
  return (
    <div>
      {navLinks.map((link) => {
        if (link.parent) {
          // Render submenu
          return null; // Submenus will be rendered separately
        } else {
          // Render main link
          return (
            <div key={link.label}>
              <div>{link.label}</div>
              {link.link.layout.map((item, index) => (
                <div key={index}>
                  <div>{item.heading}</div>
                  <div>{item.text}</div>
                  {/* You can render other elements like images if needed */}
                </div>
              ))}
            </div>
          );
        }
      })}
    </div>
  );
};

const SubMenu = ({ parentLink, navLinks }) => {
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
              {sublink.link.parent.map((item, index) => (
                <div key={index}>
                  <div>{item.label}</div>
                  <div>{item.slug}</div>
                  {/* You can render other elements like images if needed */}
                </div>
              ))}
            </li>
          ))}
      </ul>
    </div>
  );
};

const MenuWithSubmenu = ({ navLinks }) => {
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
