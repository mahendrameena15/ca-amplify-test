import {
  faFaceLaughWink,
  faTachographDigital,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import "../../../Assets/style.css";
import { useRouter } from "next/navigation";

function Sidebar() {
  return (
    <div id="sidepanel-toggler" className="app-sidepanel">
      <div id="sidepanel-drop" className="sidepanel-drop" />
      <div className="sidepanel-inner d-flex flex-column">
        <a
          id="sidepanel-toggler"
          className="sidepanel-close d-xl-none"
          href="#"
          data-bs-toggle="collapse"
          data-bs-target="#sidepanel-toggler"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          ×
        </a>
        <div className="app-branding">
          <a className="app-logo" href="/Dash/main/dashboard">
            <img
              className=" mb-2"
              src="/images/CA logo.png"
              alt="logo"
              style={{ width: "200px" }}
            />
          </a>
        </div>
        <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
          <ul className="app-menu list-unstyled accordion" id="menu-accordion">
            <li className="nav-item">
              <Link
                exact
                activeClassName="active"
                className="nav-link"
                href="/Dash/main/dashboard"
              >
                <span className="nav-icon">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-house-door"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                </span>
                <span className="nav-link-text">Dashboard </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-link"
                href="/Dash/main/blogsection/bloglist"
              >
                <span className="nav-icon">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-folder"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z" />
                    <path
                      fillRule="evenodd"
                      d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"
                    />
                  </svg>
                </span>
                <span className="nav-link-text">Blogs</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-link"
                href="/Dash/main/contactsection/contactus"
              >
                <span className="nav-icon">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-bar-chart-line"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
                    />
                  </svg>
                </span>
                <span className="nav-link-text">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
