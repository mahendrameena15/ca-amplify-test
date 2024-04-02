"use client";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "antd";
import Link from "next/link";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const redirectToHomePage = () => {
    window.location.href = "/"; // Replace '/' with the URL of your home page
  };
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

  const items = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" href="/GstService">
          Goods and Service tax
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link rel="noopener noreferrer" href="/company-law-services">
          Company Law Services
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link rel="noopener noreferrer" href="/ValuationService">
          Valuation Services
        </Link>
      ),
    },
  ];

  // Define a function to get the page title based on the current location
  const GetPageTitle = () => {
    // useLocation hook to get the current location
    const location = useLocation();

    switch (location.pathname) {
      case "/":
        return "Home";
      case "/about-us":
        return "About Us";
      case "/taxAdvisory":
        return "Services";
      case "/blog":
        return "Blog";
      case "/article":
        return "Articles";
      case "/contactus":
        return "Contact Us";
      default:
        return "Your Default Title";
    }
  };

  useEffect(() => {
    // Get all the navbar links
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Add a click event listener to each link
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        // Close the collapse navbar when a link is clicked
        var navbarCollapse = document.getElementById("ftco-nav");
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{GetPageTitle()}- CA SAURABH SRIVASTAVA</title>
      </Helmet>
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
            src="/images/CA logo.png"
            className="img-fluid "
            alt="CA logo"
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
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink exact href="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact href="/about-us" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                >
                  <NavLink exact href="/taxAdvisory" className="nav-link">
                    <span>Services</span>
                  </NavLink>
                </Dropdown>
              </li>

              <li className="nav-item">
                <NavLink exact href="/blog" className="nav-link">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact href="/article" className="nav-link">
                  Articles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact href="/contact-us" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            exact
            href="https://www.bahlchandhoke.com"
            className="btn btn-primary d-block px-2 px-4"
            target="_blank"
          >
            Know My Firm
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
