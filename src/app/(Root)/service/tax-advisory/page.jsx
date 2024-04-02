"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";
import Head from "next/head";
import Faqs from "../../_components/Faqs";

function Page() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Expert Tax Advisory Services | CA Saurabh Srivastava</title>
        <meta
          name="description"
          content="Navigate tax complexities with confidence. CA Saurabh Srivastava offers expert Tax Advisory Services to optimize your financial strategies and ensure compliance. Explore our solutions now."
        />
        <meta
          name="keywords"
          content="CFO Services, Valuation Services, Goods and Service tax, Accounts & MIS, GST Services, CFO Services, tax advisory in india, Drafting Agreements, tax compliance"
        ></meta>
        <link
          rel="canonical"
          href="https://casaurabhsrivastava.com/TaxAdvisory"
        />
      </Head>
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: 'url("/images/bannerService.jpg")',
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
                  <a href="/">
                    Home <i className="ion-ios-arrow-forward" />
                  </a>
                </span>{" "}
                <span>
                  Services <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Services</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt bg-light ftco-no-pb-40">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 d-flex">
              <div
                className=" mt-5 img img-fluid shadow-lg img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
                style={{
                  backgroundImage: "url(/images/caService.png)",
                  borderRadius: "4px",
                }}
                alt="Ca Services"
              />
            </div>
            <div className="col-md-6 pl-md-5">
              <div className="heading-section pl-md-4 mt-md-5">
                <span className="subheading">CA SAURABH SRIVASTAVA</span>
                <h2 className="mb-4">Why Should you Hire Me ?</h2>
              </div>
              <div className="services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-accountant" />
                  <img alt="Accountant Services" src="/images/accountant.png" />
                </div>
                <div className="text pl-4">
                  <h4>Company Law</h4>
                  <p>
                    The Companies Act, 2013 governs the activities of domestic
                    and foreign entities seeking to establish a presence in
                    India. With my extensive background in corporate compliance
                    services, I bring forth specialized expertise in ensuring
                    compliance with corporate regulations and providing
                    secretarial support right from its initial setup to its
                    annual maintenance process, providing comprehensive and
                    strategic secretarial support throughout.
                  </p>
                </div>
              </div>

              <div className="services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-wealth" />

                  <img src="/images/wealth.png" alt="CA Saurabh Logo" />
                </div>
                <div className="text pl-4">
                  <h4> Accounts & MIS</h4>
                  <p>
                    I assist you by conducting planning, forecasting, budgeting,
                    and analytical activities to strengthen your crucial
                    business decisions and ensure overall financial well-being.{" "}
                  </p>
                </div>
              </div>
              <div className="services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <img src="/images/accountant.png" alt="Accountant Services" />
                </div>
                <div className="text pl-4">
                  <h4>GST Services</h4>
                  <p>
                    I can provide expert guidance in navigating complex GST
                    regulations, minimizing liabilities, optimizing financial
                    strategies for individuals and businesses, and ensuring
                    compliance.
                  </p>
                </div>
              </div>
              <div className="services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <img src="/images/healthcare.png" alt="CFO Services" />
                </div>
                <div className="text pl-4">
                  <h4>CFO Services</h4>
                  <p>
                    Tax, compliance, and payroll services are essential for
                    businesses to ensure they meet legal obligations. I
                    customize my services to meet clients&apos; unique needs,
                    providing added value by delivering practical solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pt-40 ftco-no-pb-40">
        <div className="container">
          <div className="row justify-content-center pb-3">
            <div className="col-md-7 heading-section text-center ">
              <h2>Services</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 d-flex">
              <div className="blog-entry align-self-stretch">
                <div className="text text-center p-4">
                  <Link
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "20px",
                      display: "inline-block",
                      color: "#1ba12d",
                    }}
                    rel="noopener noreferrer"
                    href="/service/company-service"
                    onClick={() => scroll.scrollToTop()}
                  >
                    Company Law Services
                  </Link>
                  <div className="heading-section text-center p-md-0 p-2">
                    <p data-aos="fade-up" data-aos-duration="1000">
                      Formation of company in India, viz, Private Limited,
                      Public Limited, wholly owned subsidiary company, LLP etc.
                      societies, and trusts and handling their statutory
                      compliance.
                    </p>
                    <p data-aos="fade-up" data-aos-duration="1000">
                      Consulting, drafting, and maintaining on the Articles of
                      Association (AOA) and Memorandum of Association (MOA),
                      statutory registers, and records.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ">
              <div className="blog-entry align-self-stretch">
                <div className="text text-center p-4">
                  <Link
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "20px",
                      display: "inline-block",
                      color: "#1ba12d",
                    }}
                    rel="noopener noreferrer"
                    href="/service/gst-service"
                    onClick={() => scroll.scrollToTop()}
                  >
                    Goods and Service tax
                  </Link>
                  <div className="heading-section text-center  p-md-0 p-2">
                    <p data-aos="fade-up" data-aos-duration="1000">
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        Written Opinions / Clarifications
                      </span>{" "}
                      on GST Issues: This service involves providing legal
                      opinions and clarifications on any specific issues related
                      to GST that clients may have.
                    </p>
                    <p data-aos="fade-up" data-aos-duration="1000">
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        Drafting Agreements{" "}
                      </span>
                      to avoid tax demand and litigation: This service entails
                      helping clients draft agreements that are in line with GST
                      regulations to avoid potential tax demands and legal
                      disputes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ">
              <div className="blog-entry align-self-stretch">
                <div className="text text-center p-4">
                  <Link
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "20px",
                      display: "inline-block",
                      color: "#1ba12d",
                    }}
                    rel="noopener noreferrer"
                    href="/service/valuation-service"
                    onClick={() => scroll.scrollToTop()}
                  >
                    Valuation Services
                  </Link>
                  <div className="heading-section text-center  p-md-0 p-2">
                    <p data-aos="fade-up" data-aos-duration="1000">
                      Valuations are required under different statutory laws
                      such as the Income Tax Act, 1961 (IT Act), the Companies
                      Act, 2013 (CA 2013), the Foreign Exchange Management Act,
                      1999 (FEMA), the Insolvency and Bankruptcy Code, 2016
                      (IBC) and the Securities and Exchange Board of India Act
                      (SEBI). I can issue a valuation report under these Acts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light ftco-no-pt ftco-no-pb-40 ">
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
                    of companies and subsidiaries, both within India and
                    internationally.At each juncture, businesses must adhere to
                    a myriad of provisions.
                  </p>
                </div>
              </div>
              <div className="card border-0 col-sm-4 p-0">
                <div className="card-body">
                  <h4 className="card-title h4 programme-degree">
                    <u>AM</u>
                  </h4>
                  <p className="card-text font-weight-bold programme-title lead">
                    Accounts & MIS
                  </p>
                  <p className="card-text programme-summary">
                    Accounting involves the systematic recording, analysis, and
                    interpretation of financial transactions. It provides
                    insights into a business&apos;s financial health and helps
                    in decision-making, budgeting, and tax compliance.Accounts &
                    MIS: Bridging financial management and data systems for
                    strategic decision-making.
                  </p>
                </div>
              </div>

              <div className="card border-0 col-sm-4 p-0">
                <div className="card-body">
                  <h4 className="card-title h4 programme-degree">
                    <u>TS</u>
                  </h4>
                  <p className="card-text font-weight-bold programme-title lead">
                    Taxation Services
                  </p>
                  <p className="card-text programme-summary">
                    My business taxation services deliver tailor-made services
                    that aim to help Individuals, mid size business entities and
                    catering to businesses of all scales in the domains of tax
                    compliance, consulting, and tax advisory, we advocate for
                    our clients in dealings with{" "}
                    <a href="https://incometaxindia.gov.in/acts/indian%20income-tax%20act,%201922/102120000002045766.htm">
                      tax authorities
                    </a>{" "}
                    for assessments.
                  </p>
                </div>
              </div>
              <div className="card border-0 col-sm-4 p-0">
                <div className="card-body">
                  <h4 className="card-title h4 programme-degree">
                    <u>CFO</u>
                  </h4>
                  <p className="card-text font-weight-bold programme-title lead">
                    CFO Services
                  </p>
                  <p className="card-text programme-summary">
                    Growth and funding access services assist businesses in
                    expanding their operations and securing the necessary
                    capital. This involves strategies for growth, fundraising.I
                    provide comprehensive CFO services to small business and
                    startups. This includes Accounting and MIS, forecasting and
                    business valuation services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faqs />
    </>
  );
}

export default Page;
