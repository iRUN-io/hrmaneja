/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import Image from "../components/elements/Image";

const NotFound = () => {
  return (
    <>
      <div className="row" style={{ margin: '150px' }}>
        <div className="col-md-6">
          <Image
            src={require("../assets/images/404.svg")}
            alt=""
            style={{
              // width: "50%",
              // height: "50%",
              postion: "relative",
              marginLeft: "10px",
            }}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h4 style={{ textAlign: "center", marginTop: '100px' }}>
            Ohh No! THE PAGE IS GONE ! &#128553;
            <br></br>
            <br></br>
            Find your way back &#127969; <a href="/" style={{ color:'' }}>here</a>
          </h4>
        </div>
      </div>
    </>
  );
};
export default NotFound;
