import Home from "@/components/Home";
import { fetchWrapper } from "@/src/utils/fetchWrapper";

export default async function HomePage() {
  const response: any = await fetchWrapper({
    url: "/api/pages?where[slug][equals]=home",
    method: "GET",
  });
  const homePageData = response?.docs[0].layout;

  return (
    <>
      <Home homePageData={homePageData} />
    </>
  );
}
