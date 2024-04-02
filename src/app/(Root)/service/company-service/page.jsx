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
          {" "}
          Expert Company Law Services in Bangalore, India | Casaurabh Srivastava
        </title>
        <meta
          name="description"
          content="Meta Description:Explore top-notch Company Law services in Bangalore, India at Casaurabh Srivastava. Our experts specialize in comprehensive Company Law services, ensuring compliance and success nationwide."
        />
        <meta
          name="keywords"
          content="Company law services in bangalore, Company law services, Company law services in india"
        ></meta>
        <link
          rel="canonical"
          href="https://casaurabhsrivastava.com/company-law-services"
        />
      </Head>
      <>
        <section
          className="hero-wrap hero-wrap-2"
          style={{
            backgroundImage: 'url("/images/companybanner.jpg")',
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
                    Company Law Services
                    <i className="ion-ios-arrow-forward" />
                  </span>
                </p>
                <h1 className="mb-0 bread">Company Law Services</h1>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="heading-section pl-md-4 pt-md-5 container text-center my-5">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              Company Incorporation Services
            </h2>
            <p
              style={{ textAlign: "justify" }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Formation of company in India, viz, Private Limited, Public
              Limited, wholly owned subsidiary company, LLP etc. societies, and
              trusts and handling their statutory compliance.
            </p>
            <p
              style={{ textAlign: "justify" }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Drafting, maintaining, and consulting on the Articles of
              Association (AOA) and Memorandum of Association (MOA), statutory
              registers, and records.
            </p>
            <p
              style={{ textAlign: "justify" }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Ensuring compliance for share buybacks and the issuance of public,
              rights, and bonus shares Maintenance of statutory books and
              records, conducting Board and General Meetings, and drafting
              resolutions and meeting minutes.
            </p>
          </div>
        </section>

        <section>
          <div className=" heading-section pl-md-4 pt-md-5  container text-center my-5">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              Regulatory Compliance Services
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
                  Preparing and maintaining Board / General meeting records.
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
                  Handling the appointment and remuneration of Directors
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
                  Appointment of Key Management Personnel (KMPs)
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
                  Preparation of Board of Directors meeting records and General
                  meeting records
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
                  Drafting CSR policies and calculation of CSR expenditure
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
                  Managing related party transactions
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
                  Loans to Directors etc.
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
                  Timely, accurate filing of returns, forms, with relevant
                  authorities.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="heading-section pl-md-4 pt-md-5  container text-center my-5">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              Entity Modifications and Company Law Consultancy
            </h2>
            <p
              style={{ textAlign: "justify" }}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Assisting with changes in the company&#39;s name, objects,
              registered office, and other related modifications. Registration
              of Charge, modification and its termination of charge.
            </p>

            <p
              style={{ textAlign: "justify" }}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Advising on legal requirements for share buybacks and managing
              issues related to private placement, rights shares, and bonus
              shares.
            </p>
          </div>
        </section>

        <section>
          <div className=" heading-section pl-md-4 pt-md-5  container text-center my-5">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              Corporate Restructuring Services
            </h2>

            <p
              style={{ textAlign: "justify" }}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Capital structure restructuring, such as increasing authorized
              share capital, reducing share capital, and issuing shares.Offering
              advice on strategic transactions such as mergers, de-mergers,{" "}
              <a href="https://en.wikipedia.org/wiki/Buyout">buy-outs</a>, joint
              ventures, alliances, and other corporate restructurings.
            </p>
          </div>
        </section>
      </>
    </>
  );
};

export default Page;
