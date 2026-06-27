import React, { Component } from "react";
import { connect } from "react-redux";
import { leftSidebar } from "../../../../actions/sidebars";
import Logo from "../../../../assets/images/svg/logo.svg";
import CloseIcon from "../../../../assets/images/svg/nav-close.svg";
import { withRouter } from "react-router";

class LeftSidebarWithoutLogin extends Component {
  constructor(props) {
    super(props);
    this.showLeftSidebar = this.showLeftSidebar.bind(this);
    this.hideLeftSidebar = this.hideLeftSidebar.bind(this);
    this.hideLeftSidebarProxy = this.hideLeftSidebarProxy.bind(this);
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.hideLeftSidebarProxy, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.hideLeftSidebarProxy, false);
  }
  showLeftSidebar() {
    this.props.leftSidebarOpen();
  }
  hideLeftSidebar() {
    this.props.leftSidebarClose();
  }
  hideLeftSidebarProxy = e => {
    if (this.leftSidebar && this.leftSidebar.contains(e.target)) {
      return;
    }
    if (this.props.isLeftSidebarOpen) {
      this.hideLeftSidebar();
    }
    return;
  };

  render() {
    return (
      <>
        <nav
          className={
            "d-block d-xl-none left-sidebar" +
            (this.props.isLeftSidebarOpen ? " active" : "")
          }
          ref={leftSidebar => {
            this.leftSidebar = leftSidebar;
          }}
        >
          <div className="dismiss" onClick={this.hideLeftSidebar}>
            <span className="icon-close">
              <img src={CloseIcon} alt="" />
            </span>
          </div>
          <div className="sidebar-header">
            <div className="navbar-brand">
              <a href="/">
                <img src={Logo} alt="" className="sidebarLogo" />
              </a>
            </div>
          </div>
          <ul className="list-unstyled mt-4">
            <li className="nav-item">
              <a href="/about-us" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/#raffles" className="nav-link">
                Raffles
              </a>
            </li>
            <li className="nav-item">
              <a href="/#tournaments" className="nav-link">
                Tournaments
              </a>
            </li>
            <li className="nav-item">
              <a href="/news" className="nav-link">
                News
              </a>
            </li>
            <li className="nav-item">
            <a href="/contact-us" className="nav-link">Contact Us</a>
              
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
const mapDispatchToProps = {
  leftSidebarOpen: leftSidebar.open,
  leftSidebarClose: leftSidebar.close
};

const mapStateToProps = state => {
  return {
    isLeftSidebarOpen: state.sidebars.isLeftSidebarOpen
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LeftSidebarWithoutLogin)
);
