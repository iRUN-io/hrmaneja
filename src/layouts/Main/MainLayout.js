import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../components/navbars/NavBar";
import Footer from "../components/navbars/Footer/Footer";

class MainLayout extends Component {
  render() {
    return (
      <>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(MainLayout);
