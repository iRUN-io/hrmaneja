// import React, { Component } from 'react'

// import React, { Component } from 'react';

// class Users extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state ={
// 			Admin: [
// 				{
// 					id: 1,
// 					name: 'read'
// 				},
// 				{
// 					id: 1,
// 					name: 'write'
// 				},
// 				{
// 					id: 1,
// 					name: 'delete'
// 				},
// 			],
// 			selected: [],
// 		}
// 	}
	
// 	render() {
// 		return (
// 			<div>
// 				<form>
// 					<p>
// 						{JSON.stringify(this.state.selected)}
// 					</p>
// 					<p>Foods</p>
// 					{
// 						this.state.Admin.map(item => {
// 							return (
// 								<label key = {item.id}>
// 									<input type='checkbox'
// 										onChange={ () => this.onChange(item.id)}
// 										selected={this.stae.selected.includes(item.id)}
// 									></input>
// 									<span>{item.name}</span>
// 								</label>
// 							)
// 						})
// 					}

// 				</form>
				
// 			</div>
// 		);
// 	}
// }

// export default Users;


import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllUsers, createUser } from '../../../services/user'
import { getUser } from '../../../config/common';

const Login = (navStatus) => {
	const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);
	const [formState, setFormState] = useState({
		employeeID: '',
		firstName : '',
		lastName :'',
		emailID: '',
		mobileNumber: '',
		roleType: '',
		userName: '',
		password: '',
		confirmPassword: '',
		superAdmin: [],
		employee: [],
		admin: [],
		hrAdmin: [],
	});

	const createUsersAction = async () => {
		try {
			setFormState({ ...formState});
			const body = {
				employerID: formState.employeeID,
				firstName: formState.firstName,
				lastName: formState.lastName,
				userName: formState.userName,
				emailID: formState.emailID,
				mobileNumber: formState.mobileNumber,
				roleType: formState.roleType,
				password: formState.password,
				confirmPassword: formState.confirmPassword,
			}
			console.log(body)
			await createUser(body, user.id)

			toast.success("User successfully added")

			setFormState({
				employeeID: '',
				firstName : '',
				lastName :'',
				emailID: '',
				mobileNumber: '',
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
		
	};

	const updateForm = (e) => {
		const { value, name } = e.target;
		setFormState({
			...formState,
			// [name]: value,
			
		})
		// console.log(formState)
		console.log({[name]: value})
	}
	const [customers, setCustomers] = useState([]);
		useEffect(() => {
			async function fetchData() {
				const user = await getUser();
				if(user){
					const userId = user.id;
					const response = await getAllUsers(userId);
			  		setCustomers(response?.data);
					setUser(user)
				}
			}
			fetchData();
		}, []);

		return (
			<>
				<div>
					<ToastContainer />
					<div>
						<div className="container-fluid">
							<div className="d-flex justify-content-between align-items-center">
								<ul className="nav nav-tabs page-header-tab">
									<li className="nav-item">
										<a
											className="nav-link active"
											id="user-tab"
											data-toggle="tab"
											href="#user-list"
										>
											List
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="user-tab" data-toggle="tab" href="#user-add">
											Add New
										</a>
									</li>
								</ul>
								{/* <div className="header-action">
									<button type="button" className="btn btn-primary">
										<i className="fe fe-plus mr-2" />
										Add
									</button>
								</div> */}
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
														<th />
														<th>Created Date</th>
														<th>Role</th>
														<th className="w100">Action</th>
													</tr>
												</thead>
												<tbody>
													{customers.map((customer) => (
														<tr>
															<td className="width45">
																<span
																	className="avatar avatar-blue"
																	data-toggle="tooltip"
																	data-placement="top"
																	data-original-title="Avatar Name"
																>
																	NG
																</span>
															</td>
															<td>
																<h6 className="mb-0">Marshall Nichols</h6>
																<span>marshall-n@gmail.com</span>
															</td>
															<td>
																<span className="tag tag-danger">Super Admin</span>
															</td>
															<td>24 Jun, 2015</td>
															<td>CEO and Founder</td>
															<td />
														</tr>
													))}
													<tr>
														<td>
															<img
																src="../assets/images/xs/avatar1.jpg"
																data-toggle="tooltip"
																data-placement="top"
																alt="Avatar"
																className="avatar"
																data-original-title="Avatar Name"
															/>
														</td>
														<td>
															<h6 className="mb-0">Susie Willis</h6>
															<span>sussie-w@gmail.com</span>
														</td>
														<td>
															<span className="tag tag-info">Admin</span>
														</td>
														<td>28 Jun, 2015</td>
														<td>Team Lead</td>
														<td>
															<button
																type="button"
																className="btn btn-icon"
																title="Edit"
															>
																<i className="fa fa-edit" />
															</button>
															<button
																type="button"
																className="btn btn-icon js-sweetalert"
																title="Delete"
																data-type="confirm"
															>
																<i className="fa fa-trash-o text-danger" />
															</button>
														</td>
													</tr>

												</tbody>
											</table>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="user-add" role="tabpanel">
									<div className="card">
										<div className="card-body">
											<div className="row clearfix">
												<div className="col-lg-12 col-md-12 col-sm-12">
													<div className="form-group">
														<input
															name='employeeID' value={formState?.employeeID}
															onChange={updateForm}
															type="text"
															className="form-control"
															placeholder="Employee ID *"
														/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6 col-sm-12">
													<div className="form-group">
														<input
															name='firstName' value={formState?.firstName}
															onChange={updateForm}
															type="text"
															className="form-control"
															placeholder="First Name *"
														/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6 col-sm-12">
													<div className="form-group">
														<input
															name='lastName'  value={formState?.lastName}
															onChange={updateForm}
															type="text"
															className="form-control"
															placeholder="Last Name"
														/>
													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<input
															name='emailID'  value={formState?.emailID}
															onChange={updateForm}
															type="text"
															className="form-control"
															placeholder="Email ID *"
														/>
													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<input
															name='mobileNumber'  value={formState?.mobileNumber}
															onChange={updateForm}
															type="text"
															className="form-control"
															placeholder="Mobile No"
														/>
													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<select className="form-control show-tick"
															name='roleType'  value={formState?.roleType}
															onChange={updateForm}
														>

															<option>Select Role Type</option>
															<option>Super Admin</option>
															<option>Admin</option>
															<option>Employee</option>
														</select>
													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<input
															name='userName'  value={formState?.userName}
															onChange={updateForm}
															type="text"
															className="form-control"
															placeholder="Username *"
														/>
													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<input
															name='password'  value={formState?.password}
															onChange={updateForm}
															type="text"
															className="form-control"
															placeholder="Password"
														/>
													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<input
															name='confirmPassword'  value={formState?.confirmPassword}
															onChange={updateForm}
															type="text"
															className="form-control"
															placeholder="Confirm Password"
														/>
													</div>
												</div>
												<div className="col-12">
													<hr className="mt-4" />
													<h6>Module Permission</h6>
													<div className="table-responsive">
														<table className="table table-striped">
															<thead>
																<tr>
																	<th />
																	<th>Read</th>
																	<th>Write</th>
																	<th>Delete</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>Super Admin</td>
																	<td>
																		<label className="custom-control custom-checkbox">
																			<input
																				type="checkbox"
																				className="custom-control-input"
																				name="example-checkbox1"
																				defaultValue="option1"
																				defaultChecked
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																		</label>
																	</td>
																	<td>
																		<label className="custom-control custom-checkbox">
																			<input
																				type="checkbox"
																				className="custom-control-input"
																				name="example-checkbox1"
																				defaultValue="option1"
																				defaultChecked
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																		</label>
																	</td>
																	<td>
																		<label className="custom-control custom-checkbox">
																			<input
																				type="checkbox"
																				className="custom-control-input"
																				name="example-checkbox1"
																				defaultValue="option1"
																				defaultChecked
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																		</label>
																	</td>
																</tr>
																<tr>
																	<td>Admin</td>
																	<td>
																		<label className="custom-control custom-checkbox">
																			<input
																				type="checkbox"
																				className="custom-control-input"
																				name="example-checkbox1"
																				defaultValue="option1"
																				defaultChecked
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																		</label>
																	</td>
																	<td>
																		<label className="custom-control custom-checkbox">
																			<input
																				type="checkbox"
																				className="custom-control-input"
																				name="example-checkbox1"
																				defaultValue="option1"
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																		</label>
																	</td>
																	<td>
																		<label className="custom-control custom-checkbox">
																			<input
																				type="checkbox"
																				className="custom-control-input"
																				name="example-checkbox1"
																				defaultValue="option1"
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																		</label>
																	</td>
																</tr>
																<tr>
																	<td>Employee</td>
																	<td>
																		<label className="custom-control custom-checkbox">
																			<input
																				type="checkbox"
																				className="custom-control-input"
																				name="example-checkbox1"
																				defaultValue="option1"
																				defaultChecked
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																		</label>
																	</td>
																	<td>
																		<label className="custom-control custom-checkbox">
																			<input
																				type="checkbox"
																				className="custom-control-input"
																				name="example-checkbox1"
																				defaultValue="option1"
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																		</label>
																	</td>
																	<td>
																		<label className="custom-control custom-checkbox">
																			<input
																				type="checkbox"
																				className="custom-control-input"
																				name="example-checkbox1"
																				defaultValue="option1"
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																		</label>
																	</td>
																</tr>
																<tr>
																	<td>HR Admin</td>
																	<td>
																		<label className="custom-control custom-checkbox">
																			<input
																				type="checkbox"
																				className="custom-control-input"
																				name="example-checkbox1"
																				defaultValue="option1"
																				defaultChecked
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																		</label>
																	</td>
																	<td>
																		<label className="custom-control custom-checkbox">
																			<input
																				type="checkbox"
																				className="custom-control-input"
																				name="example-checkbox1"
																				defaultValue="option1"
																				defaultChecked
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																		</label>
																	</td>
																	<td>
																		<label className="custom-control custom-checkbox">
																			<input
																				type="checkbox"
																				className="custom-control-input"
																				name="example-checkbox1"
																				defaultValue="option1"
																				defaultChecked
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																		</label>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
													<button type="submit" className="btn btn-primary" onClick={() => createUsersAction()}>
														Add
													</button>
													<button
														type="button"
														className="btn btn-secondary"
														data-dismiss="modal"
													>
														CLOSE
													</button>
												</div>
											</div>
										</div>
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

export default Login;