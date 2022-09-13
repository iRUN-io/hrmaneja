/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { getAllEmployees } from "../../../services/employee";
// import { getAllUsers } from "../../../services/user";
import { formatMoney, getCompanyData, getUser } from "../../../config/common";
import CountUp from 'react-countup';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ComingSoon from '../../common/comingSoon';
import { getAllDepartments } from '../../../services/department';
import { Link, useHistory } from 'react-router-dom';
import FeatureNotAvailable from '../../common/featureDisabled';
import { createPayroll } from '../../../services/payroll';
import { toast } from 'material-react-toastify';
import { createActivity } from '../../../services/activities';
import { sendEmail } from '../../../services/mail/sendMail';
import { emailCase } from '../../../enums/emailCase';
import { getAllBanks } from '../../../services/flutterwave';


function Payroll(props) {
	const { fixNavbar } = props;
	const [employees, setEmployee] = useState([]);
	const [featureEnabled, setFeatureEnabled] = useState(false); // 
	const [user, setUser] = useState({});
	const [searchEmployee, setSearchEmployee] = useState('');
	const [departments, setDepartments] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [EmployeesPerPage] = useState(10);
	const comingSoon = false;
	const history = useHistory();

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const user = await getUser();
			if (user) {
				// const userId = user.id;
				// const userResponse = await getAllUsers(userId);
				const companyData = await getCompanyData();
				const banks = await getAllBanks();
				companyData.settings?.features['payroll'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
				const response = await getAllEmployees(user.company_id);
				const allDepartments = await getAllDepartments(user.company_id);
				setDepartments(allDepartments);
				setEmployee(response);
				setLoading(false);
				setUser(user);
			}
		}
		fetchData();

	}, []);

	const getPayrollByDepartment = (department) => {
		const total = employees.filter(req => req.department === department);
		const totalAmount = total.reduce((acc, curr) => {
			return acc + Number(curr.salary);
		}, 0);
		return totalAmount;
	}

	const getEmployeeDepartment = (id) => {
		const department = departments.find(req => req.id === id);
		return department.name;
	}


	const employeePayslip = (employee, id) => {
		history.push({
			pathname: `/payslip/${id}`,
			state: { employee: employee }
		});

	};



	const runPayroll = async () => {
		try {
			setLoading(true); // godfred:archer
			const allDepartments = departments.map(department => {
				const total = getPayrollByDepartment(department.id);
				return { department: department.name, total: total };
			}).sort((a, b) => b.total - a.total);

			const allEmployees = employees.map(employee => {
				sendEmail(employee.email, employee.name, emailCase.employeePayrollGenerated)
				return {
					name: employee.name,
					department: getEmployeeDepartment(employee.department),
					salary: employee.salary,
					role: employee.role,
					id: employee.id
				};
			}).sort((a, b) => b.total - a.total);

			sendEmail(user.emailAddress, user.name, emailCase.createPayroll);
			const totalSalary = allEmployees.reduce((acc, curr) => {
				return acc + Number(curr.salary);
			}, 0);

			const body = {
				departments: allDepartments,
				employees: allEmployees,
				totalSalary: totalSalary,
				company_id: user.company_id,
				totalDepartments: allDepartments.length,
				totalEmployees: allEmployees.length,
				month: new Date().toLocaleString('default', { month: 'long' }),
				year: new Date().getFullYear()
			};

			const initiateSalary = await createPayroll(body);

			if (initiateSalary.data) {
				const activity = {
					user_id: user.id,
					company_id: user.company_id,
					activity: `${user.name} has created a payroll for the month of ${new Date().toLocaleString('default', { month: 'long' })}`,
					name: 'Create Employee',
					employee_id: user.employee_id,
					activity_name: 'Creation',
					user: user.name,
				};
				const logEmployee = await createActivity(activity);
				if (logEmployee) {
					toast.success('Payroll has been created successfully');
				}
			} else {
				toast.error(initiateSalary.message);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			toast.error(error.message || 'Something went wrong');
		}

	}


	const setSearch = (e) => {
		const { value } = e.target;
		setSearchEmployee(value);
	};

	const getEmployeeBySearchQuery = (
		employees,
		searchQuery,
	) => {
		return employees.filter(employee =>
			employee.name.toLowerCase().includes(searchQuery.toLowerCase())
			|| employee.email.toLowerCase().includes(searchQuery.toLowerCase())
			|| employee.role.toLowerCase().includes(searchQuery.toLowerCase())
			|| employee.salary.toLowerCase().includes(searchQuery.toLowerCase())
		);
	};

	const allEmployeesArray = useMemo(() => {
		let allEmployees = employees;
		if (searchEmployee) {
			allEmployees = getEmployeeBySearchQuery(allEmployees, searchEmployee);
		}

		return allEmployees || [];
	}, [employees, searchEmployee]);


	const indexOfLastEmployees = currentPage * EmployeesPerPage;
	const indexOfFirstEmployees = indexOfLastEmployees - EmployeesPerPage;
	const currentEmployees = allEmployeesArray.slice(indexOfFirstEmployees, indexOfLastEmployees);

	const paginate = pageNumber => setCurrentPage(pageNumber);
	const nextPage = () => setCurrentPage(currentPage + 1);
	const prevPage = () => setCurrentPage(currentPage - 1);

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(allEmployeesArray.length / EmployeesPerPage); i++) {
		pageNumbers.push(i);
	}

	if (!featureEnabled && !loading) {
		return <FeatureNotAvailable />
	}

	return (
		<>
			<div>
				{comingSoon ?
					<ComingSoon />
					:
					<>
						<div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>

						</div>
						<div className="section-body mt-3">
							<div className="container-fluid">
								<div className="d-flex justify-content-between align-items-center">
									<ul className="nav nav-tabs page-header-tab">
										<li className="nav-item">

											<Link to={'/admin/settings'} className="nav-link active">
												<i className="fa fa-arrow-left"></i>
											</Link>
										</li>
									</ul>

								</div>
								<div className="tab-content mt-3">
									<div className="tab-pane fade show active" id="Payroll-Salary" role="tabpanel">
										<div className="row clearfix">
											{departments.map((department, index) => (
												<div key={index} className="col-lg-3 col-md-6">
													<div className="card card-blue">
														<div className="card-body">
															<h6>{department.name.toUpperCase()}</h6>
															<h3 className="pt-3">
																₦<span className="counter"><CountUp end={getPayrollByDepartment(department.id)} /></span>
															</h3>
														</div>
													</div>
												</div>
											))}
										</div>
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Employees</h3>
												<div className="card-options">
													<form>
														<div className="input-group">
															<button style={{ marginRight: '10px' }} type="button" className="btn btn-primary btn-sm" onClick={runPayroll}>{loading ? <i className="fa text-white fa-spinner fa-spin" aria-hidden="true"></i> : 'Run Payroll'}</button>
															<Link to="/hr-past-payroll" style={{ marginRight: '10px' }} type="button" className="btn btn-outline-primary text-primary btn-sm">Payroll Records</Link>
															<input
																type="text"
																className="form-control form-control-sm"
																placeholder="Search employee..."
																value={searchEmployee}
																onChange={setSearch}
																name="s" />
															<span className="input-group-btn ml-2">
																<button className="btn btn-icon" type="submit">
																	<span className="fe fe-search" />
																</button>
															</span>
														</div>
													</form>
												</div>
											</div>
											<div className="card-body">
												<div className="table-responsive">
													{loading ? (
														<Skeleton count={5} height={57} />
													) :
														(
															<table className="table table-hover table-striped table-vcenter text-nowrap">
																<thead>
																	<tr>
																		<th>Employee</th>
																		<th className="w200">Department</th>
																		<th className="w200">Role</th>
																		<th className="w60">Salary</th>
																		<th className="w60">Status</th>
																		<th className="w200">Action</th>
																	</tr>
																</thead>
																<tbody>

																	{currentEmployees.map((employee, index) => (
																		<tr key={index}>
																			<td onClick={() => employeePayslip(employee, employee.id)} style={{ cursor: 'pointer' }}>
																				<div className="d-flex align-items-center">
																					<span
																						className="avatar avatar-pink"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Avatar Name"
																					>
																						{(
																							employee.name[0] + employee.name[1]
																						).toUpperCase()}
																					</span>
																					<div className="ml-3">
																						<a onClick={() => employeePayslip(employee, employee.id)}>{employee.name}</a>
																						<p className="mb-0">{employee.email}</p>
																					</div>
																				</div>
																			</td>
																			<td onClick={() => employeePayslip(employee, employee.id)} style={{ cursor: 'pointer' }}>
																				<div>
																					{getEmployeeDepartment(employee.department)}
																				</div>
																			</td>

																			<td>{employee.role}</td>

																			<td onClick={() => employeePayslip(employee, employee.id)} style={{ cursor: 'pointer' }}>{formatMoney(employee.salary)}</td>
																			<td>
																				<span className="tag tag-secondary ml-0 mr-0">Paid</span>
																			</td>
																			<td>
																				<button
																					type="button"
																					className="btn btn-icon"
																					title="Send Invoice"
																					data-toggle="tooltip"
																					data-placement="top"
																				>
																					<i className="icon-envelope text-info" />
																				</button>
																				<button
																					type="button"
																					onClick={() => employeePayslip(employee, employee.id)}
																					className="btn btn-icon "
																					title="Print"
																					data-toggle="tooltip"
																					data-placement="top"
																				>
																					<i className="icon-printer" />
																				</button>
																				<button
																					type="button"
																					className="btn btn-icon"
																					title="Delete"
																					data-toggle="tooltip"
																					data-placement="top"
																				>
																					<i className="icon-trash text-danger" />
																				</button>
																			</td>
																		</tr>
																	))}
																</tbody>
															</table>
														)}
												</div>
												<div className=''>
													<nav aria-label="Page navigation example">
														<ul className="pagination justify-content-end">
															<li className="page-item" style={{ marginRight: '5px' }}>
																<button className="btn btn-sm btn-primary" onClick={prevPage} disabled={currentPage === 1 ? true : false}><i className="fa fa-angle-double-left"></i></button>
															</li>
															{pageNumbers.map(number => (
																<li key={number} className="page-item" style={{ marginRight: '5px' }}>
																	<button onClick={() => paginate(number)} className={currentPage === number ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline-primary'}>{number}</button>
																</li>
															))}
															<li className="page-item">
																<button className="btn btn-sm btn-primary" onClick={nextPage} disabled={currentPage === pageNumbers.length ? true : false}><i className="fa fa-angle-double-right"></i></button>
															</li>
														</ul>
													</nav>
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				}

			</div>
		</>
	);
}
const mapStateToProps = state => ({
	fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Payroll);