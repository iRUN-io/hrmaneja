import React, { Component } from 'react';
import { connect } from 'react-redux';

class Applicants extends Component {

	render() {
		const { fixNavbar } = this.props;
		return (
			<>
				<div className={`section-body ${fixNavbar ? "marginTop" : ""} mt-3`}>
					<div className="container-fluid">
						<div className="row clearfix">
							<div className="col-12">
								<div className="card">
									<div className="card-body">
										<div className="row">
											<div className="col-lg-4 col-md-4 col-sm-6">
												<label>Search</label>
												<div className="input-group">
													<input
														type="text"
														className="form-control"
														placeholder="Search..."
													/>
												</div>
											</div>
											<div className="col-lg-3 col-md-4 col-sm-6">
												<label>Status</label>
												<div className="multiselect_div">
													<select className="custom-select">
														<option>None Selected</option>
														<option value={1}>All Status</option>
														<option value={2}>New</option>
														<option value={3}>Contacted</option>
													</select>
												</div>
											</div>
											<div className="col-lg-3 col-md-4 col-sm-6">
												<label>Order</label>
												<div className="form-group">
													<select className="custom-select">
														<option>Newest first</option>
														<option value={1}>Oldest first</option>
														<option value={2}>Low salary first</option>
														<option value={3}>High salary first</option>
														<option value={3}>Sort by name</option>
													</select>
												</div>
											</div>
											<div className="col-lg-2 col-md-4 col-sm-6">
												<label>&nbsp;</label>
												<a href="fake_url" className="btn btn-sm btn-primary btn-block">
													Filter
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="table-responsive">
									<table className="table table-hover table-vcenter table_custom text-nowrap spacing5 border-style mb-0">
										<tbody>
											<tr>
												<td className="w60">
													<div
														className="avatar avatar-pink"
														data-toggle="tooltip"
														data-placement="top"
														data-original-title="Avatar Name"
													>
														<span>GH</span>
													</div>
												</td>
												<td>
													<div className="font-15">Google Inc.</div>
													<span className="text-muted">Full-stack developer</span>
												</td>
												<td>$60 per hour</td>
												<td>
													<span className="tag tag-success">Full-time</span>
												</td>
												<td>
													<span>123 6th St. Melbourne, FL 32904</span>
												</td>
												<td className="text-right">
													Applied on: <strong>04 Jan, 2019</strong>
												</td>
											</tr>
											<tr>
												<td className="w60">
													<img
														className="avatar"
														src="../assets/images/xs/avatar1.jpg"
														alt="fake_url"
													/>
												</td>
												<td>
													<div className="font-15">FaceBook Inc.</div>
													<span className="text-muted">Marketing</span>
												</td>
												<td>$57 per hour</td>
												<td>
													<span className="tag tag-warning">Part-time</span>
												</td>
												<td>
													<span>44 Shirley Ave. IL 60185</span>
												</td>
												<td className="text-right">
													Applied on: <strong>12 Jan, 2019</strong>
												</td>
											</tr>
											<tr>
												<td className="w60">
													<img
														className="avatar"
														src="../assets/images/xs/avatar2.jpg"
														alt="fake_url"
													/>
												</td>
												<td>
													<div className="font-15">FaceBook Inc.</div>
													<span className="text-muted">Full-stack developer</span>
												</td>
												<td>$43 per hour</td>
												<td>
													<span className="tag tag-success">Full-time</span>
												</td>
												<td>
													<span>44 Shirley Ave. IL 60185</span>
												</td>
												<td className="text-right">
													Applied on: <strong>15 Jan, 2019</strong>
												</td>
											</tr>
											<tr>
												<td className="w60">
													<img
														className="avatar"
														src="../assets/images/xs/avatar3.jpg"
														alt="fake_url"
													/>
												</td>
												<td>
													<div className="font-15">FaceBook Inc.</div>
													<span className="text-muted">Web Application Developer</span>
												</td>
												<td>$55 per hour</td>
												<td>
													<span className="tag tag-success">Full-time</span>
												</td>
												<td>
													<span>514 S. Magnolia St. Orlando</span>
												</td>
												<td className="text-right">
													Applied on: <strong>18 Jan, 2019</strong>
												</td>
											</tr>
											<tr>
												<td className="w60">
													<div
														className="avatar avatar-blue"
														data-toggle="tooltip"
														data-placement="top"
														data-original-title="Avatar Name"
													>
														<span>KT</span>
													</div>
												</td>
												<td>
													<div className="font-15">FaceBook Inc.</div>
													<span className="text-muted">Designer</span>
												</td>
												<td>$43 per hour</td>
												<td>
													<span className="tag tag-warning">Part-time</span>
												</td>
												<td>
													<span>44 Shirley Ave. IL 60185</span>
												</td>
												<td className="text-right">
													Applied on: <strong>24 Jan, 2019</strong>
												</td>
											</tr>
											<tr>
												<td className="w60">
													<img
														className="avatar"
														src="../assets/images/xs/avatar5.jpg"
														alt="fake_url"
													/>
												</td>
												<td>
													<div className="font-15">iQuar Inc.</div>
													<span className="text-muted">Sr. SQL Server Developer</span>
												</td>
												<td>$33 per hour</td>
												<td>
													<span className="tag tag-success">Full-time</span>
												</td>
												<td>
													<span>44 Shirley Ave. IL 60185</span>
												</td>
												<td className="text-right">
													Applied on: <strong>05 Feb, 2019</strong>
												</td>
											</tr>
											<tr>
												<td className="w60">
													<img
														className="avatar"
														src="../assets/images/xs/avatar6.jpg"
														alt="fake_url"
													/>
												</td>
												<td>
													<div className="font-15">Linkdin Inc.</div>
													<span className="text-muted">Full-stack developer</span>
												</td>
												<td>$39 per hour</td>
												<td>
													<span className="tag tag-success">Full-time</span>
												</td>
												<td>
													<span>44 Shirley Ave. IL 60185</span>
												</td>
												<td className="text-right">
													Applied on: <strong>11 March, 2019</strong>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<ul className="pagination mt-2">
									<li className="page-item">
										<a className="page-link" href="fake_url;">
											Previous
										</a>
									</li>
									<li className="page-item active">
										<a className="page-link" href="fake_url;">
											1
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="fake_url;">
											2
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="fake_url;">
											3
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="fake_url;">
											Next
										</a>
									</li>
								</ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(Applicants);