import React, { Component } from "react";

export class Process extends Component {
  render() {
    return (
      <div>
        <section className="section bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                  <h6 className="text-primary">Work Process</h6>
                  <h4 className="title mb-4">How do we work?</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    <span className="text-primary fw-bold">Our</span> mode of
                    operation is simple, smart and swift, the best you can get.
                    Be guided on the steps we operate...
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mt-4 pt-2">
                <div className="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-presentation-edit d-block rounded h3 mb-0"></i>
                  </div>

                  <div className="card-body">
                    <h5 className="text-dark">The Discussion</h5>
                    <p className="text-muted mb-0">
                      We receive your business call, then we discuss your
                      company needs and we emphasize essential features to build
                      for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mt-md-5 pt-md-3 mt-4 pt-2">
                <div className="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-airplay d-block rounded h3 mb-0"></i>
                  </div>

                  <div className="card-body">
                    <h5 className="text-dark">Test your Demo</h5>
                    <p className="text-muted mb-0">
                      We build a demo for you based on the discussion, get it
                      available for test run, anticipate feedback and then we
                      finalize your platform.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
                <div className="card features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-image-check d-block rounded h3 mb-0"></i>
                  </div>

                  <div className="card-body">
                    <h5 className="text-dark">Welcome On Board</h5>
                    <p className="text-muted mb-0">
                      We give you access to your now ready software for use.
                      Achieving maximal utility for better profit maximization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Process;
