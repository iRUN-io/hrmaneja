import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
class FormValidation extends Component {

	render() {
		const { fixNavbar } = this.props;
		return (
			<>
				<div>
					<div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
						<div className="container-fluid">
							<div className="d-flex justify-content-between align-items-center">
								<ul className="nav nav-tabs page-header-tab">
									<li className="nav-item">
										<NavLink to="/forms" className="nav-link">
											Basic
										</NavLink>
									</li>
									{/* <li className="nav-item">
										<NavLink to="/form-advanced" className="nav-link">
											Advanced
										</NavLink>
									</li> */}
									<li className="nav-item dropdown">
										<a
											className="nav-link dropdown-toggle active"
											data-toggle="dropdown"
											href="/#"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											More
										</a>
										<div className="dropdown-menu">
											<NavLink to="/form-validation" className="dropdown-item active">
												Form Validation
											</NavLink>
											<NavLink to="/form-wizard" className="dropdown-item">
												Form Wizard
											</NavLink>
											<NavLink to="/form-summernote" className="dropdown-item">
												Summernote
											</NavLink>
										</div>
									</li>
								</ul>
								<div className="header-action">
									<button
										type="button"
										className="btn btn-primary"
										data-toggle="modal"
										data-target="/#exampleModal"
									>
										<i className="fe fe-plus mr-2" />
										Add
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="section-body mt-3">
						<div className="container-fluid">
							<div className="row clearfix">
								<div className="col-md-12">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Basic Validation</h3>
										</div>
										<div className="card-body">
											<form id="basic-form" method="post" noValidate>
												<div className="form-group">
													<label>Text Input</label>
													<input type="text" className="form-control" required />
												</div>
												<div className="form-group">
													<label>Email Input</label>
													<input type="email" className="form-control" required />
												</div>
												<div className="form-group">
													<label>Text Area</label>
													<textarea
														className="form-control"
														rows={5}
														cols={30}
														required
														defaultValue={''}
													/>
												</div>
												<div className="form-group">
													<label>Checkbox</label>
													<br />
													<label className="custom-control custom-checkbox custom-control-inline">
														<input
															type="checkbox"
															className="custom-control-input"
															name="checkbox"
															required
															data-parsley-errors-container="/#error-checkbox"
														/>
														<span className="custom-control-label">Option 1</span>
													</label>
													<label className="custom-control custom-checkbox custom-control-inline">
														<input
															type="checkbox"
															className="custom-control-input"
															name="checkbox"
														/>
														<span className="custom-control-label">Option 2</span>
													</label>
													<label className="custom-control custom-checkbox custom-control-inline">
														<input
															type="checkbox"
															className="custom-control-input"
															name="checkbox"
														/>
														<span className="custom-control-label">Option 3</span>
													</label>
													<p id="error-checkbox" />
												</div>
												<div className="form-group">
													<label>Radio Button</label>
													<br />
													<label className="custom-control custom-radio custom-control-inline">
														<input
															type="radio"
															className="custom-control-input"
															name="gender"
															defaultValue="male"
															required
															data-parsley-errors-container="/#error-radio"
														/>
														<span className="custom-control-label">Male</span>
													</label>
													<label className="custom-control custom-radio custom-control-inline">
														<input
															type="radio"
															className="custom-control-input"
															name="gender"
															defaultValue="female"
														/>
														<span className="custom-control-label">Female</span>
													</label>
													<p id="error-radio" />
												</div>
												<div className="form-group">
													<label htmlFor="food">Multiselect</label>
													<br />
													<select
														id="food"
														name="food[]"
														className="multiselect multiselect-custom"
														multiple="multiple"
														data-parsley-required
														data-parsley-trigger-after-failure="change"
														data-parsley-errors-container="/#error-multiselect"
													>
														<option value="cheese">Cheese</option>
														<option value="tomatoes">Tomatoes</option>
														<option value="mozarella">Mozzarella</option>
														<option value="mushrooms">Mushrooms</option>
														<option value="pepperoni">Pepperoni</option>
														<option value="onions">Onions</option>
													</select>
													<p id="error-multiselect" />
												</div>
												<br />
												<button type="submit" className="btn btn-primary">
													Validate
												</button>
											</form>
										</div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Advanced Validation</h3>
										</div>
										<div className="card-body">
											<form id="advanced-form" data-parsley-validate noValidate>
												<div className="form-group">
													<label htmlFor="text-input1">Min. 8 Characters</label>
													<input
														type="text"
														id="text-input1"
														className="form-control"
														required
														data-parsley-minlength={8}
													/>
												</div>
												<div className="form-group">
													<label htmlFor="text-input2">Between 5-10 Characters</label>
													<input
														type="text"
														id="text-input2"
														className="form-control"
														required
														data-parsley-length="[5,10]"
													/>
												</div>
												<div className="form-group">
													<label htmlFor="text-input3">Min. Number ( &gt;= 5 )</label>
													<input
														type="text"
														id="text-input3"
														className="form-control"
														required
														data-parsley-min={5}
													/>
												</div>
												<div className="form-group">
													<label htmlFor="text-input4">Between 20-30</label>
													<input
														type="text"
														id="text-input4"
														className="form-control"
														required
														data-parsley-range="[20,30]"
													/>
												</div>
												<div className="form-group">
													<label>Select Min. 2 Options</label>
													<br />
													<label className="custom-control custom-checkbox custom-control-inline">
														<input
															type="checkbox"
															className="custom-control-input"
															name="checkbox2"
															required
															data-parsley-mincheck={2}
															data-parsley-errors-container="/#error-checkbox2"
														/>
														<span className="custom-control-label">Option 1</span>
													</label>
													<label className="custom-control custom-checkbox custom-control-inline">
														<input
															type="checkbox"
															className="custom-control-input"
															name="checkbox2"
														/>
														<span className="custom-control-label">Option 2</span>
													</label>
													<label className="custom-control custom-checkbox custom-control-inline">
														<input
															type="checkbox"
															className="custom-control-input"
															name="checkbox2"
														/>
														<span className="custom-control-label">Option 3</span>
													</label>
													<p id="error-checkbox2" />
												</div>
												<div className="form-group">
													<label>Select Between 1-2 Options</label>
													<br />
													<label className="custom-control custom-checkbox custom-control-inline">
														<input
															type="checkbox"
															className="custom-control-input"
															name="checkbox3"
															required
															data-parsley-check="[1,2]"
															data-parsley-errors-container="/#error-checkbox3"
														/>
														<span className="custom-control-label">Option 1</span>
													</label>
													<label className="custom-control custom-checkbox custom-control-inline">
														<input
															type="checkbox"
															className="custom-control-input"
															name="checkbox3"
														/>
														<span className="custom-control-label">Option 2</span>
													</label>
													<label className="custom-control custom-checkbox custom-control-inline">
														<input
															type="checkbox"
															className="custom-control-input"
															name="checkbox3"
														/>
														<span className="custom-control-label">Option 3</span>
													</label>
													<p id="error-checkbox3" />
												</div>
												<br />
												<button type="submit" className="btn btn-primary">
													Validate
												</button>
											</form>
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
export default connect(mapStateToProps, mapDispatchToProps)(FormValidation);