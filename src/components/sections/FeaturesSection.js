import React from "react";
import Image from "../elements/Image";
import LearnMore from "../../components/sections/LearnMore";

const FeaturesSection = () => {
  return (
    <>
      <section id="about" className="section">
        <div className="container path">
          <div
            className="col-md-12  center-text"
          >
            <h1>
              <i>HR management at your fingertips
            </i>
            </h1>
            <h4>
              This software is built for both small and large scale business owners and employees.</h4>
          </div>

          <div className="row align-items-center feature-cards">
            <div className="col-md-6">
              <div className="section-title">
                <Image
                  src={require("../../assets/images/home/data.svg")}
                  alt="Open"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-6 center-mobile">
              <h1 className="services-header-title-big center-mobile">
              Report Management
              </h1>
              <br></br>
              <h5 className="para-desc center-mobile">
              Our HR management software is built to help foster effective communication between team members, report tasks ,store and manage reports.
              </h5>
              <br></br>
              <div>
                <a href="#products" className="btn btn-lg btn-feature-positive">
                  Try 7-days free trial
                </a>
              </div>
            </div>
          </div>

          <div className="row align-items-center  feature-cards">
            <div className="col-md-6 center-mobile">
              <h1 className="services-header-title-big center-mobile">
              Performance Management
              </h1>
              <br></br>
              <h5 className="para-desc center-mobile">
              HR maneja helps to set and track tasks, Monitor and measure staff performance and delivery.
              </h5>
              <br></br>
              <div>
                <a href="#products" className="btn btn-lg btn-feature-negative">
                  Try 7-days free trial
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="section-title">
                <Image
                  src={require("../../assets/images/home/group.png")}
                  alt="Open"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center center-mobile feature-cards">
            <div className="col-md-6">
              <div className="section-title">
                <Image
                  src={require("../../assets/images/home/onboarding.svg")}
                  alt="Open"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-6">
              <h1 className="services-header-title-big center-mobile">
              Learning and Development
              </h1>
              <br></br>
              <h5 className="para-desc center-mobile">
              Team members are able to learn from resources and scheduled courses using the HR maneja.
              </h5>
              <br></br>
              <div>
                <a href="#products" className="btn btn-lg btn-feature-positive">
                  Try 7-days free trial
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container path mt-60">
          <div className="row align-items-center center-mobile feature-cards">
            <div className="col-md-6">
              <div className="section-title">
                <Image
                  src={require("../../assets/images/home/compensate.png")}
                  alt="Open"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-6">
              <h1 className="services-header-title-big center-mobile">
              Compensation and benefits
              </h1>
              <br></br>
              <h5 className="para-desc center-mobile">
              With HR maneja , you can carefully allocate compensation and other benefits to your employees.
              </h5>
              <br></br>
              <div>
                <a href="#products" className="btn btn-lg btn-feature-negative">
                  Try 7-days free trial
                </a>
              </div>
            </div>
          </div>

          <div className="row align-items-center center-mobile feature-cards">
            <div className="col-md-6">
              <h1 className="services-header-title-big center-mobile">
              Expense Management
              </h1>
              <br></br>
              <h5 className="para-desc center-mobile">
              HR maneja is built to help companies manage business funds and track expenses.
              </h5>
              <br></br>
              <div>
                <a href="#products" className="btn btn-lg btn-feature-positive">
                  Try 7-days free trial
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="section-title">
                <Image
                  src={require("../../assets/images/home/expense.png")}
                  alt="Open"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center center-mobile feature-cards">
          <div className="col-md-6">
              <div className="section-title">
                <Image
                  src={require("../../assets/images/home/analysis.png")}
                  alt="Open"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="services-header-title-big center-mobile">
              HR data and analysis
              </h1>
              <br></br>
              <h5 className="para-desc center-mobile">
              HR maneja provides access to organized data and analytics to help decision making and reports.
              </h5>
              <br></br>
              <div>
                <a href="#products" className="btn btn-lg btn-feature-positive">
                  Try 7-days free trial
                </a>
              </div>
            </div>
          </div>

          <div className="row align-items-center center-mobile feature-cards">
            <div className="col-md-6">
              <h1 className="services-header-title-big center-mobile">
              Recruitment and selection
              </h1>
              <br></br>
              <h5 className="para-desc center-mobile">
              Our software helps to handle recruiting and selection process by tracking candidate information , enabling recruiter to match job openings to suitable candidates and successfully onboard these candidates. 

              </h5>
              <br></br>
              <div>
                <a href="#products" className="btn btn-lg btn-feature-positive">
                  Try 7-days free trial
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="section-title">
                <Image
                  src={require("../../assets/images/home/hiring.png")}
                  alt="Open"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center center-mobile feature-cards">
          <div className="col-md-6">
              <div className="section-title">
                <Image
                  src={require("../../assets/images/home/holiday.png")}
                  alt="Open"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="services-header-title-big center-mobile">
              Holiday and Event planning
              </h1>
              <br></br>
              <h5 className="para-desc center-mobile">
              With HR maneja, you can carefully plan out work calendar including holiday trips, leaves and upcoming community events. 

              </h5>
              <br></br>
              <div>
                <a href="#products" className="btn btn-lg btn-feature-positive">
                  Try 7-days free trial
                </a>
              </div>
            </div>
          </div>

          <div className="row align-items-center center-mobile feature-cards">
            <div className="col-md-6">
              <h1 className="services-header-title-big center-mobile">
              File Manager
              </h1>
              <br></br>
              <h5 className="para-desc center-mobile">
              Our software provides a comprehensive platform to store both large and small files for future purposes.

              </h5>
              <br></br>
              <div>
                <a href="#products" className="btn btn-lg btn-feature-positive">
                  Try 7-days free trial
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="section-title">
                <Image
                  src={require("../../assets/images/home/filemanager.png")}
                  alt="Open"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center center-mobile feature-cards">
          <div className="col-md-6">
              <div className="section-title">  
                <Image
                  src={require("../../assets/images/home/contact.png")}
                  alt="Open"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="services-header-title-big center-mobile">
              Contact Management
              </h1>
              <br></br>
              <h5 className="para-desc center-mobile">
              HR maneja helps to store contact details of past and present staff.
Chat Service : With HR maneja, team members can communicate effectively in groups and personally with each other.


              </h5>
              <br></br>
              <div>
                <a href="#products" className="btn btn-lg btn-feature-positive">
                  Try 7-days free trial
                </a>
              </div>
            </div>
          </div>
          
        </div>
        <LearnMore />
      </section>
    </>
  );
};

export default FeaturesSection;
