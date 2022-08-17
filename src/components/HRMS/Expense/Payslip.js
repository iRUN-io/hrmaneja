import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllEmployees } from "../../../services/employee";
// import { getAllUsers } from "../../../services/user";
import { getUser } from "../../../config/common";
import CountUp from 'react-countup';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ComingSoon from '../../common/comingSoon';


function Payroll(props) {
	const { fixNavbar } = props;
	const [employees, setEmployee] = useState([]);
	// const [user, setUser] = useState([]);
	// const [users, setUsers] = useState([]);
	// const [departments, setDepartments] = useState([]);
	const [loading, setLoading] = useState(false);
	const comingSoon = false;
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

							</div>
						</div>
					</div><div className="section-body mt-3">
							<div className="container-fluid">
								<div className="tab-content mt-3">
									<div id="Payroll-Payslip" role="tabpanel">
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
export default connect(mapStateToProps, mapDispatchToProps)(Payroll);