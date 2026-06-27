import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppContact extends Component {

	render() {
		const { fixNavbar } = this.props;
		return (
			<>
				<div>
					<div className={`section-body ${fixNavbar ? "marginTop" : ""} mt-3`}>
						<div className="container-fluid">
							<div className="row clearfix">
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<div className="d-md-flex justify-content-between">
												<ul className="nav nav-tabs b-none">
													<li className="nav-item">
														<a
															className="nav-link active"
															id="list-tab"
															data-toggle="tab"
															href="#list"
														>
															<i className="fa fa-list-ul" /> List
															</a>
													</li>
													<li className="nav-item">
														<a
															className="nav-link"
															id="grid-tab"
															data-toggle="tab"
															href="#grid"
														>
															<i className="fa fa-th" /> Grid
															</a>
													</li>
													<li className="nav-item">
														<a
															className="nav-link"
															id="addnew-tab"
															data-toggle="tab"
															href="#addnew"
														>
															<i className="fa fa-plus" /> Add New
															</a>
													</li>
												</ul>
												<div className="d-flex align-items-center sort_stat">
													<div className="d-flex">
														{/* <span className="bh_income">2,5,1,8,3,6,7,5,3,6,7,5</span> */}
														<div className="ml-2">
															<p className="mb-0 font-11">MY INCOME</p>
															<h5 className="font-16 mb-0">$5,510</h5>
														</div>
													</div>
													<div className="d-flex ml-3">
														{/* <span className="bh_traffic">5,8,9,10,5,2,5,8,9,10</span> */}
														<div className="ml-2">
															<p className="mb-0 font-11">SITE TRAFFIC</p>
															<h5 className="font-16 mb-0">53% Up</h5>
														</div>
													</div>
												</div>
											</div>
											<div className="input-group mt-2">
												<input
													type="text"
													className="form-control search"
													placeholder="Search..."
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section-body">
						<div className="container-fluid">
							<div className="tab-content">
								<div className="tab-pane fade show active" id="list" role="tabpanel">
									<div className="table-responsive" id="users">
										<table className="table table-hover table-vcenter text-nowrap table_custom border-style list">
											<tbody>
												<tr>
													<td className="width35 hidden-xs">
														<a href="/#;" className="mail-star">
															<i className="fa fa-star" />
														</a>
													</td>
													<td className="text-center width40">
														<div className="avatar d-block">
															<img
																className="avatar"
																src="../assets/images/xs/avatar4.jpg"
																alt="avatar"
															/>
														</div>
													</td>
													<td>
														<div>
															<a href="/#;">John Smith</a>
														</div>
														<div className="text-muted">+264-625-2583</div>
													</td>
													<td className="hidden-xs">
														<div className="text-muted">johnsmith@info.com</div>
													</td>
													<td className="hidden-sm">
														<div className="text-muted">
															455 S. Airport St. Moncks Corner, SC 29461
															</div>
													</td>
													<td className="text-right">
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Phone"
														>
															<i className="fa fa-phone" />
														</a>
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Mail"
														>
															<i className="fa fa-envelope" />
														</a>
														<a
															className="btn btn-sm btn-link hidden-xs js-sweetalert"
															data-type="confirm"
															href="/#"
															data-toggle="tooltip"
															title="Delete"
														>
															<i className="fa fa-trash" />
														</a>
													</td>
												</tr>
												<tr>
													<td className="width35 hidden-xs">
														<a href="/#;" className="mail-star active">
															<i className="fa fa-star" />
														</a>
													</td>
													<td className="text-center width40">
														<div className="avatar d-block">
															<img
																className="avatar"
																src="../assets/images/xs/avatar2.jpg"
																alt="avatar"
															/>
														</div>
													</td>
													<td>
														<div>
															<a href="/#;">Merri Diamond</a>
														</div>
														<div className="text-muted">+264-625-2583</div>
													</td>
													<td className="hidden-xs">
														<div className="text-muted">hermanbeck@info.com</div>
													</td>
													<td className="hidden-sm">
														<div className="text-muted">
															455 S. Airport St. Moncks Corner, SC 29461
															</div>
													</td>
													<td className="text-right">
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Phone"
														>
															<i className="fa fa-phone" />
														</a>
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Mail"
														>
															<i className="fa fa-envelope" />
														</a>
														<a
															className="btn btn-sm btn-link hidden-xs js-sweetalert"
															data-type="confirm"
															href="/#"
															data-toggle="tooltip"
															title="Delete"
														>
															<i className="fa fa-trash" />
														</a>
													</td>
												</tr>
												<tr>
													<td className="hidden-xs">
														<a href="/#;" className="mail-star love">
															<i className="fa fa-heart" />
														</a>
													</td>
													<td className="text-center width40">
														<div className="avatar d-block">
															<img
																className="avatar"
																src="../assets/images/xs/avatar3.jpg"
																alt="avatar"
															/>
														</div>
													</td>
													<td>
														<div className="from">
															<a href="/#;">Sara Hopkins</a>
														</div>
														<div className="text-muted">+264-625-3333</div>
													</td>
													<td className="hidden-xs">
														<div className="text-muted">maryadams@info.com</div>
													</td>
													<td className="hidden-sm">
														<div className="text-muted">
															19 Ohio St. Snellville, GA 30039
															</div>
													</td>
													<td className="text-right">
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Phone"
														>
															<i className="fa fa-phone" />
														</a>
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Mail"
														>
															<i className="fa fa-envelope" />
														</a>
														<a
															className="btn btn-sm btn-link hidden-xs js-sweetalert"
															data-type="confirm"
															href="/#"
															data-toggle="tooltip"
															title="Delete"
														>
															<i className="fa fa-trash" />
														</a>
													</td>
												</tr>
												<tr>
													<td className="hidden-xs">
														<a href="/#;" className="mail-star active">
															<i className="fa fa-star" />
														</a>
													</td>
													<td className="text-center width40">
														<div className="avatar d-block">
															<img
																className="avatar"
																src="../assets/images/xs/avatar7.jpg"
																alt="avatar"
															/>
														</div>
													</td>
													<td>
														<div className="from">
															<a href="/#;">Andrew Patrick</a>
														</div>
														<div className="text-muted">+264-625-2586</div>
													</td>
													<td className="hidden-xs">
														<div className="text-muted">mikethimas@info.com</div>
													</td>
													<td className="hidden-sm">
														<div className="text-muted">
															728 Blackburn St. Andover, MA 01810
															</div>
													</td>
													<td className="text-right">
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Phone"
														>
															<i className="fa fa-phone" />
														</a>
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Mail"
														>
															<i className="fa fa-envelope" />
														</a>
														<a
															className="btn btn-sm btn-link hidden-xs js-sweetalert"
															data-type="confirm"
															href="/#"
															data-toggle="tooltip"
															title="Delete"
														>
															<i className="fa fa-trash" />
														</a>
													</td>
												</tr>
												<tr>
													<td className="hidden-xs">
														<a href="/#;" className="mail-star">
															<i className="fa fa-star" />
														</a>
													</td>
													<td className="text-center width40">
														<div className="avatar d-block">
															<img
																className="avatar"
																src="../assets/images/xs/avatar5.jpg"
																alt="avatar"
															/>
														</div>
													</td>
													<td>
														<div className="from">
															<a href="/#;">Claire Peters</a>
														</div>
														<div className="text-muted">+264-625-3333</div>
													</td>
													<td className="hidden-xs">
														<div className="text-muted">clairepeters@info.com</div>
													</td>
													<td className="hidden-sm">
														<div className="text-muted">
															19 Ohio St. Snellville, GA 30039
															</div>
													</td>
													<td className="text-right">
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Phone"
														>
															<i className="fa fa-phone" />
														</a>
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Mail"
														>
															<i className="fa fa-envelope" />
														</a>
														<a
															className="btn btn-sm btn-link hidden-xs js-sweetalert"
															data-type="confirm"
															href="/#"
															data-toggle="tooltip"
															title="Delete"
														>
															<i className="fa fa-trash" />
														</a>
													</td>
												</tr>
												<tr>
													<td className="hidden-xs">
														<a href="/#;" className="mail-star">
															<i className="fa fa-star" />
														</a>
													</td>
													<td className="text-center width40">
														<div className="avatar d-block">
															<img
																className="avatar"
																src="../assets/images/xs/avatar6.jpg"
																alt="avatar"
															/>
														</div>
													</td>
													<td>
														<div className="from">
															<a href="/#;">Allen Collins</a>
														</div>
														<div className="text-muted">+264-625-4526</div>
													</td>
													<td className="hidden-xs">
														<div className="text-muted">kenpatrick@info.com</div>
													</td>
													<td className="hidden-sm">
														<div className="text-muted">
															728 Blackburn St. Andover, MA 01810
															</div>
													</td>
													<td className="text-right">
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Phone"
														>
															<i className="fa fa-phone" />
														</a>
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Mail"
														>
															<i className="fa fa-envelope" />
														</a>
														<a
															className="btn btn-sm btn-link hidden-xs js-sweetalert"
															data-type="confirm"
															href="/#"
															data-toggle="tooltip"
															title="Delete"
														>
															<i className="fa fa-trash" />
														</a>
													</td>
												</tr>
												<tr>
													<td className="width35 hidden-xs">
														<a href="/#;" className="mail-star">
															<i className="fa fa-star" />
														</a>
													</td>
													<td className="text-center width40">
														<div className="avatar d-block">
															<img
																className="avatar"
																src="../assets/images/xs/avatar4.jpg"
																alt="avatar"
															/>
														</div>
													</td>
													<td>
														<div>
															<a href="/#;">Erin Gonzales</a>
														</div>
														<div className="text-muted">+264-625-1593</div>
													</td>
													<td className="hidden-xs">
														<div className="text-muted">eringonzales@info.com</div>
													</td>
													<td className="hidden-sm">
														<div className="text-muted">
															455 S. Airport St. Moncks Corner, SC 29461
															</div>
													</td>
													<td className="text-right">
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Phone"
														>
															<i className="fa fa-phone" />
														</a>
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Mail"
														>
															<i className="fa fa-envelope" />
														</a>
														<a
															className="btn btn-sm btn-link hidden-xs js-sweetalert"
															data-type="confirm"
															href="/#"
															data-toggle="tooltip"
															title="Delete"
														>
															<i className="fa fa-trash" />
														</a>
													</td>
												</tr>
												<tr>
													<td className="hidden-xs">
														<a href="/#;" className="mail-star">
															<i className="fa fa-star" />
														</a>
													</td>
													<td className="text-center width40">
														<div className="avatar d-block">
															<img
																className="avatar"
																src="../assets/images/xs/avatar5.jpg"
																alt="avatar"
															/>
														</div>
													</td>
													<td>
														<div className="from">
															<a href="/#;">Harry McCall</a>
														</div>
														<div className="text-muted">+264-625-2468</div>
													</td>
													<td className="hidden-xs">
														<div className="text-muted">susiewillis@info.com</div>
													</td>
													<td className="hidden-sm">
														<div className="text-muted">
															19 Ohio St. Snellville, GA 30039
															</div>
													</td>
													<td className="text-right">
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Phone"
														>
															<i className="fa fa-phone" />
														</a>
														<a
															className="btn btn-sm btn-link"
															href="/#"
															data-toggle="tooltip"
															title="Mail"
														>
															<i className="fa fa-envelope" />
														</a>
														<a
															className="btn btn-sm btn-link hidden-xs js-sweetalert"
															data-type="confirm"
															href="/#"
															data-toggle="tooltip"
															title="Delete"
														>
															<i className="fa fa-trash" />
														</a>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div className="tab-pane fade" id="grid" role="tabpanel">
									<div className="row row-deck">
										<div className="col-lg-3 col-md-6 col-sm-12">
											<div className="card ">
												<div className="card-body">
													<div className="card-status bg-blue" />
													<div className="mb-3">
														<img
															src="../assets/images/sm/avatar1.jpg"
															className="rounded-circle w100"
															alt="fake_url"
														/>{' '}
													</div>
													<div className="mb-2">
														<h5 className="mb-0">Paul Schmidt</h5>
														<p className="text-muted">Aalizeethomas@info.com</p>
														<span>
															Lorem ipsum dolor sit amet, consectetur adipisicing
															elit. Aperiam deleniti fugit incidunt
															</span>
													</div>
													<span className="font-12 text-muted">Common Contact</span>
													<ul className="list-unstyled team-info margin-0 pt-2">
														<li>
															<img
																src="../assets/images/xs/avatar1.jpg"
																alt="Avatar"
															/>
														</li>
														<li>
															<img
																src="../assets/images/xs/avatar8.jpg"
																alt="Avatar"
															/>
														</li>
														<li>
															<img
																src="../assets/images/xs/avatar2.jpg"
																alt="Avatar"
															/>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-12">
											<div className="card ">
												<div className="card-body">
													<div className="mb-3">
														<img
															src="../assets/images/sm/avatar2.jpg"
															className="rounded-circle w100"
															alt="fake_url"
														/>{' '}
													</div>
													<div className="mb-2">
														<h5 className="mb-0">Andrew Patrick</h5>
														<p>Aalizeethomas@info.com</p>
														<span>
															Lorem ipsum dolor sit amet, consectetur adipisicing
															elit. Aperiam deleniti fugit incidunt
															</span>
													</div>
													<span className="font-12 text-muted">Common Contact</span>
													<ul className="list-unstyled team-info margin-0 pt-2">
														<li>
															<img
																src="../assets/images/xs/avatar1.jpg"
																alt="Avatar"
															/>
														</li>
														<li>
															<img
																src="../assets/images/xs/avatar2.jpg"
																alt="Avatar"
															/>
														</li>
														<li>
															<img
																src="../assets/images/xs/avatar3.jpg"
																alt="Avatar"
															/>
														</li>
														<li>
															<img
																src="../assets/images/xs/avatar4.jpg"
																alt="Avatar"
															/>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-12">
											<div className="card ">
												<div className="card-body">
													<div className="mb-3">
														<img
															src="../assets/images/sm/avatar3.jpg"
															className="rounded-circle w100"
															alt="fake_url"
														/>{' '}
													</div>
													<div className="mb-2">
														<h5 className="mb-0">Mary Schneider</h5>
														<p>Aalizeethomas@info.com</p>
														<span>
															Lorem ipsum dolor sit amet, consectetur adipisicing
															elit. Aperiam deleniti fugit incidunt
															</span>
													</div>
													<span className="font-12 text-muted">Common Contact</span>
													<ul className="list-unstyled team-info margin-0 pt-2">
														<li>
															<img
																src="../assets/images/xs/avatar1.jpg"
																alt="Avatar"
															/>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-12">
											<div className="card ">
												<div className="card-body">
													<div className="card-status bg-green" />
													<div className="mb-3">
														<img
															src="../assets/images/sm/avatar4.jpg"
															className="rounded-circle w100"
															alt="fake_url"
														/>{' '}
													</div>
													<div className="mb-2">
														<h5 className="mb-0">Sean Black</h5>
														<p>Aalizeethomas@info.com</p>
														<span>
															Lorem ipsum dolor sit amet, consectetur adipisicing
															elit. Aperiam deleniti fugit incidunt
															</span>
													</div>
													<span className="font-12 text-muted">Common Contact</span>
													<ul className="list-unstyled team-info margin-0 pt-2">
														<li>
															<img
																src="../assets/images/xs/avatar2.jpg"
																alt="Avatar"
															/>
														</li>
														<li>
															<img
																src="../assets/images/xs/avatar6.jpg"
																alt="Avatar"
															/>
														</li>
														<li>
															<img
																src="../assets/images/xs/avatar5.jpg"
																alt="Avatar"
															/>
														</li>
														<li>
															<img
																src="../assets/images/xs/avatar7.jpg"
																alt="Avatar"
															/>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-12">
											<div className="card ">
												<div className="card-body">
													<div className="mb-3">
														<img
															src="../assets/images/sm/avatar5.jpg"
															className="rounded-circle w100"
															alt="fake_url"
														/>{' '}
													</div>
													<div className="mb-2">
														<h5 className="mb-0">David Wallace</h5>
														<p>Aalizeethomas@info.com</p>
														<span>
															Lorem ipsum dolor sit amet, consectetur adipisicing
															elit. Aperiam deleniti fugit incidunt
															</span>
													</div>
													<span className="font-12 text-muted">Common Contact</span>
													<ul className="list-unstyled team-info margin-0 pt-2">
														<li>
															<img
																src="../assets/images/xs/avatar3.jpg"
																alt="Avatar"
															/>
														</li>
														<li>
															<img
																src="../assets/images/xs/avatar4.jpg"
																alt="Avatar"
															/>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-12">
											<div className="card ">
												<div className="card-body">
													<div className="card-status bg-pink" />
													<div className="mb-3">
														<img
															src="../assets/images/sm/avatar6.jpg"
															className="rounded-circle w100"
															alt="fake_url"
														/>{' '}
													</div>
													<div className="mb-2">
														<h5 className="mb-0">Andrew Patrick</h5>
														<p>Aalizeethomas@info.com</p>
														<span>
															Lorem ipsum dolor sit amet, consectetur adipisicing
															elit. Aperiam deleniti fugit incidunt
															</span>
													</div>
													<span className="font-12 text-muted">Common Contact</span>
													<ul className="list-unstyled team-info margin-0 pt-2">
														<li>
															<img
																src="../assets/images/xs/avatar5.jpg"
																alt="Avatar"
															/>
														</li>
														<li>
															<img
																src="../assets/images/xs/avatar6.jpg"
																alt="Avatar"
															/>
														</li>
														<li>
															<img
																src="../assets/images/xs/avatar1.jpg"
																alt="Avatar"
															/>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-12">
											<div className="card ">
												<div className="card-body">
													<div className="mb-3">
														<img
															src="../assets/images/sm/avatar2.jpg"
															className="rounded-circle w100"
															alt="fake_url"
														/>{' '}
													</div>
													<div className="mb-2">
														<h5 className="mb-0">Michelle Green</h5>
														<p>Aalizeethomas@info.com</p>
														<span>
															Lorem ipsum dolor sit amet, consectetur adipisicing
															elit. Aperiam deleniti fugit incidunt
															</span>
													</div>
													<span className="font-12 text-muted">Common Contact</span>
													<ul className="list-unstyled team-info margin-0 pt-2">
														<li>
															<img
																src="../assets/images/xs/avatar8.jpg"
																alt="Avatar"
															/>
														</li>
														<li>
															<img
																src="../assets/images/xs/avatar7.jpg"
																alt="Avatar"
															/>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-12">
											<div className="card ">
												<div className="card-body">
													<div className="mb-3">
														<img
															src="../assets/images/sm/avatar4.jpg"
															className="rounded-circle w100"
															alt="fake_url"
														/>{' '}
													</div>
													<div className="mb-2">
														<h5 className="mb-0">Mary Schneider</h5>
														<p>Aalizeethomas@info.com</p>
														<span>
															Lorem ipsum dolor sit amet, consectetur adipisicing
															elit. Aperiam deleniti fugit incidunt
															</span>
													</div>
													<span className="font-12 text-muted">Common Contact</span>
													<ul className="list-unstyled team-info margin-0 pt-2">
														<li>
															<img
																src="../assets/images/xs/avatar2.jpg"
																alt="Avatar"
															/>
														</li>
														<li>
															<img
																src="../assets/images/xs/avatar7.jpg"
																alt="Avatar"
															/>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="addnew" role="tabpanel">
									<div className="card">
										<div className="card-body">
											<div className="row clearfix">
												<div className="col-lg-4 col-md-12">
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															placeholder="Enter Name"
														/>
													</div>
												</div>
												<div className="col-lg-4 col-md-12">
													<div className="form-group">
														<input
															type="number"
															className="form-control"
															placeholder="Enter Number"
														/>
													</div>
												</div>
												<div className="col-lg-4 col-md-12">
													<div className="form-group">
														<input
															type="email"
															className="form-control"
															placeholder="Enter Email"
														/>
													</div>
												</div>
												<div className="col-lg-12 col-md-12">
													<div className="form-group">
														<textarea
															type="text"
															className="form-control"
															rows={4}
															defaultValue={'Enter your Address'}
														/>
													</div>
												</div>
												<div className="col-lg-12">
													<input type="file" className="dropify" />
												</div>
												<div className="col-lg-12 mt-3">
													<button type="submit" className="btn btn-primary">
														Add
														</button>
													<button type="submit" className="btn btn-default">
														Cancel
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
			</>
		);
	}
}
const mapStateToProps = state => ({
	fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(AppContact);