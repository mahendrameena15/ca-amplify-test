import React from "react";
import "../Assets/style.css";

function Animation() {
  return (
    <div>
      <section className="main-animation-container bg-gradient ">
        <div className="main-animation">
          <div className="big-circle">
            <div className="icon-block">
              <p>GST</p>
            </div>
            <div className="icon-block">
              <p>VAT</p>
            </div>
            <div className="icon-block">
              <p>CFO</p>
            </div>
            <div className="icon-block">
              <p>LAW</p>
            </div>
          </div>
          <div className="circle">
            <div className="icon-block">
              <img src="/images/vat.png" alt="app icon" />
            </div>
            <div className="icon-block">
              <img src="/images/data.png" alt="gst" />
            </div>
            <div className="icon-block">
              <img src="/images/tax1.png" alt="tax" />
            </div>
            <div className="icon-block">
              <img src="/images/law1.png" alt="company law " />
            </div>
          </div>
          <div className="center-animation-logo">
            <img src="\images\CA-Saurabh-logo.png" alt="logo" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Animation;
