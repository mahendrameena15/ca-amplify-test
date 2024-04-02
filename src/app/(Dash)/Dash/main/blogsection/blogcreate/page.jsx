import dynamic from "next/dynamic";
import React from "react";
const BlogCreate = dynamic(() => import("./BlogCreate"), { ssr: false });

function Page() {
  return <BlogCreate />;
}

export default Page;
