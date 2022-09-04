/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/style-prop-object */
import React from "react";
import Image from "../elements/Image";

const Header = () => {
  const toggleMenu = () => {
    document.getElementById("isToggle").classList.toggle("open");
    var isOpen = document.getElementById("navigation");
    if (isOpen.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen.style.display = "block";
    }
  };

  return (
    <header
      id="topnav"
      className="defaultscroll sticky"
      style={{ backgroundColor: "F6F8FB", float: "right" }}
    >
      <div className="container">
        <a className="logo" href="/">
          <Image
            src={require("../../assets/images/home/newlogo.png")}
            alt="Open"
            width="100"
            className="logo-light-mode"
          />
        </a>

        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <div id="navigation">
          <ul className="navigation-menu" style={{ float:'right' }}>
            <li>

            </li>
            <li>
              <a href="/#about" className="sub-menu-item">
               Feature
              </a>
            </li>

            {/* <li>
              <a href="/#how-it-works" className="sb-menu-item">
              How it Works
              </a>
            </li> */}

            <li>
              <a target='_blank' href="https://irunauto.com/contact" className="sb-menu-item">
              Contact
              </a>
            </li>
          </ul>

        </div>
      </div>
    </header>
  );
};

export default Header;
