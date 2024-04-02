import React from "react";
import BlogBanner from "./BlogBanner";
import BlogContent from "./BlogContent";
import Head from "next/head";
import "../Assets/style.css";

const page = () => {
  return (
    <>
      <Head>
        <title>
          {"Insights, Tips, and Trends | Explore CA Saurabh Srivastava's Blog"}
        </title>
        <meta
          name="description"
          content="Dive into a wealth of knowledge at CA Saurabh Srivastava's blog. Stay updated on industry insights, valuable tips, and the latest trends. Elevate your understanding."
        />
        <meta
          name="keywords"
          content="Taxation services, accounts & MIS services, Foreign Exchange Management Act, cfo services,tax blogs,tax services"
        ></meta>
        <link rel="canonical" href="https://casaurabhsrivastava.com/blog" />
      </Head>

      <BlogBanner />
      <BlogContent />
    </>
  );
};

export default page;
