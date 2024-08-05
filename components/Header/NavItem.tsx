import React from "react";
import Link from "next/link";
import { FiMinus, FiPlus } from "react-icons/fi";
import type { NavLinkType } from "@/src/types/headerTypes";

interface NavItemProps {
  link: NavLinkType;
  closeSheet?: () => void;
  showPlusIcon?: boolean;
  fontWeight?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  link,
  closeSheet,
  showPlusIcon,
  fontWeight,
}) => {
  const href = link.link.slug === "home" ? "/" : `/${link.link.slug}`;
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <li key={link.label} className="relative group pt-2">
      <div
        className={`flex items-center justify-between cursor-pointer space-x-2 ${fontWeight} uppercase`}
      >
        <Link href={href} onClick={closeSheet}>
          <span>{link.label}</span>
        </Link>
        {showPlusIcon ? (
          isSubMenuOpen ? (
            <FiMinus onClick={toggleSubMenu} />
          ) : (
            <FiPlus onClick={toggleSubMenu} />
          )
        ) : null}
      </div>
      {isSubMenuOpen && link.subMenu.length > 0 && (
        <ul className="text-left">
          {link.subMenu[0].subMenuItems.map((sublink) => (
            <li key={sublink.title} className="pt-2">
              <Link
                href={`/${sublink.page.slug}`}
                onClick={closeSheet}
                className="pl-4"
              >
                {sublink.title}
              </Link>
              <hr className="mt-2" />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
