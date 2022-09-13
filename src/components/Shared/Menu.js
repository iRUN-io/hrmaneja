import React, { Component } from 'react';
import { connect } from 'react-redux';
import MetisMenu from 'react-metismenu';
import { Switch, Route, NavLink } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import DefaultLink from './DefaultLink';
import Image from "../elements/Image";
import moment from 'moment';


import {
	darkModeAction,
	darkHeaderAction,
	fixNavbarAction,
	darkMinSidebarAction,
	darkSidebarAction,
	iconColorAction,
	gradientColorAction,
	rtlAction,
	fontAction,
	subMenuIconAction,
	menuIconAction,
	boxLayoutAction,
	statisticsAction,
	friendListAction,
	statisticsCloseAction,
	friendListCloseAction,
	toggleLeftMenuAction,
	emailNotificationAction,
} from '../../actions/settingsAction';
import Routes from '../Route';
import { createOrUpdateSetting } from '../../services/setting';
import { toast } from 'material-react-toastify';
import { getBillingData, getCompanyData, getUser } from '../../config/common';
import { getAllActivities } from '../../services/activities';
import NotFound from '../Authentication/404';


const masterNone = {
	display: 'none',
};

const masterBlock = {
	display: 'block',
};

class Menu extends Component {
	constructor(props) {
		super(props);
		this.toggleLeftMenu = this.toggleLeftMenu.bind(this);
		this.toggleUserMenu = this.toggleUserMenu.bind(this);
		this.toggleRightSidebar = this.toggleRightSidebar.bind(this);
		this.toggleSubMenu = this.toggleSubMenu.bind(this);
		this.handleDarkMode = this.handleDarkMode.bind(this);
		this.handleFixNavbar = this.handleFixNavbar.bind(this);
		this.handleDarkHeader = this.handleDarkHeader.bind(this);
		this.handleMinSidebar = this.handleMinSidebar.bind(this);
		this.handleSidebar = this.handleSidebar.bind(this);
		this.handleIconColor = this.handleIconColor.bind(this);
		this.handleGradientColor = this.handleGradientColor.bind(this);
		this.handleRtl = this.handleRtl.bind(this);
		this.handleFont = this.handleFont.bind(this);
		this.handleStatistics = this.handleStatistics.bind(this);
		this.handleFriendList = this.handleFriendList.bind(this);
		this.closeFriendList = this.closeFriendList.bind(this);
		this.closeStatistics = this.closeStatistics.bind(this);
		this.handleBoxLayout = this.handleBoxLayout.bind(this);
		this.handler = this.handler.bind(this);
		this.state = {
			isToggleLeftMenu: false,
			isOpenUserMenu: false,
			isOpenRightSidebar: false,
			isBoxLayout: false,
			parentlink: null,
			childlink: null,
			activityLogs: [],
			user: [],
			activityChecked: false,
			features: [],
		};
	}



	componentDidMount() {
		const { location } = this.props;
		const links = location?.pathname.substring(1).split(/-(.+)/);
		const parentlink = links[0] || 'hr';
		const nochildlink = links[1] || 'dashboard';

		if (parentlink && nochildlink && nochildlink === 'dashboard') {
			this.handler(parentlink, `${parentlink}${nochildlink}`);
		} else if (parentlink && nochildlink && nochildlink !== 'dashboard') {
			this.handler(parentlink, nochildlink);
		} else if (parentlink) {
			this.handler(parentlink, '');
		} else {
			this.handler('hr', 'dashboard');
		}
	}

	componentDidUpdate(prevprops, prevstate) {
		const { location } = this.props;
		const links = location?.pathname.substring(1).split(/-(.+)/);
		const parentlink = links[0] || 'hr';
		const nochildlink = links[1] || 'dashboard';
		if (prevprops.location !== location) {
			if (parentlink && nochildlink && nochildlink === 'dashboard') {
				this.handler(parentlink, `${parentlink}${nochildlink}`);
			} else if (parentlink && nochildlink && nochildlink !== 'dashboard') {
				this.handler(parentlink, nochildlink);
			} else if (parentlink) {
				this.handler(parentlink, '');
			} else {
				this.handler('hr', 'dashboard');
			}
		}
	}

	handler(parentlink, nochildlink) {
		this.setState({
			parentlink: parentlink,
			childlink: nochildlink,
		});
	}

	handleDarkMode(e) {
		this.props.darkModeAction(e.target.checked)
	}

	handleEmailNotification(e) {
		this.props.emailNotificationAction(e.target.checked)
		const user = getUser();
		if (user) {
			const company_id = user.company_id;
			const body = {
				company_id: company_id,
				emailNotificationEnabled: e.target.checked.toString(),
				twoFactorEnabled: false, // TODO: add two factor
			}
			const update = createOrUpdateSetting(body);
			if (update) {
				localStorage.setItem('emailNotificationEnabled', e.target.checked);
				toast.success("Successfully updated");
			}
		}
	}

	handleEmailNotificationCheckbox() {
		const emailNotificationEnabled = localStorage.getItem('emailNotificationEnabled');
		if (emailNotificationEnabled === 'true') {
			return true;
		}
		return false;
	}
	handleFixNavbar(e) {
		this.props.fixNavbarAction(e.target.checked)
	}
	handleDarkHeader(e) {
		this.props.darkHeaderAction(e.target.checked)
	}
	handleMinSidebar(e) {
		this.props.darkMinSidebarAction(e.target.checked)
	}
	handleSidebar(e) {
		this.props.darkSidebarAction(e.target.checked)
	}
	handleIconColor(e) {
		this.props.iconColorAction(e.target.checked)
	}
	handleGradientColor(e) {
		this.props.gradientColorAction(e.target.checked)
	}
	handleRtl(e) {
		this.props.rtlAction(e.target.checked)
	}
	handleFont(e) {
		this.props.fontAction(e)
	}
	handleFriendList(e) {
		this.props.friendListAction(e)
	}
	handleStatistics(e) {
		this.props.statisticsAction(e)
	}
	closeFriendList(e) {
		this.props.friendListCloseAction(e)
	}
	closeStatistics(e) {
		this.props.statisticsCloseAction(e)
	}
	handleSubMenuIcon(e) {
		this.props.subMenuIconAction(e)
	}
	handleMenuIcon(e) {
		this.props.menuIconAction(e)
	}
	handleBoxLayout(e) {
		this.props.boxLayoutAction(e.target.checked)
	}
	toggleLeftMenu(e) {
		console.log(e, 'asdasdada')
		this.props.toggleLeftMenuAction(e)
	}
	toggleRightSidebar() {
		this.setState({ isOpenRightSidebar: !this.state.isOpenRightSidebar })
	}
	toggleUserMenu() {
		this.setState({ isOpenUserMenu: !this.state.isOpenUserMenu })
	}

	toggleSubMenu(e) {
		let menucClass = ''
		if (e.itemId) {
			const subClass = e.items.map((menuItem, i) => {
				if (menuItem.to === this.props.location?.pathname) {
					menucClass = "in"; // change this to in when you add more labels
				} else {
					menucClass = ""; // fix this
				}
				return menucClass
			})
			return subClass
			// return "collapse";
		} else {
			return e.visible ? "collapse" : "metismenu";
		}
	}

	getActivity = async function () {
		const user = getUser();
		if (user) {
			const company_id = user.company_id;
			const getActivity = await getAllActivities(company_id);
			this.setState({
				activityLogs: getActivity,
			});
			this.setState({
				activityChecked: true,
			});
		}
	}

	getUser = async function () {
		const user = getUser();
		if (user) {
			this.setState({
				user: user,
			});
		}
	}

	getCompanyData = async function () {
		const company = await getCompanyData();

		if (company) {
			this.setState({
				features: company.settings?.features,
			});
		}
	}


	render() {
		if (this.state.activityLogs.length === 0 && this.state.activityChecked === false) {
			this.getActivity();
		}
		if (this.state.user.length === 0) {
			this.getUser();
		}
		if (this.state.features.length === 0) {
			this.getCompanyData();
		}

		const { checked, billinExists } = this.props;

		const activityLogs = this.state.activityLogs; // Use this for the map
		// const features = this.state.features; 
		const user = this.state.user;
		const isAdmin = user?.role === "HR Manager";

		// console.log('featuresdd', features)
		const content = [
			{
				"id": 1,
				"icon": "fa fa-tags",
				"label": "Main",
				"to": "#!",
				content: [
					{
						"id": 3,
						"label": "Dashboard",
						"to": "/"
					},
					// {
					// 	"id": 4,
					// 	"label": "Users",
					// 	"to": "/hr-users"
					// },
					// {
					// 	"id": 5,
					// 	"label": "Departments",
					// 	"to": "/hr-department"
					// },
					// {
					// 	"id": 6,
					// 	"label": "Employees",
					// 	"to": "/hr-employees"
					// },

					// {
					// 	"id": 7,
					// 	"label": "Activities",
					// 	"to": "/hr-activities"
					// },
					// {
					// 	"id": 8,
					// 	"label": "Holidays",
					// 	"to": "/hr-holidays"
					// },
					// {
					// 	"id": 9,
					// 	"label": "Events",
					// 	"to": "/hr-events"
					// },

					{
						"id": 10,
						"label": "My Leaves",
						"to": "/my-leaves"
					},
					{
						"id": 11,
						"label": "Requisition",
						"to": "/my-requisition"
					},

					// {
					// 	"id": 12,
					// 	"label": "Accounts",
					// 	"to": "/hr-accounts"
					// },
					// {
					// 	"id": 13,
					// 	"label": "Report",
					// 	"to": "/hr-report"
					// },
					// {
					// 	"id": 14,
					// 	"label": "Expense",
					// 	"to": "/hr-expense"
					// },
					{
						"id": 15,
						"label": "Profile",
						"to": "/hr-profile"
					},
				]
			},

			isAdmin && {
				"id": 2,
				"icon": "fa fa-cogs",
				"label": "Admin",
				"to": "#!",
				content: [
					// {
					// 	"id": 16,
					// 	"label": "Payroll",
					// 	"to": "/hr-payroll"
					// },
					{
						"id": 17,
						"label": "General",
						"to": "/admin/settings"
					},
					{
						"id": 18,
						"label": "Billing",
						"to": "/admin/billing"
					},
				]
			},
			// {
			// 	"id": 13,
			// 	"icon": "icon-cup",
			// 	"label": "Project",
			// 	content: [
			// 		{
			// 			"id": 14,
			// 			"label": "Dashboard",
			// 			"to": "/project-dashboard"
			// 		},
			// 		{
			// 			"id": 15,
			// 			"label": "Project List",
			// 			"to": "/project-list"
			// 		},
			// 		{
			// 			"id": 16,
			// 			"label": "Taskboard",
			// 			"to": "/project-taskboard"
			// 		},
			// 		{
			// 			"id": 17,
			// 			"label": "Ticket List",
			// 			"to": "/project-ticket"
			// 		},
			// 		{
			// 			"id": 18,
			// 			"label": "Ticket Details",
			// 			"to": "/project-ticket-details"
			// 		},
			// 		{
			// 			"id": 19,
			// 			"label": "Clients",
			// 			"to": "/project-clients"
			// 		},
			// 		{
			// 			"id": 20,
			// 			"label": "Todo List",
			// 			"to": "/project-todo"
			// 		}
			// 	]
			// },
			// {
			// 	"id": 21,
			// 	"icon": "icon-briefcase",
			// 	"label": "Job Portal",
			// 	content: [
			// 		{
			// 			"id": 22,
			// 			"label": "Job Dashboard",
			// 			"to": "/jobportal-dashboard"
			// 		},
			// 		{
			// 			"id": 23,
			// 			"label": "Positions",
			// 			"to": "/jobportal-positions"
			// 		},
			// 		{
			// 			"id": 24,
			// 			"label": "Applicant",
			// 			"to": "/jobportal-applicants"
			// 		},
			// 		{
			// 			"id": 25,
			// 			"label": "Resumes",
			// 			"to": "/jobportal-resumes"
			// 		},
			// 		{
			// 			"id": 26,
			// 			"label": "Settings",
			// 			"to": "/jobportal-settings"
			// 		}
			// 	]
			// },
			// {
			// 	"id": 27,
			// 	"icon": "icon-lock",
			// 	"label": "Authentication",
			// 	content: [
			// 		{
			// 			"id": 28,
			// 			"label": "Login",
			// 			"to": "/login"
			// 		},
			// 		{
			// 			"id": 29,
			// 			"label": "Register",
			// 			"to": "/signup"
			// 		},
			// 		{
			// 			"id": 30,
			// 			"label": "Forgot Password",
			// 			"to": "/forgotPassword"
			// 		},
			// 		{
			// 			"id": 31,
			// 			"label": "404 error",
			// 			"to": "/notfound"
			// 		},
			// 		{
			// 			"id": 32,
			// 			"label": "500 Error",
			// 			"to": "/internalserver"
			// 		}
			// 	]
			// },
			// {
			// 	"id": 'UiElements',
			// 	"label": "Ui Elements"
			// },
			// {
			// 	"id": 33,
			// 	"icon": "icon-tag",
			// 	"label": "Icons",
			// 	"to": "/icons",
			// },
			// {
			// 	"id": 34,
			// 	"icon": "icon-bar-chart",
			// 	"label": "Charts",
			// 	"to": "/charts",
			// },
			// {
			// 	"id": 35,
			// 	"icon": "icon-layers",
			// 	"label": "Forms",
			// 	"to": "/forms",
			// },
			// {
			// 	"id": 36,
			// 	"icon": "icon-tag",
			// 	"label": "Tables",
			// 	"to": "/tables",
			// },
			// {
			// 	"id": 37,
			// 	"icon": "icon-puzzle",
			// 	"label": "Widgets",
			// 	"to": "/widgets",
			// },
			// {
			// 	"id": 38,
			// 	"icon": "icon-map",
			// 	"label": "Maps",
			// 	"to": "/maps",
			// },
			// {
			// 	"id": 39,
			// 	"icon": "icon-picture",
			// 	"label": "Gallery",
			// 	"to": "/gallery",
			// },
		];
		const { isOpenRightSidebar, isOpenUserMenu } = this.state
		const { darkMinSidebar, istoggleLeftMenu, friendListOpen, statisticsOpen, statisticsClose, friendListClose } = this.props
		const pageHeading = Routes.filter((route) => route?.path === this.props.location?.pathname)

		if (pageHeading.length === 0) {
			if (!this.props.location?.pathname.includes('/payslip/')
				&& !this.props.location?.pathname.includes('/req-payslip/')
				&& !this.props.location?.pathname.includes('/billing-receipt/')
				&& !this.props.location?.pathname.includes('/single-payroll/')) {
				return <NotFound />
			}
		}
		return (
			<>
				<div className={`${istoggleLeftMenu ? "offcanvas-active" : ""}`}>
					<div style={this.state.parentlink === 'login' ? masterNone : masterBlock}>
						<div id="header_top" className={`header_top ${darkMinSidebar && 'dark'}`}>
							<div className="container">
								<div className="hleft">
									<NavLink
										to="/"
										onClick={() => this.handler('hr', 'dashboard')}
										className="header-brand"
									>
										{/* <i className='fa fa-dashboard'></i> */}
										<i className="fe fe-clock brand-logo" />
									</NavLink>
									<div className="dropdown">
										{/* <NavLink to="/page-search" className="nav-link icon">
											<i className="fa fa-search" />
										</NavLink> */}
										{/* to enable this when we are ready to release them each one */}
										<NavLink to="/hr-calendar" className="nav-link icon app_inbox">
											<i className="fa fa-calendar" />
										</NavLink>
										{/* <NavLink to="/app-contact" className="nav-link icon xs-hide">
											<i className="fa fa-id-card-o" />
										</NavLink>
										<NavLink to="/app-chat" className="nav-link icon xs-hide">
											<i className="fa fa-comments-o" />
										</NavLink>
										<NavLink to="/app-filemanager" className="nav-link icon app_file xs-hide">
											<i className="fa fa-folder-o" />
										</NavLink> */}
									</div>
								</div>
								<div className="hright">
									<div className="dropdown">
										{/* <a href="#!" class="nav-link icon theme_btn">
										<i
											class="fa fa-paint-brush"
											data-toggle="tooltip"
											data-placement="right"
											title="Themes"
										></i>
									</a> */}
										{isAdmin && (
											<span className="nav-link icon settingbar" onClick={this.toggleRightSidebar}>
												<i
													className="fa fa-gear fa-spin"
													data-toggle="tooltip"
													data-placement="right"
													title="Settings"
												/>
											</span>
										)}
										{/* to relese user profile toggle  --- NOTE */}
										{/* <p className="nav-link user_btn" onClick={this.toggleUserMenu}>
											<img
												className="avatar"
												src="/assets/images/user.png"
												alt="fake_alr"
												data-toggle="tooltip"
												data-placement="right"
												title="User Menu"
											/>
										</p> */}
										<p className="nav-link icon menu_toggle" onClick={() => this.toggleLeftMenu(!istoggleLeftMenu)}>
											<i className="fa  fa-align-left" />
										</p>
									</div>
								</div>
							</div>
						</div>
						<div id="rightsidebar" className={`right_sidebar ${isOpenRightSidebar && "open"}`}>
							<span className="p-3 settingbar float-right" onClick={this.toggleRightSidebar}>
								<i className="fa fa-close" />
							</span>
							<ul className="nav nav-tabs" role="tablist">
								<li className="nav-item">
									<a className="nav-link active" data-toggle="tab" href="#Settings" aria-expanded="true">
										Settings
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#activity" aria-expanded="false">
										Activity
									</a>
								</li>
							</ul>
							<div className="tab-content">
								<div
									role="tabpanel"
									className="tab-pane vivify fadeIn active"
									id="Settings"
									aria-expanded="true"
								>

									<div>
										<h6 className="font-14 font-weight-bold mt-4 text-muted">General Settings</h6>
										<ul className="setting-list list-unstyled mt-1 setting_switch">

											<li>
												<label className="custom-switch">
													<span className="custom-switch-description">Email Nofications</span>
													<input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" defaultChecked={this.handleEmailNotificationCheckbox()} onChange={(e) => this.handleEmailNotification(e)} />
													<span className="custom-switch-indicator" />
												</label>
											</li>
											{/* <li>
												<label className="custom-switch">
													<span className="custom-switch-description">Fix Navbar top</span>
													<input
														type="checkbox"
														name="custom-switch-checkbox"
														className="custom-switch-input btn-fixnavbar"
														onChange={(e) => this.handleFixNavbar(e)}
													/>
													<span className="custom-switch-indicator" />
												</label>
											</li>
											<li>
												<label className="custom-switch">
													<span className="custom-switch-description">Header Dark</span>
													<input
														type="checkbox"
														name="custom-switch-checkbox"
														className="custom-switch-input btn-pageheader"
														onChange={(e) => this.handleDarkHeader(e)}
													/>
													<span className="custom-switch-indicator" />
												</label>
											</li>
											<li>
												<label className="custom-switch">
													<span className="custom-switch-description">Min Sidebar Dark</span>
													<input
														type="checkbox"
														name="custom-switch-checkbox"
														className="custom-switch-input btn-min_sidebar"
														onChange={(e) => this.handleMinSidebar(e)}
													/>
													<span className="custom-switch-indicator" />
												</label>
											</li>
											<li>
												<label className="custom-switch">
													<span className="custom-switch-description">Sidebar Dark</span>
													<input
														type="checkbox"
														name="custom-switch-checkbox"
														className="custom-switch-input btn-sidebar"
														onChange={(e) => this.handleSidebar(e)}
													/>
													<span className="custom-switch-indicator" />
												</label>
											</li>
											<li>
												<label className="custom-switch">
													<span className="custom-switch-description">Icon Color</span>
													<input
														type="checkbox"
														name="custom-switch-checkbox"
														className="custom-switch-input btn-iconcolor"
														onChange={(e) => this.handleIconColor(e)}
													/>
													<span className="custom-switch-indicator" />
												</label>
											</li>
											<li>
												<label className="custom-switch">
													<span className="custom-switch-description">Gradient Color</span>
													<input
														type="checkbox"
														name="custom-switch-checkbox"
														className="custom-switch-input btn-gradient"
														onChange={(e) => this.handleGradientColor(e)}
													/>
													<span className="custom-switch-indicator" />
												</label>
											</li>

											<li>
												<label className="custom-switch">
													<span className="custom-switch-description">RTL Support</span>
													<input
														type="checkbox"
														name="custom-switch-checkbox"
														className="custom-switch-input btn-rtl"
														onChange={(e) => this.handleRtl(e)}
													/>
													<span className="custom-switch-indicator" />
												</label>
											</li> */}

										</ul>
									</div>
									<hr />
									{/* <div className="form-group">
										<label className="d-block">
											Storage <span className="float-right">77%</span>
										</label>
										<div className="progress progress-sm">
											<div
												className="progress-bar"
												role="progressbar"
												aria-valuenow={77}
												aria-valuemin={0}
												aria-valuemax={100}
												style={{ width: '77%' }}
											/>
										</div>
										<button type="button" className="btn btn-primary btn-block mt-3">
											Upgrade Storage
										</button>
									</div> */}
								</div>
								{/* loop through activity here */}

								<div role="tabpanel" className="tab-pane vivify fadeIn" id="activity" aria-expanded="false">
									{isAdmin && (
										<>
											{activityLogs.splice(0, 5).map((activity) => (
												<ul key={activity.id} className="new_timeline mt-3">
													<li>
														<div className="bullet pink" />
														<div className="time">{moment(activity.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
														<div className="desc">
															<h3>{activity.name}</h3>
															<h4>{activity.activity}</h4>
														</div>
													</li>


												</ul>
											))}
										</>
									)}
									<a href='/hr-activities' className='desc'>
										...see more
									</a>
								</div>


							</div>
						</div>
						{/* <div className="theme_div">
							<div className="card">
								<div className="card-body">
									<ul className="list-group list-unstyled">
										<li className="list-group-item mb-2">
											<p>Default Theme</p>
											<a href="../main/index.html">
												<img
													src="/assets/images/themes/default.png"
													className="img-fluid"
													alt="fake_url"
												/>
											</a>
										</li>
										<li className="list-group-item mb-2">
											<p>Night Mode Theme</p>
											<a href="../dark/index.html">
												<img
													src="/assets/images/themes/dark.png"
													className="img-fluid"
													alt="fake_url"
												/>
											</a>
										</li>
										<li className="list-group-item mb-2">
											<p>RTL Version</p>
											<a href="../rtl/index.html">
												<img
													src="/assets/images/themes/rtl.png"
													className="img-fluid"
													alt="fake_url"
												/>
											</a>
										</li>
										<li className="list-group-item mb-2">
											<p>Theme Version2</p>
											<a href="../theme2/index.html">
												<img
													src="/assets/images/themes/theme2.png"
													className="img-fluid"
													alt="fake_url"
												/>
											</a>
										</li>
										<li className="list-group-item mb-2">
											<p>Theme Version3</p>
											<a href="../theme3/index.html">
												<img
													src="/assets/images/themes/theme3.png"
													className="img-fluid"
													alt="fake_url"
												/>
											</a>
										</li>
										<li className="list-group-item mb-2">
											<p>Theme Version4</p>
											<a href="../theme4/index.html">
												<img
													src="/assets/images/themes/theme4.png"
													className="img-fluid"
													alt="fake_url"
												/>
											</a>
										</li>
										<li className="list-group-item mb-2">
											<p>Horizontal Version</p>
											<a href="../horizontal/index.html">
												<img
													src="/assets/images/themes/horizontal.png"
													className="img-fluid"
													alt="fake_url"
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div> */}
						<div className={`user_div ${isOpenUserMenu && 'open'}`}>
							<h5 className="brand-name mb-4">
								<Image
									src={require("../../assets/images/hr-manager-logo.png")}
									alt="Open"
									className="img-fluid"
									width={100}
								/>
								<p className="user_btn" onClick={this.toggleUserMenu}>
									<i className="icon-logout" />
								</p>
							</h5>
							<div className="card">
								<div className="card-body">
									<div className="media">
										<img
											className="avatar avatar-xl mr-3"
											src="/assets/images/user.png"
											alt="avatar"
										/>
										{/* <div className="media-body">
											<h5 className="m-0">Sara Hopkins</h5>
											<p className="text-muted mb-0">Webdeveloper</p>
											<ul className="social-links list-inline mb-0 mt-2">
												<li className="list-inline-item">
													<a
														href="#!"
														title="fake_title"
														data-toggle="tooltip"
														data-original-title="Facebook"
													>
														<i className="fa fa-facebook" />
													</a>
												</li>
												<li className="list-inline-item">
													<a
														href="#!"
														title="fake_title"
														data-toggle="tooltip"
														data-original-title="Twitter"
													>
														<i className="fa fa-twitter" />
													</a>
												</li>
												<li className="list-inline-item">
													<a
														href="#!"
														title="fake_title"
														data-toggle="tooltip"
														data-original-title={1234567890}
													>
														<i className="fa fa-phone" />
													</a>
												</li>
												<li className="list-inline-item">
													<a
														href="#!"
														title="fake_title"
														data-toggle="tooltip"
														data-original-title="@skypename"
													>
														<i className="fa fa-skype" />
													</a>
												</li>
											</ul>
										</div> */}
									</div>
								</div>
							</div>
							{statisticsClose ?
								<div className={`card ${statisticsOpen ? 'card-collapsed' : ""}`}>
									{/* < div className="card-header">
										<h3 className="card-title">Statistics</h3>
										<div className="card-options">
											<span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleStatistics(!statisticsOpen)}>
												<i className="fe fe-chevron-up" />
											</span>
											<span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeStatistics(false)}>
												<i className="fe fe-x" />
											</span>
										</div>
									</div>
									<div className="card-body">
										<div className="text-center">
											<div className="row">
												<div className="col-6 pb-3">
													<label className="mb-0">Balance</label>
													<h4 className="font-30 font-weight-bold">$545</h4>
												</div>
												<div className="col-6 pb-3">
													<label className="mb-0">Growth</label>
													<h4 className="font-30 font-weight-bold">27%</h4>
												</div>
											</div>
										</div>
										<div className="form-group">
											<label className="d-block">
												Total Income<span className="float-right">77%</span>
											</label>
											<div className="progress progress-xs">
												<div
													className="progress-bar bg-blue"
													role="progressbar"
													aria-valuenow={77}
													aria-valuemin={0}
													aria-valuemax={100}
													style={{ width: '77%' }}
												/>
											</div>
										</div>
										<div className="form-group">
											<label className="d-block">
												Total Expenses <span className="float-right">50%</span>
											</label>
											<div className="progress progress-xs">
												<div
													className="progress-bar bg-danger"
													role="progressbar"
													aria-valuenow={50}
													aria-valuemin={0}
													aria-valuemax={100}
													style={{ width: '50%' }}
												/>
											</div>
										</div>
										<div className="form-group mb-0">
											<label className="d-block">
												Gross Profit <span className="float-right">23%</span>
											</label>
											<div className="progress progress-xs">
												<div
													className="progress-bar bg-green"
													role="progressbar"
													aria-valuenow={23}
													aria-valuemin={0}
													aria-valuemax={100}
													style={{ width: '23%' }}
												/>
											</div>
										</div>
									</div> */}
								</div> : ""}
							{friendListClose ?
								<div className={`card ${friendListOpen ? 'card-collapsed' : ""}`}>
									{/* <div className="card-header">
										<h3 className="card-title">Friends</h3>
										<div className="card-options">
											<span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleFriendList(!friendListOpen)}>
												<i className="fe fe-chevron-up" />
											</span>
											<span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeFriendList(false)}>
												<i className="fe fe-x" />
											</span>
										</div>
									</div> */}
									{/* <div className="card-body">
										<ul className="right_chat list-unstyled">
											<li className="online">
												<a href="#!">
													<div className="media">
														<img className="media-object " src="../assets/images/xs/avatar4.jpg" alt="fake_alr" />
														<div className="media-body">
															<span className="name">Donald Gardner</span>
															<span className="message">Designer, Blogger</span>
															<span className="badge badge-outline status" />
														</div>
													</div>
												</a>
											</li>
											<li className="online">
												<a href="#!">
													<div className="media">
														<img
															className="media-object "
															src="/assets/images/xs/avatar5.jpg"
															alt="fake_alr"
														/>
														<div className="media-body">
															<span className="name">Wendy Keen</span>
															<span className="message">Java Developer</span>
															<span className="badge badge-outline status" />
														</div>
													</div>
												</a>
											</li>
											<li className="offline">
												<a href="#!">
													<div className="media">
														<img
															className="media-object "
															src="/assets/images/xs/avatar2.jpg"
															alt="fake_alr"
														/>
														<div className="media-body">
															<span className="name">Matt Rosales</span>
															<span className="message">CEO, Epic Theme</span>
															<span className="badge badge-outline status" />
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div> */}
								</div>
								: ""}
							<div className="card b-none">
								{/* <ul className="list-group">
									<li className="list-group-item d-flex">
										<div className="box-icon sm rounded bg-blue">
											<i className="fa fa-credit-card" />{' '}
										</div>
										<div className="ml-3">
											<div>+$29 New sale</div>
											<a href="#!">HrManeja</a>
											<div className="text-muted font-12">5 min ago</div>
										</div>
									</li>
									<li className="list-group-item d-flex">
										<div className="box-icon sm rounded bg-pink">
											<i className="fa fa-upload" />{' '}
										</div>
										<div className="ml-3">
											<div>Project Update</div>
											<a href="#!">New HTML page</a>
											<div className="text-muted font-12">10 min ago</div>
										</div>
									</li>
									<li className="list-group-item d-flex">
										<div className="box-icon sm rounded bg-teal">
											<i className="fa fa-file-word-o" />{' '}
										</div>
										<div className="ml-3">
											<div>You edited the file</div>
											<a href="#!">reposrt.doc</a>
											<div className="text-muted font-12">11 min ago</div>
										</div>
									</li>
									<li className="list-group-item d-flex">
										<div className="box-icon sm rounded bg-cyan">
											<i className="fa fa-user" />{' '}
										</div>
										<div className="ml-3">
											<div>New user</div>
											<a href="#!">Puffin web - view</a>
											<div className="text-muted font-12">17 min ago</div>
										</div>
									</li>
								</ul> */}
							</div>
						</div>
						<div id="left-sidebar" className="sidebar ">
							<h5 className="brand-name">
								<Image
									src={require("../../assets/images/hr-manager-logo.png")}
									alt="Open"
									className="img-fluid"
									width={100}
								/></h5>
							<nav id="left-sidebar-nav" className="sidebar-nav">
								<MetisMenu className=""
									content={content}
									noBuiltInClassNames={true}
									classNameContainer={(e) => this.toggleSubMenu(e)}
									classNameContainerVisible="in"
									classNameItemActive="active"
									classNameLinkActive="active"
									// classNameItemHasActiveChild="active"
									classNameItemHasVisibleChild="active"
									classNameLink="has-arrow arrow-c"
									// classNameIcon
									// classNameStateIcon

									iconNamePrefix=""
									// iconNameStateHidden=""
									LinkComponent={(e) => <DefaultLink itemProps={e} />}
								// toggleSubMenu={this.toggleSubMenu}
								/>

							</nav>
						</div>
					</div>

					<div className="page">
						<Header dataFromParent={this.props.dataFromParent} dataFromSubParent={pageHeading[0]?.pageTitle} />
						<Switch>
							{Routes.map((layout, i) => {
								return <Route key={i} exact={layout?.exact} path={layout?.path} component={layout?.component}></Route>
							})}
						</Switch>
						<Footer />
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = state => ({
	darkMinSidebar: state.settings.isMinSidebar,
	statisticsOpen: state.settings.isStatistics,
	friendListOpen: state.settings.isFriendList,
	statisticsClose: state.settings.isStatisticsClose,
	friendListClose: state.settings.isFriendListClose,
	istoggleLeftMenu: state.settings.isToggleLeftMenu
})

const mapDispatchToProps = dispatch => ({
	darkModeAction: (e) => dispatch(darkModeAction(e)),
	darkHeaderAction: (e) => dispatch(darkHeaderAction(e)),
	fixNavbarAction: (e) => dispatch(fixNavbarAction(e)),
	darkMinSidebarAction: (e) => dispatch(darkMinSidebarAction(e)),
	darkSidebarAction: (e) => dispatch(darkSidebarAction(e)),
	iconColorAction: (e) => dispatch(iconColorAction(e)),
	gradientColorAction: (e) => dispatch(gradientColorAction(e)),
	rtlAction: (e) => dispatch(rtlAction(e)),
	fontAction: (e) => dispatch(fontAction(e)),
	subMenuIconAction: (e) => dispatch(subMenuIconAction(e)),
	menuIconAction: (e) => dispatch(menuIconAction(e)),
	boxLayoutAction: (e) => dispatch(boxLayoutAction(e)),
	statisticsAction: (e) => dispatch(statisticsAction(e)),
	friendListAction: (e) => dispatch(friendListAction(e)),
	statisticsCloseAction: (e) => dispatch(statisticsCloseAction(e)),
	friendListCloseAction: (e) => dispatch(friendListCloseAction(e)),
	toggleLeftMenuAction: (e) => dispatch(toggleLeftMenuAction(e)),
	emailNotificationAction: (e) => dispatch(emailNotificationAction(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(Menu);