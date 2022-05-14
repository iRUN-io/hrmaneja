/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser, removeUserSession } from '../../config/common';

class Header extends Component {
	render() {
		const { fixNavbar, darkHeader } = this.props;
		const logout = () => {
			removeUserSession();
		};
		const user = getUser();
		return (
			<div>
				<div
					id="page_top"
					// className={isFixNavbar ? "sticky-top" : "" + this.props.dataFromParent === 'dark' ? 'section-body top_dark' : 'section-body'}
					className={`section-body ${fixNavbar ? "sticky-top" : ""} ${darkHeader ? "top_dark" : ""}`}
				>
					<div className="container-fluid">
						<div className="page-header">
							<div className="left">
								<h1 className="page-title">{this.props.dataFromSubParent}</h1>
							</div>
							<div className="right">
								<ul className="nav nav-pills">
								</ul>
								<div className="notification d-flex">
									<div className="dropdown d-flex">
										<a
											href="/#"
											className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
											data-toggle="dropdown"
										>
											<span>{user.name ?? ''} </span> <i className="fa fa-5 fa-angle-down" />
										</a>
										<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
											<NavLink to="/profile" className="dropdown-item">
												<i className="dropdown-icon fe fe-user" /> Profile
											</NavLink>
											<a className="dropdown-item" >
												<i className="dropdown-icon fe fe-settings" /> Settings
											</a>
											<a className="dropdown-item">
												<span className="float-right">
													<span className="badge badge-primary">6</span>
												</span>
												<i className="dropdown-icon fe fe-mail" /> Inbox
											</a>
											<a className="dropdown-item" >
												<i className="dropdown-icon fe fe-send" /> Message
											</a>
											<div className="dropdown-divider" />
											<a className="dropdown-item" >
												<i className="dropdown-icon fe fe-help-circle" /> Need help?
											</a>
											<NavLink to="/login" onClick={logout} className="dropdown-item">
												<i className="dropdown-icon fe fe-log-out" /> Sign out
											</NavLink>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	fixNavbar: state.settings.isFixNavbar,
	darkHeader: state.settings.isDarkHeader
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Header);