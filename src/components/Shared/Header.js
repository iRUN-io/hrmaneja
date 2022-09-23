/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getBillingData, getUser, removeUserSession } from '../../config/common';

class Header extends Component {

	constructor() {
		super();
		this.state = {
			time: new Date(),
			billingExist: false,
			checked: false,
		};
	}

	componentDidMount() {
		this.update = setInterval(() => {
			this.setState({ time: new Date() });
		}, 1 * 1000);
	}

	componentWillUnmount() {
		clearInterval(this.update);
	}

	getCompanyBilling = async function () {
		const billingStatus = await getBillingData();
		this.setState({
			billingExist: billingStatus,
			checked: true,
		});
	}

	render() {
		const { fixNavbar, darkHeader } = this.props;
		const logout = () => {
			removeUserSession();
		};
		const user = getUser();
		if (this.state.checked === false) {
			this.getCompanyBilling();
		}
		const billingExist = this.state.billingExist;
		const checked = this.state.checked;
		const { time } = this.state; // retrieve the time from state

		const companyData = sessionStorage.getItem('hrmanejaCompany');
		const company = JSON.parse(companyData);
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
								{checked && company.settings.emailVerification &&  !company.settings.emailVerified ? (
									<span className='text-white bg-danger btn  btn-sm'>Email confirmation is required. </span>
								) : (
									<>
										{checked && !billingExist && (
											<><span className='text-white bg-danger btn  btn-sm'>Plan activation is required </span>
												<Link to="/admin/billing" className="btn btn-primary btn-sm ml-2">Activate Plan</Link></>
										)}
									</>
								)}
							</div>
							<div className="right">
								<ul className="nav nav-pills">
								</ul>
								<div className="notification d-flex">
									<div className="dropdown d-flex">
										<p className='menuClock'>
											{time.toLocaleTimeString()}
										</p>
										<a
											href="/#"
											className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
											data-toggle="dropdown"
										>
											<span style={{ fontWeight: '500' }}>{user?.name ?? 'Guest '} | {company.name} </span> <i className="fa fa-5 fa-angle-down" />
										</a>
										<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
											<NavLink to="/hr-profile" className="dropdown-item">
												<i className="dropdown-icon fe fe-user" /> Profile
											</NavLink>

											{user?.role === 'HR Manager' && (
												<a className="dropdown-item" href='/admin/settings'>
													<i className="dropdown-icon fe fe-settings" /> Settings
												</a>
											)}
											{/* <a className="dropdown-item">
												<span className="float-right">
													<span className="badge badge-primary">6</span>
												</span>
												<i className="dropdown-icon fe fe-mail" /> Inbox
											</a>
											<a className="dropdown-item" >
												<i className="dropdown-icon fe fe-send" /> Message
											</a> */}
											<div className="dropdown-divider" />
											<a href='/support' className="dropdown-item" >
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