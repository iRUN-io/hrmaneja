/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "../../../elements/Image";

const ProductsSection = () => {
  return (
    <section className="path">
      <div className="container path">
        <div className="mx-auto text-center col-md-8 services-header">
          <h1 className="services-header-title-big">
            Health Management Information System(S) (HMIS)
          </h1>
          <p className="text-muted">A planned system of collecting, processing, storing and using health-related information to carry out solutions for patients.</p>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 core-feature-card">
            <div className="d-flex align-items-center">
              <i
                className="uil uil-check me-4"
                style={{ fontSize: "50px", color: "green" }}
              ></i>
              <div className="ms-3">
                <h5 className="feature-title">
                 Audit Management
                </h5>
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
                <h5 className="feature-title">
                  Schedule Appointments/Sessions
                </h5>
                <p className="text-muted mb-0 core-feature-description">
                Track patient's appointments, medic waiting lists and inpatient schedules.{" "}
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
                <h5 className="feature-title">Manage Patient Result/Documents</h5>
                <p className="text-muted mb-0 core-feature-description">
                Patient encounters can be completely documented from the patient complaint, to vitals, diagnoses, treatments and recommendations.{" "}
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
                <h5 className="feature-title">Manage Services</h5>
                <p className="text-muted mb-0 core-feature-description">
                 Create, Store and define price for patient services. e.g physiotherapy session.  {" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-md-6 core-feature-card"
            style={{ marginBottom: "" }}
          >
            <div className="d-flex align-items-center">
              <i
                className="uil uil-check me-4"
                style={{ fontSize: "50px", color: "green" }}
              ></i>
              <div className="ms-3">
                <h5 className="feature-title">Interact with patients</h5>
                <p className="text-muted mb-0 core-feature-description">
                  We pride in building and maintaining tools that will
                  definitely make work easier and faster for staff.{" "}
                </p>
              </div>
            </div>
          </div>

          <Image
            src={require("../../../../assets/images/home/dashboards/health_dashboad.png")}
            alt="Open"
            className="img-fluid"
          />
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
