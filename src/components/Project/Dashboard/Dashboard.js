import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountUp from 'react-countup';
import Barchart from '../../common/barchart';
import { Link } from 'react-router-dom';


class ProjectDashboard extends Component {

	render() {
		const { fixNavbar } = this.props;
		return (
			<>
				<div className={`section-body ${fixNavbar ? "marginTop" : ""} mt-3`}>
					<div className="container-fluid">
						<div className="row clearfix">
							<div className="col-lg-12">
								<div className={`section-body ${fixNavbar ? "mb-4 mt-3" : "mb-4"}`}>
									<h4>Welcome Jason Porter!</h4>
									<small>
										Measure How Fast You’re Growing Monthly Recurring Revenue.{' '}
										<a href="/#">Learn More</a>
									</small>
								</div>
							</div>
						</div>
						<div className="row clearfix">
							<div className="col-6 col-md-4 col-xl-2">
								<div className="card">
									<div className="card-body ribbon">
										<div className="ribbon-box green">5</div>
										<Link to="/project-taskboard" className="my_sort_cut text-muted">
											<i className="icon-list" />
											<span>TaskBoard</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-2">
								<div className="card">
									<div className="card-body ribbon">
										<div className="ribbon-box pink">8</div>
										<Link to="/hr-holidays" className="my_sort_cut text-muted">
											<i className="icon-like" />
											<span>Todo</span>
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
									<div className="card-body ribbon">
										<div className="ribbon-box orange">8</div>
										<Link to="/hr-events" className="my_sort_cut text-muted">
											<i className="icon-doc" />
											<span>New Ticket</span>
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
						<div className="row clearfix row-deck">
							<div className="col-xl-4 col-lg-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Project Statistics</h3>

									</div>
									<div className="card-body">
										<div className="row text-center">
											<div className="col-sm-4 border-right pb-4 pt-4">
												<label className="mb-0">Total Project</label>
												<h4 className="font-30 font-weight-bold text-col-blue counter"><CountUp end={42} /></h4>
											</div>
											<div className="col-sm-4 border-right pb-4 pt-4">
												<label className="mb-0">On Going</label>
												<h4 className="font-30 font-weight-bold text-col-blue counter"><CountUp end={23} /></h4>
											</div>
											<div className="col-sm-4 pb-4 pt-4">
												<label className="mb-0">Pending</label>
												<h4 className="font-30 font-weight-bold text-col-blue counter"><CountUp end={8} /></h4>
											</div>
										</div>
									</div>
									<div className="table-responsive">
										<table className="table table-striped table-vcenter mb-0">
											<tbody>
												<tr>
													<td>
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
													</td>
												</tr>
												<tr>
													<td>
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
													</td>
												</tr>
												<tr>
													<td>
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
													</td>
												</tr>
												<tr>
													<td>
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
													</td>
												</tr>
												<tr>
													<td>
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
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="col-xl-8 col-lg-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Current Ticket Status</h3>
									</div>

									<div className="card-body">
										{/* <div className="d-sm-flex justify-content-between">
											<div className="font-12">as of 10th to 17th of Jun 2019</div>
											<div className="selectgroup w250">
												<label className="selectgroup-item">
													<input
														type="radio"
														name="intensity"
														defaultValue="low"
														className="selectgroup-input"
														defaultChecked
													/>
													<span className="selectgroup-button">10 Day</span>
												</label>
												<label className="selectgroup-item">
													<input
														type="radio"
														name="intensity"
														defaultValue="medium"
														className="selectgroup-input"
													/>
													<span className="selectgroup-button">20 Day</span>
												</label>
												<label className="selectgroup-item">
													<input
														type="radio"
														name="intensity"
														defaultValue="high"
														className="selectgroup-input"
													/>
													<span className="selectgroup-button">30 Day</span>
												</label>
											</div>
										</div> */}
										{/* <div id="chart-combination" style={{ height: '16rem' }} /> */}
										{/* <div id="chart-combination" style={{ height: 205 }} /> */}
										<Barchart></Barchart>
									</div>
									<div className="card-footer">
										<div className="row">
											<div className="col-6 col-xl-3 col-md-6">
												<h5>05</h5>
												<div className="clearfix">
													<div className="float-left">
														<strong>35%</strong>
													</div>
													<div className="float-right">
														<small className="text-muted">Yesterday</small>
													</div>
												</div>
												<div className="progress progress-xs">
													<div
														className="progress-bar bg-gray"
														role="progressbar"
														style={{ width: '35%' }}
														aria-valuenow={42}
														aria-valuemin={0}
														aria-valuemax={100}
													/>
												</div>
												<span className="text-uppercase font-10">New Tickets</span>
											</div>
											<div className="col-6 col-xl-3 col-md-6">
												<h5>18</h5>
												<div className="clearfix">
													<div className="float-left">
														<strong>61%</strong>
													</div>
													<div className="float-right">
														<small className="text-muted">Yesterday</small>
													</div>
												</div>
												<div className="progress progress-xs">
													<div
														className="progress-bar bg-gray"
														role="progressbar"
														style={{ width: '61%' }}
														aria-valuenow={42}
														aria-valuemin={0}
														aria-valuemax={100}
													/>
												</div>
												<span className="text-uppercase font-10">Open Tickets</span>
											</div>
											<div className="col-6 col-xl-3 col-md-6">
												<h5>06</h5>
												<div className="clearfix">
													<div className="float-left">
														<strong>100%</strong>
													</div>
													<div className="float-right">
														<small className="text-muted">Yesterday</small>
													</div>
												</div>
												<div className="progress progress-xs">
													<div
														className="progress-bar bg-gray"
														role="progressbar"
														style={{ width: '100%' }}
														aria-valuenow={42}
														aria-valuemin={0}
														aria-valuemax={100}
													/>
												</div>
												<span className="text-uppercase font-10">Solved Tickets</span>
											</div>
											<div className="col-6 col-xl-3 col-md-6">
												<h5>11</h5>
												<div className="clearfix">
													<div className="float-left">
														<strong>87%</strong>
													</div>
													<div className="float-right">
														<small className="text-muted">Yesterday</small>
													</div>
												</div>
												<div className="progress progress-xs">
													<div
														className="progress-bar bg-gray"
														role="progressbar"
														style={{ width: '87%' }}
														aria-valuenow={42}
														aria-valuemin={0}
														aria-valuemax={100}
													/>
												</div>
												<span className="text-uppercase font-10">Unresolved</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-body">
					<div className="container-fluid">
						<div className="row clearfix row-deck">
							<div className="col-xl-4 col-lg-6 col-md-6">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Customer Satisfaction</h3>
									</div>
									<div className="card-body">
										<div className="d-flex align-items-baseline">
											<h1 className="mb-0 mr-2">9.8</h1>
											<p className="mb-0">
												<span className="text-success">
													1.6% <i className="fa fa-arrow-up" />
												</span>
											</p>
										</div>
										<h6 className="text-uppercase font-10">Performance Score</h6>
										<div className="progress progress-xs">
											<div
												className="progress-bar"
												role="progressbar"
												style={{ width: '15%' }}
												aria-valuenow={15}
												aria-valuemin={0}
												aria-valuemax={100}
											/>
											<div
												className="progress-bar bg-info"
												role="progressbar"
												style={{ width: '20%' }}
												aria-valuenow={20}
												aria-valuemin={0}
												aria-valuemax={100}
											/>
											<div
												className="progress-bar bg-success"
												role="progressbar"
												style={{ width: '30%' }}
												aria-valuenow={30}
												aria-valuemin={0}
												aria-valuemax={100}
											/>
											<div
												className="progress-bar bg-orange"
												role="progressbar"
												style={{ width: '5%' }}
												aria-valuenow={20}
												aria-valuemin={0}
												aria-valuemax={100}
											/>
											<div
												className="progress-bar bg-indigo"
												role="progressbar"
												style={{ width: '13%' }}
												aria-valuenow={20}
												aria-valuemin={0}
												aria-valuemax={100}
											/>
										</div>
									</div>
									<div className="table-responsive">
										<table className="table table-striped table-vcenter mb-0">
											<tbody>
												<tr>
													<td>
														<i className="fa fa-circle text-blue" />
													</td>
													<td className="tx-medium">Excellent</td>
													<td className="text-right">3,007</td>
													<td className="text-right">50%</td>
												</tr>
												<tr>
													<td>
														<i className="fa fa-circle text-success" />
													</td>
													<td className="tx-medium">Very Good</td>
													<td className="text-right">1,674</td>
													<td className="text-right">25%</td>
												</tr>
												<tr>
													<td>
														<i className="fa fa-circle text-info" />
													</td>
													<td className="tx-medium">Good</td>
													<td className="text-right">125</td>
													<td className="text-right">6%</td>
												</tr>
												<tr>
													<td>
														<i className="fa fa-circle text-orange" />
													</td>
													<td className="tx-medium">Fair</td>
													<td className="text-right">98</td>
													<td className="text-right">5%</td>
												</tr>
												<tr>
													<td>
														<i className="fa fa-circle text-indigo" />
													</td>
													<td className="tx-medium">Poor</td>
													<td className="text-right">512</td>
													<td className="text-right">10%</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-lg-6 col-md-6">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Overall Rating</h3>
									</div>
									<div className="card-body">
										<div className="d-flex align-items-baseline">
											<h2 className="font-28 mr-2">4.2</h2>
											<div className="font-14">
												<i className="fa fa-star text-orange" />
												<i className="fa fa-star text-orange" />
												<i className="fa fa-star text-orange" />
												<i className="fa fa-star text-orange" />
												<i className="fa fa-star" />
											</div>
										</div>
										<p className="mb-0 font-12">
											Overall the quality or your support team’s efforts Rating.
										</p>
									</div>
									<div className="table-responsive">
										<table className="table table-striped table-vcenter mb-0">
											<tbody>
												<tr>
													<td>
														<strong>5.0</strong>
													</td>
													<td>
														<i className="fa fa-star" />
														<i className="fa fa-star" />
														<i className="fa fa-star" />
														<i className="fa fa-star" />
														<i className="fa fa-star" />
													</td>
													<td className="text-right">432</td>
													<td className="text-right">58%</td>
												</tr>
												<tr>
													<td>
														<strong>4.0</strong>
													</td>
													<td>
														<i className="fa fa-star" />
														<i className="fa fa-star" />
														<i className="fa fa-star" />
														<i className="fa fa-star" />
														<i className="fa fa-star-o" />
													</td>
													<td className="text-right">189</td>
													<td className="text-right">42%</td>
												</tr>
												<tr>
													<td>
														<strong>3.0</strong>
													</td>
													<td>
														<i className="fa fa-star" />
														<i className="fa fa-star" />
														<i className="fa fa-star" />
														<i className="fa fa-star-o" />
														<i className="fa fa-star-o" />
													</td>
													<td className="text-right">125</td>
													<td className="text-right">23%</td>
												</tr>
												<tr>
													<td>
														<strong>2.0</strong>
													</td>
													<td>
														<i className="fa fa-star" />
														<i className="fa fa-star" />
														<i className="fa fa-star-o" />
														<i className="fa fa-star-o" />
														<i className="fa fa-star-o" />
													</td>
													<td className="text-right">89</td>
													<td className="text-right">18%</td>
												</tr>
												<tr>
													<td>
														<strong>1.0</strong>
													</td>
													<td>
														<i className="fa fa-star" />
														<i className="fa fa-star-o" />
														<i className="fa fa-star-o" />
														<i className="fa fa-star-o" />
														<i className="fa fa-star-o" />
													</td>
													<td className="text-right">18</td>
													<td className="text-right">11%</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-lg-12 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Transaction History</h3>
										<div className="card-options">
											<a href="/#" className="card-options-remove" data-toggle="card-remove">
												<i className="fe fe-x" />
											</a>
											<div className="item-action dropdown ml-2">
												<a href="fake_url" data-toggle="dropdown" aria-expanded="false">
													<i className="fe fe-more-vertical" />
												</a>
												<div
													className="dropdown-menu dropdown-menu-right"
													x-placement="bottom-end"
													style={{
														position: 'absolute',
														transform: 'translate3d(-174px, 25px, 0px)',
														top: 0,
														left: 0,
														willChange: 'transform',
													}}
												>
													<a href="fake_url" className="dropdown-item">
														<i className="dropdown-icon fa fa-eye" /> View Details{' '}
													</a>
													<a href="fake_url" className="dropdown-item">
														<i className="dropdown-icon fa fa-share-alt" /> Share{' '}
													</a>
													<a href="fake_url" className="dropdown-item">
														<i className="dropdown-icon fa fa-cloud-download" /> Download
													</a>
													<div className="dropdown-divider" />
													<a href="fake_url" className="dropdown-item">
														<i className="dropdown-icon fa fa-copy" /> Copy to
													</a>
													<a href="fake_url" className="dropdown-item">
														<i className="dropdown-icon fa fa-folder" /> Move to
													</a>
													<a href="fake_url" className="dropdown-item">
														<i className="dropdown-icon fa fa-edit" /> Rename
													</a>
													<a href="fake_url" className="dropdown-item">
														<i className="dropdown-icon fa fa-trash" /> Delete
													</a>
												</div>
											</div>
										</div>
									</div>
									<table className="table card-table mt-2">
										<tbody>
											<tr>
												<td className="width45">
													<span className="avatar avatar-green">
														<i className="fa fa-check" />
													</span>
												</td>
												<td>
													<p className="mb-0">Payment from #1598</p>
													<span className="text-muted font-13">Feb 21, 2019, 3:30pm</span>
												</td>
												<td className="text-right">
													<p className="mb-0">$300</p>
													<span className="text-success font-13">Done</span>
												</td>
											</tr>
											<tr>
												<td className="width45">
													<span className="avatar avatar-green">
														<i className="fa fa-truck" />
													</span>
												</td>
												<td>
													<p className="mb-0">Process delivery to #85236</p>
													<span className="text-muted font-13">March 14, 2019, 2:30pm</span>
												</td>
												<td className="text-right">
													<p className="mb-0">$300</p>
													<span className="text-success font-13">For pickup</span>
												</td>
											</tr>
											<tr>
												<td className="width45">
													<span className="avatar avatar-orange">
														<i className="fa fa-angle-left" />
													</span>
												</td>
												<td>
													<p className="mb-0">Process refund #4568</p>
													<span className="text-muted font-13">March 18, 2019, 6:30pm</span>
												</td>
												<td className="text-right">
													<p className="mb-0">$300</p>
													<span className="text-success font-13">Done</span>
												</td>
											</tr>
											<tr>
												<td className="width45">
													<span className="avatar avatar-red">
														<i className="fa fa-cc-visa" />
													</span>
												</td>
												<td>
													<p className="mb-0">Payment failed from #32658</p>
													<span className="text-muted font-13">April 27, 2019, 3:48pm</span>
												</td>
												<td className="text-right">
													<p className="mb-0">$300</p>
													<span className="text-danger font-13">Declined</span>
												</td>
											</tr>
											<tr>
												<td className="width45">
													<span className="avatar avatar-orange">
														<i className="fa fa-angle-left" />
													</span>
												</td>
												<td>
													<p className="mb-0">Process refund #4568</p>
													<span className="text-muted font-13">March 18, 2019, 6:30pm</span>
												</td>
												<td className="text-right">
													<p className="mb-0">$300</p>
													<span className="text-success font-13">Done</span>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="row clearfix">
							<div className="col-12 col-sm-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Project Summary</h3>
									</div>
									<div className="card-body">
										<div className="table-responsive">
											<table className="table table-hover table-striped text-nowrap table-vcenter mb-0">
												<thead>
													<tr>
														<th>#</th>
														<th>Client Name</th>
														<th>Team</th>
														<th>Project</th>
														<th>Project Cost</th>
														<th>Payment</th>
														<th>Status</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>#AD1245</td>
														<td>Sean Black</td>
														<td>
															<ul className="list-unstyled team-info sm margin-0 w150">
																<li>
																	<img
																		src="../assets/images/xs/avatar1.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li>
																	<img
																		src="../assets/images/xs/avatar2.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li>
																	<img
																		src="../assets/images/xs/avatar3.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li>
																	<img
																		src="../assets/images/xs/avatar4.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li className="ml-2">
																	<span>2+</span>
																</li>
															</ul>
														</td>
														<td>Angular Admin</td>
														<td>$14,500</td>
														<td>Done</td>
														<td>
															<span className="tag tag-success">Delivered</span>
														</td>
													</tr>
													<tr>
														<td>#DF1937</td>
														<td>Sean Black</td>
														<td>
															<ul className="list-unstyled team-info sm margin-0 w150">
																<li>
																	<img
																		src="../assets/images/xs/avatar1.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li>
																	<img
																		src="../assets/images/xs/avatar2.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li>
																	<img
																		src="../assets/images/xs/avatar3.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li>
																	<img
																		src="../assets/images/xs/avatar4.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li className="ml-2">
																	<span>2+</span>
																</li>
															</ul>
														</td>
														<td>Angular Admin</td>
														<td>$14,500</td>
														<td>Pending</td>
														<td>
															<span className="tag tag-success">Delivered</span>
														</td>
													</tr>
													<tr>
														<td>#YU8585</td>
														<td>Merri Diamond</td>
														<td>
															<ul className="list-unstyled team-info sm margin-0 w150">
																<li>
																	<img
																		src="../assets/images/xs/avatar1.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li>
																	<img
																		src="../assets/images/xs/avatar2.jpg"
																		alt="Avatar"
																	/>
																</li>
															</ul>
														</td>
														<td>One page html Admin</td>
														<td>$500</td>
														<td>Done</td>
														<td>
															<span className="tag tag-orange">Submit</span>
														</td>
													</tr>
													<tr>
														<td>#AD1245</td>
														<td>Sean Black</td>
														<td>
															<ul className="list-unstyled team-info sm margin-0 w150">
																<li>
																	<img
																		src="../assets/images/xs/avatar1.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li>
																	<img
																		src="../assets/images/xs/avatar2.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li>
																	<img
																		src="../assets/images/xs/avatar3.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li>
																	<img
																		src="../assets/images/xs/avatar4.jpg"
																		alt="Avatar"
																	/>
																</li>
															</ul>
														</td>
														<td>Wordpress One page</td>
														<td>$1,500</td>
														<td>Done</td>
														<td>
															<span className="tag tag-success">Delivered</span>
														</td>
													</tr>
													<tr>
														<td>#GH8596</td>
														<td>Allen Collins</td>
														<td>
															<ul className="list-unstyled team-info sm margin-0 w150">
																<li>
																	<img
																		src="../assets/images/xs/avatar1.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li>
																	<img
																		src="../assets/images/xs/avatar2.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li>
																	<img
																		src="../assets/images/xs/avatar3.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li>
																	<img
																		src="../assets/images/xs/avatar4.jpg"
																		alt="Avatar"
																	/>
																</li>
																<li className="ml-2">
																	<span>2+</span>
																</li>
															</ul>
														</td>
														<td>VueJs Application</td>
														<td>$9,500</td>
														<td>Done</td>
														<td>
															<span className="tag tag-success">Delivered</span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDashboard);