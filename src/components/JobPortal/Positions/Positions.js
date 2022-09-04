import React, { Component } from 'react';
import { connect } from 'react-redux';

class Positions extends Component {

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
											<div className="col-lg-2 col-md-4 col-sm-6">
												<label>Search</label>
												<div className="input-group">
													<input
														type="text"
														className="form-control"
														placeholder="Search..."
													/>
												</div>
											</div>
											<div className="col-lg-2 col-md-4 col-sm-6">
												<label>TYPE</label>
												<div className="multiselect_div">
													<select className="custom-select">
														<option>None Selected</option>
														<option value={1}>Part Time</option>
														<option value={2}>Full Time</option>
														<option value={3}>All Type</option>
													</select>

												</div>
											</div>
											<div className="col-lg-2 col-md-4 col-sm-6">
												<label>Category</label>
												<div className="form-group">
													<select className="custom-select">
														<option>Designer</option>
														<option value={1}>Project Manager</option>
														<option value={2}>Senior Developer</option>
														<option value={3}>Front-end Developer</option>
													</select>
												</div>
											</div>
											<div className="col-lg-2 col-md-4 col-sm-6">
												<label>Salary</label>
												<div className="input-group">
													<input
														type="text"
														className="form-control"
														placeholder="Min. Salary"
													/>
												</div>
											</div>
											<div className="col-lg-2 col-md-4 col-sm-6">
												<label>&nbsp;</label>
												<div className="input-group">
													<input
														type="text"
														className="form-control"
														placeholder="Max. Salary"
													/>
												</div>
											</div>
											<div className="col-lg-2 col-md-4 col-sm-6">
												<label>&nbsp;</label>
												<a href="fake_url;" className="btn btn-sm btn-primary btn-block">
													Filter
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="table-responsive">
									<table className="table table-hover table-vcenter table_custom text-nowrap spacing5 mb-0">
										<tbody>
											<tr>
												<td className="w60">
													<span
														className="avatar avatar-orange"
														data-toggle="tooltip"
														data-placement="top"
														data-original-title="Avatar Name"
													>
														GI
													</span>
												</td>
												<td>
													<div className="font-15">Google Inc.</div>
													<span className="text-muted">Full-stack developer</span>
												</td>
												<td>
													<span className="tag tag-success">Full-time</span>
												</td>
												<td>
													Applicants: <strong>0</strong>
												</td>
												<td>
													<span>44 Shirley Ave. West Chicago, IL 60185</span>
												</td>
												<td>
													<span className="tag tag-warning">Pending approval</span>
												</td>
											</tr>
											<tr>
												<td className="w60">
													<span
														className="avatar avatar-blue"
														data-toggle="tooltip"
														data-placement="top"
														data-original-title="Avatar Name"
													>
														FB
													</span>
												</td>
												<td>
													<div className="font-15">Facebook Inc.</div>
													<span className="text-muted">Designer</span>
												</td>
												<td>
													<span className="tag tag-success">Full-time</span>
												</td>
												<td>
													Applicants: <strong>45</strong>
												</td>
												<td>
													<span>123 6th St. Melbourne, FL 32904</span>
												</td>
												<td>
													<span className="tag tag-warning">12 days to expire</span>
												</td>
											</tr>
											<tr>
												<td className="w60">
													<span
														className="avatar avatar-green"
														data-toggle="tooltip"
														data-placement="top"
														data-original-title="Avatar Name"
													>
														TF
													</span>
												</td>
												<td>
													<div className="font-15">Themeforest Inc.</div>
													<span className="text-muted">Web Application Developer</span>
												</td>
												<td>
													<span className="tag tag-success">Freelance</span>
												</td>
												<td>
													Applicants: <strong>50</strong>
												</td>
												<td>
													<span>44 Shirley Ave. West Chicago, IL 60185</span>
												</td>
												<td>
													<span className="tag tag-warning">12 days to expire</span>
												</td>
											</tr>
											<tr>
												<td className="w60">
													<span
														className="avatar avatar-cyan"
														data-toggle="tooltip"
														data-placement="top"
														data-original-title="Avatar Name"
													>
														LD
													</span>
												</td>
												<td>
													<div className="font-15">Linkdin Inc.</div>
													<span className="text-muted">Marketing</span>
												</td>
												<td>
													<span className="tag tag-success">Freelance</span>
												</td>
												<td>
													Applicants: <strong>17</strong>
												</td>
												<td>
													<span>514 S. Magnolia St. Orlando, FL 32806</span>
												</td>
												<td>
													<span className="tag tag-warning">24 days to expire</span>
												</td>
											</tr>
											<tr>
												<td className="w60">
													<span
														className="avatar avatar-azure"
														data-toggle="tooltip"
														data-placement="top"
														data-original-title="Avatar Name"
													>
														MS
													</span>
												</td>
												<td>
													<div className="font-15">Microsoft Inc.</div>
													<span className="text-muted">Sr. SQL Server Developer</span>
												</td>
												<td>
													<span className="tag tag-success">Part-time</span>
												</td>
												<td>
													Applicants: <strong>33</strong>
												</td>
												<td>
													<span>70 Bowman St. South Windsor</span>
												</td>
												<td>
													<span className="tag tag-warning">29 days to expire</span>
												</td>
											</tr>
											<tr>
												<td className="w60">
													<span
														className="avatar avatar-blue"
														data-toggle="tooltip"
														data-placement="top"
														data-original-title="Avatar Name"
													>
														GI
													</span>
												</td>
												<td>
													<div className="font-15">Facebook Inc.</div>
													<span className="text-muted">Designer</span>
												</td>
												<td>
													<span className="tag tag-success">Full-time</span>
												</td>
												<td>
													Applicants: <strong>45</strong>
												</td>
												<td>
													<span>123 6th St. Melbourne, FL 32904</span>
												</td>
												<td>
													<span className="tag tag-warning">12 days to expire</span>
												</td>
											</tr>
											<tr>
												<td className="w60">
													<span
														className="avatar avatar-green"
														data-toggle="tooltip"
														data-placement="top"
														data-original-title="Avatar Name"
													>
														GI
													</span>
												</td>
												<td>
													<div className="font-15">Themeforest Inc.</div>
													<span className="text-muted">Web Application Developer</span>
												</td>
												<td>
													<span className="tag tag-success">Freelance</span>
												</td>
												<td>
													Applicants: <strong>50</strong>
												</td>
												<td>
													<span>44 Shirley Ave. West Chicago, IL 60185</span>
												</td>
												<td>
													<span className="tag tag-warning">12 days to expire</span>
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
export default connect(mapStateToProps, mapDispatchToProps)(Positions);