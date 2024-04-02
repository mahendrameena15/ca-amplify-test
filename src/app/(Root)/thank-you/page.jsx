import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import "../Assets/style.css";

// Import specific icons
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function page() {
  return (
    <>
      <section className="login-main-wrapper">
        <div className="main-container">
          <div className="login-process">
            <div className="login-main-container">
              <div className="thankyou-wrapper">
                <div className="thankyou-img">
                  <img src="/images/thankyou.png" alt="thanks" />
                </div>

                <p>for contacting us, we will get in touch with you soon... </p>
                <div className="rounded-social-buttons mb-3">
                  <Link
                    className="social-button facebook"
                    href="https://www.facebook.com/casaurabhsrivastavavaluer
                                        /"
                    target="_blank"
                  >
                    <FaFacebookF className="mb-2" />
                  </Link>
                  <Link
                    className="social-button linkedin"
                    href="https://www.linkedin.com/in/ca-saurabh-srivastava-valuer/"
                    target="_blank"
                  >
                    <FaLinkedinIn className="mb-2" />
                  </Link>
                  <Link
                    className="social-button instagram"
                    href="https://www.instagram.com/ca_srivastava/"
                    target="_blank"
                  >
                    <FaInstagram className="mb-2" />
                  </Link>
                  <Link
                    className="social-button"
                    href="https://wa.me/919900085630"
                    target="_blank"
                  >
                    <FaWhatsapp className="mb-2" />
                  </Link>
                </div>

                <Link className="btn btn-primary px-2 px-4" href="/">
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
