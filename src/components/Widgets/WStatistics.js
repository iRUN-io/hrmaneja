import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Areachart from '../common/areachart';
import MapChart from '../common/MapChart';
import Donutchart from '../common/donutchart';
import Sparklineschart from '../common/sparklineschart';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { connect } from 'react-redux';
class WStatistics extends Component {


	render() {
		const { fixNavbar } = this.props;
		return (
			<>
				<div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
					<div className="container-fluid">
						<ul className="nav nav-tabs page-header-tab">
							<li className="nav-item">
								<NavLink to="/widgets" className="nav-link">
									Card
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/w-card" className="nav-link">
									Card Image
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/w-statistics" className="nav-link active">
									Statistics
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/w-data" className="nav-link">
									Data
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/w-social" className="nav-link">
									Social
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/w-other" className="nav-link">
									Mix
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className="section-body mt-3">
					<div className="container-fluid">
						<div className="row clearfix">
							<div className="col-lg-3 col-md-6 col-sm-12">
								<div className="card">
									<div className="card-body">
										<div className="widgets2">
											<div className="state">
												<h6>Server</h6>
												<h2>62%</h2>
											</div>
											<div className="icon">
												<i className="fa fa-database" />
											</div>
										</div>
										<div className="progress progress-sm">
											<div
												className="progress-bar bg-red"
												role="progressbar"
												aria-valuenow={62}
												aria-valuemin={0}
												aria-valuemax={100}
												style={{ width: '62%' }}
											/>
										</div>
										<span className="text-small">6% higher than last month</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-12">
								<div className="card">
									<div className="card-body">
										<div className="widgets2">
											<div className="state">
												<h6>Traffic</h6>
												<h2>45%</h2>
											</div>
											<div className="icon">
												<i className="fa fa-users" />
											</div>
										</div>
										<div className="progress progress-sm">
											<div
												className="progress-bar bg-green"
												role="progressbar"
												aria-valuenow={78}
												aria-valuemin={0}
												aria-valuemax={100}
												style={{ width: '78%' }}
											/>
										</div>
										<span className="text-small">61% higher than last month</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-12">
								<div className="card">
									<div className="card-body">
										<div className="widgets2">
											<div className="state">
												<h6>Email</h6>
												<h2>32</h2>
											</div>
											<div className="icon">
												<i className="fa fa-envelope" />
											</div>
										</div>
										<div className="progress progress-sm">
											<div
												className="progress-bar bg-orange"
												role="progressbar"
												aria-valuenow={31}
												aria-valuemin={0}
												aria-valuemax={100}
												style={{ width: '31%' }}
											/>
										</div>
										<span className="text-small">Total Registered email</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-12">
								<div className="card">
									<div className="card-body">
										<div className="widgets2">
											<div className="state">
												<h6>Domians</h6>
												<h2>11</h2>
											</div>
											<div className="icon">
												<i className="fa fa-hand-o-left" />
											</div>
										</div>
										<div className="progress progress-sm">
											<div
												className="progress-bar bg-info"
												role="progressbar"
												aria-valuenow={20}
												aria-valuemin={0}
												aria-valuemax={100}
												style={{ width: '20%' }}
											/>
										</div>
										<span className="text-small">Total Registered domain</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row clearfix">
							<div className="col-lg-3 col-md-6">
								<div className="card">
									<div className="card-body top_counter">
										<div className="icon bg-yellow">
											<i className="fa fa-building" />{' '}
										</div>
										<div className="content">
											<span>Properties</span>
											<h5 className="number mb-0">53,251</h5>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="card">
									<div className="card-body top_counter">
										<div className="icon bg-green">
											<i className="fa fa-area-chart" />{' '}
										</div>
										<div className="content">
											<span>Growth</span>
											<h5 className="number mb-0">62%</h5>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="card">
									<div className="card-body top_counter">
										<div className="icon bg-blue">
											<i className="fa fa-shopping-cart" />{' '}
										</div>
										<div className="content">
											<span>Total Sales</span>
											<h5 className="number mb-0">$3205</h5>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="card">
									<div className="card-body top_counter">
										<div className="icon bg-indigo">
											<i className="fa fa-tag" />{' '}
										</div>
										<div className="content">
											<span>Rented</span>
											<h5 className="number mb-0">3,217</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row clearfix">
							<div className="col-lg-3 col-md-6">
								<div className="card">
									<div className="card-body">
										<div className="card-value float-right text-warning">
											<i className="wi wi-day-cloudy" />
										</div>
										<h3 className="mb-1">16°C</h3>
										<div>Warsaw, Poland</div>
									</div>
								</div>
								<div className="card">
									<div className="card-body">
										<div className="card-value float-right text-warning">0%</div>
										<h3 className="mb-1">$8,530</h3>
										<div>Total Payment</div>
									</div>
								</div>
								<div className="card">
									<div className="card-body">
										<div className="card-value float-right text-danger">-1%</div>
										<h3 className="mb-1">935</h3>
										<div>Total Sales</div>
										<div className="mt-4">
											<div className="progress progress-xs">
												<div className="progress-bar bg-danger" style={{ width: '75%' }} />
											</div>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-body">
										<div className="card-value float-right text-primary">20%</div>
										<h3 className="mb-1">1530</h3>
										<div>Total Leads</div>
										<div className="mt-4">
											<div className="progress progress-xs">
												<div className="progress-bar bg-primary" style={{ width: '20%' }} />
											</div>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-body widgets1">
										<div className="icon">
											<i className="icon-heart text-warning font-30" />
										</div>
										<div className="details">
											<h5 className="mb-0">Total Likes</h5>
											<p className="mb-0">6,270</p>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-body widgets1">
										<div className="icon">
											<i className="icon-trophy text-success font-30" />
										</div>
										<div className="details">
											<h5 className="mb-0">Total Income</h5>
											<p className="mb-0">$96,720 Profit</p>
										</div>
									</div>
								</div>
								<div className="card text-center bg-pink">
									<div className="card-body text-light">
										<h3>902</h3>
										<span>Uploads</span>
									</div>
								</div>
								<div className="card text-center bg-teal">
									<div className="card-body text-light">
										<h3>1,025</h3>
										<span>Feeds</span>
									</div>
								</div>
								<div className="card">
									<div className="card-body text-center">
										<h5 className="margin-0">Total Sale</h5>
										<h6 className="mb-2">2,45,124</h6>

										<CircularProgressbar value={65} text={`${65}`} strokeWidth={5} styles={buildStyles({ pathColor: `rgb(110, 118, 135)` })} />

									</div>
								</div>
								<div className="card">
									<div className="card-body w_sparkline">
										<div className="details">
											<h6 className="mb-0">Population</h6>
											<h3 className="mb-0">614</h3>
										</div>
										{/* <div className="w_chart">
											<div id="apexspark-chart3" />
										</div> */}
									</div>
								</div>
								<div className="card">
									<div className="card-body w_sparkline">
										<div className="details">
											<h6 className="mb-0">Page Views</h6>
											<h3 className="mb-0">2,614</h3>
										</div>
										<div className="w_chart">
											<div id="apexspark-chart1" />
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Task Panding</h3>
									</div>
									<div className="card-body">
										<div>
											<div id="apex-circle-chart" />
										</div>
										<div>
											<label className="custom-control custom-radio">
												<input
													type="radio"
													className="custom-control-input"
													name="example-radios"
													defaultValue="option1"
													defaultChecked
												/>
												<span className="custom-control-label">Panding</span>
											</label>
											<label className="custom-control custom-radio">
												<input
													type="radio"
													className="custom-control-input"
													name="example-radios"
													defaultValue="option1"
													defaultChecked
												/>
												<span className="custom-control-label">Complated</span>
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="card">
									<div className="card-body currency_state">
										<div className="icon">
											<img src="../assets/images/crypto/qtum.svg" alt="Cardano" />
										</div>
										<div className="content">
											<div className="text">Cardano</div>
											<h5 className="number">0.000434</h5>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-body currency_state">
										<div className="icon">
											<img src="../assets/images/crypto/stellar.svg" alt="Stellar" />
										</div>
										<div className="content">
											<div className="text">Stellar</div>
											<h5 className="number">0.000125</h5>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-body currency_state">
										<div className="icon">
											<img src="../assets/images/crypto/ETC.svg" alt="RaiBlocks" />
										</div>
										<div className="content">
											<div className="text">RaiBlocks</div>
											<h5 className="number">0.000009</h5>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-body currency_state">
										<div className="icon">
											<img src="../assets/images/crypto/XRP.svg" alt="Monero" />
										</div>
										<div className="content">
											<div className="text">Monero</div>
											<h5 className="number">0.000725</h5>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-body widgets1">
										<div className="icon">
											<i className="icon-user text-primary font-30" />
										</div>
										<div className="details">
											<h5 className="mb-0">Users</h5>
											<p className="mb-0">614 Users</p>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-body widgets1">
										<div className="icon">
											<i className="icon-handbag text-danger font-30" />
										</div>
										<div className="details">
											<h5 className="mb-0">Delivered</h5>
											<p className="mb-0">720 Delivered</p>
										</div>
									</div>
								</div>
								<div className="card text-center bg-indigo">
									<div className="card-body text-light">
										<h3>521</h3>
										<span>New items</span>
									</div>
								</div>
								<div className="card text-center bg-orange">
									<div className="card-body text-light">
										<h3>318</h3>
										<span>Comments</span>
									</div>
								</div>
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Site Traffic</h3>
									</div>
									<div className="card-body">
										<div className="row text-center">
											<div className="col-6 border-right pb-4 pt-4">
												<label className="mb-0">User</label>
												<h4 className="font-30 font-weight-bold text-col-blue">11,545</h4>
											</div>
											<div className="col-6 pb-4 pt-4">
												<label className="mb-0">Chat</label>
												<h4 className="font-30 font-weight-bold text-col-blue">542</h4>
											</div>
										</div>
									</div>
									<div className="card-body">
										<div className="form-group">
											<label className="d-block">
												New items <span className="float-right">77%</span>
											</label>
											<div className="progress progress-sm">
												<div
													className="progress-bar progress-bar-success"
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
												Uploads <span className="float-right">50%</span>
											</label>
											<div className="progress progress-sm">
												<div
													className="progress-bar progress-bar-success"
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
												Comments <span className="float-right">23%</span>
											</label>
											<div className="progress progress-sm">
												<div
													className="progress-bar progress-bar-success"
													role="progressbar"
													aria-valuenow={23}
													aria-valuemin={0}
													aria-valuemax={100}
													style={{ width: '23%' }}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Gender Overview</h3>
									</div>
									<div className="card-body">
										<div className="gender_overview">
											<div className="widgets1">
												<div className="icon">
													<i className="fa fa-male font-30" />
												</div>
												<div className="details">
													<h5 className="mb-0">Male</h5>
													<p className="mb-0">235</p>
												</div>
											</div>
											<div className="widgets1">
												<div className="icon">
													<i className="fa fa-female font-30" />
												</div>
												<div className="details">
													<h5 className="mb-0">Female</h5>
													<p className="mb-0">89</p>
												</div>
											</div>
										</div>
										<div id="apex-Gender-Overview" />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Cryptocurrency</h3>
									</div>
									<div className="card-body">
										<div className="row">
											<div className="col-lg-4 col-md-4">
												<div className="card">
													<div className="card-body currency_state">
														<div className="icon">
															<img src="../assets/images/crypto/BTC.svg" alt="Bitcoin" />
														</div>
														<div className="content">
															<div className="text">Bitcoin</div>
															<h5 className="number">0.005034</h5>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-4 col-md-4">
												<div className="card">
													<div className="card-body currency_state">
														<div className="icon">
															<img src="../assets/images/crypto/ETH.svg" alt="Ethereum" />
														</div>
														<div className="content">
															<div className="text">Ethereum</div>
															<h5 className="number">0.000359</h5>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-4 col-md-4">
												<div className="card">
													<div className="card-body currency_state">
														<div className="icon">
															<img src="../assets/images/crypto/neo.svg" alt="Neo" />
														</div>
														<div className="content">
															<div className="text">Neo</div>
															<h5 className="number">0.000482</h5>
														</div>
													</div>
												</div>
											</div>
										</div>
										<Sparklineschart />
									</div>
								</div>
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Visitor Statistics</h3>
									</div>
									<div className="card-body">
										<div className="row">
											<div className="col-lg-6 col-md-12">
												<Donutchart />
											</div>
											<div className="col-lg-6 col-md-12">
												<div className="table-responsive">
													<table className="table table-hover table-vcenter text-nowrap card-table table_custom">
														<tbody>
															<tr>
																<td>
																	<div className="clearfix">
																		<div className="float-left">
																			<strong>35%</strong>
																		</div>
																		<div className="float-right">
																			<small className="text-muted">
																				visitor from America
																			</small>
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
																			<small className="text-muted">
																				visitor from Canada
																			</small>
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
																			<small className="text-muted">
																				visitor from India
																			</small>
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
																			<small className="text-muted">
																				visitor from UK
																			</small>
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
																			<strong>5%</strong>
																		</div>
																		<div className="float-right">
																			<small className="text-muted">
																				visitor from Australia
																			</small>
																		</div>
																	</div>
																	<div className="progress progress-xs">
																		<div
																			className="progress-bar bg-cyan"
																			role="progressbar"
																			style={{ width: '5%' }}
																			aria-valuenow={7}
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
									</div>
								</div>
								<div className="card visitors-map">
									<div className="card-header">
										<h3 className="card-title">Our Location</h3>
									</div>
									<div className="card-body">
										<MapChart />
									</div>
								</div>
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Sales Analytics</h3>
										<div className="card-options">
											<button className="btn btn-sm btn-outline-secondary mr-1" id="one_month">
												1M
											</button>
											<button className="btn btn-sm btn-outline-secondary mr-1" id="six_months">
												6M
											</button>
											<button className="btn btn-sm btn-outline-secondary mr-1" id="one_year">
												1Y
											</button>
											<button className="btn btn-sm btn-outline-secondary mr-1" id="ytd">
												YTD
											</button>
											<button className="btn btn-sm btn-outline-secondary" id="all">
												ALL
											</button>
										</div>
									</div>
									<div className="card-body">
										<Areachart></Areachart>
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
export default connect(mapStateToProps, mapDispatchToProps)(WStatistics);