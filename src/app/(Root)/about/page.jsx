"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import "../Assets/style.css";
import Animation from "./Animation";
import { BsArrowRightShort } from "react-icons/bs";
import Head from "next/head";
import Counter from "../home/Counter";
import Faqs from "../_components/Faqs";

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
          Explore Our Journey and Expertise | About CA Saurabh Srivastava
        </title>
        <meta
          name="description"
          content="Discover the story behind CA Saurabh Srivastava. Learn about our expertise, values, and commitment to excellence. Join us on our journey towards success."
        />
        <meta name="keywords" content="CA Saurabh Srivastava"></meta>
        <link rel="canonical" href="https://casaurabhsrivastava.com/about-us" />
      </Head>
      <>
        <section
          className="hero-wrap hero-wrap-2"
          style={{ backgroundImage: 'url("/images/aboutBanner.jpg")' }}
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
                    About Me <i className="ion-ios-arrow-forward" />
                  </span>
                </p>
                <h1 className="mb-0 bread">About Me</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section ftco-no-pt ftco-no-pb-20 bg-light">
          <div className="container">
            <div className="row d-flex no-gutters align-items-start">
              <div className="col-md-6 d-flex">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0 mt-5 pt-2"
                >
                  <img
                    style={{ borderRadius: "4px" }}
                    className="w-100 shadow"
                    src="/images/saurabh.jpg"
                    alt="CFO Services"
                  />
                </div>
              </div>
              <div className="col-md-6 pl-md-5 pb-md-0">
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="heading-section pl-md-4 pt-md-5"
                >
                  <span className="subheading" style={{ fontSize: "15px" }}>
                    Your Trusted CA{" "}
                  </span>
                  <h2 className="mb-2">Saurabh Srivastava, </h2>
                  <p style={{ textAlign: "justify" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "30px",
                        color: "black",
                      }}
                    >
                      Hello
                    </span>
                    , I am Saurabh Srivastava, a seasoned Chartered Accountant
                    and an IBBI Registered Valuer dedicated to achieving
                    excellence in the field of finance. With over 30 years of
                    experience, my expertise spans various domains, including
                    Audit,{" "}
                    <a href="https://casaurabhsrivastava.com/company-law-services">
                      {" "}
                      Company Law
                    </a>
                    ,
                    <a href="https://casaurabhsrivastava.com/gst-service">
                      {" "}
                      Goods and Service Tax
                    </a>{" "}
                    and the Foreign Exchange Management Act (FEMA). Going beyond
                    the conventional, I offer comprehensive Management
                    Consultancy Services, specializing in Virtual CFO services.
                    My strategic guidance and consulting support aim to ensure
                    regulatory compliance and optimize financial strategies for
                    clients, businesses, and organizations.
                  </p>
                  <p className="mt-1" style={{ textAlign: "justify" }}>
                    My journey into professional practice followed stints in
                    several multinational corporations. In my last term, I
                    served as the Chief Financial Officer for an India-based
                    sourcing office of a prominent UK retailer with a global
                    presence spanning over 60 countries. In this pivotal role, I
                    earned recognition for translating corporate vision into
                    actionable strategies. My responsibilities encompassed
                    adeptly navigating financial intricacies, taxation, and
                    strategic planning, forging strategic business alliances,
                    integrating finance functions, and establishing robust
                    financial systems and processes.
                  </p>
                </div>
              </div>
              <div className="col-12 mt-3">
                <p style={{ textAlign: "justify" }}>
                  A highly experienced and dedicated professional with over 30
                  years of expertise in GST, Company Law,{" "}
                  <a href="https://www.rbi.org.in/scripts/Fema.aspx">
                    FEMA (Foreign Exchange Management Act)
                  </a>
                  , and Valuations. Adept at providing strategic guidance and
                  consulting services to clients, businesses, and organizations,
                  ensuring compliance with relevant regulations, and optimizing
                  financial strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="heading-section pl-md-4 pt-md-5 container text-center">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              Corporate journey
            </h2>
            <p
              style={{ textAlign: "justify" }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              My journey into professional practice followed stints in several
              multinational corporations. In my previous employment, I held the
              position of Chief Financial Officer at an India-based sourcing
              office of a prominent UK retailer with a global presence across 60
              countries. In this pivotal role, I earned recognition for
              translating corporate vision into actionable strategies. My
              responsibilities encompassed adeptly navigating financial
              intricacies, taxation, and strategic planning, forging strategic
              business alliances, integrating finance functions, and
              establishing robust financial systems and processes. There, I
              spearheaded the entire finance and taxation operations for India
              and Bangladesh, including Transfer pricing and International
              taxation, Service tax, VAT, GST, and Company Law. I was doing
              business forecasting, budgeting, and cash flow management of US $
              380 million spread between India &amp; Bangladesh operations. I
              handled International Taxation matters, Double Taxation Avoidance
              agreements, Permanent establishment related issues, and drafting
              Withholding tax opinions on international matters.
            </p>
          </div>
        </section>

        <Animation />

        <section>
          <div className="heading-section pl-md-4 pt-md-5  container text-center">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              Professional Journey
            </h2>
            <p
              style={{ textAlign: "justify" }}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              With years dedicated to immersing myself in the intricate world of
              numbers, I am now stepping into a consulting role. I am excited to
              leverage my extensive industry experience and insights into this
              new consultancy capacity. Currently, I serve as a Partner at Bahl
              Chandhoke, a prestigious firm of Chartered Accountants that boasts
              a rich legacy of over forty years. With our well-established
              presence in Delhi, Faridabad, and Bengaluru, we have been
              diligently catering to the diverse financial needs of our clients
              across different regions. I specialize in Company Law, FEMA, and
              Goods and Service Tax matters, offering comprehensive expertise in
              managing and optimizing financial operations. With a focus on
              providing virtual CFO services, I ensure that businesses have
              access to top-tier financial guidance without the need for an
              in-house CFO or full-time Chartered Accountant. Moreover, I excel
              in designing and implementing advanced accounting and reporting
              systems while establishing robust internal controls that
              facilitate effective decision-making for mid-sized enterprises.
            </p>
            <p
              style={{ textAlign: "justify" }}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              In addition to my consultancy services, I provide specialized
              support to startups and mid-size companies through financial
              modeling and valuation services. This enables businesses to make
              informed decisions and develop strategies that drive sustainable
              growth and success. My holistic approach is tailored to meet the
              unique needs of each client, ensuring that they receive the most
              effective and tailored financial solutions for their specific
              circumstances.
            </p>
          </div>
        </section>

        <section>
          <div className=" heading-section pl-md-4 pt-md-5  container text-center">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              Education
            </h2>

            <p
              style={{ textAlign: "justify", fontWeight: "bold" }}
              data-aos="fade-right"
              data-aos-duration="1000"
              className="mb-4 text-dark text-left"
            >
              Alongside my Chartered Accountancy degree, I have obtained the
              following qualifications and participated in various activities:
            </p>

            <ul className="text-left skills-list">
              <li className="list-unstyled fw-bolder skills-list ">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block" data-aos="fade-left">
                  {" "}
                  Advanced Diploma in Management Accounting (CIMA, UK)
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
                  Executive MBA from IIM Calcutta
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
                  IBBI Registered Valuer (SFA Category)
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
                  Certificate course on GST from ICAI
                </span>
              </li>
            </ul>

            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="mb-4 text-dark text-left "
              style={{ fontWeight: "bold" }}
            >
              Other Activities:
            </p>
            <ul className="text-left">
              <li className="list-unstyled skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content d-inline-block " data-aos="fade-left">
                  {" "}
                  Was a Member of the Study Group of Finance and Investors
                  Protection Committee,ICAI
                </span>
              </li>

              <li className="list-unstyled d-flex justify-content-between skills-list">
                <span
                  className="icon d-inline-block mr-2"
                  data-aos="fade-right"
                >
                  <BsArrowRightShort className="arrow-list" />
                </span>
                <span className="content" data-aos="fade-left">
                  {" "}
                  Was a Member of the Study Group of the Company Law Committee,
                  ICAI, involved in preparing the Institute&apos;s
                  recommendations on the Company Law Bill, 2013, tabled in the
                  Parliament
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
                  Observer for the ICAI post-qualification course titled
                  Master&apos;s in Business Finance
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className=" heading-section pl-md-4 pt-md-5  container text-center">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              Expertise
            </h2>
            <p
              style={{ textAlign: "justify" }}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              My specialization lies in Audit, Company Law, transfer pricing,
              and Goods and Service Tax matters. However, I go beyond the
              ordinary, offering comprehensive Management Consultancy Services,
              including Virtual CFO services. My expertise ranges from auditing
              and advisory services to multinational companies to nurturing the
              growth of small enterprises. I handle, manage, and solve complex
              corporate problems with ease and provide value-added consultancy
              services. My approach goes beyond mere number-crunching; I bring
              vitality to financial data. My expertise extends to developing and
              implementing Accounting and Reporting Systems and designing
              Internal Controls to facilitate effective decision-making.
              Additionally, I provide invaluable Financial Modeling and
              Valuation services tailored to meet the needs of startups and
              mid-sized enterprises. As an IBBI Registered Valuer in the
              Securities or Financial Assets category, I have completed several
              business valuation assignments under Company Law and FEMA.
            </p>
          </div>
        </section>

        <section>
          <div className="heading-section pl-md-4 pt-md-5 container text-center">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="mb-4">
              My Approach
            </h2>
            <p
              style={{ textAlign: "justify" }}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              My expertise ranges from auditing and advisory services to
              multinational companies to nurturing the growth of small
              enterprises. I handle, manage, and solve complex corporate
              problems with ease and provide value-added consultancy services.
              My approach goes beyond mere number-crunching; I bring vitality to
              financial data.
            </p>
          </div>
        </section>

        <Faqs />

        <Counter />

        <section className="ftco-section ftco-no-pt bg-light">
          <div className="container">
            <div className="row d-flex no-gutters">
              <div className="col-md-6 d-flex">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="mt-5 img img-fluid shadow  img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
                  style={{
                    backgroundImage: "url(/images/caAbout.jpg)",
                    borderRadius: "4px",
                  }}
                  alt="cfo services in india"
                ></div>
              </div>
              <div className="col-md-6 pl-md-5 py-md-5">
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="heading-section pl-md-4 pt-md-5"
                >
                  <span className="subheading">Your Trusted CA </span>
                  <h2 className="mb-4">Saurabh Srivastava</h2>
                  <p style={{ textAlign: "justify" }}>
                    My expertise ranges from auditing and advisory services to
                    multinational companies to nurturing the growth of small
                    enterprises. I handle, manage, and solve complex corporate
                    problems with ease and provide value-added consultancy
                    services. My approach goes beyond mere number-crunching; I
                    bring vitality to financial data.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    So, if you seek a Chartered Accountant who not only
                    possesses expertise but also exudes passion, your search
                    ends here. I am Saurabh Srivastava, the &apos;number
                    whisperer&apos; poised to answer your financial queries.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    If you are interested in delving deeper into my experiences
                    or envisaging potential business collaborations, please do
                    not hesitate to contact me at{" "}
                    <a href="tel://+91-9900085630">+91-9900085630</a> or via
                    email at{" "}
                    <a href="mailto:info@casaurabhsrivastava.com">
                      info@casaurabhsrivastava.com.
                    </a>
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Let&apos;s embark on a journey of financial excellence
                    together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Page;
