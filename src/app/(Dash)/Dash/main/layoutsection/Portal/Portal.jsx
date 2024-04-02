import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import "../../../Assets/style.css";
function Portal() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">{/* <Outlet></Outlet> */}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portal;
