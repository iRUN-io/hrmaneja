import React from "react";
import Image from "../elements/Image";

const ServicesSection = () => {
  return (
    <section className="path" id="products">
      <div className="container">
        <div className="mx-auto col-md-12">
          <div className="text-center col-md-12 services-header">
            <h1 className="heading mb-3">
              <i>Why you need HR maneja</i>
            </h1>
            {/* <h4 className="services-header-title-big">
              What can hr maneja do for you?
            </h4> */}
          </div>
          <div className="position-relative">
          <Image
                  src={require("../../assets/images/home/play.svg")}
                  alt="Open"
                  className="img-fluid"
                />
          </div><br></br>
          <div className="col-md-12">
            <h1>This is HR software with heart.</h1>
            <h4>
            HR maneja is built to help you boost your business product by efficiently managing your employees across all departments, track activities, assign and monitor tasks. With this software, you can take notes of holidays and upcoming events in your business calendar, manage payroll and accounts. Projects can be worked on and supervised, reports and communication is made easier both as a team and individually.

            </h4>
            <a href="#products" className="btn btn-lg btn-hrmaneja">
              Take a video Tour
            </a>
            <br></br>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
