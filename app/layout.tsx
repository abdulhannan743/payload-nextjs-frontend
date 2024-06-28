import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/src/styles/globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "AllZone Technologies",
  description: "Digitally Yours",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <Footer />
      </body>
    </html>
  );
}
