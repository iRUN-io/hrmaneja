import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
class FormAdvanced extends Component {


	render() {
		const { fixNavbar } = this.props;
		return (

			<>
				<div>
					<div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
						<div className="container-fluid">
							<div className="d-flex justify-content-between align-items-center">
								<ul className="nav nav-tabs page-header-tab">
									<li className="nav-item">
										<NavLink to="/forms" className="nav-link">
											Basic
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/form-advanced" className="nav-link active">
											Advanced
										</NavLink>
									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="//#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
										<div className="dropdown-menu">
											<NavLink to="/form-validation" className="dropdown-item" >Form Validation</NavLink>
											<NavLink to="/form-wizard" className="dropdown-item" >Form Wizard</NavLink>
											<NavLink to="/form-summernote" className="dropdown-item" >Summernote</NavLink>
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
							{/* Date Picker */}
							<div className="row clearfix row-deck">
								<div className="col-lg-3 col-md-6">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Inline Date Picker</h3>
										</div>
										<div className="card-body">
											<div className="inline-datepicker" />
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="card bg-indigo">
										<div className="card-header">
											<h3 className="card-title text-white">Inline Date Picker</h3>
										</div>
										<div className="card-body text-center">
											<div className="inline-datepicker fill_bg" />
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-12">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Date Picker</h3>
										</div>
										<div className="card-body">
											<label>Default</label>
											<div className="form-group">
												<div className="input-group">
													<input
														data-provide="datepicker"
														data-date-autoclose="true"
														className="form-control"
													/>
												</div>
											</div>
											<label>Custom Format (dd/mm/yyyy)</label>
											<div className="form-group">
												<div className="input-group">
													<input
														data-provide="datepicker"
														data-date-autoclose="true"
														className="form-control"
														data-date-format="dd/mm/yyyy"
													/>
												</div>
											</div>
											<label>Range</label>
											<div className="form-group">
												<div className="input-daterange input-group" data-provide="datepicker">
													<input type="text" className="input-sm form-control" name="start" />
													<span className="input-group-addon range-to">to</span>
													<input type="text" className="input-sm form-control" name="end" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Multi Select */}
							<div className="row clearfix">
								<div className="col-md-12">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Multiselect</h3>
										</div>
										<div className="card-body demo-card">
											<div className="row clearfix">
												<div className="col-lg-4 col-md-12">
													<label>Default</label>
													<div className="form-group multiselect_div">
														<select
															id="multiselect1"
															name="multiselect1[]"
															className="multiselect"
															multiple="multiple"
														>
															<option value="cheese">Cheese</option>
															<option value="tomatoes">Tomatoes</option>
															<option value="mozarella">Mozzarella</option>
															<option value="mushrooms">Mushrooms</option>
															<option value="pepperoni">Pepperoni</option>
															<option value="onions">Onions</option>
														</select>
													</div>
												</div>
												<div className="col-lg-4 col-md-12">
													<label>"Select All" Option Enabled</label>
													<div className="form-group multiselect_div">
														<select
															id="multiselect3-all"
															name="multiselect3[]"
															className="multiselect multiselect-custom"
															multiple="multiple"
														>
															<option value="multiselect-all">Select All</option>
															<option value="cheese">Cheese</option>
															<option value="tomatoes">Tomatoes</option>
															<option value="mozarella">Mozzarella</option>
															<option value="mushrooms">Mushrooms</option>
															<option value="pepperoni">Pepperoni</option>
															<option value="onions">Onions</option>
														</select>
													</div>
												</div>
												<div className="col-lg-4 col-md-12">
													<label>Options Group</label>
													<div className="form-group multiselect_div">
														<select
															id="multiselect5"
															name="multiselect5"
															className="multiselect-custom"
															multiple="multiple"
														>
															<optgroup label="Mathematics">
																<option value="analysis">Analysis</option>
																<option value="algebra">Linear Algebra</option>
																<option value="discrete">Discrete Mathematics</option>
																<option value="numerical">Numerical Analysis</option>
																<option value="probability">Probability Theory</option>
															</optgroup>
															<optgroup label="Computer Science">
																<option value="programming">
																	Introduction to Programming
																</option>
																<option value="automata">Automata Theory</option>
																<option value="complexity">Complexity Theory</option>
																<option value="software">Software Engineering</option>
															</optgroup>
														</select>
													</div>
												</div>
												<div className="col-lg-4 col-md-12">
													<label>Smaller Size</label>
													<div className="form-group multiselect_div">
														<select
															id="multiselect-size"
															name="multiselect7[]"
															className="multiselect multiselect-custom"
															multiple="multiple"
														>
															<option value="cheese">Cheese</option>
															<option value="tomatoes">Tomatoes</option>
															<option value="mozarella">Mozzarella</option>
														</select>
													</div>
												</div>
												<div className="col-lg-4 col-md-12">
													<label>Custom Checkbox</label>
													<div className="form-group multiselect_div">
														<select
															id="multiselect2"
															name="multiselect2[]"
															className="multiselect multiselect-custom"
															multiple="multiple"
														>
															<option value="cheese">Cheese</option>
															<option value="tomatoes">Tomatoes</option>
															<option value="mozarella">Mozzarella</option>
															<option value="mushrooms">Mushrooms</option>
															<option value="pepperoni">Pepperoni</option>
															<option value="onions">Onions</option>
														</select>
													</div>
												</div>
												<div className="col-lg-4 col-md-12">
													<label>Single Selection</label>
													<div className="form-group multiselect_div">
														<select
															id="single-selection"
															name="single_selection"
															className="multiselect multiselect-custom"
														>
															<option value="cheese">Cheese</option>
															<option value="tomatoes">Tomatoes</option>
															<option value="mozarella">Mozzarella</option>
															<option value="mushrooms">Mushrooms</option>
															<option value="pepperoni">Pepperoni</option>
															<option value="onions">Onions</option>
														</select>
													</div>
												</div>
												<div className="col-lg-4 col-md-12">
													<label>Filter Enabled</label>
													<div className="form-group multiselect_div">
														<select
															id="multiselect4-filter"
															name="multiselect4[]"
															className="multiselect multiselect-custom"
															multiple="multiple"
														>
															<option value="bootstrap">Bootstrap</option>
															<option value="bootstrap-marketplace">
																Bootstrap Marketplace
															</option>
															<option value="bootstrap-theme">Bootstrap Theme</option>
															<option value="html">HTML</option>
															<option value="html-template">HTML Template</option>
															<option value="wp-marketplace">
																WordPress Marketplace
															</option>
															<option value="wp-plugin">WordPress Plugin</option>
															<option value="wp-theme">WordPress Theme</option>
														</select>
													</div>
												</div>
												<div className="col-lg-4 col-md-12">
													<label>Disabled Options</label>
													<div className="form-group multiselect_div">
														<select
															id="multiselect6"
															name="multiselect6[]"
															className="multiselect multiselect-custom"
															multiple="multiple"
														>
															<option value="cheese">Cheese</option>
															<option value="tomatoes">Tomatoes</option>
															<option value="mozarella">Mozzarella</option>
															<option value="mushrooms" disabled="disabled">
																Mushrooms
															</option>
															<option value="pepperoni" disabled="disabled">
																Pepperoni
															</option>
															<option value="onions" disabled="disabled">
																Onions
															</option>
														</select>
													</div>
												</div>
												<div className="col-lg-4 col-md-12">
													<label>Link (btn-link)</label>
													<div className="form-group multiselect_div">
														<select
															id="multiselect-link"
															name="multiselect8[]"
															className="multiselect multiselect-custom"
															multiple="multiple"
														>
															<option value="cheese">Cheese</option>
															<option value="tomatoes">Tomatoes</option>
															<option value="mozarella">Mozzarella</option>
														</select>
													</div>
												</div>
												<div className="col-lg-4 col-md-12">
													<label>Custom Button Class (btn-primary)</label>
													<div className="form-group multiselect_div">
														<select
															id="multiselect-color"
															name="multiselect9[]"
															className="multiselect multiselect-custom"
															multiple="multiple"
														>
															<option value="cheese">Cheese</option>
															<option value="tomatoes">Tomatoes</option>
															<option value="mozarella">Mozzarella</option>
														</select>
													</div>
												</div>
												<div className="col-lg-4 col-md-12">
													<label>Custom Button Class (btn-success)</label>
													<div className="form-group multiselect_div">
														<select
															id="multiselect-color2"
															name="multiselect10[]"
															className="multiselect multiselect-custom"
															multiple="multiple"
														>
															<option value="cheese">Cheese</option>
															<option value="tomatoes">Tomatoes</option>
															<option value="mozarella">Mozzarella</option>
														</select>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Masked Input */}
							<div className="row clearfix">
								<div className="col-md-12">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Masked Text Inputs</h3>
										</div>
										<div className="card-body">
											<div className="row clearfix">
												<div className="col-lg-4 col-md-6 col-sm-12">
													<div className="form-group">
														<label htmlFor="phone" className="control-label">
															Phone
														</label>
														<input type="text" id="phone" className="form-control" />
														<span className="help-block">(999) 999-9999</span>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-12">
													<div className="form-group">
														<label htmlFor="phone-ex" className="control-label">
															Phone + Ext
														</label>
														<input type="text" id="phone-ex" className="form-control" />
														<span className="help-block">(999) 999-9999? x99999</span>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-12">
													<div className="form-group">
														<label htmlFor="tax-id" className="control-label">
															Tax ID
														</label>
														<input type="text" id="tax-id" className="form-control" />
														<span className="help-block">99-9999999</span>
													</div>
												</div>
												<div className="col-lg-6 col-md-6 col-sm-12">
													<div className="form-group">
														<label htmlFor="ssn" className="control-label">
															SSN
														</label>
														<input type="text" id="ssn" className="form-control" />
														<span className="help-block">999-99-9999</span>
													</div>
												</div>
												<div className="col-lg-6 col-md-6 col-sm-12">
													<div className="form-group">
														<label htmlFor="product-key" className="control-label">
															Product Key
														</label>
														<input type="text" id="product-key" className="form-control" />
														<span className="help-block">a*-999-a999</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Color Pickers */}
							<div className="row clearfix">
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">
												Color Pickers{' '}
												<small>
													Taken from
													<a href="/#">github.com/mjolnic/bootstrap-colorpicker</a>
												</small>
											</h3>
										</div>
										<div className="card-body">
											<div className="row clearfix">
												<div className="col-md-6">
													<b>HEX CODE</b>
													<div className="input-group colorpicker">
														<input
															type="text"
															className="form-control"
															defaultValue="/#00AABB"
														/>
														<div className="input-group-append">
															<span className="input-group-text">
																<span className="input-group-addon">
																	<i />
																</span>
															</span>
														</div>
													</div>
												</div>
												<div className="col-md-6">
													<b>RGB(A) CODE</b>
													<div className="input-group colorpicker">
														<input
															type="text"
															className="form-control"
															defaultValue="rgba(0,0,0,0.7)"
														/>
														<div className="input-group-append">
															<span className="input-group-text">
																<span className="input-group-addon">
																	<i />
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* jquery inputmask */}
							<div className="row clearfix">
								<div className="col-lg-12">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">
												Masked Input with icons{' '}
												<small>
													Taken from
													<a href="/#">github.com/RobinHerbots/jquery.inputmask</a>
												</small>
											</h3>
										</div>
										<div className="card-body">
											<div className="demo-masked-input">
												<div className="row clearfix">
													<div className="col-lg-3 col-md-6">
														<b>Date</b>
														<div className="input-group mb-3">
															<div className="input-group-prepend">
																<span className="input-group-text">
																	<i className="icon-calendar" />
																</span>
															</div>
															<input
																type="text"
																className="form-control date"
																placeholder="Ex: 30/07/2016"
															/>
														</div>
													</div>
													<div className="col-lg-3 col-md-6">
														<b>Time (24 hour)</b>
														<div className="input-group mb-3">
															<div className="input-group-prepend">
																<span className="input-group-text">
																	<i className="icon-clock" />
																</span>
															</div>
															<input
																type="text"
																className="form-control time24"
																placeholder="Ex: 23:59"
															/>
														</div>
													</div>
													<div className="col-lg-3 col-md-6">
														<b>Time (12 hour)</b>
														<div className="input-group mb-3">
															<div className="input-group-prepend">
																<span className="input-group-text">
																	<i className="icon-clock" />
																</span>
															</div>
															<input
																type="text"
																className="form-control time12"
																placeholder="Ex: 11:59 pm"
															/>
														</div>
													</div>
													<div className="col-lg-3 col-md-6">
														<b>Date Time</b>
														<div className="input-group mb-3">
															<div className="input-group-prepend">
																<span className="input-group-text">
																	<i className="fa fa-calendar" />
																</span>
															</div>
															<input
																type="text"
																className="form-control datetime"
																placeholder="Ex: 30/07/2016 23:59"
															/>
														</div>
													</div>
													<div className="col-lg-3 col-md-6">
														<b>Mobile Phone Number</b>
														<div className="input-group mb-3">
															<div className="input-group-prepend">
																<span className="input-group-text">
																	<i className="fa fa-mobile-phone" />
																</span>
															</div>
															<input
																type="text"
																className="form-control mobile-phone-number"
																placeholder="Ex: +00 (000) 000-00-00"
															/>
														</div>
													</div>
													<div className="col-lg-3 col-md-6">
														<b>Phone Number</b>
														<div className="input-group mb-3">
															<div className="input-group-prepend">
																<span className="input-group-text">
																	<i className="fa fa-phone" />
																</span>
															</div>
															<input
																type="text"
																className="form-control phone-number"
																placeholder="Ex: +00 (000) 000-00-00"
															/>
														</div>
													</div>
													<div className="col-lg-3 col-md-6">
														<b>Money (Dollar)</b>
														<div className="input-group mb-3">
															<div className="input-group-prepend">
																<span className="input-group-text">
																	<i className="fa fa-dollar" />
																</span>
															</div>
															<input
																type="text"
																className="form-control money-dollar"
																placeholder="Ex: 99,99 $"
															/>
														</div>
													</div>
													<div className="col-lg-3 col-md-6">
														<b>IP Address</b>
														<div className="input-group mb-3">
															<div className="input-group-prepend">
																<span className="input-group-text">
																	<i className="fa fa-desktop" />
																</span>
															</div>
															<input
																type="text"
																className="form-control ip"
																placeholder="Ex: 255.255.255.255"
															/>
														</div>
													</div>
													<div className="col-lg-3 col-md-6">
														<b>Credit Card</b>
														<div className="input-group mb-3">
															<div className="input-group-prepend">
																<span className="input-group-text">
																	<i className="fa fa-credit-card" />
																</span>
															</div>
															<input
																type="text"
																className="form-control credit-card"
																placeholder="Ex: 0000 0000 0000 0000"
															/>
														</div>
													</div>
													<div className="col-lg-3 col-md-6">
														<b>Email Address</b>
														<div className="input-group mb-3">
															<div className="input-group-prepend">
																<span className="input-group-text">
																	<i className="fa fa-envelope-o" />
																</span>
															</div>
															<input
																type="text"
																className="form-control email"
																placeholder="Ex: example@example.com"
															/>
														</div>
													</div>
													<div className="col-lg-6 col-md-6">
														<b>Serial Key</b>
														<div className="input-group mb-3">
															<div className="input-group-prepend">
																<span className="input-group-text">
																	<i className="fa fa-key" />
																</span>
															</div>
															<input
																type="text"
																className="form-control key"
																placeholder="Ex: XXX0-XXXX-XX00-0XXX"
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row clearfix row-deck">
								<div className="col-lg-4 col-md-6">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">
												Default{' '}
												<small>Taken from: https://github.com/JeremyFagis/dropify</small>
											</h3>
										</div>
										<div className="card-body">
											<input type="file" className="dropify" />
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">
												With event and default file <small>try to remove the image</small>
											</h3>
										</div>
										<div className="card-body">
											<input
												type="file"
												id="dropify-event"
												data-default-file="../assets/images/gallery/1.jpg"
											/>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Disabled file upload</h3>
										</div>
										<div className="card-body">
											<input type="file" className="dropify" disabled="disabled" />
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">
												Limit file type <small>try to upload png or pdf only</small>
											</h3>
										</div>
										<div className="card-body">
											<input
												type="file"
												className="dropify"
												data-allowed-file-extensions="pdf png"
											/>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">
												Limit file size <small>try to upload file larger than 100 KB</small>
											</h3>
										</div>
										<div className="card-body">
											<input type="file" className="dropify" data-max-file-size="100K" />
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">
												Custom messages for default <small>replace, remove and error</small>
											</h3>
										</div>
										<div className="card-body">
											<input type="file" className="dropify-fr" />
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
export default connect(mapStateToProps, mapDispatchToProps)(FormAdvanced);