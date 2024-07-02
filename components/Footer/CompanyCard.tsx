import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbArrowBarToDown } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { ImageType, ButtonData } from "@/src/types/footerTypes";

type CompanyCardProps = {
  footerImage?: ImageType;
  text?: string;
  buttonData?: ButtonData;
};

const profileText = "Company Deck";
const profileSize = "PDF, 4 MB";

const CompanyCard: React.FC<CompanyCardProps> = ({
  footerImage,
  text,
  buttonData,
}) => {
  if (!footerImage || !text || !buttonData) return null;
  return (
    <Card className="bg-slate-100 max-w-80 pl-10">
      <CardHeader>
        <CardTitle className="py-4">
          <Image
            src={footerImage.url}
            alt={footerImage.alt}
            width={footerImage.width}
            height={footerImage.height}
          />
        </CardTitle>
        <CardDescription className="text-black text-xs font-normal">
          {text}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={buttonData.page.slug}>
          <Button variant={"custom"} size={"md"}>
            <span className="mr-2">{buttonData.label}</span>
            <FaLongArrowAltRight />
          </Button>
        </Link>
      </CardContent>
      <CardFooter className="flex items-center">
        <div className="border rounded-full bg-blue-900 text-white p-2">
          <TbArrowBarToDown size={20} />
        </div>
        <div className="ml-2">
          <p className="font-bold text-xs">{profileText}</p>
          <span className="text-xs">{profileSize}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
