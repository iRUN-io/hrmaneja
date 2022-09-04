/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import Image from "../../../elements/Image";

const ProductsSection = () => {
  return (
    <section className="path">
      <div className="container path">
        <div className="mx-auto text-center col-md-8 services-header">
          <h1 className="services-header-title-big">Inventory Manager</h1>
          <p className="text-muted">
            Our Inventory manager supports frequent processes that demand
            scalability, such as accounts payable processing, stock management
            and supplier relationship.
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 core-feature-card">
            <div className="d-flex align-items-center">
              <i
                className="uil uil-check me-4"
                style={{ fontSize: "50px", color: "green" }}
              ></i>
              <div className="ms-3">
                <h5 className="feature-title">Audit Management</h5>
                <p className="text-muted mb-0 core-feature-description">
                  Fully track and maintain an audit trail.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 core-feature-card">
            <div className="d-flex align-items-center">
              <i
                className="uil uil-check me-4"
                style={{ fontSize: "50px", color: "green" }}
              ></i>
              <div className="ms-3">
                <h5 className="feature-title">Monitor Transactions </h5>
                <p className="text-muted mb-0 core-feature-description">
                  Have visibility of all transactions which consist of
                  statistics and all data being carried out in the organization.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 core-feature-card">
            <div className="d-flex align-items-center">
              <i
                className="uil uil-check me-4"
                style={{ fontSize: "50px", color: "green" }}
              ></i>
              <div className="ms-3">
                <h5 className="feature-title">
                  Inventory and Equipment Management
                </h5>
                <p className="text-muted mb-0 core-feature-description">
                  Keep track of your stocks and get notified when you stocks are
                  low, faulty or in excess.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 core-feature-card">
            <div className="d-flex align-items-center">
              <i
                className="uil uil-check me-4"
                style={{ fontSize: "50px", color: "green" }}
              ></i>
              <div className="ms-3">
                <h5 className="feature-title">Manage Customers</h5>
                <p className="text-muted mb-0 core-feature-description">
                  Know your customers, commnucate with them and keep track of
                  every business being carried out for each customer.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 core-feature-card">
            <div className="d-flex align-items-center">
              <i
                className="uil uil-check me-4"
                style={{ fontSize: "50px", color: "green" }}
              ></i>
              <div className="ms-3">
                <h5 className="feature-title">Monitor/Track Suppliers</h5>
                <p className="text-muted mb-0 core-feature-description">
                  Communicate with your suppliers, stay updated with them on new
                  products and get the best deal.{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-md-6 core-feature-card"
            style={{ marginBottom: "20px" }}
          >
            <div className="d-flex align-items-center">
              <i
                className="uil uil-check me-4"
                style={{ fontSize: "50px", color: "green" }}
              ></i>
              <div className="ms-3">
                <h5 className="feature-title">Monitor Payment methods</h5>
                <p className="text-muted mb-0 core-feature-description">
                  Manage and keep track of all payment methods in the system.{" "}
                </p>
              </div>
            </div>
          </div>
          {/* 
          <Image
            src={require("../../../../assets/images/home/dashboards/inventory_dashboard.png")}
            alt="Open"
            className="img-fluid"
            style={{ marginTop: "20px" }}
          /> */}
          <div></div>
          <div
            className="col-md-12 mx-auto"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
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
