"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiAlignJustify } from "react-icons/fi";
import NavItem from "./NavItem";
import { NavLinkType } from "@/src/types/headerTypes";
import { Image as ImageType } from "@/src/types/CommonTypes";

type NavMenuProps = {
  logo: ImageType;
  newData: {
    navLinks: NavLinkType[];
  };
};

function NavMenu({ logo, newData }: NavMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button onClick={() => setIsOpen(true)}>
            <FiAlignJustify size={40} />
          </button>
        </SheetTrigger>
        <SheetContent side={"right"} className="w-full">
          <SheetHeader>
            <SheetTitle>
              <div className="flex lg:flex-1">
                <Link href="/">
                  <Image
                    src={logo.url}
                    className="h-10 w-auto"
                    width={logo.width}
                    height={logo.height}
                    alt={logo.alt}
                  />
                </Link>
              </div>
            </SheetTitle>
            <SheetDescription>
              <div>
                <ul className="text-black font-semibold">
                  {newData.navLinks.map((link) => (
                    <NavItem
                      key={link.label}
                      link={link}
                      closeSheet={closeSheet}
                      showPlusIcon={true}
                    />
                  ))}
                </ul>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default NavMenu;
