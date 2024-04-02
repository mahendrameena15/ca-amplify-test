"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { Contactvalidate } from "@/app/(Root)/Schema";
import { mainUrl } from "../../../../config";

const initialValues = {
  fullName: "",
  email: "",
  subject: "",
  number: "",
  message: "",
};

const Footer = () => {
  const router = useRouter();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // const handleEmailLink = (email) => {
  //   const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  //   window.open(mailtoLink);
  // };
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    touched,
    resetForm,
    isValid,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: Contactvalidate,

    onSubmit: (values, { action }) => {},
  });

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const handlesave = () => {
    console.log("object");
    // Check if any required field is empty
    const requiredFields = Object.keys(values).filter(
      (key) => key !== "subject" && key !== "message"
    );
    const isAnyRequiredFieldEmpty = requiredFields.some(
      (key) => values[key] === ""
    );

    if (isAnyRequiredFieldEmpty) {
      // If any field is empty, do not proceed with the API call

      return;
    }

    fetch(`${mainUrl}/api/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.message === "Your message was sent, thank you!") {
          router.push("/thank-you");
          scroll.scrollToTop();
          resetForm();
        } else {
          console.error("Error sending message:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Update the button state based on form validity
  React.useEffect(() => {
    setIsButtonDisabled(!isValid);
  }, [isValid, values]);
  return (
    <>
      <footer className="footer">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className="col-md-12 col-lg-7 py-md-5">
              <div className="row">
                <div className="col-md-4 mb-md-0 mb-4 pt-md-0 pt-2">
                  <h2 className="footer-heading">Contact us</h2>
                  <p style={{ fontSize: "16px" }}>
                    <span className="text-white">Address:</span>{" "}
                    <a
                      className="address"
                      href="https://maps.app.goo.gl/kZu2u1AgKMmVEGXg8"
                    >
                      74, Royal Placid Layout, 3rd Cross, Near Harlur Main Road,
                      HSR Sector-2, Bengaluru, Karnataka- 560102
                    </a>
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    <span className="text-white">Phone:</span>{" "}
                    <a className="contact" href="tel://+91-9900085630">
                      +91-9900085630
                    </a>
                  </p>
                  <ul className="ftco-footer-social p-0">
                    <li className="">
                      <a
                        href="https://www.facebook.com/casaurabhsrivastavavaluer/"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="facebook"
                        target="_blank"
                      >
                        <FaFacebookF
                          style={{ marginTop: "10px", marginLeft: "12px" }}
                        />
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://www.instagram.com/ca_srivastava/"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Instagram"
                        target="_blank"
                      >
                        <FaInstagram
                          style={{ marginTop: "10px", marginLeft: "12px" }}
                        />
                      </a>
                    </li>

                    <li className="">
                      <a
                        href="https://twitter.com/ca_srivastava"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Twitter"
                        target="_blank"
                      >
                        <RiTwitterXFill
                          style={{ marginTop: "10px", marginLeft: "12px" }}
                        />
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://www.linkedin.com/in/ca-saurabh-srivastava-valuer/"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="LinkedinIn"
                        target="_blank"
                      >
                        <FaLinkedinIn
                          style={{ marginTop: "10px", marginLeft: "12px" }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-8">
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10">
                      <div className="row">
                        <div className="col-md-6 mb-md-0 mb-4">
                          <h2 className="footer-heading">Services</h2>
                          <ul className="list-unstyled">
                            <li>
                              <a
                                href="/service/tax-advisory"
                                className="py-1 d-block"
                              >
                                All Services
                              </a>
                            </li>
                            <li>
                              <a
                                href="/service/company-service"
                                className="py-1 d-block"
                              >
                                Company Law Services
                              </a>
                            </li>

                            <li>
                              <a
                                href="/service/gst-service"
                                className="py-1 d-block"
                              >
                                Goods And Service Tax
                              </a>
                            </li>
                            <li>
                              <a
                                href="/service/valuation-service"
                                className="py-1 d-block"
                              >
                                Valuation Services
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 mb-md-0 mb-4">
                          <h2 className="footer-heading">Discover</h2>
                          <ul className="list-unstyled">
                            <li>
                              <a href="/about" className="py-1 d-block">
                                About Me
                              </a>
                            </li>
                            <li>
                              <a href="/contact" className="py-1 d-block">
                                Contact Me
                              </a>
                            </li>
                            <li>
                              <a href="/blog" className="py-1 d-block">
                                Blogs
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 py-md-4 py-4 aside-stretch-right pl-lg-5 ">
              <h2 className="footer-heading pt-md-4 ">Get in touch</h2>
              <form onSubmit={handleSubmit} className="form-consultation">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="fullName"
                        id="fullName"
                        placeholder="Full Name"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.fullName && touched.fullName ? (
                        <div className="invalid-feedback d-block text-left">
                          {errors.fullName}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <div className="invalid-feedback d-block text-left">
                          {errors.email}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        name="number"
                        id="number"
                        placeholder="Mobile  No."
                        value={values.number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.number && touched.number ? (
                        <div className="invalid-feedback d-block text-left">
                          {errors.number}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    cols={30}
                    rows={3}
                    name="message"
                    className="form-control"
                    id="message"
                    placeholder="Message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="form-group">
                  <button
                    onClick={handlesave}
                    type="submit"
                    disabled={isButtonDisabled}
                    className="btn btn-primary px-3 w-100 px-3"
                    style={{ cursor: "pointer" }}
                  >
                    Book an appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <section className="bottom-footer">
        <div className="row align-items-center py-2">
          <div className="col-md-6">
            <p className="copyright mb-0 pl-5 text-light">
              Copyright 2023 @ by
              <a
                href="https://nextdynamix.com/"
                className="ml-1"
                target="_blank"
                style={{ paddingLeft: "10px" }}
              >
                Nextdynamix Tech (OPC) Pvt. Ltd.
              </a>
            </p>
          </div>
          <div className="col-md-6 ">
            <div
              className="d-flex justify-content-lg-end justify-content-center mr-5"
              style={{ textAlign: "right" }}
            >
              <a href="/terms-condition" className="py-1 d-block text-light">
                Terms &amp; Conditions
              </a>
              <span className="mx-2 text-light py-1">|</span>
              <a href="/privacy-policy" className="py-1 d-block text-light">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
