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
import { approveRequisition, createRequisition, disapproveRequisition, getAllRequisitions, getEmployeeRequisition } from '../../../services/expense';
import moment from 'moment';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { getAllDepartments } from '../../../services/department';


function Expense(props) {
	const [loading, setLoading] = useState(false);
	const [requisitions, setRequisitions] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
    const [RequisitionsPerPage] = useState(10);
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
			const response = await createRequisition(body, user.employee_id);

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
				const allRequisition = await getEmployeeRequisition(user.employee_id);
				setRequisitions(allRequisition);
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
	const indexOfLastRequisitions = currentPage * RequisitionsPerPage;
    const indexOfFirstRequisitions = indexOfLastRequisitions - RequisitionsPerPage;
    const currentRequisitions = requisitions.slice(indexOfFirstRequisitions, indexOfLastRequisitions);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(requisitions.length / RequisitionsPerPage); i++) {
        pageNumbers.push(i);
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
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">My Expenses</h3>
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
																		{/* <th className="w200">Action</th> */}
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
																					<span className="badge badge-danger">rejected</span>
																				)}
																				{request.status === 'pending' && (
																					<span className="badge badge-grey">pending</span>
																				)}
																			</td>
																		</tr>
																	))}
																</tbody>
															</table>
														)}
												</div>
												<div className=''>
													<nav aria-label="Page navigation example">
														<ul className="pagination justify-content-end">
															<li className="page-item" style={{ marginRight: '5px' }}>
																<button className="btn btn-sm btn-primary" onClick={prevPage} disabled={currentPage === 1 ? true : false}>Previous</button>
															</li>
															{pageNumbers.map(number => (
																<li key={number} className="page-item" style={{ marginRight: '5px' }}>
																	<button onClick={() => paginate(number)} className={currentPage === number ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline-primary'}>{number}</button>
																</li>
															))}
															<li className="page-item">
																<button className="btn btn-sm btn-primary" onClick={nextPage} disabled={currentPage === pageNumbers.length ? true : false}>Next</button>
															</li>
														</ul>
													</nav>
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
										<button onClick={() => makeRequisition()} className="btn btn-primary">Make Request</button>
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