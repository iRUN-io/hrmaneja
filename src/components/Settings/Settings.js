/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getUser } from '../../config/common.js';
import { totalDepartments, totalEmployees, totalLeaves, totalUsers } from '../../services/setting.js';

const Settings = () => {
	const [company, setCompany] = useState({});

	const id = window.location.pathname.split('/')[3];

	const history = useHistory();

	useEffect(() => {
		async function fetchData() {
			// get user
			const userData = await getUser(id);
			const company_id = userData.company_id;
			const totalDepartmentsResponse = await totalDepartments(company_id);
			const totalUsersResponse = await totalUsers(company_id);
			const totalEmployeesResponse = await totalEmployees(company_id);
			const totalLeavesResponse = await totalLeaves(company_id);
			if (totalDepartmentsResponse && totalUsersResponse && totalEmployeesResponse && totalLeavesResponse) {
			setCompany({
				totalDepartments: totalDepartmentsResponse.totalDepartments,
				totalUsers: totalUsersResponse.totalUsers,
				totalEmployees: totalEmployeesResponse.totalEmployees,
				totalLeaves: totalLeavesResponse.totalLeaves,
			});
			}
		}
		fetchData();
	}, [id]);

	
	return (
		<>
			<div>
				<div className={`section-body mt-3`}  style={{marginBottom: '50px' }}>
					<div className="container-fluid">
					<div className="d-flex justify-content-between align-items-center">
							<ul className="nav nav-tabs page-header-tab">
								<li className="nav-item">

									<Link onClick={() => history.goBack()} className="nav-link active">
										<i className="fa fa-arrow-left"></i>
									</Link>
								</li>
							</ul>

						</div>
						<div className="row clearfix">
							<div className="col-6 col-md-4 col-xl-3">
								<div className="card">
									<div className="card-body ribbon">
										<div className="ribbon-box orange">{company.totalUsers}</div>
										<Link to="/hr-users" className="my_sort_cut text-muted">
											<i className="icon-users" />
											<span>Users</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-3">
								<div className="card">
									<div className="card-body ribbon">
									<div className="ribbon-box orange">{company.totalDepartments}</div>
										<Link to="/hr-departments" className="my_sort_cut text-muted">
											<i className="icon-like" />
											<span>Departments</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-3">
								<div className="card">
									<div className="card-body ribbon">
									<div className="ribbon-box orange">{company.totalLeaves}</div>
										<Link to="/hr-leaves" className="my_sort_cut text-muted">
											<i className="icon-calendar" />
											<span>Leaves</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-3">
								<div className="card">
									<div className="card-body ribbon">
									<div className="ribbon-box orange">{company.totalEmployees}</div>
										<Link to="/hr-employees" className="my_sort_cut text-muted">
											<i className="icon-users" />
											<span>Employees</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-3">
								<div className="card">
									<div className="card-body ribbon">
									{/* <div className="ribbon-box orange">0</div>  */}
										<Link to="/hr-report" className="my_sort_cut text-muted">
											<i className="icon-graph" />
											<span>Reports</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-3">
								<div className="card">
									<div className="card-body ribbon">
									{/* <div className="ribbon-box orange">0</div>  */}
										<Link to="/hr-activities" className="my_sort_cut text-muted">
											<i className="fa fa-user-secret" />
											<span>Log Trail</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-6 col-md-4 col-xl-3 disabled-card">
								<div className="card">
									<div className="card-body ribbon">
									<div className="ribbon-box green">0</div> 
										<Link to="#" className="my_sort_cut text-muted">
											<i className="fa fa-folder-open-o	" />
											<span>Documents</span>
										</Link>
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
export default Settings;
