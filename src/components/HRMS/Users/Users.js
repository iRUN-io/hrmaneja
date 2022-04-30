import React, { useState, useEffect } from 'react';
import { FormikProvider, useFormik, Field, Form, yupToFormErrors } from 'formik';
import * as Yup from 'yup';

import { getAllUsers } from '../../../services/user'
import { getUser } from '../../../config/common';

// const validate = values => {
// 	const errors = {};
// 	if(!values.firstName) {
// 		errors.firstName = 'Required';
// 	} else if (values.firstName.length > 15){
// 		errors.firstName = 'Must be 15 characters or less';
// 	}
// 	if(!values.lastName) {
// 		errors.lastName = 'Required';
// 	} else if (values.lastName.length > 15){
// 		errors.lastName = 'Must be 15 characters or less';
// 	}
// 	if(!values.mobileNumber) {
// 		errors.mobileNumber = 'Required';
// 	} else if (values.employerID.length > 11){
// 		errors.employerID = 'mobile number Must be 11 characters or less';
// 	}
// 	if(!values.userName) {
// 		errors.userName = 'Required';
// 	} else if (values.userName.length > 15){
// 		errors.userName = 'Must be 15 characters or less';
// 	}
// 	if(!values.password) {
// 		errors.password = 'Required';
// 	} else if (values.password.length > 15){
// 		errors.password = 'Must be 15 characters or less';
// 	}
// 	if(!values.confirmPassword) {
// 		errors.confirmPassword = 'Required';
// 	} else if (values.confirmPassword !== values.password){
// 		errors.confirmPassword = 'Must match password above';
// 	}

// 	return errors
// }

const Login = (navStatus) => {
	const [customers, setCustomers] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const user = await getUser();
			if (user) {
				const userId = user.id;
				const response = await getAllUsers(userId);
				setCustomers(response?.data);
			}
		}
		fetchData();
	}, []);

	const formik = useFormik({
		initialValues: {
			employerID: '',
			firstName: '',
			lastName: '',
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

		},
		validationSchema: Yup.object({
			mobileNumber: Yup.number()
				.min(10, 'must be atleat 11 characters')
				// .max(15, 'must be 11 characters or less')
				.required("Required"),
			// .matches("number"),
			userName: Yup.string()
				.max(15, 'must be 15 characters or less')
				.required("Required"),
			firstName: Yup.string()
				.max(15, 'must be 15 characters or less')
				.required("Required"),
			lastName: Yup.string()
				.max(20, 'must be 20 characters or less')
				.required('Required'),
			employerID: Yup.number && Yup.string()
				.max(12, 'must be 12 or less')
				.required('Required'),
			emailID: Yup.number && Yup.string()
				.max(12, 'must be 12 or less')
				.required('Required'),
			password: Yup
				.string()
				.required('Required')
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
					"Must be up to 8 characters, conatin an uppercase, lower case, a number and a special character"
				),
			confirmPassword: Yup
				.string()
				.required("Required")
				.oneOf([Yup.ref('password'), null], 'Passwords must match')
		}),
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<FormikProvider value={formik}>
			<div>
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
							</div>
							{/* form */}
							<form onSubmit={formik.handleSubmit}>
								<div className="tab-pane fade" id="user-add" role="tabpanel">
									<div className="card">
										<div className="card-body">
											<div className="row clearfix">
												<div className="col-lg-12 col-md-12 col-sm-12">
													<div className="form-group">
														<input
															id="employerID"
															name="employerID"
															type="text"
															className="form-control"
															placeholder="Employee ID *"
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.employerID}
														/>
														{formik.touched.employerID && formik.errors.employerID ? (
															<div>{formik.errors.employerID}</div>
														) : null}
														{/* {formik.errors.employerID ? <div>{formik.errors.employerID}</div> : null} */}
													</div>
												</div>
												<div className="col-lg-6 col-md-6 col-sm-12">
													<div className="form-group">
														<input
															id="firstName"
															name="firstName"
															type="text"
															className="form-control"
															placeholder="First Name *"
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.firstName}

														/>
														{formik.touched.firstName && formik.errors.firstName ? (
															<div>{formik.errors.firstName}</div>
														) : null}
														{/* {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null} */}
													</div>
												</div>
												<div className="col-lg-6 col-md-6 col-sm-12">
													<div className="form-group">
														<input
															id='lastName'
															name='lastName'
															type="text"
															className="form-control"
															placeholder="Last Name"
															onBlur={formik.handleBlur}
															onChange={formik.handleChange}
															value={formik.values.lastName}
														/>
														{formik.touched.lastName && formik.errors.lastName ? (
															<div>{formik.errors.lastName}</div>
														) : null}
														{/* {formik.errors.lastName ? <p style={{color:"red"}}>{formik.errors.lastName}</p> : null} */}

														{/* {formik.errors.lastName ? alert(formik.errors.lastName) : null} */}

													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<input
															id='emailID'
															name='emailID'
															type="text"
															className="form-control"
															placeholder="Email ID *"
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.emailID}
														/>
														{formik.touched.emailID && formik.errors.emailID ? (
															<div>{formik.errors.emailID}</div>
														) : null}
														{/* {formik.errors.emailID ? <div>{formik.errors.emailID}</div> : null} */}

													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<input
															id='mobileNumber'
															name='mobileNumber'
															type="text"
															className="form-control"
															placeholder="Mobile No"
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.mobileNumber}

														/>
														{formik.touched.mobileNumber && formik.errors.mobileNumber ? (
															<div>{formik.errors.mobileNumber}</div>
														) : null}
													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<select className="form-control show-tick" name='roleType'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.mobileNumber}>
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
															id='userName'
															name='userName'
															type="text"
															className="form-control"
															placeholder="Username *"
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.userName}
														/>
														{formik.touched.userName && formik.errors.userName ? (
															<div>{formik.errors.userName}</div>
														) : null}
														{/* {formik.errors.userName ? <div>{formik.errors.userName}</div> : null} */}

													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<input
															id='password'
															name='password'
															type="password"
															className="form-control"
															placeholder="Password"
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.password}
														/>
														{formik.touched.password && formik.errors.password ? (
															<div>{formik.errors.password}</div>
														) : null}
														{/* {formik.errors.password ? <div>{formik.errors.password}</div> : null} */}

													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<input
															id='confirmPassword'
															name='confirmPassword'
															type="password"
															className="form-control"
															placeholder="Confirm Password"
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.confirmPassword}
														/>
														{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
															<div>{formik.errors.confirmPassword}</div>
														) : null}
														{/* {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null} */}

													</div>
												</div>
												<div className="col-12">
													<hr className="mt-4" />
													<h6>Module Permission</h6>
													<div className="table-responsive" id='checked'>
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
																			{/* <Field type='checkbox name="checked" '> */}
																			<input
																				type="checkbox"
																				id='auperAdmin'
																				name="superAdmin"
																				className="custom-control-input"

																				defaultValue="option1"

																				onChange={formik.handleChange}
																				onBlur={formik.handleBlur}
																				value={formik.values.superAdmin}
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																			{/* </Field> */}


																		</label>
																	</td>
																	<td>

																		<label className="custom-control custom-checkbox">
																			{/* <Field type='checkbox name="checked" '> */}
																			<input
																				type="checkbox"
																				className="custom-control-input"
																				name="superAdmin"
																				defaultValue="option1"
																				defaultChecked
																				onChange={formik.handleChange}
																				onBlur={formik.handleBlur}
																				value={formik.values.superAdmin}
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																			{/* </Field> */}

																		</label>
																	</td>
																	<td>

																		<label className="custom-control custom-checkbox">
																			{/* <Field type='checkbox' name="checked" > */}
																			<input
																				type="checkbox"
																				className="custom-control-input"
																				name="superAdmin"
																				defaultValue="option1"
																				defaultChecked
																				onChange={formik.handleChange}
																				onBlur={formik.handleBlur}
																				value={formik.values.superAdmin}
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																			{/* </Field> */}

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
																				name="checked"
																				defaultValue="option1"
																				defaultChecked
																				onChange={formik.handleChange}
																				onBlur={formik.handleBlur}
																				value={formik.values.checked}
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
																				name="checked"
																				defaultValue="option1"
																			/>
																			<span className="custom-control-label">
																				&nbsp;
																			</span>
																		</label>
																	</td>
																	<td>
																		<label className="custom-control custom-checkbox">
																			<Field
																				type="checkbox"
																				className="custom-control-input"
																				name="checked"
																				defaultValue="option1"
																				onChange={formik.handleChange}
																				onBlur={formik.handleBlur}
																				value={formik.values.checked}
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
																				name="checked"
																				defaultValue="option1"
																				defaultChecked
																				onChange={formik.handleChange}
																				onBlur={formik.handleBlur}
																				value={formik.values.checked}
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
																				name="checked"
																				defaultValue="option1"
																				onChange={formik.handleChange}
																				onBlur={formik.handleBlur}
																				value={formik.values.checked}
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
																				name="checked"
																				defaultValue="option1"
																				onChange={formik.handleChange}
																				onBlur={formik.handleBlur}
																				value={formik.values.checked}
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
																				name="checked"
																				defaultValue="option1"
																				defaultChecked
																				onChange={formik.handleChange}
																				onBlur={formik.handleBlur}
																				value={formik.values.checked}
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
																				name="checked"
																				defaultValue="option1"
																				defaultChecked
																				onChange={formik.handleChange}
																				onBlur={formik.handleBlur}
																				value={formik.values.checked}
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
																				name="checked"
																				defaultValue="option1"
																				defaultChecked
																				onChange={formik.handleChange}
																				onBlur={formik.handleBlur}
																				value={formik.values.checked}
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
													<button type="submit" className="btn btn-primary">
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
							</form>

						</div>
					</div>
				</div>
			</div>

			{/* </div> */}
		</FormikProvider>
	);
}

export default Login;



// import React, { useState, useEffect } from 'react';

// import { getAllUsers } from '../../../services/user'
// import { getUser } from '../../../config/common';

// const Login = (navStatus) => {
// const [customers, setCustomers] = useState([]);
// 		useEffect(() => {
// 			async function fetchData() {
// 				const user = await getUser();
// 				if(user){
// 					const userId = user.id;
// 					const response = await getAllUsers(userId);
// 			  		setCustomers(response?.data);
// 				}
// 			}
// 			fetchData();
// 		}, []);

// 		return (
// 			<>
// 				<div>
// 					<div>
// 						<div className="container-fluid">
// 							<div className="d-flex justify-content-between align-items-center">
// 								<ul className="nav nav-tabs page-header-tab">
// 									<li className="nav-item">
// 										<a
// 											className="nav-link active"
// 											id="user-tab"
// 											data-toggle="tab"
// 											href="#user-list"
// 										>
// 											List
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a className="nav-link" id="user-tab" data-toggle="tab" href="#user-add">
// 											Add New
// 										</a>
// 									</li>
// 								</ul>
// 								{/* <div className="header-action">
// 									<button type="button" className="btn btn-primary">
// 										<i className="fe fe-plus mr-2" />
// 										Add
// 									</button>
// 								</div> */}
// 							</div>
// 						</div>
// 					</div>
// 					<div className="section-body mt-3">
// 						<div className="container-fluid">
// 							<div className="tab-content mt-3">
// 								<div className="tab-pane fade show active" id="user-list" role="tabpanel">
// 									<div className="card">
// 										<div className="card-header">
// 											<h3 className="card-title">User List</h3>
// 											<div className="card-options">
// 												<form>
// 													<div className="input-group">
// 														<input
// 															type="text"
// 															className="form-control form-control-sm"
// 															placeholder="Search something..."
// 															name="s"
// 														/>
// 														<span className="input-group-btn ml-2">
// 															<button className="btn btn-sm btn-default" type="submit">
// 																<span className="fe fe-search" />
// 															</button>
// 														</span>
// 													</div>
// 												</form>
// 											</div>
// 										</div>
// 										<div className="card-body">
// 											<div className="table-responsive">
// 												<table className="table table-striped table-hover table-vcenter text-nowrap mb-0">
// 													<thead>
// 														<tr>
// 															<th className="w60">Name</th>
// 															<th />
// 															<th />
// 															<th>Created Date</th>
// 															<th>Role</th>
// 															<th className="w100">Action</th>
// 														</tr>
// 													</thead>
// 													<tbody>
// 														{customers.map((customer) => (
// 														<tr>
// 															<td className="width45">
// 																<span
// 																	className="avatar avatar-blue"
// 																	data-toggle="tooltip"
// 																	data-placement="top"
// 																	data-original-title="Avatar Name"
// 																>
// 																	NG
// 																</span>
// 															</td>
// 															<td>
// 																<h6 className="mb-0">Marshall Nichols</h6>
// 																<span>marshall-n@gmail.com</span>
// 															</td>
// 															<td>
// 																<span className="tag tag-danger">Super Admin</span>
// 															</td>
// 															<td>24 Jun, 2015</td>
// 															<td>CEO and Founder</td>
// 															<td />
// 														</tr>
// 														))}
// 														<tr>
// 															<td>
// 																<img
// 																	src="../assets/images/xs/avatar1.jpg"
// 																	data-toggle="tooltip"
// 																	data-placement="top"
// 																	alt="Avatar"
// 																	className="avatar"
// 																	data-original-title="Avatar Name"
// 																/>
// 															</td>
// 															<td>
// 																<h6 className="mb-0">Susie Willis</h6>
// 																<span>sussie-w@gmail.com</span>
// 															</td>
// 															<td>
// 																<span className="tag tag-info">Admin</span>
// 															</td>
// 															<td>28 Jun, 2015</td>
// 															<td>Team Lead</td>
// 															<td>
// 																<button
// 																	type="button"
// 																	className="btn btn-icon"
// 																	title="Edit"
// 																>
// 																	<i className="fa fa-edit" />
// 																</button>
// 																<button
// 																	type="button"
// 																	className="btn btn-icon js-sweetalert"
// 																	title="Delete"
// 																	data-type="confirm"
// 																>
// 																	<i className="fa fa-trash-o text-danger" />
// 																</button>
// 															</td>
// 														</tr>

// 													</tbody>
// 												</table>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="tab-pane fade" id="user-add" role="tabpanel">
// 									<div className="card">
// 										<div className="card-body">
// 											<div className="row clearfix">
// 												<div className="col-lg-12 col-md-12 col-sm-12">
// 													<div className="form-group">
// 														<input
// 															type="text"
// 															className="form-control"
// 															placeholder="Employee ID *"
// 														/>
// 													</div>
// 												</div>
// 												<div className="col-lg-6 col-md-6 col-sm-12">
// 													<div className="form-group">
// 														<input
// 															type="text"
// 															className="form-control"
// 															placeholder="First Name *"
// 														/>
// 													</div>
// 												</div>
// 												<div className="col-lg-6 col-md-6 col-sm-12">
// 													<div className="form-group">
// 														<input
// 															type="text"
// 															className="form-control"
// 															placeholder="Last Name"
// 														/>
// 													</div>
// 												</div>
// 												<div className="col-md-4 col-sm-12">
// 													<div className="form-group">
// 														<input
// 															type="text"
// 															className="form-control"
// 															placeholder="Email ID *"
// 														/>
// 													</div>
// 												</div>
// 												<div className="col-md-4 col-sm-12">
// 													<div className="form-group">
// 														<input
// 															type="text"
// 															className="form-control"
// 															placeholder="Mobile No"
// 														/>
// 													</div>
// 												</div>
// 												<div className="col-md-4 col-sm-12">
// 													<div className="form-group">
// 														<select className="form-control show-tick">
// 															<option>Select Role Type</option>
// 															<option>Super Admin</option>
// 															<option>Admin</option>
// 															<option>Employee</option>
// 														</select>
// 													</div>
// 												</div>
// 												<div className="col-md-4 col-sm-12">
// 													<div className="form-group">
// 														<input
// 															type="text"
// 															className="form-control"
// 															placeholder="Username *"
// 														/>
// 													</div>
// 												</div>
// 												<div className="col-md-4 col-sm-12">
// 													<div className="form-group">
// 														<input
// 															type="text"
// 															className="form-control"
// 															placeholder="Password"
// 														/>
// 													</div>
// 												</div>
// 												<div className="col-md-4 col-sm-12">
// 													<div className="form-group">
// 														<input
// 															type="text"
// 															className="form-control"
// 															placeholder="Confirm Password"
// 														/>
// 													</div>
// 												</div>
// 												<div className="col-12">
// 													<hr className="mt-4" />
// 													<h6>Module Permission</h6>
// 													<div className="table-responsive">
// 														<table className="table table-striped">
// 															<thead>
// 																<tr>
// 																	<th />
// 																	<th>Read</th>
// 																	<th>Write</th>
// 																	<th>Delete</th>
// 																</tr>
// 															</thead>
// 															<tbody>
// 																<tr>
// 																	<td>Super Admin</td>
// 																	<td>
// 																		<label className="custom-control custom-checkbox">
// 																			<input
// 																				type="checkbox"
// 																				className="custom-control-input"
// 																				name="example-checkbox1"
// 																				defaultValue="option1"
// 																				defaultChecked
// 																			/>
// 																			<span className="custom-control-label">
// 																				&nbsp;
// 																			</span>
// 																		</label>
// 																	</td>
// 																	<td>
// 																		<label className="custom-control custom-checkbox">
// 																			<input
// 																				type="checkbox"
// 																				className="custom-control-input"
// 																				name="example-checkbox1"
// 																				defaultValue="option1"
// 																				defaultChecked
// 																			/>
// 																			<span className="custom-control-label">
// 																				&nbsp;
// 																			</span>
// 																		</label>
// 																	</td>
// 																	<td>
// 																		<label className="custom-control custom-checkbox">
// 																			<input
// 																				type="checkbox"
// 																				className="custom-control-input"
// 																				name="example-checkbox1"
// 																				defaultValue="option1"
// 																				defaultChecked
// 																			/>
// 																			<span className="custom-control-label">
// 																				&nbsp;
// 																			</span>
// 																		</label>
// 																	</td>
// 																</tr>
// 																<tr>
// 																	<td>Admin</td>
// 																	<td>
// 																		<label className="custom-control custom-checkbox">
// 																			<input
// 																				type="checkbox"
// 																				className="custom-control-input"
// 																				name="example-checkbox1"
// 																				defaultValue="option1"
// 																				defaultChecked
// 																			/>
// 																			<span className="custom-control-label">
// 																				&nbsp;
// 																			</span>
// 																		</label>
// 																	</td>
// 																	<td>
// 																		<label className="custom-control custom-checkbox">
// 																			<input
// 																				type="checkbox"
// 																				className="custom-control-input"
// 																				name="example-checkbox1"
// 																				defaultValue="option1"
// 																			/>
// 																			<span className="custom-control-label">
// 																				&nbsp;
// 																			</span>
// 																		</label>
// 																	</td>
// 																	<td>
// 																		<label className="custom-control custom-checkbox">
// 																			<input
// 																				type="checkbox"
// 																				className="custom-control-input"
// 																				name="example-checkbox1"
// 																				defaultValue="option1"
// 																			/>
// 																			<span className="custom-control-label">
// 																				&nbsp;
// 																			</span>
// 																		</label>
// 																	</td>
// 																</tr>
// 																<tr>
// 																	<td>Employee</td>
// 																	<td>
// 																		<label className="custom-control custom-checkbox">
// 																			<input
// 																				type="checkbox"
// 																				className="custom-control-input"
// 																				name="example-checkbox1"
// 																				defaultValue="option1"
// 																				defaultChecked
// 																			/>
// 																			<span className="custom-control-label">
// 																				&nbsp;
// 																			</span>
// 																		</label>
// 																	</td>
// 																	<td>
// 																		<label className="custom-control custom-checkbox">
// 																			<input
// 																				type="checkbox"
// 																				className="custom-control-input"
// 																				name="example-checkbox1"
// 																				defaultValue="option1"
// 																			/>
// 																			<span className="custom-control-label">
// 																				&nbsp;
// 																			</span>
// 																		</label>
// 																	</td>
// 																	<td>
// 																		<label className="custom-control custom-checkbox">
// 																			<input
// 																				type="checkbox"
// 																				className="custom-control-input"
// 																				name="example-checkbox1"
// 																				defaultValue="option1"
// 																			/>
// 																			<span className="custom-control-label">
// 																				&nbsp;
// 																			</span>
// 																		</label>
// 																	</td>
// 																</tr>
// 																<tr>
// 																	<td>HR Admin</td>
// 																	<td>
// 																		<label className="custom-control custom-checkbox">
// 																			<input
// 																				type="checkbox"
// 																				className="custom-control-input"
// 																				name="example-checkbox1"
// 																				defaultValue="option1"
// 																				defaultChecked
// 																			/>
// 																			<span className="custom-control-label">
// 																				&nbsp;
// 																			</span>
// 																		</label>
// 																	</td>
// 																	<td>
// 																		<label className="custom-control custom-checkbox">
// 																			<input
// 																				type="checkbox"
// 																				className="custom-control-input"
// 																				name="example-checkbox1"
// 																				defaultValue="option1"
// 																				defaultChecked
// 																			/>
// 																			<span className="custom-control-label">
// 																				&nbsp;
// 																			</span>
// 																		</label>
// 																	</td>
// 																	<td>
// 																		<label className="custom-control custom-checkbox">
// 																			<input
// 																				type="checkbox"
// 																				className="custom-control-input"
// 																				name="example-checkbox1"
// 																				defaultValue="option1"
// 																				defaultChecked
// 																			/>
// 																			<span className="custom-control-label">
// 																				&nbsp;
// 																			</span>
// 																		</label>
// 																	</td>
// 																</tr>
// 															</tbody>
// 														</table>
// 													</div>
// 													<button type="button" className="btn btn-primary">
// 														Add
// 													</button>
// 													<button
// 														type="button"
// 														className="btn btn-secondary"
// 														data-dismiss="modal"
// 													>
// 														CLOSE
// 													</button>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* </div> */}
// 			</>
// 		);
// 	}

// export default Login;