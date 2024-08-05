import { Metadata } from "next";
import { fetchWrapper } from "./fetchWrapper";

export async function fetchMetadata(url: string): Promise<Metadata> {
  const response: any = await fetchWrapper({
    url,
    method: "GET",
  });

  const uiUxMetaaData = response?.docs[0].meta;
  return {
    title: uiUxMetaaData.title,
    description: uiUxMetaaData.description,
    keywords: uiUxMetaaData.keywords,
  };
}
