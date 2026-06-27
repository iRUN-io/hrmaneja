import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { calPercentage, formatMoney, getCompanyData, getUser } from "../../../config/common";
import "react-loading-skeleton/dist/skeleton.css";
import ComingSoon from '../../common/comingSoon';
import { Link, useHistory } from 'react-router-dom';
import months from '../../../config/month.json';
import FeatureNotAvailable from '../../common/featureDisabled';
import Loader from '../../common/loader';


function Payroll(props) {
    const history = useHistory();
    const [employee, setEmpoyee] = useState({});
    const [loading, setLoading] = useState(false);
	const [featureEnabled, setFeatureEnabled] = useState(false); // 
    const comingSoon = false;
    const routeState = history.location?.state;
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const companyData = await getCompanyData();
        	companyData.settings?.features['payroll'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
            const user = await getUser();
            if (user) {
                setEmpoyee(routeState.employee);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const month = months;

    const date = new Date();

    const currentMonth = month[date.getMonth()];

    const currentYear = date.getFullYear();
     
    const salary = employee.salary;
     
    const basicSalary = calPercentage(salary, 40);
     
    const HRA = calPercentage(salary, 13) //housing
     
    const Tax = calPercentage(salary, 7.5)
     
    const totalEarnings = basicSalary + HRA;
     
    const netPay = basicSalary + HRA - Tax;
    
    if(loading){
        return <Loader />
    }
    if (!featureEnabled ) {
		return <FeatureNotAvailable />
	}

    return (
        <>

            <div>
                {comingSoon ?
                    <ComingSoon />
                    :
                    <>
                        <div className={`section-body {fixNavbar ? "marginTop" : ""}`}>
                            <div className="container-fluid">
                                <div className="d-flex justify-content-between align-items-center">
                                    <ul className="nav nav-tabs page-header-tab">
                                        <li className="nav-item">

                                            <Link to={'/admin/hr-payroll'}className="nav-link active">
                                                <i className="fa fa-arrow-left"></i>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div><div className="section-body mt-3">
                            <div className="container-fluid">
                                <div className="tab-content mt-3">
                                    <div id="Payroll-Payslip" role="tabpanel">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="media mb-4">
                                                    <div className="mr-3">
                                                    <i className="fa fa-user-circle-o fa-5x" style={{color: "#999"}} aria-hidden="true"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="content">
                                                            <span>
                                                                <strong>Payment ID: pay-{currentMonth.toLowerCase()}-{employee.id && employee.id.slice(0, 8)} </strong>
                                                            </span>
                                                            <p className="h5">
                                                                {employee.employee}{' '}
                                                               
                                                                <small className="float-right badge badge-primary">
                                                                    {currentMonth} {currentYear}
                                                                </small>

                                                            </p>
                                                            <h5>
                                                            <span className="badge money-badge badge-grey">{formatMoney(employee.salary)}</span>
                                                            </h5>
                                                        </div>
                                                        <nav className="d-flex text-muted">
                                                            <a href="fake_url" className="icon mr-3">
                                                                <i className="icon-envelope text-info" />
                                                            </a>
                                                            <a href="fake_url" className="icon mr-3">
                                                                <i className="icon-printer" />
                                                            </a>
                                                        </nav>
                                                    </div>
                                                </div>
                                                <div className="table-responsive">
													<table className="table table-hover table-striped table-vcenter">
														<thead className="light-mode">
															<tr>
																<th className="w60">#</th>
																<th />
																<th className="w200">Earnings</th>
																<th className="w200">Deductions</th>
																<th className="w150 text-right">Total</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>01</td>
																<td>
																	<span>Basic Salary</span>
																</td>
																<td>{formatMoney(basicSalary)}</td>
																<td>-</td>
																<td className="text-right">{formatMoney(basicSalary)}</td>
															</tr>
															<tr>
																<td>02</td>
																<td>
																	<span>House Rent Allowance (H.R.A.)</span>
																</td>
																<td>{formatMoney(HRA)}</td>
																<td>-</td>
																<td className="text-right">{formatMoney(HRA)}</td>
															</tr>
															<tr>
																<td>03</td>
																<td>
																	<span>Tax Deducted at Source (T.D.S.)</span>
																</td>
																<td>-</td>
																<td>{formatMoney(Tax)}</td>
																<td className="text-right">{formatMoney(Tax)}</td>
															</tr>
															<tr>
																<td>05</td>
																<td>
																	<span>Other Allowance</span>
																</td>
																<td>-</td>
																<td>-</td>
																<td className="text-right">-</td>
															</tr>
														</tbody>
														<tfoot>
															<tr>
																<td colSpan={2}>
																	<span>
																		<strong>Note:</strong> Break down of {employee.name}'s salary for the month of {currentMonth} {currentYear}
																	</span>
																</td>
																<td>{formatMoney(totalEarnings)}</td>
																<td>{formatMoney(Tax)}</td>
																<td className="text-right">
																	<strong className="text-success">{formatMoney(netPay)}</strong>
																</td>
															</tr>
														</tfoot>
													</table>
													<button className="btn btn-info float-right">
														<i className="icon-printer" /> Print
													</button>
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