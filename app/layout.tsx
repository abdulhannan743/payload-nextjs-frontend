import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/src/styles/globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormBlock from "../components/ContactUs/ContactFormBlock";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";
import IndustriesFAQCard from "@/components/Home/IndustriesFAQCard";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "AllZone Technologies",
  description: "Digitally Yours",
};

type RootLayoutProps = {
  children: React.ReactNode;
  form: any;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.HOME),
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
        <Header />
        {children}
        <ContactFormBlock {...form} />
        <IndustriesFAQCard matadata={matadata} />

        <Footer />
      </body>
    </html>
  );
}
