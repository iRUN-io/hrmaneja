import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { leftSidebar } from "../../../../actions/sidebars";

import { login, modalCloseAll } from "../../../../actions/modals";

import Logo from "../../../../assets/images/svg/logo.svg";
import closePopupImg from "../../../../assets/images/svg/nav-close.svg";
import MenuIcon from "../../../../assets/images/svg/nav-menu.svg";
import LeftSidebarWithoutLogin from "../../sidebars/LeftSidebar/LeftSidebarWithoutLogin";
import { logoutUserIfNeeded } from "../../../../actions/user";

class TopNavBarWithoutLogin extends Component {
  constructor(props) {
    super(props);
    this.showLeftSidebar = this.showLeftSidebar.bind(this);
    this.hideLeftSidebar = this.hideLeftSidebar.bind(this);
  }
  showLeftSidebar() {
    this.props.leftSidebarOpen();
  }
  hideLeftSidebar() {
    this.props.leftSidebarClose();
  }
  render() {
    return (
      <>
        <header>
          <nav
            className={
              "navbar navbar-expand-lg navbar-light bg-white fixed-top" +
              (this.props.isAnyModalOpen ? " isAnyModalOpen" : "")
            }
          >
            <div className="container">
              <span
                className="icon-menu d-block d-lg-none left-sidebar-collapse"
                onClick={this.showLeftSidebar}
              >
                <img src={MenuIcon} alt="" />
              </span>
              <Link to="/" className="navbar-brand d-flex">
                <img src={Logo} alt="" className="mainLogo" />
              </Link>
              <span style={{ width: "20px" }}>
                <img
                  alt=""
                  className={
                    this.props.isAnyModalOpen ? " d-block d-lg-none" : " d-none"
                  }
                  src={closePopupImg}
                  onClick={this.props.modalCloseAll}
                />
              </span>
              <ul className="navbar-nav d-none d-lg-flex align-items-center">
                {!this.props.isLoggedIn ? (
                  <>
                    <li className="nav-item">
                      <span
                        className="a nav-link"
                        onClick={() => {
                          this.props.loginOpen();
                        }}
                      >
                        Sign in
                      </span>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <span
                      className="a nav-link"
                      onClick={() => {
                        this.props.logoutUserIfNeeded();
                      }}
                    >
                      Sign out
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </nav>
          <LeftSidebarWithoutLogin />
        </header>
      </>
    );
  }
}

const mapDispatchToProps = {
  leftSidebarOpen: leftSidebar.open,
  leftSidebarClose: leftSidebar.close,
  loginOpen: login.open,
  logoutUserIfNeeded,
  modalCloseAll: modalCloseAll
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    isAnyModalOpen: state.modals.isAnyModalOpen
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TopNavBarWithoutLogin)
);
