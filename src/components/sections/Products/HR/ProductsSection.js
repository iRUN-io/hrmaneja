/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ProductsSection = () => {
  return (
    <section className="path">
      <div className="container path">
        <div className="mx-auto text-center col-md-8 services-header">
          <h1 className="services-header-title-big">Human Resource Manager</h1>
          <p className="text-muted">
            It enables a company to manage its Human Resource operations
            and streamlines the communication between employees and their
            managers.
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
                <h5 className="feature-title">Manage Employees </h5>
                <p className="text-muted mb-0 core-feature-description">
                  Help employees do their best work each day in order to achieve
                  the larger goals of the organization.{" "}
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
                <h5 className="feature-title">Manage Company</h5>
                <p className="text-muted mb-0 core-feature-description">
                  You can manage and have visibility of your entire
                  organization, keep track of all departments and employees.{" "}
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
                <h5 className="feature-title">Personnel and Workload Management</h5>
                <p className="text-muted mb-0 core-feature-description">
                Organize work schedules, workload assignments, employee demographic information, training, and financial information.{" "}
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
                <h5 className="feature-title">Manage Leaves</h5>
                <p className="text-muted mb-0 core-feature-description">
                  With one click you can connect with your employees, to help
                  plan a leave and keep track with them.{" "}
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
                <h5 className="feature-title">Manage Perfomamce</h5>
                <p className="text-muted mb-0 core-feature-description">
                  Performance management is a structure that enables employees
                  to get feedback on their performance – to reach their best
                  performance.{" "}
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
                <h5 className="feature-title">Manage Reports</h5>
                <p className="text-muted mb-0 core-feature-description">
                  With our digitalized reporting system, you will have visibility
                  of all reports directly on the system.{" "}
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
                <h5 className="feature-title">Manage Documents</h5>
                <p className="text-muted mb-0 core-feature-description">
                  Create, Store and manage company and employee files. Manage how documents are distributed and accessed.{" "}
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
                <h5 className="feature-title">Time Tracking</h5>
                <p className="text-muted mb-0 core-feature-description">
                Calculate and maintain processing and handling times on chemical reactions, workflows, and more. {" "}
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
      </div>
      <br></br>
    </section>
  );
};

export default ProductsSection;
