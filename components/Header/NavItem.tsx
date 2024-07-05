import React from "react";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import type { NavLinkType } from "@/src/types/headerTypes";

interface NavItemProps {
  link: NavLinkType;
  closeSheet?: () => void;
  showPlusIcon?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  link,
  closeSheet,
  showPlusIcon,
}) => {
  const href = link.link.slug === "home" ? "/" : `/${link.link.slug}`;

  return (
    <li key={link.label} className="relative group pt-2">
      <div className="flex items-center justify-between cursor-pointer space-x-2 font-bold">
        <Link href={href} onClick={closeSheet}>
          <span>{link.label}</span>
        </Link>
        {showPlusIcon && <FiPlus />}
      </div>
      {link.childrens && (
        <ul className="absolute top-full left-0 bg-white shadow-md rounded-lg py-2 px-4 hidden group-hover:block z-10">
          {link.childrens.map((sublink) => (
            <li key={sublink.label} className="pt-2">
              <Link href={`/${sublink.link.slug}`} onClick={closeSheet}>
                {sublink.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
