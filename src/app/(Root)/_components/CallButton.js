import React from "react";
import { BsTelephone } from "react-icons/bs";

function CallButton() {
  return (
    <>
      <div className="call-button">
        <a
          href="tel:+919900085630"
          className="call-style"
          rel="noreferrer"
          target="_blank"
        >
          <BsTelephone />
        </a>
      </div>
    </>
  );
}

export default CallButton;
