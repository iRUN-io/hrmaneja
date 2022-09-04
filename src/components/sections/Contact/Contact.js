/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import Image from "../../elements/Image";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { SendContact } from "./SendContact";
import { ToastContainer } from "react-toastify";

export class Contact extends Component {
  state = {
    user: {},
    userDetails: [],
    isSubmitted: false,
    emailCheck: true,
    token: null,
    checkEmailInputTouched: false,
    success: false,
    error: [],
    btnLabel: "Send Message",
  };

  sendForm = (event) => {
    this.setState({
      btnLabel: "Please wait .......",
      isSubmitted: true
    });

    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let subject = event.target.subject.value;
    let message = event.target.message.value;

    const user = {
      name,
      email,
      subject,
      message,
    };

    if (user.name && user.email && user.subject && user.message) {
      this.setState({
        userDetails: user,
        btnLabel: "Please wait .......",
        isSubmitted: false,
      });

      this.props.SendContact(user);
    }
  };

  render() {
    const { response } = this.props;
    if (response && response.data) {
    }

    const { user, isSubmitted } = this.state;
    return (
      <div>
        <section className="section pb-0" style={{ marginTop: 60 }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card border-0 text-center  feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-phone d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <p className="text-muted">Give us a call</p>
                    <a href="tel:+2349036709916" className="text-primary">
                      +234-903-670-9916
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="card border-0 text-center feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-envelope d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <p className="text-muted">Send us an email</p>
                    <a
                      href="mailto:hello@irunauto.com"
                      className="text-primary"
                    >
                      hello@irunauto.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="card border-0 text-center feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-map-marker d-block rounded h3 mb-0"></i>
                  </div>

                  <div className="content mt-3">
                    <p className="text-muted">Lagos, Nigeria</p>
                    <a target="_blank"
                      href="https://goo.gl/maps/FPhmH7EqyRZzmQzm6"
                      className="video-play-icon text-primary lightbox"
                    >
                      View on Google map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-100 mt-60">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1">
                <div className="card shadow rounded border-0">
                  <div className="card-body py-5">
                    <h4 className="card-title">Get In Touch !</h4>

                    <div className="custom-form mt-3">
                      <form onSubmit={this.sendForm}>
                        <p id="error-msg" className="mb-0"></p>
                        <div id="simple-msg"></div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Your Name <span className="text-danger">*</span>
                              </label>
                              <div className="form-icon position-relative">
                                <i
                                  data-feather="user"
                                  className="fea icon-sm icons"
                                ></i>
                                <input
                                  value={this.state.value}
                                  onChange={this.handleChange}
                                  name="name"
                                  id="name"
                                  type="text"
                                  className="form-control ps-5"
                                  placeholder="Name :"
                                ></input>
                                {isSubmitted && !user.email && (
                                  <div className="help-block">
                                    Name is required
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Your Email{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="form-icon position-relative">
                                <i
                                  data-feather="mail"
                                  className="fea icon-sm icons"
                                ></i>
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="Email:"
                                  value={response && response.data.email}
                                  className="form-control ps-5"
                                  onChange={this.handleChange}
                                />
                                {isSubmitted && !user.email && (
                                  <div className="help-block">
                                    Email address is required
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="mb-3">
                              <label className="form-label">Subject</label>
                              <div className="form-icon position-relative">
                                <i
                                  data-feather="book"
                                  className="fea icon-sm icons"
                                ></i>
                                <input
                                  type="text"
                                  name="subject"
                                  placeholder="Subject:"
                                  value={response && response.data.subject}
                                  className="form-control ps-5"
                                  onChange={this.handleChange}
                                />
                                {isSubmitted && !user.subject && (
                                  <div className="help-block">
                                    Subject is required
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Comments <span className="text-danger">*</span>
                              </label>
                              <div className="form-icon position-relative">
                                <i
                                  data-feather="message-circle"
                                  className="fea icon-sm icons clearfix"
                                ></i>
                                <textarea
                                  name="message"
                                  placeholder="Message:"
                                  value={response && response.data.message}
                                  className="form-control ps-5"
                                  onChange={this.handleChange}
                                />
                                {isSubmitted && !user.message && (
                                  <div className="help-block">is required</div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                type="submit"
                                id="submit"
                                name="send"
                                className="btn btn-primary"
                                disabled={this.state.isSubmitted}
                              >
                                {this.state.btnLabel}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-md-6 order-1 order-md-2">
                <div className="card border-0">
                  <div className="card-body p-0">
                    <Image
                      src={require("../../../assets/images/contact.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { SendContact })(Contact);
