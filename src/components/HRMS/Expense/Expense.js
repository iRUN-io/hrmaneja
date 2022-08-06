import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllEmployees } from "../../../services/employee";
// import { getAllUsers } from "../../../services/user";
import { getUser } from "../../../config/common";
import CountUp from 'react-countup';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ComingSoon from '../../common/comingSoon';


function Expense(props) {
	const { fixNavbar } = props;
	const [employees, setEmployee] = useState([]);
	// const [user, setUser] = useState([]);
	// const [users, setUsers] = useState([]);
	// const [departments, setDepartments] = useState([]);
	const [loading, setLoading] = useState(false);
	const comingSoon = true;
	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const user = await getUser();
			if (user) {
				// const userId = user.id;
				// const userResponse = await getAllUsers(userId);
				const response = await getAllEmployees();
				setEmployee(response);
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	return (
		<>

			<div>
				{comingSoon ?
					<ComingSoon />
					:
					<>
					<div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
						<div className="container-fluid">
							<div className="d-flex justify-content-between align-items-center">
								<ul className="nav nav-tabs page-header-tab">
									<li className="nav-item">
										<a
											className="nav-link active"
											id="Expense-tab"
											data-toggle="tab"
											href="#Expense-Salary"
										>
											Employee Salary
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="Expense-tab" data-toggle="tab" href="#Expense-Payslip">
											Payslip
										</a>
									</li>
								</ul>
								<div className="header-action">
									<button
										type="button"
										className="btn btn-primary"
										data-toggle="modal"
										data-target="#exampleModal"
									>
										<i className="fe fe-plus mr-2" />
										Add
									</button>
								</div>
							</div>
						</div>
					</div><div className="section-body mt-3">
							<div className="container-fluid">
								<div className="tab-content mt-3">
									<div className="tab-pane fade show active" id="Expense-Salary" role="tabpanel">
										<div className="row clearfix">
											<div className="col-lg-3 col-md-6">
												<div className="card">
													<div className="card-body">
														<h6>Web Developer</h6>
														<h3 className="pt-3">
															$<span className="counter"><CountUp end={18960} /></span>
														</h3>
														<span>
															<span className="text-danger mr-2">
																<i className="fa fa-long-arrow-down" /> 5.27%
															</span>{' '}
															Since last month
														</span>
													</div>
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="card">
													<div className="card-body">
														<h6>App Developer</h6>
														<h3 className="pt-3">
															$<span className="counter"><CountUp end={11783} /></span>
														</h3>
														<span>
															<span className="text-success mr-2">
																<i className="fa fa-long-arrow-up" /> 11.38%
															</span>{' '}
															Since last month
														</span>
													</div>
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="card">
													<div className="card-body">
														<h6>Designer</h6>
														<h3 className="pt-3">
															$<span className="counter"><CountUp end={2254} /></span>
														</h3>
														<span>
															<span className="text-success mr-2">
																<i className="fa fa-long-arrow-up" /> 9.61%
															</span>{' '}
															Since last month
														</span>
													</div>
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="card">
													<div className="card-body">
														<h6>Marketing</h6>
														<h3 className="pt-3">
															$<span className="counter"><CountUp end={8751} /></span>
														</h3>
														<span>
															<span className="text-danger mr-2">
																<i className="fa fa-long-arrow-down" /> 2.27%
															</span>{' '}
															Since last month
														</span>
													</div>
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Employee</h3>
												<div className="card-options">
													<form>
														<div className="input-group">
															<input
																type="text"
																className="form-control form-control-sm"
																placeholder="Search something..."
																name="s" />
															<span className="input-group-btn ml-2">
																<button className="btn btn-icon" type="submit">
																	<span className="fe fe-search" />
																</button>
															</span>
														</div>
													</form>
												</div>
											</div>
											<div className="card-body">
												<div className="table-responsive">
													{loading ? (
														<Skeleton count={5} height={57} />
													) :
														(
															<table className="table table-hover table-striped table-vcenter text-nowrap">
																<thead>
																	<tr>
																		<th style={{ width: 20 }}>#</th>
																		<th>Employee</th>
																		<th className="w200">Role</th>
																		<th className="w60">Salary</th>
																		<th className="w60">Status</th>
																		<th className="w200">Action</th>
																	</tr>
																</thead>
																<tbody>

																	{employees.map((employee, index) => (
																		<tr key={index}>
																			<td>
																				<span>{(index + 1)}</span>
																			</td>
																			<td>
																				<div className="d-flex align-items-center">
																					<span
																						className="avatar avatar-pink"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Avatar Name"
																					>
																						{(
																							employee.name[0] + employee.name[1]
																						).toUpperCase()}
																					</span>
																					<div className="ml-3">
																						<a href="fake_url">{employee?.name}</a>
																						<p className="mb-0">{employee?.email}</p>
																					</div>
																				</div>
																			</td>
																			<td>{employee?.role}</td>
																			<td>{employee?.salary}</td>
																			<td>
																				<span className="tag tag-success ml-0 mr-0">Done</span>
																			</td>
																			<td>
																				<button
																					type="button"
																					className="btn btn-icon"
																					title="Send Invoice"
																					data-toggle="tooltip"
																					data-placement="top"
																				>
																					<i className="icon-envelope text-info" />
																				</button>
																				<button
																					type="button"
																					className="btn btn-icon "
																					title="Print"
																					data-toggle="tooltip"
																					data-placement="top"
																				>
																					<i className="icon-printer" />
																				</button>
																				<button
																					type="button"
																					className="btn btn-icon"
																					title="Delete"
																					data-toggle="tooltip"
																					data-placement="top"
																				>
																					<i className="icon-trash text-danger" />
																				</button>
																			</td>
																		</tr>
																	))}
																</tbody>
															</table>
														)}
												</div>
												<nav aria-label="Page navigation">
													<ul className="pagination mb-0 justify-content-end">
														<li className="page-item">
															<a className="page-link" href="/#">
																Previous
															</a>
														</li>
														<li className="page-item active">
															<a className="page-link" href="/#">
																1
															</a>
														</li>
														<li className="page-item">
															<a className="page-link" href="/#">
																2
															</a>
														</li>
														<li className="page-item">
															<a className="page-link" href="/#">
																3
															</a>
														</li>
														<li className="page-item">
															<a className="page-link" href="/#">
																Next
															</a>
														</li>
													</ul>
												</nav>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="Expense-Payslip" role="tabpanel">
										<div className="card">
											<div className="card-body">
												<div className="media mb-4">
													<div className="mr-3">
														<img
															className="rounded"
															src="../assets/images/xs/avatar4.jpg"
															alt="fake_url" />
													</div>
													<div className="media-body">
														<div className="content">
															<span>
																<strong>Order ID: </strong> C09
															</span>
															<p className="h5">
																John Smith{' '}
																<small className="float-right badge badge-primary">
																	Jun 15, 2019
																</small>
															</p>
															<p>795 Folsom Ave, Suite 546 San Francisco, CA 54656</p>
														</div>
														<nav className="d-flex text-muted">
															<a href="fake_url" className="icon mr-3">
																<i className="icon-envelope text-info" />
															</a>
															<a href="fake_url" className="icon mr-3">
																<i className="icon-printer" />
															</a>
														</nav>
													</div>
												</div>
												<div className="table-responsive">
													<table className="table table-hover table-striped table-vcenter">
														<thead className="dark-mode">
															<tr>
																<th className="w60">#</th>
																<th />
																<th className="w100">Earnings</th>
																<th className="w100">Deductions</th>
																<th className="w100 text-right">Total</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>01</td>
																<td>
																	<span>Basic Salary</span>
																</td>
																<td>$1,500</td>
																<td>-</td>
																<td className="text-right">$380</td>
															</tr>
															<tr>
																<td>02</td>
																<td>
																	<span>House Rent Allowance (H.R.A.)</span>
																</td>
																<td>$62</td>
																<td>-</td>
																<td className="text-right">$250</td>
															</tr>
															<tr>
																<td>03</td>
																<td>
																	<span>Tax Deducted at Source (T.D.S.)</span>
																</td>
																<td>-</td>
																<td>$80</td>
																<td className="text-right">$120</td>
															</tr>
															<tr>
																<td>04</td>
																<td>
																	<span>C/Bank Loan</span>
																</td>
																<td>-</td>
																<td>$120</td>
																<td className="text-right">$120</td>
															</tr>
															<tr>
																<td>05</td>
																<td>
																	<span>Other Allowance</span>
																</td>
																<td>$121</td>
																<td>-</td>
																<td className="text-right">$120</td>
															</tr>
														</tbody>
														<tfoot>
															<tr>
																<td colSpan={2}>
																	<span>
																		<strong>Note:</strong> Ipsum is simply dummy text of the
																		printing and typesetting industry.
																	</span>
																</td>
																<td>$1683</td>
																<td>$200</td>
																<td className="text-right">
																	<strong className="text-success">$1483.00</strong>
																</td>
															</tr>
														</tfoot>
													</table>
													<button className="btn btn-info float-right">
														<i className="icon-printer" /> Print
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				}

			</div>
		</>
	);
}
const mapStateToProps = state => ({
	fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Expense);