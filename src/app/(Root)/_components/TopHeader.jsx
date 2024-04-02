import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const TopHeader = () => {
  const handleEmailLink = (email) => {
    const mailtoLink = `mailto:${email}`;
    return mailtoLink;
  };
  return (
    <>
      <div className="wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="bg-wrap">
                <div className="row align-items-center">
                  <div className="col-md-6 col-8 d-flex align-items-center">
                    <p className="mb-0 phone pl-md-2">
                      <Link
                        href="tel:919900085630"
                        className=" top-header-contact"
                      >
                        <FontAwesomeIcon icon="fa-solid fa-phone mr-1" />
                        <BsTelephoneFill className="m-md-2" />
                        +91-9900085630
                      </Link>
                      <a href={handleEmailLink("info@casaurabhsrivastava.com")}>
                        <BsFillEnvelopeFill className="m-md-2" />{" "}
                        info@casaurabhsrivastava.com
                      </a>
                    </p>
                  </div>
                  <div className="col-md-6 col-4 d-flex justify-content-md-end">
                    <div className="social-media">
                      <p className="mb-0 d-flex">
                        <Link
                          href="https://www.facebook.com/casaurabhsrivastavavaluer/"
                          target="_blank"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span>
                            <FaFacebookF />
                          </span>
                        </Link>
                        <Link
                          href="https://www.instagram.com/ca_srivastava/"
                          target="_blank"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span>
                            <FaInstagram />
                          </span>
                        </Link>

                        <Link
                          href="https://twitter.com/ca_srivastava"
                          target="_blank"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span>
                            <RiTwitterXFill />
                          </span>
                        </Link>
                        <Link
                          href="https://www.linkedin.com/in/ca-saurabh-srivastava-valuer/0"
                          target="_blank"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span>
                            <FaLinkedinIn />
                          </span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
