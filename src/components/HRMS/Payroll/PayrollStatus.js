import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { formatMoney, getCompanyData, getUser } from "../../../config/common";
import "react-loading-skeleton/dist/skeleton.css";
import ComingSoon from '../../common/comingSoon';
import { Link, useHistory } from 'react-router-dom';
import FeatureNotAvailable from '../../common/featureDisabled';
import Loader from '../../common/loader';
import EmptyState from '../../EmptyState';
import { getPayrollStatus } from '../../../services/payroll';


function PayrollStatus(props) {
    const history = useHistory();
    const [payrollStatement, setPayrollStatement] = useState([]);
    const [payroll, setPayroll] = useState({});
    const [loading, setLoading] = useState(false);
    const [featureEnabled, setFeatureEnabled] = useState(false); // 
    const comingSoon = false;
    const batchId = history.location.pathname.split('/')[2];
    const routeState = history.location.state;
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const companyData = await getCompanyData();
            companyData.settings?.features['payroll'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
            const user = await getUser();
            if (user) {
                const response = await getPayrollStatus(batchId);
                setPayroll(routeState.payroll);
                setPayrollStatement(response);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if(loading){
        return <Loader />
    }

    if (!featureEnabled) {
        return <FeatureNotAvailable />
    }

    if(payrollStatement.length === 0){
        return <EmptyState />
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
                                            <Link to={'/hr-past-payroll'} className="nav-link active">
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
                                                    <div className="media-body">
                                                        <div className="content">
                                                            <span>
                                                                <strong>Payroll ID: pay-{payroll.month}-{payroll.id && payroll.id.slice(0, 8)} </strong>
                                                            </span>
                                                            <p className="h5">
                                                                <small>Salary payment receipt</small>
                                                                <small className="float-right badge badge-primary">
                                                                    {payroll.month} {payroll.year}
                                                                </small>

                                                            </p>
                                                            <h5>
                                                                <span className="badge money-badge badge-grey">{formatMoney(payroll.totalSalary)}</span>
                                                            </h5>
                                                        </div>
                                                        {/* <nav className="d-flex text-muted">
                                                            <a href="fake_url" className="icon mr-3">
                                                                <i className="icon-envelope text-info" />
                                                            </a>
                                                            <a href="fake_url" className="icon mr-3">
                                                                <i className="icon-printer" />
                                                            </a>
                                                        </nav> */}
                                                    </div>
                                                </div>
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-striped table-vcenter">
                                                        <thead className="light-mode">
                                                            <tr>
                                                                <th className="w200">Account Number</th>
                                                                <th className="w200">Bank</th>
                                                                <th className="w200">Employee</th>
                                                                <th className="w200">Message</th>
                                                                <th className="w200">Amount</th>
                                                                <th className="w200">Fee</th>
                                                                <th className="w200">Narration</th>
                                                                <th className="w150">Status</th>
                                                                <th className="w150">Action</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {payrollStatement.map((payroll, index) => (
                                                                <tr key={index}>
                                                                    <td>
                                                                        <span>{payroll.account_number}</span>
                                                                    </td>
                                                                    <td>
                                                                        <span>{payroll.bank_name}</span>
                                                                    </td>
                                                                    <td>
                                                                        <span>{payroll.full_name}</span>
                                                                    </td>
                                                                    <td>
                                                                        <span>{payroll.complete_message}</span>
                                                                    </td>
                                                                    <td>{formatMoney(payroll.amount)}</td>
                                                                    <td>{formatMoney(payroll.fee)}</td>
                                                                    <td>{payroll.narration}</td>
                                                                    <td>
                                                                    {payroll.status === 'SUCCESSFUL' && (
                                                                    <span className="badge badge-success">Successful</span>
                                                                    )}
                                                                    {payroll.status === 'FAILED' && (
                                                                        <span className="badge badge-danger">Failed</span>
                                                                    )}
                                                                    {payroll.status === 'PENDING' && (
                                                                        <span className="badge badge-warning">Pending</span>
                                                                    )}
                                                                    </td>
                                                                    {/* <td> <Link to={`/hr-payroll-statement/${payroll.id}`} className="btn btn-primary btn-sm">View</Link></td> */}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <td colSpan={2}>
                                                                    <span>
                                                                        <strong>Note:</strong> Total salary paid on the month of {payroll.month} {payroll.year}.
                                                                    </span>
                                                                </td>
                                                                <td>{formatMoney(payroll.totalSalary)}</td>
                                                                <td>{formatMoney(payroll.totalSalary)}</td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                    <button className="btn btn-info disabled-card float-right">
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
export default connect(mapStateToProps, mapDispatchToProps)(PayrollStatus);