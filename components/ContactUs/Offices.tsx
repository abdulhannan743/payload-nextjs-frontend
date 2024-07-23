import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaDiamondTurnRight } from "react-icons/fa6";
import { Office } from "@/src/types/HomeTypes";

const Offices: React.FC<{ offices: Office[] }> = ({ offices }) => {
  return (
    <div className="space-y-6">
      {offices?.map((office, index) => (
        <div
          key={index}
          className="relative bg-gray-900 rounded-lg overflow-hidden h-40"
          style={{
            backgroundImage: `url(${office.officeImage.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-65">
            <div className="relative p-4 text-white flex flex-col justify-center h-full">
              <h3 className="text-lg font-bold">{office.officeName}</h3>
              <p className="mb-4">{office.officeAddress}</p>
              {office.link.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.url}
                  className="inline-flex items-center text-blue-400 hover:text-blue-600"
                >
                  <Button
                    variant={"outline"}
                    className="bg-transparent text-white"
                  >
                    <FaDiamondTurnRight className="mr-2" />
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offices;
