/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { getAllEmployees } from "../../../services/employee";
// import { getAllUsers } from "../../../services/user";
import { formatMoney, getCompanyData, getUser } from "../../../config/common";
// import CountUp from 'react-countup';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ComingSoon from '../../common/comingSoon';
// import { getAllDepartments } from '../../../services/department';
import { Link, useHistory } from 'react-router-dom';
import FeatureNotAvailable from '../../common/featureDisabled';
import {  getAllPayrolls } from '../../../services/payroll';
// import { toast } from 'material-react-toastify';
// import { createActivity } from '../../../services/activities';
// import { sendEmail } from '../../../services/mail/sendMail';
// import { emailCase } from '../../../enums/emailCase';
import EmptyState from '../../EmptyState';


function PastPayroll(props) {
	const { fixNavbar } = props;
	// const [employees, setEmployees] = useState([]);
	const [featureEnabled, setFeatureEnabled] = useState(false); // 
	const [user, setUser] = useState({});
	const [payrolls, setPayrolls] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
    const [PayrollPerPage] = useState(10);
	const comingSoon = true;
    const history = useHistory();

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const user = await getUser();
			if (user) {
				// const userId = user.id;
				// const userResponse = await getAllUsers(userId);
				const companyData = await getCompanyData();
        		companyData.settings?.features['payroll'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
				const response = await getAllPayrolls(user.company_id);
				setPayrolls(response);
				setLoading(false);
				setUser(user);
			}
		}
		fetchData();
		
	}, []);


	const indexOfLastPayroll = currentPage * PayrollPerPage;
    const indexOfFirstPayroll = indexOfLastPayroll - PayrollPerPage;
    const currentPayroll = payrolls.slice(indexOfFirstPayroll, indexOfLastPayroll);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(payrolls.length / PayrollPerPage); i++) {
        pageNumbers.push(i);
    }

	const individualPayroll = (payroll, id) => {
        history.push({
            pathname: `/single-payroll/${id}`,
            state: { payroll: payroll }
        });

    };

	if (!featureEnabled && !loading ) {
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

                                            <Link onClick={() => history.goBack()} className="nav-link active">
                                                <i className="fa fa-arrow-left"></i>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
								<div className="tab-content mt-3">
									<div className="tab-pane fade show active" id="Payroll-Salary" role="tabpanel">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Payroll</h3>
												<div className="card-options">
													<form>
														<div className="input-group">
															<input
																type="text"
																className="form-control form-control-sm"
																placeholder="Search something..."
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
											{payrolls.length === 0 && !loading ? (
												<EmptyState/>
												) : (
											<div className="card-body">
												<div className="table-responsive">
													{loading ? (
														<Skeleton count={5} height={57} />
													) :
														(
															<table className="table table-hover table-striped table-vcenter text-nowrap">
																<thead>
																	<tr>
																		<th className="w200">Total Amount</th>
																		<th className="w200">Month/Year</th>
																		<th className="w200">Departments</th>
																		<th className="w60">Employees</th>
																		<th className="w60">Status</th>
																		<th className="w200">Action</th>
																	</tr>
																</thead>
																<tbody>

																	{currentPayroll?.map((payroll, index) => (
																		<tr key={index}>
																			<td style={{cursor: 'pointer'}}>
																				<div className="d-flex align-items-center">
																					<span>
																						{formatMoney(payroll.totalSalary)}
																					</span>
																					
																				</div>
																			</td>
																			<td>
																			<div>
																					<p className="mb-0">{payroll.month} / {payroll.year}</p>
																			</div>
																			</td>

																			<td><span className='badge badge-default'>{payroll.totalDepartments}</span></td>
																			<td><span className='badge badge-default'>{payroll.totalEmployees}</span>
																			</td>

																			<td>
																				<span className="tag tag-success ml-0 mr-0">{payroll.status}</span>
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
																					onClick={() => individualPayroll(payroll, payroll.id)}
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
												)}
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
export default connect(mapStateToProps, mapDispatchToProps)(PastPayroll);