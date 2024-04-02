"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { animateScroll as scroll } from "react-scroll";
import { GrMenu } from "react-icons/gr";
function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Added state for toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Added state for toggle

  const redirectToHomePage = () => {
    router.push("/"); // Replace '/' with the URL of your home page
  };
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
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
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsOpen(true);
  };

  const items = [
    {
      key: "1",
      label: (
        <Link
          rel="noopener noreferrer"
          href="/tax-advisory"
          onClick={() => scroll.scrollToTop()}
        >
          All Services
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          rel="noopener noreferrer"
          href="/company-law-services"
          onClick={() => scroll.scrollToTop()}
        >
          Company Law Services
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          rel="noopener noreferrer"
          href="/gst-service"
          onClick={() => scroll.scrollToTop()}
        >
          Goods and Service tax
        </Link>
      ),
    },

    {
      key: "4",
      label: (
        <Link
          rel="noopener noreferrer"
          href="/valuation-service"
          onClick={() => scroll.scrollToTop()}
        >
          Valuation Services
        </Link>
      ),
    },
  ];

  // Define a function to get the page title based on the current location
  const GetPageTitle = () => {
    // useLocation hook to get the current location
    if (!router.isReady) return "Loading...";
    switch (router.pathname) {
      case "/":
        return "Home";
      case "/about-us":
        return "About Me";
      case "/TaxAdvisory":
        return "Services";
      case "/gst-service":
        return "Services";
      case "/company-law-services":
        return "Services";
      case "/valuation-service":
        return "Services";
      case "/blog":
        return "Blog";
      case "/contact-us":
        return "Contact Me";
      default:
        return "CA SAURABH SRIVASTAVA";
    }
  };

  // useEffect(() => {
  //   // Get all the navbar links and dropdown items
  //   var navItems = document.querySelectorAll(".navbar-nav .nav-item");
  //   var dropdownItems = document.querySelectorAll(".navbar-nav .dropdown-item");

  //   // Add a click event listener to each link and dropdown item
  //   navItems.forEach(function (item) {
  //     item.addEventListener("click", function (event) {
  //       // Close the collapse navbar when a link is clicked
  //       var navbarCollapse = document.getElementById("ftco-nav");
  //       if (navbarCollapse.classList.contains("show")) {
  //         navbarCollapse.classList.remove("show");
  //       }
  //     });
  //   });

  //   dropdownItems.forEach(function (item) {
  //     item.addEventListener("click", function (event) {
  //       // Prevent the default behavior of the link
  //       event.preventDefault();
  //       // You can add additional logic here if needed for handling dropdown item selection

  //       var navbarCollapse = document.getElementById("ftco-nav");
  //       if (navbarCollapse.classList.contains("show")) {
  //         navbarCollapse.classList.remove("show");
  //       }
  //     });
  //   });
  // }, []);

  return (
    <>
      <Head>
        <title>{GetPageTitle()}- CA SAURABH SRIVASTAVA</title>
      </Head>
      <nav
        className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ${
          isScrolled ? "fixed-header" : ""
        }`}
        id="ftco-navbar"
      >
        <div className="container">
          {/* <a className="navbar-brand" href="index.html">
          Chartered Accountant
          </a> */}
          <img
            onClick={redirectToHomePage}
            src="/images/CA-Saurabh-logo.png"
            className="img-fluid "
            alt="CA"
            style={{
              width: "25%",
              cursor: "pointer",
            }}
          />

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            onClick={toggleMenu}
            aria-controls="ftco-nav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <GrMenu style={{ color: "#000" }} /> Menu
          </button>
          <div
            className={`collapse navbar-collapse justify-content-center ${
              isOpen ? "show" : ""
            }`}
            id="ftco-nav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link
                  href="/"
                  className="nav-link"
                  onClick={() => {
                    scroll.scrollToTop();
                    setIsOpen(false);
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  scroll.scrollToTop();
                  setIsOpen(false);
                }}
              >
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  href="javascript:void(0)"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  onClick={toggleDropdown}
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  <span onClick={toggleDropdown}>Services</span>
                </Link>
                <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      href="/service/tax-advisory"
                      onClick={() => {
                        scroll.scrollToTop();
                        setIsOpen(false);
                      }}
                    >
                      All Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      href="/service/company-service"
                      onClick={() => {
                        scroll.scrollToTop();
                        setIsOpen(false);
                      }}
                    >
                      Company Law Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      href="/service/gst-service"
                      onClick={() => {
                        scroll.scrollToTop();
                        setIsOpen(false);
                      }}
                    >
                      Goods and Service tax
                    </Link>
                  </li>
                  <li role="separator" className="divider" />
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      href="/service/valuation-service"
                      onClick={() => {
                        scroll.scrollToTop();
                        setIsOpen(false);
                      }}
                    >
                      Valuation Services
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  href="/blog"
                  className="nav-link"
                  onClick={() => {
                    scroll.scrollToTop();
                    setIsOpen(false);
                  }}
                >
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/contact"
                  className="nav-link"
                  onClick={() => {
                    scroll.scrollToTop();
                    setIsOpen(false);
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="https://www.bahlchandhoke.com"
            className="btn btn-primary d-block px-2 px-4"
            target="_blank"
          >
            Know My Firm
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
