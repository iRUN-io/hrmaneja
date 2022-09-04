/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from "react";
import classNames from "classnames";
import Image from "../elements/Image";

const Hero = () => {
  const outerClasses = classNames("bg-half-170 d-table w-100 overflow-hidden");

  return (
    <section className={outerClasses}>
      <div className="container">
        <div className="align-items-center pt-5">
          <div className="col-lg-12 col-md-12">
            <div className="center-text">

              <h1 className="heading mb-3">
              Work better Whenever, Wherever
              </h1>

              <h5>
              Get access to effectively manage your business, resources and staff at your comfort .
              Less stress, More productivity.

              </h5><br></br>
              <div className="mt-4 pt-2 row col-md-12">
                <div className="col-md-12 col-xs-12 center-text">
                  <a
                    href="#products"
                    className="btn btn-lg btn-trial"
                  >
                    7 days Free trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        
          <div className="col-lg-12 col-md-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="classic-saas-image position-relative">
              <div className="position-relative">
                <Image
                  src={require("../../assets/images/home/header.png")}
                  alt="Open"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
