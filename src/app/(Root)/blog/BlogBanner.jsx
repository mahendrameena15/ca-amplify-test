import React from "react";
import Link from "next/link";

const BlogBanner = () => {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: 'url("/images/blogbanner.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text text-left align-items-end">
            <div className="col-md-9  pb-5">
              <p className="breadcrumbs mb-2">
                <span className="mr-2">
                  <Link href="/">
                    Home <i className="ion-ios-arrow-forward" />
                  </Link>
                </span>{" "}
                <span>
                  Blog <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Blog</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogBanner;
