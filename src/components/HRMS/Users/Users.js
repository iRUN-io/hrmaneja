import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllUsers, createUser, deleteUser } from '../../../services/user'
import { getAllEmployees } from '../../../services/employee'
import { getUser, formatDate } from '../../../config/common';
import EditUsers from './EditUsers';
import { createActivity } from '../../../services/activities';
import { sendEmail } from '../../../services/mail/sendMail';
import { emailCase } from '../../../enums/emailCase';
import { Link, useHistory } from 'react-router-dom';

const Users = (navStatus) => {
	const [user, setCurrentUser] = useState([]);
	const [userData, setUserData] = useState([]);
	const [users, setUsers] = useState([]);
	const [employees, setEmployees] = useState([]);
	const [formState, setFormState] = useState({
		employeeID: '',
		name: '',
		email: '',
		phone: '',
		roleType: '',
		userName: '',
		password: '',
		confirmPassword: '',

	});
	const history = useHistory();
	const createUsersAction = async () => {
		try {
			setFormState({ ...formState });
			const body = {
				employerID: formState.employeeID,
				name: formState.name,
				userName: formState.userName,
				email: formState.email,
				phone: formState.phone,
				company_id: user.company_id,
				role: formState.roleType,
				password: formState.password,
				confirmPassword: formState.confirmPassword,
			}

			if (body.name === '' || body.email === '') {
				toast.error('Please fill all the fields');
				return;
			}
			const response = await createUser(body, user.id);

			if (response.id) {

				const logActivity = await createActivity(
					{
						name: 'Create User',
						employee_id: user.id,
						activity: `${user.name} Created a new User with name; ${body.name}`,
						activity_name: 'Creation',
						user: user.name,
						company_id: user.company_id,
					}
				)

				if (logActivity.id) {
					sendEmail(user.emailAddress, user.name, emailCase.userCreation);
					setUsers([...users, response])
					toast.success("User created successfully");
				}
			}

			setFormState({
				employeeID: '',
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				roleType: '',
				userName: '',
				password: '',
				confirmPassword: '',
				superAdmin: [],
				employee: [],
				admin: [],
				hrAdmin: [],
			})

		} catch (err) {
			toast.error("Error, try again");
			setFormState({ ...formState });

		};

	}


	const updateForm = (e) => {
		const { value, name } = e.target;
		setFormState({
			...formState,
			[name]: value,
		})
		console.log({ [name]: value })
	}

	const removeUser = async (userId) => {
		try {
			const response = await deleteUser(userId);
			if (response.message) {
				const newUsers = users.filter(user => user.id !== userId);

				// create activity
				const logActivity = await createActivity(
					{
						name: 'Delete User',
						employee_id: user.id,
						activity: `${user.name} Deleted a User with name; ${response.name}`,
						activity_name: 'Deletion',
						user: user.name,
						company_id: user.company_id,
					}
				)

				if (logActivity.id) {
					sendEmail(user.emailAddress, user.name, emailCase.deleteUser);
					setUsers(newUsers);
					toast.info(response.message);
				}
			}

		} catch (err) {
			toast.error("Error, try again");
			setFormState({ ...formState });

		};

	};

	useEffect(() => {
		async function fetchData() {
			const user = await getUser();
			if (user) {
				const company_id = user.company_id;
				const response = await getAllUsers(company_id);
				const employeeResponse = await getAllEmployees(company_id);
				setUsers(response);
				setEmployees(employeeResponse);
				setCurrentUser(user)
			}
		}
		fetchData();
	}, []);
	
	return (
		<>
			<div>
				<ToastContainer />
				<div className='container'>
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
								<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Add</button>
							</div>
						</div>
					</div>
				</div>
				<div className="section-body mt-3">
					<div className="container-fluid">
						<div className="tab-content mt-3">
							<div className="tab-pane fade show active" id="user-list" role="tabpanel">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">User List</h3>
										<div className="card-options">
											<form>
												<div className="input-group">
													<input
														type="text"
														className="form-control form-control-sm"
														placeholder="Search something..."
														name="s"
													/>
													<span className="input-group-btn ml-2">
														<button className="btn btn-sm btn-default" type="submit">
															<span className="fe fe-search" />
														</button>
													</span>
												</div>
											</form>
										</div>
									</div>
									<div className="card-body">
										<div className="table-responsive">
											<table className="table table-striped table-hover table-vcenter text-nowrap mb-0">
												<thead>
													<tr>
														<th className="w60">Name</th>
														<th />
														<th>Role</th>
														<th>Phone</th>
														<th>Created Date</th>
														<th className="w100">Action</th>
													</tr>
												</thead>
												<tbody>
													{users.map((user) => (
														<tr>
															<td className="width45">
																<span
																	className="avatar avatar-blue"
																	data-toggle="tooltip"
																	data-placement="top"
																	data-original-title="Avatar Name"
																>
																	{user.avatar}
																</span>
															</td>
															<td>
																<h6 className="mb-0">{user.name}</h6>
																<span>{user.email}</span>
															</td>
															<td>
																<span className="tag tag-danger">{user.role}</span>
															</td>
															<td>{user.phone}</td>

															<td>{formatDate(user.created_at)}</td>
															<td><td>

																<button
																	data-toggle="modal" data-target="#editModal"
																	type="button"
																	className="btn btn-icon"
																	title="Edit"
																	onClick={() => setUserData(user)}
																>
																	<i className="fa fa-edit" />
																</button>
																<button
																	type="button"
																	className="btn btn-icon js-sweetalert"
																	title="Delete"
																	data-type="confirm"
																	onClick={() => removeUser(user.id)}
																>
																	<i className="fa fa-trash-o text-danger" />
																</button>
															</td></td>
														</tr>
													))}


												</tbody>
											</table>
										</div>
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
							<h5 className="modal-title" id="exampleModalLabel">Add User</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						</div>
						<div className="modal-body">
							<div className="card">
								<div className="card-body">
									<div className="row clearfix">
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<select className="form-control show-tick"
													name='employeeID' value={formState?.employeeID}
													onChange={updateForm}
												>
													<option>Select Employee</option>
													{employees.map((employee) => (
														<option value={employee.id}>{employee.name}</option>
													))}
												</select>
											</div>
										</div>
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<input
													name='name' value={formState?.name}
													onChange={updateForm}
													type="text"
													className="form-control"
													placeholder="Name *"
												/>
											</div>
										</div>
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<input
													name='email' value={formState?.email}
													onChange={updateForm}
													type="text"
													className="form-control"
													placeholder="Email ID *"
												/>
											</div>
										</div>
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<input
													name='phone' value={formState?.phone}
													onChange={updateForm}
													type="text"
													className="form-control"
													placeholder="Mobile No"
												/>
											</div>
										</div>
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<select className="form-control show-tick"
													name='roleType' value={formState?.roleType}
													onChange={updateForm}
												>
													<option>Select Role Type</option>
													<option>Super Admin</option>
													<option>Admin</option>
													<option>Employee</option>
												</select>
											</div>
										</div>
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<input
													name='userName' value={formState?.userName}
													onChange={updateForm}
													type="text"
													className="form-control"
													placeholder="Username *"
												/>
											</div>
										</div>
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<input
													name='password' value={formState?.password}
													onChange={updateForm}
													type="password"
													className="form-control"
													placeholder="Password"
												/>
											</div>
										</div>
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<input
													name='confirmPassword' value={formState?.confirmPassword}
													onChange={updateForm}
													type="password"
													className="form-control"
													placeholder="Confirm Password"
												/>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="submit" className="btn right btn-primary" onClick={() => createUsersAction()}>
								Add
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* update modal */}

			<div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Edit User</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						</div>
						<EditUsers user={userData} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Users;