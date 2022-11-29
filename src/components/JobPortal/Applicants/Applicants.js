import React from 'react';
import { connect } from 'react-redux';

const Applicants = () => {
		return (
			<>
				<div className={`section-body  mt-3`}>
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
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

			</>
		);
	}

const mapStateToProps = state => ({
	fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Applicants);