import React, { Component } from "react";
import Image from "../../elements/Image";

export class Info extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="row align-items-center" id="counter">
              <div className="col-md-6">
                <Image
                  src={require("../../../assets/images/company/about2.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>

              <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="ms-lg-4">
                  <div className="d-flex mb-4">
                    <span className="text-primary h1 mb-0">
                      <span className=" display-1 fw-bold" data-target="A">
                        A
                      </span>
                      Team
                    </span>
                  </div>
                  <div className="section-title">
                    <h4 className="title mb-4">Who are we?</h4>
                    <p className="text-muted">
                      We are this fascinating team of technocrats whose desire
                      and determination is to provide a highly computerized
                      platform which your company can rely on to give efficiency
                      and proficiency to work done. We aim to eliminate work
                      stress, increase work productivity, simplify work
                      interactions, save work time and ultimately meet work
                      targets. We are at your service...and ready to serve you.
                    </p>
                    <a href="/contact" className="btn btn-primary mt-3">
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}

          <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-12">
                <div className="sticky-bar">
                  <div className="section-title text-lg-start text-center mb-4 mb-lg-0 pb-2 pb-lg-0">
                    <h4 className="title mb-4">What we do</h4>
                    <p className="text-muted para-desc mb-0 mx-auto">
                      At iRUN, we present you a highly formidable interactive
                      platform where corporate information can be effectively
                      disseminated to a wide range of users, probably in merely
                      seconds.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 col-12">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <div className="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                          <span className="h1 icon2 text-primary">
                            <i className="uil uil-analysis"></i>
                          </span>
                          <div className="card-body p-0 content">
                            <h5>Needs Analysis</h5>
                            <p className="para text-muted mb-0">
                              We communicate with company personnel of their
                              organizational needs, analyze the needs then
                              actualize them on iRUN.{" "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                        <div className="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                          <span className="h1 icon2 text-primary">
                            <i className="uil uil-cloud-data-connection"></i>
                          </span>
                          <div className="card-body p-0 content">
                            <h5>Feature Integration</h5>
                            <p className="para text-muted mb-0">
                              We integrate the highlighted needs by identifying
                              and even creating additional suitable features
                              that will provide the needful speed and
                              flexibility in the site.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                        <div className="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                          <span className="h1 icon2 text-primary">
                            <i className="uil uil-presentation-check"></i>
                          </span>
                          <div className="card-body p-0 content">
                            <h5>Demo Presentation & Modification</h5>
                            <p className="para text-muted mb-0">
                              We present your organization a quick demo in no
                              time, and a considerable time for a needed test
                              run. And also receive feedback for better
                              modification and then we go live, and on board.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                          <span className="h1 icon2 text-primary">
                            <i className="uil uil-heart-rate"></i>
                          </span>
                          <div className="card-body p-0 content">
                            <h5>Company goes live on iRUN</h5>
                            <p className="para text-muted mb-0">
                              We build and go live, where users enjoy the
                              corporate interactive iRUN platform, which is
                              exactly what your company needs to excel in the
                              ever competitive nature of today's market.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-4 pt-2">
                        <div className="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                          <span className="h1 icon2 text-primary">
                            <i className="uil uil-sliders-v"></i>
                          </span>
                          <div className="card-body p-0 content">
                            <h5>Software Maintenance & Upgrade</h5>
                            <p className="para text-muted mb-0">
                              We give you continued service by maintaining the
                              software, updating and upgrading features,
                              treating and finding solutions to complaints (if
                              any), getting reviews, thereby assisting the
                              company in meeting their targets and reaching
                              their goals.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-4 pt-2 text-center text-md-start">
                        <a href="services.html" className="btn btn-primary">
                          See more{" "}
                          <i
                            data-feather="arrow-right"
                            className="fea icon-sm"
                          ></i>
                        </a>
                      </div>
                    </div>
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

export default Info;
