import React from "react";
import { fetchWrapper } from "@/src/utils/fetchWrapper";

async function ServicesPage() {
  const response: any = await fetchWrapper({
    url: "/api/pages?where[slug][equals]=services",
    method: "GET",
  });
  const homeData = response?.docs[0].layout;
  return (
    <>
      {homeData?.map((data: any) => (
        // just for the time being
        <div key={data?.id}>
          <h3 className="text-lg font-bold text-primary mb-2">
            {data?.heading}
          </h3>
          <p className="text-sm text-gray text-wrap">{data?.text}</p>
        </div>
      ))}
    </>
  );
}

export default ServicesPage;
