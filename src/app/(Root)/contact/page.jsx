"use client";
import React from "react";
import { FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { BsFillTelephoneFill, BsGlobeAsiaAustralia } from "react-icons/bs";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Head from "next/head";
import { Contactvalidate } from "../Schema";
import { mainUrl } from "../../../../config";
import "../Assets/style.css";

const initialValues = {
  fullName: "",
  email: "",
  subject: "",
  number: "",
  message: "",
};

function Page() {
  const router = useRouter();
  const { handleChange, handleSubmit, touched, handleBlur, errors, values } =
    useFormik({
      initialValues,
      validationSchema: Contactvalidate,
      onSubmit: (values, actions) => {
        actions.resetForm();
      },
    });

  const handlesave = (actions) => {
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
        // Adjust the condition based on the API response structure
        if (data.message === "Your message was sent, thank you!") {
          // Assuming `navigate` is a function that redirects to the specified path
          router.push("/thank-you");
          // Reset the form after successful submission
          actions.resetForm();
        } else {
          console.error("Error sending message:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Head>
        <title>
          Get in Touch with CA Saurabh Srivastava | Contact Us Today
        </title>
        <meta
          name="description"
          content="Reach out to CA Saurabh Srivastava for inquiries, collaboration, or any assistance. Our team is here to help. Connect with us today and let's start a conversation."
        />
        <meta name="keywords" content="Connect with CA"></meta>
        <link
          rel="canonical"
          href="https://casaurabhsrivastava.com/contact-us"
        />
      </Head>
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: 'url("/images/contectbanner.jpg")',
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
                  Contact Me <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Contact Me</h1>
            </div>
          </div>
        </div>

        <div className="marquee">
          <div className="marquee__inner">
            <p className="marquee__line">
              Please do not hesitate to contact me at +91-9900085630 or via
              email at info@casaurabhsrivastava.com
            </p>
            <p className="marquee__line">
              Please do not hesitate to contact me at +91-9900085630 or via
              email at info@casaurabhsrivastava.com
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="heading-section pl-md-4 pt-md-5 container text-center my-5">
          <h2>Get in Touch</h2>
          <p>
            If you seek a Chartered Accountant who not only possesses expertise
            but also exudes passion, your search ends here. I am Saurabh
            Srivastava, the &apos;number whisperer&apos; poised to answer your
            financial queries.
          </p>
          <p>
            If you are interested in delving deeper into my experiences or
            envisaging potential business collaborations, please do not hesitate
            to contact me at <a href="tel://+91-9900085630"> +91-9900085630</a>{" "}
            or via email at
            <a href="mailto:info@casaurabhsrivastava.com">
              {" "}
              info@casaurabhsrivastava.com.
            </a>
          </p>
          <p>
            Let&apos;s embark on a journey of financial excellence together.
          </p>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-lg-8 col-md-12 order-md-last d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4 text-left">Get in touch</h3>
                      <div id="form-message-warning" className="mb-4" />
                      {/* <div
                        id="form-message-success "
                        className="mb-4 text-left"
                      >
                        Your message was sent, thank you!
                      </div> */}
                      <form onSubmit={handleSubmit} className="contactForm">
                        <div className="row">
                          <div className="col-md-6 ">
                            <div className="form-group text-left">
                              <label className="label" htmlFor="fullName">
                                Full Name
                              </label>

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
                            </div>

                            {errors.fullName && touched.fullName ? (
                              <div className="invalid-feedback d-block text-left">
                                {errors.fullName}
                              </div>
                            ) : null}
                          </div>

                          <div className="col-md-6">
                            <div className="form-group text-left">
                              <label className="label" htmlFor="email">
                                Email Address
                              </label>

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
                            </div>
                            {errors.email && touched.email ? (
                              <div className="invalid-feedback d-block text-left">
                                {errors.email}
                              </div>
                            ) : null}
                          </div>

                          <div className="col-md-6">
                            <div className="form-group text-left">
                              <label className="label" htmlFor="subject">
                                Subject
                              </label>
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
                            {/* {errors.subject && touched.subject ? (
                              <div className="invalid-feedback d-block text-left">
                                {errors.subject}
                              </div>
                            ) : null} */}
                          </div>

                          <div className="col-md-6">
                            <div className="form-group text-left">
                              <label className="label" htmlFor="subject">
                                Mobile No.
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                name="number"
                                id="number"
                                placeholder="Mobile No."
                                value={values.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                            {errors.number && touched.number ? (
                              <div className="invalid-feedback d-block text-left">
                                {errors.number}
                              </div>
                            ) : null}
                          </div>

                          <div className="col-md-12">
                            <div className="form-group text-left">
                              <label className="label" htmlFor="#">
                                Message
                              </label>
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols={30}
                                rows={4}
                                placeholder="Message"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                            {/* {errors.message && touched.message ? (
                              <div className="invalid-feedback d-block text-left">
                                {errors.message}
                              </div>
                            ) : null} */}
                          </div>

                          <div className="col-md-12">
                            <div className="form-group text-left">
                              <input
                                type="submit"
                                defaultValue="Get An Instant Consultant"
                                className="btn btn-primary"
                                onClick={handlesave}
                              />
                              <div className="submitting" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 d-flex align-items-stretch">
                    <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                      <h3>Let&apos;s get in touch</h3>
                      <p
                        style={{ fontSize: "16px" }}
                        className="mb-4 text-left text-white"
                      >
                        Please get in touch with me or just to have a chat
                      </p>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span />
                          <FaMapMarkerAlt />
                        </div>
                        <div className="text pl-3 text-left">
                          <p style={{ fontSize: "16px" }}>
                            <span>Address:</span>
                            <a href="https://maps.app.goo.gl/kZu2u1AgKMmVEGXg8">
                              {" "}
                              74, Royal Placid Layout, 3rd Cross, Near Harlur
                              Main Road, HSR Sector-2, Bengaluru, Karnataka-
                              560102
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center text-left">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span />
                          <BsFillTelephoneFill />
                        </div>
                        <div className="text pl-3">
                          <p style={{ fontSize: "16px" }}>
                            <span>Phone:</span>{" "}
                            <a href="tel://+91-9900085630">+91-9900085630</a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center text-left">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <FaPaperPlane />
                        </div>
                        <div className="text pl-3 text-left">
                          <p style={{ fontSize: "16px" }}>
                            <span>Email:</span>{" "}
                            <a href="mailto:info@casaurabhsrivastava.com">
                              info@casaurabhsrivastava.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span />
                          <BsGlobeAsiaAustralia />
                        </div>
                        <div className="text pl-3 text-left">
                          <p style={{ fontSize: "16px" }}>
                            <span>Website</span>{" "}
                            <a href="/">casaurabhsrivastava.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="google-map pt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.03080201322!2d77.66230957454565!3d12.90574091631984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13dc6a4e8f23%3A0xdc17405025cb018d!2sCA%20Saurabh%20Srivastava!5e0!3m2!1sen!2sin!4v1702017542066!5m2!1sen!2sin"
              width="1110"
              height="450"
              title="map"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
