import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndustriesFAQCard from "@/components/Home/IndustriesFAQCard";
import ContactFormBlock from "../components/ContactUs/ContactFormBlock";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { cn } from "@/lib/utils";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import { fetchMetadata } from "@/src/utils/metaData";
import { AZT_ROUTES } from "@/src/constants/routes";
import { HeaderType } from "@/src/types/headerTypes";
import "@/src/styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export async function generateMetadata(): Promise<Metadata> {
  const url = getPageURL(RESOURCE_TYPES.HOME);
  return fetchMetadata(url);
}

type RootLayoutProps = {
  children: React.ReactNode;
  form: any;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.HOME),
    method: "GET",
  });
  const header: HeaderType = await fetchWrapper({
    url: AZT_ROUTES.HEADER,
    method: "GET",
  });
  const homePageData = response?.docs[0]?.layout;

  const form = homePageData?.find(
    (item: any) => item?.blockName === "Contact Us Form "
  );

  const matadata = homePageData?.find(
    (item: any) => item?.blockName === "Industries FAQ's Section"
  );
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background --font-roboto antialiased",
          roboto.variable
        )}
      >
        <Header header={header} />
        {children}
        <ContactFormBlock {...form} />
        <IndustriesFAQCard matadata={matadata} />
        <Footer />
      </body>
    </html>
  );
}
