import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { leftSidebar } from "../../../../actions/sidebars";
import { login, modalCloseAll } from "../../../../actions/modals";
import Logo from "../../../../assets/images/svg/logo.svg";
import profilePic48 from "../../../../assets/images/avatar-demo.png";
import MenuIcon from "../../../../assets/images/svg/nav-menu.svg";
import LeftArrowIcon from "../../../../assets/images/svg/nav-arrow-right.svg";
import { logoutUserIfNeeded } from "../../../../actions/user";
import LeftSidebarWithLogin from "../../sidebars/LeftSidebar/LeftSidebarWithLogin";
import closePopupImg from "../../../../assets/images/svg/nav-close.svg";

class TopNavBarWithLogin extends Component {
  constructor(props) {
    super(props);
    this.showLeftSidebar = this.showLeftSidebar.bind(this);
    this.hideLeftSidebar = this.hideLeftSidebar.bind(this);
    this.shouldShowCloseBtn = this.shouldShowCloseBtn.bind(this);
    this.gameScreenClosePopup = this.gameScreenClosePopup.bind(this);
  }
  showLeftSidebar() {
    this.props.leftSidebarOpen();
  }
  hideLeftSidebar() {
    this.props.leftSidebarClose();
  }

  shouldShowCloseBtn() {
    return this.props.isAnyModalOpen;
  }

  gameScreenClosePopup() {
    this.props.gameFullScreenToggle();
  }

  render() {
    return (
      <>
        <header>
          <nav
            className={
              "navbar navbar-expand-lg navbar-light bg-white fixed-top nav-main" +
              (this.props.isAnyModalOpen ? " isAnyModalOpen" : "")
            }
            id="link"
          >
            <div className="container">
              <span className="d-lg-none">
                <span
                  className={
                    "icon-menu d-lg-none left-sidebar-collapse" +
                    (this.props.isGameFullScreen ? " d-none" : " d-block")
                  }
                  onClick={this.showLeftSidebar}
                >
                  <img src={MenuIcon} alt="" />
                </span>

                <span className="d-none">
                  <img src={LeftArrowIcon} alt="" />
                </span>
              </span>

              <Link to="/" className="navbar-brand d-flex">
                <img src={Logo} alt="" className="mainLogo" />
              </Link>
              <span>
                <span
                  className={
                    this.shouldShowCloseBtn() ? "d-block d-lg-none" : "d-none"
                  }
                >
                  <img src={closePopupImg} alt="" />
                </span>
                <span />
              </span>
              <ul className="navbar-nav d-none d-lg-flex align-items-center">
                <li className="nav-item">
                  <Link
                    to="/dashboard"
                    className={
                      "nav-link" +
                      (this.props.match.path === "/dashboard" ? " active" : "")
                    }
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/host"
                    className={
                      "nav-link" +
                      (this.props.match.path === "/host" ? " active" : "")
                    }
                  >
                    Host
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/tournament"
                    className={
                      "nav-link" +
                      (this.props.match.path === "/tournament" ? " active" : "")
                    }
                  >
                    Tournaments
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/news"
                    className={
                      "nav-link" +
                      (this.props.match.path === "/news" ? " active" : "")
                    }
                  >
                    News
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/raffles"
                    className={
                      "nav-link" +
                      (this.props.match.path === "/raffles" ? " active" : "")
                    }
                  >
                    Raffles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/available-space"
                    className={
                      "nav-link" +
                      (this.props.match.path === "/available-space"
                        ? " active"
                        : "")
                    }
                  >
                    Available Space
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/bans"
                    className={
                      "nav-link" +
                      (this.props.match.path === "/bans" ? " active" : "")
                    }
                  >
                    Bans
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/users"
                    className={
                      "nav-link" +
                      (this.props.match.path === "/users" ? " active" : "")
                    }
                  >
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/rewards"
                    className={
                      "nav-link" +
                      (this.props.match.path === "/rewards" ? " active" : "")
                    }
                  >
                    Rewards
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      this.props.logoutUserIfNeeded();
                    }}
                  >
                    LogOut
                  </a>
                </li>
                <li />
              </ul>
            </div>
          </nav>
        </header>
        <LeftSidebarWithLogin />
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
    avtarUrl: state.user.item.avatar_url
      ? state.user.item.avatar_url
      : profilePic48,
    isProfileSidebarOpen: state.sidebars.isProfileSidebarOpen,
    isLoggedIn: state.user.isLoggedIn,
    isAnyModalOpen: state.modals.isAnyModalOpen,
    userId: state.user.item.id
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TopNavBarWithLogin)
);
