"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import "../../Assets/style.css";
import { BsArrowRightShort } from "react-icons/bs";
import Head from "next/head";

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
          Unlock Growth with Expert Business Valuation Services | Casaurabh
          Srivastava
        </title>
        <meta
          name="description"
          content="Discover precise Business Valuation Services at CA Saurabh Srivastava. Our experts offer comprehensive Business Valuation Services to fuel your business success. Explore now!"
        />
        <meta
          name="keywords"
          content="Valuation Services, Business Valuation Services, Brand Valuation Services"
        ></meta>
        <link
          rel="canonical"
          href="https://casaurabhsrivastava.com/valuation-service"
        />
      </Head>
      <>
        <section
          className="hero-wrap hero-wrap-2"
          style={{
            backgroundImage: 'url("/images/valuationBanner.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
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
                    Valuation Services
                    <i className="ion-ios-arrow-forward" />
                  </span>
                </p>
                <h1 className="mb-0 bread">Valuation Services</h1>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="heading-section pl-md-4 pt-md-5 container text-center my-5">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              Valuation Services
            </h2>
            <p
              style={{ textAlign: "justify" }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Valuations are required under different statutory laws such as the
              Income Tax Act, 1961 (IT Act),The Companies Act, 2013 (CA 2013),
              the Foreign Exchange Management Act, 1999 (FEMA), the Insolvency
              and Bankruptcy Code, 2016 (IBC) and ,the{" "}
              <a href="https://en.wikipedia.org/wiki/Securities_and_Exchange_Board_of_India">
                {" "}
                Securities and Exchange Board of India Act - SEBI
              </a>
              . Each has different requirements to undertake the valuation under
              these statutes. I can issue a valuation report under various Acts
              namely as:
            </p>

            <ul className="text-left skills-list">
              <li className="list-unstyled fw-bolder skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block" data-aos="fade-left">
                  {" "}
                  Registered valuer under Companies Act, 2013
                </span>
              </li>
              <li className="list-unstyled skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block " data-aos="fade-left">
                  {" "}
                  Registered valuer under the Insolvency and Bankruptcy Code,
                  2016
                </span>
              </li>
              <li className="list-unstyled skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block " data-aos="fade-left">
                  {" "}
                  Chartered Accountant under the Income Tax Act, 1961
                </span>
              </li>
              <li className="list-unstyled skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block " data-aos="fade-left">
                  {" "}
                  Chartered Accountant under the Foreign Exchange Management
                  Act, 1999
                </span>
              </li>
            </ul>

            <p
              style={{ textAlign: "justify" }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Whether you are seeking a valuation for financial reporting, tax
              purposes, or strategic decision-making, I am poised to deliver
              accurate and insightful assessments tailored to your specific
              requirements. Call us:{" "}
              <a href="tel://+91-9900085630"> +91-9900085630</a>
            </p>
          </div>
        </section>

        <section>
          <div className=" heading-section pl-md-4 pt-md-4  container text-center my-5">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              Business Valuation Services
            </h2>

            <ul className="text-left skills-list">
              <li className="list-unstyled fw-bolder skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block" data-aos="fade-left">
                  {" "}
                  Valuation for further issue of shares and buy back of shares
                </span>
              </li>
              <li className="list-unstyled skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block " data-aos="fade-left">
                  {" "}
                  Merger and Acquisition
                </span>
              </li>
              <li className="list-unstyled skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block " data-aos="fade-left">
                  {" "}
                  Tangible Assets Valuation
                </span>
              </li>
              <li className="list-unstyled skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block " data-aos="fade-left">
                  {" "}
                  Valuation of Goodwill
                </span>
              </li>
              <li className="list-unstyled skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block " data-aos="fade-left">
                  {" "}
                  Intangible assets valuation including Brand etc and its
                  purchase price allocation
                </span>
              </li>
              <li className="list-unstyled skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block " data-aos="fade-left">
                  {" "}
                  Share-based Payment Valuation including sweat issue
                </span>
              </li>
              <li className="list-unstyled skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block " data-aos="fade-left">
                  {" "}
                  Fair value measurements in financial reporting
                </span>
              </li>
              <li className="list-unstyled skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block " data-aos="fade-left">
                  {" "}
                  Valuation Of Financial Securities, Instruments, &amp;
                  Derivatives
                </span>
              </li>
              <li className="list-unstyled skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block " data-aos="fade-left">
                  {" "}
                  Impairment Studies for Intangible Assets &amp; Goodwill
                </span>
              </li>
              <li className="list-unstyled skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block " data-aos="fade-left">
                  {" "}
                  Financial Modelling
                </span>
              </li>
            </ul>
          </div>
        </section>
      </>
    </>
  );
};

export default Page;
