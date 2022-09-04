/* eslint-disable jsx-a11y/aria-proptypes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ProductsSection = () => {
  return (
    <section className="path">
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <h4 className="title mb-4">Expense Management System (EMS)</h4>
              <span className="text-primary fw-bold">
                  <span role="img" aria-label> 👌</span> Manage internal requests to streamline your company’s expenses.
                </span><br></br><br></br>
                <span className="text-primary fw-bold">
                <span role="img" aria-label> 💯 </span> Save time, increase productivity and achieve your goals under 5 minutes.
                  </span>
              <p className="text-muted mx-auto mb-0"style={{ lineHeight:'30px' }}>
                
                <br></br>
                Businesses need to thoroughly check expenses to ensure that the
                business complies with regulations and make sure employees
                aren't spending too much or buying non-work related items.
                <br></br>
                Our expense management system will help with business audits by
                providing visibility into what funds are coming in and out of
                the business.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mt-4 pt-2">
            <div className="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
              <div className="make text-primary text-center mx-auto">
                <i className="uil uil-envelope-upload d-block rounded h3 mb-0"></i>
              </div>

              <div className="card-body">
                <h5 className="text-dark">Make Request</h5>
                <p className="text-muted mb-0">
                  Send your request to your department head.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-md-5 pt-md-3 mt-4 pt-2">
            <div className="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
              <div className="wait text-primary text-center mx-auto">
                <i className="uil uil-envelope-download d-block rounded h3 mb-0"></i>
              </div>

              <div className="card-body">
                <h5 className="text-dark">Wait For Aproval</h5>
                <p className="text-muted mb-0">
                  Wait for the approval process..
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
            <div className="card features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
              <div className="success text-primary text-center mx-auto">
                <i className="uil uil-image-check d-block rounded h3 mb-0"></i>
              </div>

              <div className="card-body">
                <h5 className="text-dark">Request Successful</h5>
                <p className="text-muted mb-0">
                  Request will be successful when you get an appropriate response
                  from management.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 mx-auto" style={{ textAlign: "center" }}>
            <a
              href="contact"
              target="_blank"
              style={{ height: "100", fontSize: "14px" }}
              className="btn btn-md btn-irun btn-danger"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>
      <div className="container path map-card"></div>
      <div className="container path contact-card">
        <div className="row">
          <div className="col-md-6">
            <h4>Let's work together</h4>
          </div>

          <div className="col-md-6 mt-4 mt-sm-0 contact-us-click">
            <a href="contact" className="btn btn-contact" type="submit">
              Contact
            </a>
          </div>
        </div>
      </div>{" "}
      <br></br>
      <br></br>
    </section>
  );
};

export default ProductsSection;
