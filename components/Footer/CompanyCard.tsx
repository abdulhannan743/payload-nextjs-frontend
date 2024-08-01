import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbArrowBarToDown } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import type { ImageType, ButtonData } from "@/src/types/footerTypes";

type CompanyCardProps = {
  footerImage: ImageType;
  text: string;
  buttonData: ButtonData;
};

const profileText = "Company Deck";
const profileSize = "PDF, 4 MB";

const CompanyCard: React.FC<CompanyCardProps> = ({
  footerImage,
  text,
  buttonData,
}) => {
  return (
    <div className="bg-stone-200 max-w-96 lg:max-w-80  pr-4">
      <div className="py-4">
        <Image
          src={footerImage.url}
          alt={footerImage.alt}
          width={footerImage.width}
          height={footerImage.height}
        />
      </div>
      <div className="text-black lg:text-xs mb-6">{text}</div>

      <div>
        <Link href={buttonData.page.slug}>
          <Button variant={"brand"} size={"md"}>
            <span className="mr-2">{buttonData.label}</span>
            <FaLongArrowAltRight className="mt-1" />
          </Button>
        </Link>
      </div>
      <div className="flex items-center mt-4">
        <div className="border rounded-full bg-blue-900 text-white p-2">
          <TbArrowBarToDown size={20} />
        </div>
        <div className="ml-2 mt-3">
          <p className="font-bold lg:text-xs">{profileText}</p>
          <span className="lg:text-xs">{profileSize}</span>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
