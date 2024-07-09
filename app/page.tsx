import Home from "@/components/Home";
import { RESOURCE_TYPES } from "@/src/constants/common";
import { getPageURL } from "@/src/utils";
import { fetchWrapper } from "@/src/utils/fetchWrapper";

export default async function HomePage() {
  const response: any = await fetchWrapper({
    url: getPageURL(RESOURCE_TYPES.HOME),
    method: "GET",
  });
  const homePageData = response?.docs[0].layout;

  return (
    <>
      <Home homePageData={homePageData} />

    </>
  );
}
