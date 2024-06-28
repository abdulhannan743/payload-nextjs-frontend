import React from "react";
import Home from "@/components/Home";
import { fetchWrapper } from "@/src/utils/fetchWrapper";

async function AboutUsPage() {
  const response: any = await fetchWrapper({
    url: "/api/pages?where[slug][equals]=about-us",
    method: "GET",
  });
  const homeData = response?.docs[0].layout;

  return (
    <>
      {homeData?.map((data: any) => (
        <Home key={data?.id} heading={data?.heading} text={data?.text} />
      ))}
    </>
  );
}

export default AboutUsPage;
