import React, { Component } from "react";
import moment from "moment";

class Footer extends Component {
  render() {
    return (
      <footer className={"container-fluid"}>
        <div className="row">
          <div className="col-md-12 bg-secondary text-center text-white copyright fixed-bottom">
            <p>© {moment().year()} Arcade X</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
