import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCompanyData, getUser } from "../../../config/common";
import { totalDepartments, totalEmployees, totalLeaves, totalRequisition, totalUsers } from '../../../services/setting';
import ComingSoon from '../../common/comingSoon';
import FeatureNotAvailable from '../../common/featureDisabled';
import Loader from '../../common/loader';
const Billing = () => {
  		const [company, setCompany] = useState([]);
		const user = getUser();
		const [featureEnabled, setFeatureEnabled] = useState(true);
		const [loading, setLoading] = useState(false);
		const isAdmin = user?.role === "HR Manager";
		const comingSoon = false;
		// useEffect(() => {
		// 	async function fetchData() {
		// 		setLoading(true);
		// 		const company_id = user.company_id;
		// 		const companyData = await getCompanyData();
        // 		// companyData.settings?.features['billing'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
		// 		const totalDepartmentsResponse = await totalDepartments(company_id);
		// 		const totalUsersResponse = await totalUsers(company_id);
		// 		const totalEmployeesResponse = await totalEmployees(company_id);
		// 		const totalLeavesResponse = await totalLeaves(company_id);
		// 		const totalRequisitionsResponse = await totalRequisition(company_id);
		// 		if (totalDepartmentsResponse && totalUsersResponse && totalEmployeesResponse && totalLeavesResponse) {
		// 		setCompany({
		// 			totalDepartments: totalDepartmentsResponse.totalDepartments,
		// 			totalUsers: totalUsersResponse.totalUsers,
		// 			totalEmployees: totalEmployeesResponse.totalEmployees,
		// 			totalLeaves: totalLeavesResponse.totalLeaves,
		// 			totalRequisitions: totalRequisitionsResponse.totalRequisitions,
		// 		});
		// 		}
		// 		setLoading(false);
		// 	}
		// 	if(isAdmin){
		// 	fetchData();
		// 	}
		// }, [isAdmin, user.company_id]);
		
		if (loading ) {
			return <Loader />
		}

		if (!featureEnabled) {
		return <FeatureNotAvailable />
		}

		if(comingSoon){
			return <ComingSoon />
		}
	
		return (
			<>
				<div>
					<div className={`section-body  mt-3`}>
						{isAdmin && (
							<>
								<div className="container-fluid" style={{ marginTop: '20px' }}>
									<div className="row clearfix">
										<div className="col-lg-12">
											<div className={`mb-4`}>
												<h6>
													Billing Details{' '}
												</h6>
												<small>Have visibility of your billing information</small>
											</div>
										</div>
									</div>
									<div className="row clearfix">
										<div className="col-6 col-md-4 col-xl-6">
												<div className="card  more-cards card-blue">
													<div className="card-body">
														<div className='card-icon card-icon-white' style={{float: 'right'}}>
															<h5 className="mb-0 font-weight-bold" style={{color: '#4356A5'}}><i className='fe fe-star'></i></h5>
														</div>
														<p>Current subscription plan</p>
														<h3>$25.00</h3>
														<h5>Company Starter</h5>
                                                        <div className='upgrade-button'>
                                                        <button className="btn btn-default disabled btn-sm">Upgrade</button>
                                                        </div>
													</div>
												</div>
										</div>
										<div className="col-6 col-md-4 col-xl-6">
												<div className="card  more-cards card-white">
													<div className="card-body">
														<div className='card-icon card-icon-yellow' style={{float: 'right'}}>
															<h5 className="mb-0 font-weight-bold" style={{color: 'gold'}}><i className='fe fe-credit-card'></i></h5>
														</div>
														<p>Next Payment</p>
														<h3>$25.00</h3>
														<h5>on October 15, 2022</h5>
                                                        <div className='upgrade-button'>
                                                        <button className="btn btn-dark disabled btn-sm">Manage Payments</button>
                                                        </div>
													</div>
												</div>
										</div>
                                        <div className='card'>
                                        <div className='card-header'>Payment history</div>
										<div className="card-body">
										<div className="table-responsive">
											<table className="table table-hover table-striped text-nowrap table-vcenter mb-0">
												<thead>
													<tr>
														<th>Amount</th>
														<th>Plan</th>
														<th>Date</th>
														<th>Paid By</th>
														<th>Status</th>
														<th>Action</th>
													</tr>
												</thead>
												<tbody>

													<tr>
														<td>$2,500</td>
														<td>Company Starter</td>
														<td>Nov 2022</td>
														<td>Godfred Archer</td>
														<td>Done</td>
                                                        <td><button className="btn btn-secondary btn-sm">Generate Receipt</button></td>
													</tr>
													<tr>
														<td>$2,500</td>
														<td>Company Starter</td>
														<td>Nov 2022</td>
														<td>Godfred Archer</td>
														<td>Done</td>
                                                        <td><button className="btn btn-secondary btn-sm">Generate Receipt</button></td>

													</tr>
												</tbody>
											</table>
										</div>
									</div>
                                    </div>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</>
		);
	}

export default Billing;