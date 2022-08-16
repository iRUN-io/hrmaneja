import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllEmployees, getEmployee } from "../../../services/employee";
// import { getAllUsers } from "../../../services/user";
import { getUser } from "../../../config/common";
import CountUp from 'react-countup';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ComingSoon from '../../common/comingSoon';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createActivity } from '../../../services/activities';
import { emailCase } from '../../../enums/emailCase';
import { sendEmail } from '../../../services/mail/sendMail';
import { createRequisition, getAllRequisitions } from '../../../services/expense';


function Expense(props) {
	const [loading, setLoading] = useState(false);
	const [employees, setEmployee] = useState([]);
	const [requisions, setRequisition] = useState([]);
	const [user, setUser] = useState({});
	const comingSoon = false;
	const [formState, setFormState] = useState({
		employeeId: '',
		employeeName: '',
		category: '',
		fromDate: '',
		dueDate: '',
		notifyEmployee: '',
		note: '',
	});
	const history = useHistory();

	const makeRequisition = async () => {
		try {
			setFormState({ ...formState });

			const body = {
				employeeId: formState.employeeId,
				employeeName: formState.employeeName,
				category: formState.category,
				dueDate: formState.dueDate,
				company_id: user.company_id,
				notifyEmployee: formState.notifyEmployee,
				note: formState.note,
				status: 'pending',
			}
			if (body.employeeName === '' || body.category === '' || body.fromDate === '' || body.dueDate === '' || body.note === '') {
				toast.error('Please fill all the fields');
				return;
			}
			const response = await createRequisition(body, user.id);

			if (!response.error) {
				const logActivity = await createActivity(
					{
						name: 'Create Leave',
						employee_id: user.employee_id,
						activity: `${user.name} Created a new leave ; ${body.category}`,
						activity_name: 'Creation',
						user: user.name,
						company_id: user.company_id,
					}
				)

				if (logActivity.id) {
					sendEmail(user.emailAddress, user.name, emailCase.createLeave);
					if (body.notifyEmployee) {
						const notifyEmployee = await getEmployee(body.notifyEmployee);
						if (notifyEmployee.id) {
							sendEmail(notifyEmployee.emailAddress, notifyEmployee.name, emailCase.notifyLeave);
						}
					}
					setRequisition([...requisions, response])
					toast.success("Leave request sent successfully");
				}
			}

			setFormState({
				employeeId: '',
				employeeName: '',
				category: '',
				fromDate: '',
				dueDate: '',
				notifyEmployee: '',
				note: '',
			});
		} catch (err) {
			toast.error("Error, try again");
			setFormState({ ...formState });
		}
	};

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const user = await getUser();
			if (user) {
				// const userId = user.id;
				// const userResponse = await getAllUsers(userId);
				const response = await getAllEmployees();
				const allRequisition = await getAllRequisitions();
				setRequisition(allRequisition);
				setEmployee(response);
				setLoading(false);
				setUser(user);
				setFormState({ ...formState, employeeId: user.id, employeeName: user.name, notifyEmployee: user.line_manager });

			}
		}
		fetchData();
	}, []);

	const updateForm = (e) => {
		const { value, name } = e.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	return (
		<>

			<div>
				{comingSoon ?
					<ComingSoon />
					:
					<>
						<div className="section-body mt-3">
							<div className="container-fluid">
								<div className="d-flex justify-content-between align-items-center">
									<ul className="nav nav-tabs page-header-tab">
										<li className="nav-item">
											<Link onClick={() => history.goBack()} className="nav-link active">
												<i className="fa fa-arrow-left"></i>
											</Link>
										</li>
									</ul>
									<div className="header-action">
										<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Make Requisition</button>
									</div>
								</div>
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
																						<a href="fake_url">{employee.name}</a>
																						<p className="mb-0">{employee.email}</p>
																					</div>
																				</div>
																			</td>
																			<td>{employee.role}</td>
																			<td>{employee.salary}</td>
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
								</div>
							</div>
						</div>
						{/* Modal */}
						<div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="exampleModalLabel">Make Requisition</h5>
										<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
									</div>
									{/* update form */}
									<div className="modal-body">
										<div className="row clearfix">
											<div className="col-md-12">
												<div className="form-group">
													<label>Requisition Type</label>
													<select name='category' value={formState?.category}
														onChange={updateForm} required className="form-control show-tick ms select2" data-placeholder="Select">
														<option>Select Category</option>
														<option value="Office Supplies">Office Supplies</option>
														<option value="Travel Expense">Travel Expense</option>
														<option value="Taxi Fares">Taxi Fares</option>
													</select>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label>Amount</label>
													<input type='number' onChange={updateForm} className='form-control' name='amount' value={formState?.amount} />
												</div>
											</div>

											<div className="col-md-12">
												<div className="form-group">
													<label>Note</label>
													<textarea onChange={updateForm} className='form-control' name='note' value={formState?.note} />
												</div>
											</div>

											<div className="col-md-12">
												<div className="form-group">
												<label>Due Date</label>
													<div className="input-group">
														
														<div className="input-group-prepend">
															<span className="input-group-text"><i className="fa fa-calendar" /></span>
														</div>
														<input type="date" className="form-control" name='dueDate' value={formState?.dueDate} onChange={updateForm} />
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
										<button onClick={() => makeRequisition()} className="btn btn-primary">Save changes</button>
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