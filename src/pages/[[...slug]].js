import React from "react";
import RenderBlocks from "../utils/RenderBlocks";
import axios from "axios";

export default function Page({ page }) {
  return (
    <div>
      <RenderBlocks layout={page.layout} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const pageReq = await axios(`/api/pages?limit=100`);
  const pageData = pageReq.data;

  const returnObj = {
    paths: pageData.docs.map(({ slug, id }) => {
      return {
        params: { slug: slug !== "home" ? slug.split("/") : [] }, // Handle home route
      };
    }),
    fallback: false,
  };

  return returnObj;
};

export const getStaticProps = async (ctx) => {
  const slug = ctx.params?.slug ? ctx.params.slug.join("/") : "home"; // Default to home if no slug

  const pageReq = await axios(`/api/pages?where[slug][equals]=${slug}`);
  let pageData = pageReq.data.docs[0];

  return {
    props: {
      page: pageData,
    },
  };
};
