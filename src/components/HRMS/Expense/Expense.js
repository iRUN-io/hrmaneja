/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getEmployee } from "../../../services/employee";
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
import { approveRequisition, createRequisition, disapproveRequisition, getAllRequisitions } from '../../../services/expense';
import moment from 'moment';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { getAllDepartments } from '../../../services/department';


function Expense(props) {
	const [loading, setLoading] = useState(false);
	const [requisitions, setRequisitions] = useState([]);
	const [departments, setDepartments] = useState([]);
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
		amount: '',
		department: '',
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
				department: formState.department,
				amount: formState.amount,
				status: 'pending',
			}
			if (body.employeeName === '' || body.category === '' || body.dueDate === '' || body.note === '') {
				toast.error('Please fill all the fields');
				return;
			}
			const response = await createRequisition(body, user.id);

			if (!response.error) {
				const logActivity = await createActivity(
					{
						name: 'Sent Requisition',
						employee_id: user.employee_id,
						activity: `Sent Requisition from ${body.employeeName}`,
						activity_name: 'Creation',
						user: user.name,
						company_id: user.company_id,
					}
				)

				if (logActivity.id) {
					sendEmail(user.emailAddress, user.name, emailCase.makeRequisition);
					if (body.notifyEmployee) {
						const notifyEmployee = await getEmployee(body.notifyEmployee);
						if (notifyEmployee.id) {
							sendEmail(notifyEmployee.emailAddress, notifyEmployee.name, emailCase.notifyRequisition);
						}
					}
					setRequisitions([...requisitions, response])
					toast.success("Requisition request sent successfully");
				}
			}

			setFormState({
				employeeId: '',
				employeeName: '',
				category: '',
				fromDate: '',
				dueDate: '',
				department: '',
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
			const user = getUser();
			if (user) {
				const employeeRecord = await getEmployee(user.employee_id);
				const allRequisition = await getAllRequisitions(user.company_id);
				const allDepartments = await getAllDepartments(user.company_id);
				setRequisitions(allRequisition);
				setDepartments(allDepartments);
				setFormState({
					...formState,
					employeeId: employeeRecord.id,
					employeeName: employeeRecord.name,
					notifyEmployee: employeeRecord.line_manager,
					department: employeeRecord.department
				});
				setLoading(false);
				setUser(user);

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

	const toggleRequisition = async (reqId, type) => {
		try {
			let response;

			if (type === 'approve') {

				response = await approveRequisition(reqId);

			} else {

				response = await disapproveRequisition(reqId);
			}

			if (!response.error) {

				const logActivity = await createActivity(
					{
						name: type === 'approve' ? 'Approve Requisition' : 'Reject Requisition',
						employee_id: user.employee_id,
						activity: `${user.name} ${type === 'approve' ? 'Approved' : 'Rejected'} a leave`,
						activity_name: type === 'approve' ? 'Approval' : 'Rejection',
						user: user.name,
						company_id: user.company_id,
					}
				)

				if (logActivity.id) {
					if (type === 'approve') {
						sendEmail(user.emailAddress, user.name, emailCase.approveRequisition);
						const newRequisitions = requisitions.map(request => {
							if (request.id === reqId) {
								request.status = 'approve'
							}
							return request;
						});
						setRequisitions(newRequisitions);
					} else {
						const newRequisitions = requisitions.map(request => {
							if (request.id === reqId) {
								request.status = 'disapprove'
							}
							return request;
						});
						setRequisitions(newRequisitions);
						sendEmail(user.emailAddress, user.name, emailCase.rejectRequisition);
					}
					toast.info(response.message);
				}
			}

		} catch (err) {
			toast.error("Error, try again");
			setFormState({ ...formState });
		}

	};


	const getRequisitionByDepartment = (department) => {
		const total = requisitions.filter(req => req.department === department);
		const totalAmount = total.reduce((acc, curr) => {
			return acc + Number(curr.amount);
		}, 0);
		return totalAmount;
	}

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
											{departments.map((department, index) => (
											<div key={index} className="col-lg-3 col-md-6">
												<div className="card">
													<div className="card-body">
														<h6>{department.name.toUpperCase()}</h6>
														<h3 className="pt-3">
															N<span className="counter"><CountUp end={getRequisitionByDepartment(department.id)} /></span>
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
											))}
										</div>
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Expenses</h3>
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
																		<th className="w200">Employee</th>
																		<th className="w200">Category</th>
																		<th className="w60">Due Date</th>
																		<th className="w60">Status</th>
																		<th className="w200">Action</th>
																	</tr>
																</thead>
																<tbody>

																	{requisitions.map((request, index) => (
																		<tr key={index}>
																			<td>
																				<div className="d-flex align-items-center">
																					<span
																						className="avatar avatar-pink"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Avatar Name"
																					>
																						{(
																							request.employee[0] + request.employee[1]
																						).toUpperCase()}
																					</span>
																					<div className="ml-3">
																						<a href="#">{request.employee}</a>
																						<p className="mb-0">{request.note}</p>
																					</div>
																				</div>
																			</td>
																			<td>{request.category}</td>
																			<td>{moment(request.dueDate).format('MMM Do YYYY')}</td>
																			<td>
																				{request.status === 'approve' && (
																					<span className="badge badge-success">approved</span>
																				)}
																				{request.status === 'disapprove' && (
																					<span className="badge badge-warning">rejected</span>
																				)}
																				{request.status === 'pending' && (
																					<span className="badge badge-primary">pending</span>
																				)}
																			</td>
																			<td className='align-items-center'>

																				<button
																					type="button"
																					className="btn btn-icon "
																					title="Print"
																					data-toggle="tooltip"
																					data-placement="top"
																				>
																					<i className="icon-printer" />
																				</button>

																				{request.status === 'approve' && (
																					<OverlayTrigger trigger="focus" placement="bottom" delay={1}
																						overlay={
																							<Popover id="popover-basic">
																								<Popover.Header as="p">Confirm Decline</Popover.Header>
																								<Popover.Body>
																									<div className="clearfix" >
																										<button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success">Cancel</button>
																										<button style={{ margin: '10px' }} onClick={() => toggleRequisition(request.id, 'reject')} type="button" className="btn btn-sm btn-danger">Disapprove</button>
																									</div>
																								</Popover.Body>
																							</Popover>
																						}>
																						<button type="button" className="btn btn-icon js-sweetalert" title="Approve" data-type="confirm"><i className="fa fa-close text-warning" /></button>
																					</OverlayTrigger>
																				)}
																				{(request.status === 'pending' || request.status === 'disapprove') && (
																					<OverlayTrigger trigger="focus" placement="bottom" delay={1}
																						overlay={
																							<Popover id="popover-basic">
																								<Popover.Header as="p">Confirm Approval</Popover.Header>
																								<Popover.Body>
																									<div className="clearfix" >
																										<button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success">Cancel</button>
																										<button style={{ margin: '10px' }} onClick={() => toggleRequisition(request.id, 'approve')} type="button" className="btn btn-sm btn-danger">Approve</button>
																									</div>
																								</Popover.Body>
																							</Popover>
																						}>
																						<button type="button" className="btn btn-icon js-sweetalert" title="Approve" data-type="confirm"><i className="fa fa-check text-success" /></button>
																					</OverlayTrigger>
																				)}

																			</td>
																		</tr>
																	))}
																</tbody>
															</table>
														)}
												</div>
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