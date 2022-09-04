import React, { Component } from "react";

export class Demo extends Component {
  render() {
    return (
      <div>
        <section className="section pt-0">
          {/* <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-4">Watch our demo</h4>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div
                  className="video-solution-cta position-relative"
                  style={{ zIndex: 1 }}
                >
                  <div className="position-relative">
                    <Image
                      src={require("../../../assets/images/cta-bg.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="play-icon">
                      <a
                        href="#!"
                        data-type="youtube"
                        data-id=""
                        className="play-btn lightbox"
                      >
                        <i className="uil uil-caret-right text-primary rounded-circle bg-white shadow-lg"></i>
                      </a>
                    </div>
                  </div>
                  <div className="content mt-md-4 pt-md-2">
                    <div className="row justify-content-center">
                      <div className="col-lg-10 text-center">
                        <div className="row align-items-center">
                          <div className="col-md-6 mt-4 pt-2">
                            <div className="section-title text-md-start"></div>
                          </div>

                          <div className="col-md-6 col-12 mt-4 pt-md-2">
                            <div className="section-title text-md-start">
                              <p className="text-white-50 para-desc"></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="container path contact-card">
            <div className="row">
              <div className="col-md-6">
                <h4>Let's work together</h4>
              </div>

              <div className="col-md-6 mt-4 mt-sm-0 contact-us-click">
                <a
                  href="contact"
                  className="btn btn-contact"
                  type="submit"
                >
                  Contact
                </a>
              </div>
            </div>
            <br></br>
          </div>
        </section>
      </div>
    );
  }
}

export default Demo;
