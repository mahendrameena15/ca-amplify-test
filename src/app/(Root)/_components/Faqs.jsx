"use client";
import React, { useEffect } from "react";
// import "../../../app/Assets/style.css";
// import "../../../../app/Assets/style.css"
import "@/app/(Root)/Assets/style.css"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsChevronDown } from "react-icons/bs";
import "react-accessible-accordion/dist/fancy-example.css";

const Faqs = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init({
      duration: 1000,
      easing: "linear",
      once: false,
    });
  }, []);
  return (
    <>
      <section className="ftco-section ftco-no-pt bg-light ftco-faqs ftco-no-pb-20">
        <div className="container py-5">
          <div className="row p-0 m-0">
            <div className="col-lg-6">
              <div className="img-faqs w-100">
                <div
                  data-aos="zoom-in-down"
                  className="img mb-4 mb-sm-0"
                  style={{ backgroundImage: "url(/images/about-2.jpg)" }}
                  alt="about CA"
                />
                <div
                  data-aos="zoom-in-up"
                  className="img img-2 mb-4 mb-sm-0"
                  style={{ backgroundImage: "url(/images/about-1.webp)" }}
                  alt="CA Services"
                />
              </div>
            </div>
            <div className="col-lg-6 pl-lg-5">
              <div
                data-aos="zoom-in-left"
                className="heading-section mb-5 mt-5 mt-lg-0"
              >
                <span className="subheading">FAQs</span>
                <h2 className="mb-3">Frequently Asks Questions</h2>
                <p>
                  A Chartered Accountant (CA) is a professional financial expert
                  with extensive training and expertise in various aspects of
                  accounting, taxation, auditing, and financial management.
                </p>
              </div>
              <Accordion id="regularAccordionRobots">
                <AccordionItem className="mb-3">
                  <AccordionItemHeading>
                    <AccordionItemButton className="w-full">
                      <div className=" p-0" role="tab">
                        <h2 className="mb-0">
                          <button
                            className="accordion-button collapsed d-flex accordian1 py-3 px-4 w-full align-items-center justify-content-between btn btn-link w-100 rounded-md"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#headingOne"
                            aria-expanded="false"
                            aria-controls="headingOne"
                          >
                            <p
                              style={{ fontSize: "12px" }}
                              className="mb-0 text-left text-white"
                            >
                              What services do I, as a Chartered Accountant,
                              provide
                            </p>
                            <BsChevronDown />
                          </button>
                        </h2>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="p-0">
                    <div
                      id="headingOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#regularAccordionRobots"
                      style={{}}
                    >
                      <div className="accordion-body py-3 px-5">
                        <ol>
                          <li>Tax planning and compliance</li>
                          <li>Financial statement preparation</li>
                          <li>Business advisory and consulting</li>
                          <li>Financial forecasting and analysis</li>
                          <li>Mergers and acquisitions guidance</li>
                        </ol>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="mb-3">
                  <AccordionItemHeading>
                    <AccordionItemButton className="w-full">
                      <div className=" p-0" role="tab">
                        <h2 className="mb-0">
                          <button
                            className="accordion-button collapsed d-flex accordian1 py-3 px-4 w-full align-items-center justify-content-between btn btn-link w-100 rounded-md"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#headingTwo"
                            aria-expanded="false"
                            aria-controls="headingTwo"
                          >
                            <p
                              style={{ fontSize: "12px" }}
                              className="mb-0 text-left text-white"
                            >
                              What accounting and bookkeeping services do you
                              offer?
                            </p>
                            <BsChevronDown />
                          </button>
                        </h2>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="p-0">
                    <div
                      id="headingTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#regularAccordionRobots"
                      style={{}}
                    >
                      <div className="accordion-body py-3 px-5">
                        <ol>
                          <li> Financial Statement Preparation</li>
                          <li> Budgeting and Forecasting</li>
                          <li>
                            Accounts Payable (AP) and Receivable (AR) Management
                          </li>
                          <li>Expense Tracking and Analysis</li>
                          <li>Cloud-Based Accounting Solutions</li>
                        </ol>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem className="mb-3">
                  <AccordionItemHeading>
                    <AccordionItemButton className="w-full">
                      <div className=" p-0" role="tab">
                        <h2 className="mb-0">
                          <button
                            className="accordion-button collapsed d-flex accordian1 py-3 px-4 w-full align-items-center justify-content-between btn btn-link w-100 rounded-md"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#headingFor"
                            aria-expanded="false"
                            aria-controls="headingFor"
                          >
                            <p
                              style={{ fontSize: "12px" }}
                              className="mb-0 text-left text-light"
                            >
                              What is the importance of financial forecasting
                              for businesses?
                            </p>
                            <BsChevronDown />
                          </button>
                        </h2>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="p-0">
                    <div
                      id="headingFor"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFor"
                      data-bs-parent="#regularAccordionRobots"
                      style={{}}
                    >
                      <div className="accordion-body py-3 px-5">
                        <ol>
                          <li>
                            Financial forecasting is of paramount importance for
                            businesses as it provides a roadmap for their
                            financial journey.
                          </li>
                          <li>
                            It guides decision-making by setting clear goals and
                            helping allocate resources efficiently.
                          </li>
                          <li>
                            {" "}
                            Additionally, it enhances preparedness by allowing
                            businesses to anticipate and address potential
                            financial challenges and opportunities.
                          </li>
                          <li>
                            {" "}
                            Financial forecasts build confidence among investors
                            and lenders, making it easier to secure funding and
                            grow the business.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
