import React, { Component } from 'react';
import Piechart from '../../common/piechart';
import Columnchart from '../../common/columnchart';
import Stackedchart from '../../common/stackedchart';
import Sparklineschart from '../../common/sparklineschart';
import { Link } from 'react-router-dom';
import Donutchart from '../../common/donutchart';
import { connect } from 'react-redux';
// import { getUser } from "../../../config/common";
class Dashboard extends Component {

	render() {
		const { fixNavbar } = this.props;
		return (
			<>
				<div>
					<div className={`section-body ${fixNavbar ? "marginTop" : ""} mt-3`}>
						<div className="container-fluid">
							<div className="row clearfix">
								<div className="col-lg-12">
									<div className={`section-body ${fixNavbar ? "mb-4 mt-3" : "mb-4"}`}>
										<h4>Welcome Jason Porter!</h4>
										<small>
											Measure How Fast You’re Growing Monthly Recurring Revenue.{' '}
											<a href="fake_url">Learn More</a>
										</small>
									</div>
								</div>
							</div>
							<div className="row clearfix">
								<div className="col-6 col-md-4 col-xl-2">
									<div className="card">
										<div className="card-body ribbon">
											<div className="ribbon-box green">5</div>
											<Link to="/hr-users" className="my_sort_cut text-muted">
												<i className="icon-users" />
												<span>Users</span>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-6 col-md-4 col-xl-2">
									<div className="card">
										<div className="card-body">
											<Link to="/hr-holidays" className="my_sort_cut text-muted">
												<i className="icon-like" />
												<span>Holidays</span>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-6 col-md-4 col-xl-2">
									<div className="card">
										<div className="card-body ribbon">
											<div className="ribbon-box orange">8</div>
											<Link to="/hr-events" className="my_sort_cut text-muted">
												<i className="icon-calendar" />
												<span>Events</span>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-6 col-md-4 col-xl-2">
									<div className="card">
										<div className="card-body">
											<Link to="/hr-payroll" className="my_sort_cut text-muted">
												<i className="icon-credit-card" />
												<span>Payroll</span>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-6 col-md-4 col-xl-2">
									<div className="card">
										<div className="card-body">
											<Link to="/hr-accounts" className="my_sort_cut text-muted">
												<i className="icon-calculator" />
												<span>Accounts</span>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-6 col-md-4 col-xl-2">
									<div className="card">
										<div className="card-body">
											<Link to="/hr-report" className="my_sort_cut text-muted">
												<i className="icon-pie-chart" />
												<span>Report</span>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section-body">
						<div className="container-fluid">
							<div className="row clearfix row-deck">
								<div className="col-xl-6 col-lg-12 col-md-12">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Salary Statistics</h3>
											<div className="card-options">
												<label className="custom-switch m-0">
													<input
														type="checkbox"
														defaultValue={1}
														className="custom-switch-input"
														defaultChecked
													/>
													<span className="custom-switch-indicator" />
												</label>
											</div>
										</div>
										<div className="card-body">
											<Stackedchart></Stackedchart>
										</div>
										<div className="card-footer">
											<div className="d-flex justify-content-between align-items-center">
												<a href="fake_url" className="btn btn-info btn-sm w200 mr-3">
													Generate Report
													</a>
												<small>
													Measure How Fast You’re Growing Monthly Recurring Revenue.{' '}
													<a href="fake_url">Learn More</a>
												</small>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-md-6">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Revenue</h3>
										</div>
										<Piechart></Piechart>

										<div className="card-body text-center">
											<div className="mt-4">
											</div>
											<h3 className="mb-0 mt-3 font300">
												<span className="counter">1,24,301</span>{' '}
												<span className="text-green font-15">+3.7%</span>
											</h3>
											<small>
												Lorem Ipsum is simply dummy text <br />{' '}
												{/* <a href="fake_url">Read more</a>{' '} */}
											</small>
											{/* <div className="mt-4">
													<span className="chart_3">2,5,8,3,6,9,4,5,6,3</span>
												</div> */}
										</div>
										<div className="card-footer">
											<a href="fake_url" className="btn btn-block btn-success btn-sm">
												Send Report
												</a>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-md-6">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">My Balance</h3>
										</div>
										<div className="card-body">
											<span>Balance</span>
											<h4>
												$<span className="counter">20,508</span>
											</h4>
											<Sparklineschart className="mb-4"></Sparklineschart>
											<div className="form-group">
												<label className="d-block">
													Bank of America{' '}
													<span className="float-right">
														$<span className="counter">15,025</span>
													</span>
												</label>
												<div className="progress progress-xs">
													<div
														className="progress-bar bg-azure"
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
													RBC Bank{' '}
													<span className="float-right">
														$<span className="counter">1,843</span>
													</span>
												</label>
												<div className="progress progress-xs">
													<div
														className="progress-bar bg-green"
														role="progressbar"
														aria-valuenow={50}
														aria-valuemin={0}
														aria-valuemax={100}
														style={{ width: '50%' }}
													/>
												</div>
											</div>
											<div className="form-group">
												<label className="d-block">
													Frost Bank{' '}
													<span className="float-right">
														$<span className="counter">3,641</span>
													</span>
												</label>
												<div className="progress progress-xs">
													<div
														className="progress-bar bg-blue"
														role="progressbar"
														aria-valuenow={23}
														aria-valuemin={0}
														aria-valuemax={100}
														style={{ width: '23%' }}
													/>
												</div>
											</div>
										</div>
										<div className="card-footer">
											<a href="fake_url" className="btn btn-block btn-info btn-sm">
												View More
												</a>
										</div>
									</div>
								</div>
							</div>
							<div className="row clearfix row-deck">
								<div className="col-xl-6 col-lg-6 col-md-6">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Employee Structure</h3>
										</div>
										<div className="card-body text-center">
											<Columnchart></Columnchart>

										</div>

										{/* <div className="card-body text-center">
												<div className="row clearfix">
													<div className="col-6">
														<h6 className="mb-0">50</h6>
														<small className="text-muted">Male</small>
													</div>
													<div className="col-6">
														<h6 className="mb-0">17</h6>
														<small className="text-muted">Female</small>
													</div>
												</div>
											</div> */}
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-md-6">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Performance</h3>
										</div>
										<div className="card-body">
											<span>
												Measure How Fast You’re Growing Monthly Recurring Revenue.{' '}
												<a href="fake_url">Learn More</a>
											</span>
											<ul className="list-group mt-3 mb-0">
												<li className="list-group-item">
													<div className="clearfix">
														<div className="float-left">
															<strong>35%</strong>
														</div>
														<div className="float-right">
															<small className="text-muted">Design Team</small>
														</div>
													</div>
													<div className="progress progress-xs">
														<div
															className="progress-bar bg-azure"
															role="progressbar"
															style={{ width: '35%' }}
															aria-valuenow={42}
															aria-valuemin={0}
															aria-valuemax={100}
														/>
													</div>
												</li>
												<li className="list-group-item">
													<div className="clearfix">
														<div className="float-left">
															<strong>25%</strong>
														</div>
														<div className="float-right">
															<small className="text-muted">Developer Team</small>
														</div>
													</div>
													<div className="progress progress-xs">
														<div
															className="progress-bar bg-green"
															role="progressbar"
															style={{ width: '25%' }}
															aria-valuenow={0}
															aria-valuemin={0}
															aria-valuemax={100}
														/>
													</div>
												</li>
												<li className="list-group-item">
													<div className="clearfix">
														<div className="float-left">
															<strong>15%</strong>
														</div>
														<div className="float-right">
															<small className="text-muted">Marketing</small>
														</div>
													</div>
													<div className="progress progress-xs">
														<div
															className="progress-bar bg-orange"
															role="progressbar"
															style={{ width: '15%' }}
															aria-valuenow={36}
															aria-valuemin={0}
															aria-valuemax={100}
														/>
													</div>
												</li>
												<li className="list-group-item">
													<div className="clearfix">
														<div className="float-left">
															<strong>20%</strong>
														</div>
														<div className="float-right">
															<small className="text-muted">Management</small>
														</div>
													</div>
													<div className="progress progress-xs">
														<div
															className="progress-bar bg-indigo"
															role="progressbar"
															style={{ width: '20%' }}
															aria-valuenow={6}
															aria-valuemin={0}
															aria-valuemax={100}
														/>
													</div>
												</li>
												<li className="list-group-item">
													<div className="clearfix">
														<div className="float-left">
															<strong>11%</strong>
														</div>
														<div className="float-right">
															<small className="text-muted">Other</small>
														</div>
													</div>
													<div className="progress progress-xs">
														<div
															className="progress-bar bg-pink"
															role="progressbar"
															style={{ width: '11%' }}
															aria-valuenow={6}
															aria-valuemin={0}
															aria-valuemax={100}
														/>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-md-6">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Growth</h3>
										</div>
										<Donutchart />

										{/* <div className="card-footer text-center">
												<div className="row clearfix">
													<div className="col-6">
														<h6 className="mb-0">$3,095</h6>
														<small className="text-muted">Last Year</small>
													</div>
													<div className="col-6">
														<h6 className="mb-0">$2,763</h6>
														<small className="text-muted">This Year</small>
													</div>
												</div>
											</div> */}
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</>
		);
	}
}
const mapStateToProps = state => ({
	fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);