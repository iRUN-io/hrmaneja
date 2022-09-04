import React from "react";
import Image from "../elements/Image";

const LearnMore = () => {
  return (
    <section className="learnMore-section" id="learnMore">
      <div className="container">
        <div className="col-md-12 row ">
          <div className="col-md-7 center-mobile">
            <h1 className="heading center-mobile">Do you want to boost productivity?</h1><br></br>
            <h4 className="center-mobile">
            Enjoy first hand experience , Get access to our 7-days trial for free.
            </h4><br></br>
            <a href="#products" className="btn btn-lg btn-hrmaneja">
            Try 7-days free trial
            </a>
          </div>
          <div className="col-md-4 hide-mobile" style={{float: 'right', marginLeft: '30px'}}>
          <Image
                src={require("../../assets/images/home/iphone.svg")}
                alt="Open"
                className={'hide-mobile'}
                style={{width: "80%", top: '-60', transform: 'scale(1.5)',
                position: '',}}
                
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
