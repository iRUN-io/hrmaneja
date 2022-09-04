import React, { Component } from "react";
import { connect } from "react-redux";

import TopNavBarWithoutLogin from "./TopNavbar/TopNavBarWithoutLogin";
import TopNavBarWithLogin from "./TopNavbar/TopNavBarWithLogin";

class NavBar extends Component {
  render() {
    return (
      <>
        {!this.props.isLoggedIn ? (
          <TopNavBarWithoutLogin />
        ) : (
          <TopNavBarWithLogin />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    isAnySidebarOpen: state.sidebars.isAnySidebarOpen
  };
};

export default connect(mapStateToProps)(NavBar);
