import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Ckeditor from '../common/ckeditor';
import { connect } from 'react-redux';
class FormSummernote extends Component {


	render() {
		const { fixNavbar } = this.props;
		return (
			<>
				{/* <link rel="stylesheet" href="../assets/plugins/summernote/dist/summernote.css" /> */}
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
											<NavLink to="/form-validation" className="dropdown-item">
												Form Validation
											</NavLink>
											<NavLink to="/form-wizard" className="dropdown-item">
												Form Wizard
											</NavLink>
											<NavLink to="/form-summernote" className="dropdown-item active">
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
							<div className="row row-deck">
								<div className="col-12">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Summernote</h3>

										</div>
										<div className="card-body">
											<div className="summernote">
												<Ckeditor />
												Hello there,
												<br />
												<p>
													The toolbar can be customized and it also supports various callbacks
													such as <code>oninit</code>, <code>onfocus</code>,{' '}
													<code>onpaste</code> and many more.
												</p>
												<p>
													Please try <b>paste some texts</b> here
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-12">
									<div className="card">
										<div className="card-header">
											<h3 className="card-title">Inline Editor</h3>
											<div className="card-options">

												<div className="item-action dropdown ml-2">
													<a href="//#" data-toggle="dropdown">
														<i className="fe fe-more-vertical" />
													</a>
													<div className="dropdown-menu dropdown-menu-right">
														<a href="//#" className="dropdown-item">
															<i className="dropdown-icon fa fa-eye" /> View Details{' '}
														</a>
														<a href="//#" className="dropdown-item">
															<i className="dropdown-icon fa fa-share-alt" /> Share{' '}
														</a>
														<a href="//#" className="dropdown-item">
															<i className="dropdown-icon fa fa-cloud-download" />{' '}
															Download
														</a>
														<div className="dropdown-divider" />
														<a href="//#" className="dropdown-item">
															<i className="dropdown-icon fa fa-copy" /> Copy to
														</a>
														<a href="//#" className="dropdown-item">
															<i className="dropdown-icon fa fa-folder" /> Move to
														</a>
														<a href="//#" className="dropdown-item">
															<i className="dropdown-icon fa fa-edit" /> Rename
														</a>
														<a href="//#" className="dropdown-item">
															<i className="dropdown-icon fa fa-trash" /> Delete
														</a>
													</div>
												</div>
											</div>
										</div>
										<div className="card-body">
											<div className="inline-editor">
												<p className="mb-0">You can select content and edit inline</p>
												<h5>
													Title Heading will be <b>apear here</b>
												</h5>
												<p>
													It is a long established fact that a reader will be distracted by
													the readable content of a page when looking at its layout. The point
													of using Lorem Ipsum is that it has a more-or-less normal
													distribution of letters, as opposed to using 'Content here, content
													here', making it look like readable English
												</p>
												<ul className="list-unstyled">
													<li>
														<i className="fa fa-hand-o-right text-success" /> There are many
														variations of passages
													</li>
													<li>
														<i className="fa fa-hand-o-right text-success" /> If you are
														going to use a passage of Ipsum
													</li>
													<li>
														<i className="fa fa-hand-o-right text-success" /> Contrary to
														popular belief, Ipsum is not simply
													</li>
												</ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(FormSummernote);