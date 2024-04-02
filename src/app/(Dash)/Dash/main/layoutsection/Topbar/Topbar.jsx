"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "../../../Assets/style.css";

function Topbar() {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("token");
    router.push("/Dash/auth/login");
  };
  const refreshPage = () => {
    // Reload the current page
    window.location.reload();
  };
  return (
    <header className="app-header fixed-top">
      <div className="app-header-inner">
        <div className="container-fluid py-2">
          <div className="app-header-content">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto">
                <a
                  id="sidepanel-toggler"
                  className="sidepanel-toggler d-inline-block d-xl-none"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#sidepanel-toggler"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 30 30"
                    role="img"
                  >
                    <title>Menu</title>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={2}
                      d="M4 7h22M4 15h22M4 23h22"
                    />
                  </svg>
                </a>
              </div>

              <div className="app-utilities col-auto">
                {/* Refresh icon/button */}

                <button
                  style={{ backgroundColor: "#1ba12d", color: "#fff" }}
                  className="btn p-1 rounded-1 me-5"
                  onClick={refreshPage}
                >
                  <svg
                    height="18"
                    viewBox="0 0 22 22"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.549 4.0775C15.7258-.64376 8.79914-1.37178 4.07788 2.45142-.64376 6.27462-1.37178 13.2013 2.45142 17.9226s10.7499 5.4493 15.4711 1.6261c2.77835-2.2499 4.17382-5.57446 4.07271-8.8919l-.50461-.11039-1.5242-.33345c.25007 2.8787-.88794 5.82614-3.30254 7.78145-3.86285 3.12808-9.53012 2.53242-12.6582-1.33043-3.12808-3.86285-2.53242-9.53012 1.33043-12.6582 3.86285-3.12808 9.53012-2.53242 12.6582 1.33043l-2.33144 1.88796 6.25519 1.36845-.03802-6.40301"
                      fill="#FFFFFF"
                      transform="matrix(-1 0 0 1 22.001 0)"
                    />
                  </svg>{" "}
                  Refresh
                </button>

                <div className="app-utility-item app-user-dropdown dropdown">
                  <a
                    className="dropdown-toggle"
                    id="user-dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    <img
                      className="rounded-circle"
                      src="/images/userprofile.png"
                      alt="user profile"
                    />
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="user-dropdown-toggle"
                  >
                    <li onClick={logout}>
                      <a className="dropdown-item">Log Out</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
