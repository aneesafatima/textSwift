import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { toggleDarkMode } from "../utils/helpers";
import { globalState } from "../context/globalState";

function TopBar() {
  const myContext = useContext(globalState);
  const { status, setStatus } = myContext;
  useEffect(() => {
    const statusEl = document.querySelector(".status");
    if (status !== "") {
      statusEl.style.top = "15px";
      setTimeout(() => {
        statusEl.style.top = "-400px";
        setStatus("");
      }, 1500);
    }
  }, [status]);

  return (
    <div className="top-bar">
      <span className="status">{status}</span>
      <div className="heading">
        <h1 className="title">
          textSwift
          <span>Subtle.Seamless.Craft</span>
        </h1>
      </div>
      <div className="header-right-section">
        <i
          className="fa-regular fa-moon fa-sun fa-lg darkmode-icon"
          onClick={toggleDarkMode}
        ></i>
        <a
          href="https://github.com/aneesa04/textSwift-.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github fa-lg"></i>
        </a>
        <div>
          <Link to="/about" className="about-heading">
            ABOUT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
