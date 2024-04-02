"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import "react-accessible-accordion/dist/fancy-example.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Counter from "./home/Counter";
import Faqs from "./_components/Faqs";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "linear",
      once: false,
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          {" "}
          Expert CFO Services in Bangalore | Financial Forecasting & Taxation
        </title>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:title"
          content="Expert CFO Services | Financial Forecasting & Taxation"
        ></meta>
        <meta
          property="og:url"
          content="https://casaurabhsrivastava.com/"
        ></meta>
        <meta
          property="og:image"
          content="https://casaurabhsrivastava.com/images/about-2.jpg"
        ></meta>
        <meta
          property="og:description"
          content="Elevate your business with top-notch CFO services in Bangalore. Specializing in financial forecasting, taxation services, and compliance with Foreign Exchange Management Act. Get professional accounts, MIS, and taxation services in India."
        ></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:title" content="CA Saurabh Srivastava"></meta>
        <meta name="twitter:site" content="@ca_srivastava"></meta>
        <meta
          name="twitter:description"
          content="Welcome to CA Saurabh Srivastava - Your Trusted Chartered Accountant!"
        ></meta>
        <meta
          name="twitter:image"
          content="https://casaurabhsrivastava.com/images/saurabh.jpg"
        ></meta>
        <meta name="twitter:image:alt" content="Charted accountant"></meta>
        <meta
          name="description"
          content="Elevate your business with top-notch CFO services in Bangalore. Specializing in financial forecasting, taxation services, and compliance with Foreign Exchange Management Act. Get professional accounts, MIS, and taxation services in India."
        />
        <meta
          name="keywords"
          content="CA in bangalore, CFO Services, CFO services company, CFO services near me, Financial forecasting services, Financial forecasting, Foreign Exchange Management Act, Accounts & mis services, Taxation Services, Taxation services in india"
        ></meta>
        <link rel="canonical" href="https://casaurabhsrivastava.com/" />
      </Head>

      <Carousel
        autoPlay
        infiniteLoop
        interval={8000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        <div
          className="slider-item py-md-5 slider-mobile"
          style={{
            backgroundImage: "url(/images/service-banner.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text  py-md-5">
              <div className="col-md-8 ">
                <div className="text w-100 text-left py-lg-5 py-md-0 my-5">
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <span
                      className="subheading"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "35px",
                      }}
                    >
                      SAURABH SRIVASTAVA{" "}
                    </span>

                    <h2
                      className="font-weight-bolder"
                      style={{ color: "#1ba12d" }}
                    >
                      Chartered Accountant
                    </h2>
                    <h1
                      className="mb-3 banner-text-title"
                      style={{ fontSize: "30px" }}
                    >
                      Welcome to the world of finance & taxation
                    </h1>
                  </div>
                  <p>
                    <Link href="/contact" className="btn btn-primary ">
                      Connect with me
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-item py-md-5 slider-mobile slider-2"
          style={{
            backgroundImage: "url(/images/gradientbg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center py-md-5">
              <div className="col-md-8 ">
                <div className="text w-100 text-center py-lg-5 py-md-0 my-5">
                  <h2
                    className="font-weight-bolder"
                    style={{ color: "#1ba12d" }}
                  >
                    I Support your Business
                  </h2>
                  <h2 className="mb-3">The Best Business Support</h2>
                  <p>
                    <Link href="/contact" className="btn btn-primary ">
                      Connect with me
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-item py-md-5 slider-mobile slider-3"
          style={{
            backgroundImage: "url(/images/bg_3.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row no-no-gutters slider-text align-items-center justify-content-center py-md-5">
              <div className="col-md-8 ">
                <div className="text w-100 text-center py-lg-5 py-md-0 my-5">
                  <h2
                    className="font-weight-bolder"
                    style={{ color: "#1ba12d" }}
                  >
                    I Provide Professional Advice
                  </h2>
                  <h2 className="mb-3">Expert Advice</h2>
                  <p>
                    <a href="/contact" className="btn btn-primary">
                      Connect with me
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>

      <section className="ftco-section ftco-no-pt bg-light overflow-hidden position-relative ">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="col-md-6 d-flex "
            >
              <div
                className="mt-5 img shadow img-fluid img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
                style={{
                  backgroundImage: "url(/images/ca-home-img.jpg)",
                  borderRadius: "4px",
                }}
              />
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="col-md-6 pl-md-5 py-md-5"
            >
              <div className="heading-section pl-md-4 pt-md-5">
                <span className="subheading">CA SAURABH SRIVASTAVA </span>

                <h2 className="mb-4">Why Should you Hire Me ?</h2>
              </div>
              <div className="services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <img src="/images/wealth.png" alt="CA Saurabh Logo" />
                </div>
                <div className="text pl-4">
                  <h4> Company Law</h4>
                  <p>
                    The Companies Act, 2013 governs the activities of domestic
                    and foreign entities seeking to establish a presence in
                    India. With my extensive background in corporate compliance
                    services, I bring forth specialized expertise in ensuring
                    compliance with corporate regulations and providing
                    secretarial support right from its initial setup to its
                    annual maintenance process, providing comprehensive and
                    strategic secretarial support throughout.{" "}
                  </p>
                </div>
              </div>
              <div className="services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-accountant" />
                  <img src="/images/cash-flow.png" alt="cash-flow management" />
                </div>
                <div className="text pl-4">
                  <h4>CFO Services, Financial forecasting </h4>
                  <p>
                    Tax, compliance, and payroll services are essential for
                    businesses to ensure they meet legal obligations. I
                    customize my services to meet clients&#39; unique needs,
                    providing added value by delivering practical solutions.
                  </p>
                </div>
              </div>
              <div className="services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-teamwork" />
                  <img
                    src="/images/accountant.png"
                    alt="best accountant services "
                  />
                </div>
                <div className="text pl-4">
                  <h4>GST (Goods And Services Tax)</h4>
                  <p>
                    Developed and implemented GST strategies for businesses to
                    optimize tax planning Extensive experience in GST
                    compliance.
                  </p>
                </div>
              </div>
              <div className="services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-accounting" />
                  <img
                    src="/images/healthcare.png"
                    alt="financial forecasting in financial management"
                  />
                </div>
                <div className="text pl-4">
                  <h4>Foreign Exchange Management Act</h4>
                  <p>
                    Extensive experience in foreign exchange regulations and
                    compliance. With a wealth of experience in foreign exchange
                    regulations and compliances, I am well-equipped to assist
                    you in meeting your specific FEMA requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light ftco-no-pt ">
        <div className="container">
          <div className="row flex-xl-nowrap">
            <div className="card-deck">
              <div className="card border-0 col-sm-4 p-0">
                <div className="card-body">
                  <h4 className="card-title h4 programme-degree">
                    <u>CL</u>
                  </h4>
                  <p className="card-text font-weight-bold programme-title lead">
                    Company Law
                  </p>
                  <p className="card-text programme-summary">
                    My services extend beyond offering guidance on compliance
                    with these regulations. I also provide comprehensive
                    secretarial support, facilitating the seamless incorporation
                    of companies .
                  </p>
                </div>
              </div>
              <div className="card border-0 col-sm-4 p-0">
                <div className="card-body">
                  <h4 className="card-title h4 programme-degree">
                    <u>TCP</u>
                  </h4>
                  <p className="card-text font-weight-bold programme-title lead">
                    CFO Services, Financial forecasting
                  </p>
                  <p className="card-text programme-summary">
                    Tax, compliance, and payroll services are essential for
                    businesses to ensure they meet legal obligations. This
                    includes calculating and filing taxes, adhering to
                    regulations.
                  </p>
                </div>
              </div>
              <div className="card border-0 col-sm-4 p-0">
                <div className="card-body">
                  <h4 className="card-title h4 programme-degree">
                    <u>GST</u>
                  </h4>
                  <p className="card-text font-weight-bold programme-title lead">
                    GST (Goods And Services Tax)
                  </p>
                  <p className="card-text programme-summary">
                    Developed and implemented GST strategies for businesses to
                    optimize tax planning Extensive experience in GST
                    compliance, advisory, and implementation.
                  </p>
                </div>
              </div>
              <div className="card border-0 col-sm-4 p-0">
                <div className="card-body">
                  <h4 className="card-title h4 programme-degree">
                    <u>FEMA</u>
                  </h4>
                  <p className="card-text font-weight-bold programme-title lead">
                    Foreign Exchange Management Act
                  </p>
                  <p className="card-text programme-summary">
                    Extensive experience in foreign exchange regulations and
                    compliance. Assisted clients with inbound and outbound
                    investments, foreign collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Counter />

      <Faqs />

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center pb-5 mb-3">
            <div className="col-md-7 heading-section text-center ">
              <span className="subheading">Blogs &amp; Article</span>
              <h2>Latest Blogs from our Article</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 d-flex ">
              <div className="blog-entry align-self-stretch">
                <a
                  // href="blog-single.html"
                  className="block-20 rounded"
                  style={{ backgroundImage: 'url("/images/image_1.webp")' }}
                ></a>
                <div className="text p-4">
                  <h2
                    className="p-md-0 p-3"
                    style={{ fontSize: "19px", color: "#1ba12d" }}
                  >
                    Understanding GST Implications
                  </h2>
                  <h3 className="heading">
                    <p className="p-md-0 p-3" style={{ textAlign: "justify" }}>
                      During its 50th meeting, the GST council took a
                      significant step by reducing the GST rate on food and
                      beverages sold in movie theaters from 18% to 5%. This
                      adjustment was further clarified in Circular no.
                      201/13/2023, dated 1-8-23, which stipulated that the
                      supply of food and beverages within a cinema hall should
                      be treated as taxable restaurant services. The circular
                      also specified that when ticket sales and the supply of
                      food and beverages are combined, it constitutes a
                      composite supply.
                    </p>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ">
              <div className="blog-entry align-self-stretch">
                <a
                  // href="blog-single.html"
                  className="block-20 rounded"
                  style={{ backgroundImage: 'url("/images/image_2.webp")' }}
                ></a>
                <div className="text p-4">
                  <h2
                    className="p-md-0 p-3"
                    style={{ fontSize: "19px", color: "#1ba12d" }}
                  >
                    Navigating GST
                  </h2>
                  <h3 className="heading">
                    <p className="p-md-0 p-3" style={{ textAlign: "justify" }}>
                      The{" "}
                      <a
                        className="link-text"
                        href="https://en.wikipedia.org/wiki/Goods_and_Services_Tax_(India)"
                      >
                        {" "}
                        Goods and Services Tax (GST)
                      </a>{" "}
                      regime in India has transformed the taxation landscape,
                      and chartered accountants play a pivotal role in helping
                      businesses navigate its complexities. In this article, we
                      provide a comprehensive guide for chartered accountants,
                      offering insights and strategies to effectively manage GST
                      compliance and optimization for their clients. Chartered
                      accountants are indispensable in guiding businesses
                      through the complexities of{" "}
                      <a
                        className="link-text"
                        href="https://casaurabhsrivastava.com/gst-service"
                      >
                        GST Services
                      </a>{" "}
                      and optimization.
                    </p>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ">
              <div className="blog-entry align-self-stretch">
                <a
                  // href="blog-single.html"
                  className="block-20 rounded"
                  style={{ backgroundImage: 'url("/images/image_3.webp")' }}
                ></a>
                <div className="text p-4">
                  <h2
                    className="p-md-0 p-3"
                    style={{ fontSize: "19px", color: "#1ba12d" }}
                  >
                    ESG Reporting and Sustainability
                  </h2>
                  <h3 className="heading">
                    <p className="p-md-0 p-3" style={{ textAlign: "justify" }}>
                      Environmental, Social, and Governance (ESG) considerations
                      have become central to corporate strategy and reporting.
                      Chartered Accountants (CAs) are uniquely positioned to
                      assist organizations in navigating the complexities of ESG
                      reporting and sustainability initiatives. In this article,
                      we explore the evolving role of CAs in ESG reporting and
                      how they can provide invaluable guidance to businesses in
                      this increasingly important area. CAs have a critical role
                      to play in helping organizations meet ESG reporting
                      expectations.
                    </p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
