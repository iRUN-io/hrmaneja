/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classNames from "classnames";
import Logo from "./partials/LogoLight";
import FooterCopyright from "./partials/FooterCopyright";

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "footer",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <div {...props}>
      <footer className={classes}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
              <a href="/" className="logo-footer">
                <Logo />
              </a>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h5 className="text-light footer-head">Quick Link</h5>
              <ul className="list-unstyled footer-list mt-4">
                <li>
                  <a href="inventory" className="text-foot">
                    Features
                  </a>
                </li>
                <li>
                  <a href="expense" className="text-foot">
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a href="hrmanagement" className="text-foot">
                    User Feedback
                  </a>
                </li>
                {/* <li>
                  <a href="hrmanagement" className="text-foot">
                    Online Payment
                  </a>
                </li> */}
              </ul>
            </div>

            <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h5 className="text-light footer-head">How It Works?</h5>
              <ul className="list-unstyled footer-list mt-4">
                <li>
                  <a href="#" className="text-foot">
                    Create Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foot">
                    Make Plan
                  </a>
                </li>
                <li>
                  <a href="about" className="text-foot">
                   Schedule Appointment
                  </a>
                </li>
                {/* <li>
                  <a href="about" className="text-foot">
                    Online Payment
                  </a>
                </li> */}
              </ul>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h5 className="text-light center-text footer-head">
                <div className="social-icons">
                <a href="http://www.facebook.com/iruntechnology" target="_blank">
                <i className="uil social-icons uil-facebook-f me-1" style={{color: '#546f9d'}}></i>
                </a>
                <a href="https://twitter.com/irun_technology/status/1517110030176296966" target="_blank" className="text-foot">
                <i data-feather="twitter" style={{color: '#29a0ee'}} className="uil social-icons uil-twitter me-1"></i>
                </a>
                <a target="_blank" href="https://www.instagram.com/irun_technology/"><i
                  data-feather="instagram"
                  style={{color: '#ba576d'}}
                  className="uil social-icons uil-instagram me-1"
                ></i>
                </a>
                <a target="_blank" href="https://www.linkedin.com/company/irun-technology/">
                <i
                style={{color: '#0874b1'}}
                  data-feather="linkedin"
                  className="uil social-icons uil-linkedin me-1"
                ></i>
                </a>
                </div>
              </h5>
            </div>
          </div>
        </div>
      </footer>
      <FooterCopyright />
      <a
        href="#"
        onclick="topFunction()"
        style={{backgroundColor: '#865aff'}}
        id="back-to-top"
        className="btn btn-icon  back-to-top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          color="white"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-arrow-up icons"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </a>
    </div>
  );
};

export default Footer;
