/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getCompanyData, getUser } from '../../config/common.js';
import { totalDepartments, totalEmployees, totalJobs, totalLeaves, totalRequisition, totalUsers } from '../../services/setting.js';
import Loader from '../common/loader.js';

const Settings = () => {

	const [company, setCompany] = useState({});

	const [features, setFeatures] = useState([]);

	const [loading, setLoading] = useState(false);

	const id = window.location.pathname.split('/')[3];

	const history = useHistory();
	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const userData = await getUser(id);
			const isAdmin = userData.role === "HR Manager";

			if(!isAdmin){window.location.href = '/'}
			const companyData = await getCompanyData();
			const company_id = userData.company_id;
			const totalDepartmentsResponse = await totalDepartments(company_id);
			const totalUsersResponse = await totalUsers(company_id);
			const totalEmployeesResponse = await totalEmployees(company_id);
			const totalLeavesResponse = await totalLeaves(company_id);
			const totalRequisitionsResponse = await totalRequisition(company_id);
			const totalJobsResponse = await totalJobs(company_id);
			if (totalDepartmentsResponse && totalUsersResponse && totalEmployeesResponse && totalLeavesResponse) {
				setCompany({
					name: companyData.name,
					totalDepartments: totalDepartmentsResponse.totalDepartments,
					totalUsers: totalUsersResponse.totalUsers,
					totalEmployees: totalEmployeesResponse.totalEmployees,
					totalLeaves: totalLeavesResponse.totalLeaves,
					totalRequisitions: totalRequisitionsResponse.totalRequisitions,
					totalJobs: totalJobsResponse.totalJobs
				});
				setFeatures(companyData.settings?.features)
				setLoading(false);
			}
		}
		fetchData();
	}, [id]);

	if (loading ) {
		return <Loader />
	}

	return (
		<>
			<div>
				<div className={`section-body mt-3`} style={{ marginBottom: '50px' }}>
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center">
							<ul className="nav nav-tabs page-header-tab">
								<li className="nav-item">
									<Link to={'/'} className="nav-link active">
										<i className="fa fa-arrow-left"></i>
									</Link>
								</li>
							</ul>
							<div className="header-action">
							<span className="nav-item badge badge-primary">{company.name} Company Settings</span>
                            </div>

						</div>

								<div className="row clearfix">
									<div className={`col-6 col-md-4 col-xl-3 ${features?.user ? '' : 'disabled-card'}`}>
										<div className="card feature-card">
											<div className="card-body ribbon">
												<div className="ribbon-box orange">{features?.user && company.totalUsers}</div>
												<Link to={`${features?.user ? '/admin/hr-users' : '#'}`} className="my_sort_cut text-muted">
													<i className="icon-users" />
													<span>Users</span>
													{!features?.user && <button onClick={() => history.push('/support')} type="button" className="btn btn-success btn-lg">
														Activate
													</button>}
												</Link>
											</div>
										</div>
									</div>
									<div className={`col-6 col-md-4 col-xl-3 ${features?.department ? '' : 'disabled-card'}`}>
										<div className="card feature-card">
											<div className="card-body ribbon">
												<div className="ribbon-box orange">{features?.department && company.totalDepartments}</div>
												<Link to={`${features?.user ? '/admin/hr-departments' : '#'}`} className="my_sort_cut text-muted">
													<i className="icon-like" />
													<span>Departments</span>
													{!features?.department && <button onClick={() => history.push('/support')} type="button" className="btn btn-success btn-lg">
														Activate
													</button>}
												</Link>
											</div>
										</div>
									</div><div className={`col-6 col-md-4 col-xl-3 ${features?.leave ? '' : 'disabled-card'}`}>
										<div className="card feature-card">
											<div className="card-body ribbon">
												<div className="ribbon-box orange">{features?.leave && company.totalLeaves}</div>
												<Link to={`${features?.leave ? '/admin/hr-leaves' : '#'}`} className="my_sort_cut text-muted">
													<i className="icon-calendar" />
													<span>Leaves</span>
													{!features?.leave && <button onClick={() => history.push('/support')} type="button" className="btn btn-success btn-lg">
														Activate
													</button>}
												</Link>
											</div>
										</div>
									</div><div className={`col-6 col-md-4 col-xl-3 ${features?.employee ? '' : 'disabled-card'}`}>
										<div className="card feature-card">
											<div className="card-body ribbon">
												<div className="ribbon-box orange">{features?.employee && company.totalEmployees}</div>
												<Link to={`${features?.employee ? '/admin/hr-employees' : '#'}`} className="my_sort_cut text-muted">
													<i className="icon-users" />
													<span>Employees</span>
													{!features?.employee && <button onClick={() => history.push('/support')} type="button" className="btn btn-success btn-lg">
														Activate
													</button>}
												</Link>
											</div>
										</div>
									</div><div className={`col-6 col-md-4 col-xl-3 ${features?.reports ? '' : 'disabled-card'}`}>
										<div className="card feature-card">
											<div className="card-body ribbon">
												{/* <div className="ribbon-box orange">0</div>  */}
												<Link to={`${features?.reports ? '/admin/hr-report' : '#'}`} className="my_sort_cut text-muted">
													<i className="icon-graph" />
													<span>Reports</span>
													{!features?.reports && <button onClick={() => history.push('/support')} type="button" className="btn btn-success btn-lg">
														Activate
													</button>}
												</Link>
											</div>
										</div>
									</div><div className={`col-6 col-md-4 col-xl-3 ${features?.activity ? '' : 'disabled-card'}`}>
										<div className="card feature-card">
											<div className="card-body ribbon">
												{/* <div className="ribbon-box orange">0</div>  */}
												<Link to={`${features?.activity ? '/admin/hr-activities' : '#'}`} className="my_sort_cut text-muted">
													<i className="fa fa-user-secret" />
													<span>Log Trail</span>
													{!features?.activity && <button onClick={() => history.push('/support')} type="button" className="btn btn-success btn-lg">
														Activate
													</button>}
												</Link>
											</div>
										</div>
									</div><div className={`col-6 col-md-4 col-xl-3 ${features?.expenseManagement ? '' : 'disabled-card'}`}>
										<div className="card feature-card">
											<div className="card-body ribbon">
												<div className="ribbon-box green">0</div>
												<Link to={`${features?.activity ? '/admin/hr-documents' :"#"}`} className="my_sort_cut text-muted">
													<i className="fa fa-folder-open-o	" />
													<span>Documents</span>
													{!features?.leave && <button onClick={()=> history.push('/support')} type="button" className="btn btn-success btn-lg">
													Activate
												</button>}
												</Link>
											</div>
										</div>
									</div>
									<div className={`col-6 col-md-4 col-xl-3 ${features?.expenseManagement ? '' : 'disabled-card'}`}>
										<div className="card feature-card">
											<div className="card-body ribbon">
												<div className="ribbon-box green">{features?.expenseManagement && company.totalRequisitions}</div>
												<Link to={`${features?.expenseManagement ? '/admin/hr-requisition' : '#'}`} className="my_sort_cut text-muted">
													<i className="fa fa-money" />
													<span>Requisition</span>
													{!features?.expenseManagement && <button onClick={() => history.push('/support')} type="button" className="btn btn-success btn-lg">
														Activate
													</button>}
												</Link>
											</div>
										</div>
									</div>
									<div className={`col-6 col-md-4 col-xl-3 ${features?.jobManagement ? '' : 'disabled-card'}`}>
										<div className="card feature-card">
											<div className="card-body ribbon">
												<div className="ribbon-box green">{features?.jobManagement && company.totalJobs}</div>
												<Link to={`${features?.jobManagement ? '/jobportal-positions' : '#'}`} className="my_sort_cut text-muted">
													<i className="fa fa-suitcase" />
													<span>Job Portal</span>
													{!features?.jobManagement && <button onClick={() => history.push('/support')} type="button" className="btn btn-success btn-lg">
														Activate
													</button>}
												</Link>
											</div>
										</div>
									</div>
									<div className={`col-6 col-md-4 col-xl-3`}>
										<div className="card feature-card">
											<div className="card-body">
												<Link to="/admin/hr-features" className="my_sort_cut text-muted">
													<i className="fe fe-grid" />
													<span>Features</span>
												</Link>
											</div>
										</div>
									</div>
									{/* <div className={`col-6 col-md-4 col-xl-3`}>
										<div className="card feature-card">
											<div className="card-body">
												<Link to="/admin/hr-wallet" className="my_sort_cut text-muted">
													<i className="fa fa-bank" />
													<span>Wallet</span>
												</Link>
											</div>
										</div>
									</div> */}
									<div className={`col-6 col-md-4 col-xl-3 ${features?.payroll ? '' : 'disabled-card'}`}>
										<div className="card feature-card">
											<div className="card-body">
												<Link to={`${features?.payroll ? '/admin/hr-payroll' : '#'}`} className="my_sort_cut text-muted">
													<i className="fa fa-credit-card" />
													<span>Payroll</span>
													{!features?.payroll && <button onClick={() => history.push('/support')} type="button" className="btn btn-success btn-lg">
														Activate
													</button>}
												</Link>
											</div>
										</div>
									</div>
									<div className={`col-6 col-md-4 col-xl-3 ${features?.airtime ? '' : 'disabled-card'}`}>
										{/* <div className="card feature-card">
											<div className="card-body">
												<Link to={`${features?.airtime ? '/admin/hr-airtime' : '#'}`} className="my_sort_cut text-muted">
													<i className="fa fa-phone-square" />
													<span>Airtime Purchase <br></br>(<small>All Nigerian Networks</small>)</span>
													{!features?.payroll && <button onClick={() => history.push('/support')} type="button" className="btn btn-success btn-lg">
														Activate
													</button>}
												</Link>
											</div>
										</div> */}
									</div>


								</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Settings;
