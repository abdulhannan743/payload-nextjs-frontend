import { Metadata } from "next";
import RenderBlocks from "@/src/utils/RenderBlocks";
import axios from "axios";

type PageResponse = any;
interface PageProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async (): Promise<
  PageProps["params"][]
> => {
  const { data } = await axios.get<PageResponse>("/api/pages?limit=100");
  return data.docs.map((page: any) => ({
    slug: page.slug !== "home" ? page.slug : "",
  }));
};

export const getMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const slug = params.slug ? params.slug : "home";
  const { data } = await axios.get<PageResponse>(
    `/api/pages?where[slug][equals]=${slug}`
  );

  const page = data.docs[0];
  return {
    title: page.slug,
  };
};

const Page = async ({ params }: PageProps) => {
  const slug = params.slug ? params.slug : "home";
  const { data } = await axios.get<PageResponse>(
    `/api/pages?where[slug][equals]=${slug}`
  );

  const page = data.docs[0];
  return (
    <div>
      <RenderBlocks layout={page.layout} />
    </div>
  );
};

export default Page;
