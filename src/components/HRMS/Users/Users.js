import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {

	render() {
		const { fixNavbar } = this.props;
		return (
			<>
				<div>
					<div>
					<div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
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
														<tr>
															<td>
																<img
																	src="../assets/images/xs/avatar2.jpg"
																	data-toggle="tooltip"
																	data-placement="top"
																	alt="Avatar"
																	className="avatar"
																	data-original-title="Avatar Name"
																/>
															</td>
															<td>
																<h6 className="mb-0">Debra Stewart</h6>
																<span>debra@gmail.com</span>
															</td>
															<td>
																<span className="tag tag-default">Employee</span>
															</td>
															<td>21 July, 2015</td>
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
														<tr>
															<td>
																<span
																	className="avatar avatar-green"
																	data-toggle="tooltip"
																	data-placement="top"
																	data-original-title="Avatar Name"
																>
																	KH
																</span>
															</td>
															<td>
																<h6 className="mb-0">Erin Gonzales</h6>
																<span>Erinonzales@gmail.com</span>
															</td>
															<td>
																<span className="tag tag-default">Employee</span>
															</td>
															<td>21 July, 2015</td>
															<td>Web Developer</td>
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
														<tr>
															<td>
																<img
																	src="../assets/images/xs/avatar3.jpg"
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
														<tr>
															<td>
																<img
																	src="../assets/images/xs/avatar4.jpg"
																	data-toggle="tooltip"
																	data-placement="top"
																	alt="Avatar"
																	className="avatar"
																	data-original-title="Avatar Name"
																/>
															</td>
															<td>
																<h6 className="mb-0">Debra Stewart</h6>
																<span>debra@gmail.com</span>
															</td>
															<td>
																<span className="tag tag-default">Employee</span>
															</td>
															<td>21 July, 2015</td>
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
														<tr>
															<td>
																<img
																	src="../assets/images/xs/avatar5.jpg"
																	data-toggle="tooltip"
																	data-placement="top"
																	alt="Avatar"
																	className="avatar"
																	data-original-title="Avatar Name"
																/>
															</td>
															<td>
																<h6 className="mb-0">Erin Gonzales</h6>
																<span>Erinonzales@gmail.com</span>
															</td>
															<td>
																<span className="tag tag-default">Employee</span>
															</td>
															<td>21 July, 2016</td>
															<td>Web Developer</td>
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
														<tr>
															<td>
																<img
																	src="../assets/images/xs/avatar6.jpg"
																	data-toggle="tooltip"
																	data-placement="top"
																	alt="Avatar"
																	className="avatar"
																	data-original-title="Avatar Name"
																/>
															</td>
															<td>
																<h6 className="mb-0">Ava Alexander</h6>
																<span>alexander@gmail.com</span>
															</td>
															<td>
																<span className="tag tag-success">HR Admin</span>
															</td>
															<td>21 July, 2016</td>
															<td>HR</td>
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
														<tr>
															<td>
																<span
																	className="avatar avatar-green"
																	data-toggle="tooltip"
																	data-placement="top"
																	data-original-title="Avatar Name"
																>
																	KH
																</span>
															</td>
															<td>
																<h6 className="mb-0">Ava Alexander</h6>
																<span>alexander@gmail.com</span>
															</td>
															<td>
																<span className="tag tag-success">HR Admin</span>
															</td>
															<td>21 July, 2019</td>
															<td>HR</td>
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
								<div className="tab-pane fade" id="user-add" role="tabpanel">
									<div className="card">
										<div className="card-body">
											<div className="row clearfix">
												<div className="col-lg-12 col-md-12 col-sm-12">
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															placeholder="Employee ID *"
														/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6 col-sm-12">
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															placeholder="First Name *"
														/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6 col-sm-12">
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															placeholder="Last Name"
														/>
													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															placeholder="Email ID *"
														/>
													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															placeholder="Mobile No"
														/>
													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<select className="form-control show-tick">
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
															type="text"
															className="form-control"
															placeholder="Username *"
														/>
													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															placeholder="Password"
														/>
													</div>
												</div>
												<div className="col-md-4 col-sm-12">
													<div className="form-group">
														<input
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
													<button type="button" className="btn btn-primary">
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
}
const mapStateToProps = state => ({
	fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Users);