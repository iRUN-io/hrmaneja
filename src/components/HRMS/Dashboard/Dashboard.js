import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from "../../../config/common";
import { totalDepartments, totalEmployees, totalLeaves, totalRequisition, totalUsers } from '../../../services/setting';
const Dashboard = () => {
  		const [company, setCompany] = useState([]);
		const user = getUser();

		const isAdmin = user?.role === "HR Manager";

		useEffect(() => {
			async function fetchData() {
				const company_id = user.company_id;
				const totalDepartmentsResponse = await totalDepartments(company_id);
				const totalUsersResponse = await totalUsers(company_id);
				const totalEmployeesResponse = await totalEmployees(company_id);
				const totalLeavesResponse = await totalLeaves(company_id);
				const totalRequisitionsResponse = await totalRequisition(company_id);
				if (totalDepartmentsResponse && totalUsersResponse && totalEmployeesResponse && totalLeavesResponse) {
				setCompany({
					totalDepartments: totalDepartmentsResponse.totalDepartments,
					totalUsers: totalUsersResponse.totalUsers,
					totalEmployees: totalEmployeesResponse.totalEmployees,
					totalLeaves: totalLeavesResponse.totalLeaves,
					totalRequisitions: totalRequisitionsResponse.totalRequisitions,
				});
				}
			}
			if(isAdmin){
			fetchData();
			}
		}, [isAdmin, user.company_id]);

		return (
			<>
				<div>
					<div className={`section-body  mt-3`}>
						<div className="container-fluid">
							<div className="row clearfix">
								<div className="col-lg-12">
									<div className={`mb-4`}>
										<h6>
											Quick Links{' '}
										</h6>
										<small>This shortcuts will help you access the pages you frequently go to.</small>

									</div>
								</div>
							</div>
							<div className="row clearfix">
								<div className="col-6 col-md-4 col-xl-3 ">
									<Link to="/my-leaves" className="text-muted text-white text-bold">
										<div className="card card-gold">
											<div className="card-body">
												<span>Take a Leave</span>
												<i style={{ float: 'right' }} className="fa fa-angle-double-right" />
											</div>
										</div>
									</Link>
								</div>
								<div className="col-6 col-md-4 col-xl-3 ">
									<Link to="/my-requisition" className="text-muted text-white text-bold">
										<div className="card card-blue">
											<div className="card-body">
												<span>Requisition</span>
												<i style={{ float: 'right' }} className="fa fa-angle-double-right" />
											</div>
										</div>
									</Link>
								</div>
								<div className="col-6 col-md-4 col-xl-3 ">
									<Link to="/hr-holidays" className="text-muted text-white text-bold">
										<div className="card card-purple">
											<div className="card-body">
												<span>Holidays</span>
												<i style={{ float: 'right' }} className="fa fa-angle-double-right" />
											</div>
										</div>
									</Link>
								</div>
								{isAdmin && (
									<div className="col-6 col-md-4 col-xl-3 ">
										<Link to="/hr-activities" className="text-muted text-white text-bold">
											<div className="card card-green">
												<div className="card-body">
													<span>Log Trail</span>
													<i style={{ float: 'right' }} className="fa fa-angle-double-right" />
												</div>
											</div>
										</Link>
									</div>
								)}
							</div>
						</div>
						{isAdmin && (
							<>
								<div className="container-fluid" style={{ marginTop: '20px' }}>
									<div className="row clearfix">
										<div className="col-lg-12">
											<div className={`mb-4`}>
												<h6>
													Data Snapshot{' '}
												</h6>
												<small>This snapshot will help youhave visibility of company data.</small>
											</div>
										</div>
									</div>
									<div className="row clearfix">
										<div className="col-6 col-md-4 col-xl-6 ">
											<Link to="/hr-users" className="text-muted  text-bold">
												<div className="card">
													<div className="card-body">
														<span>Total Users</span>
														<h3 className="mb-0 font-weight-bold">{company.totalUsers}</h3>

													</div>
												</div>
											</Link>
										</div>
										<div className="col-6 col-md-4 col-xl-6 ">
											<Link to="/hr-requisition" className="text-muted  text-bold">
												<div className="card">
													<div className="card-body">
														<span>Total Requisition</span>
														<h3 className="mb-0 font-weight-bold">{company.totalRequisitions}</h3>

													</div>
												</div>
											</Link>
										</div>
									</div>
								</div>
								<div className="container-fluid" style={{ marginTop: '20px' }}>
									<div className="row clearfix">
										<div className="col-lg-12">
											<div className={`mb-4`}>
												<h6>
													More with HR Maneja{' '}
												</h6>
												<small>Explore the latest released features, integrations, support articles to get the most out of your HR Manager</small>
											</div>
										</div>
									</div>
									<div className="row clearfix">
										<div className="col-6 col-md-4 col-xl-6">
											<Link to="/hr-features" className="text-muted text-bold">
												<div className="card  more-cards">
													<div className="card-body">
														<div className='card-icon card-icon-gold'>
															<h5 className="mb-0 font-weight-bold "><i className='fe fe-grid'></i></h5>
														</div>
														<h6>Features</h6>
														<small>Enable Features like Payroll, Account Management, Expense Management etc..</small>
													</div>
												</div>
											</Link>
										</div>
										<div className="col-6 col-md-4 col-xl-6">
											<Link to="/" className="text-muted text-bold">
												<div className="card  more-cards disabled-card">
													<div className="card-body">
														<div className='card-icon card-icon-purple'>
															<h5 className="mb-0 font-weight-bold "><i className='fe fe-cpu'></i></h5>
														</div>
														<h6>Integrations</h6>
														<small>Manage your integrations like Flutterwave for payroll.</small>

													</div>
												</div>
											</Link>
										</div>
										<div className="col-6 col-md-4 col-xl-6">
											<Link to="/support" className="text-muted text-bold">
												<div className="card  more-cards">
													<div className="card-body">
														<div className='card-icon card-icon-blue'>
															<h5 className="mb-0 font-weight-bold "><i className='fe fe-phone-call'></i></h5>
														</div>
														<h6>Contact Us</h6>
														<small>Manage your integrations like Flutterwave for payroll.</small>

													</div>
												</div>
											</Link>
										</div>
										<div className="col-6 col-md-4 col-xl-6">
											<Link to="/" className="text-muted text-bold">
												<div className="card  more-cards">
													<div className="card-body">
														<div className='card-icon card-icon-green'>
															<h5 className="mb-0 font-weight-bold "><i className='fe fe-alert-circle'></i></h5>
														</div>
														<h6>Support Center</h6>
														<small>Access Helpful tips and tutorials on how to manage your business using HrManeja</small>
													</div>
												</div>
											</Link>
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

export default Dashboard;