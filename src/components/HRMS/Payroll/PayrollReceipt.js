import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { calPercentage, formatMoney, getCompanyData, getUser } from "../../../config/common";
import "react-loading-skeleton/dist/skeleton.css";
import ComingSoon from '../../common/comingSoon';
import { Link, useHistory } from 'react-router-dom';
import FeatureNotAvailable from '../../common/featureDisabled';
import Loader from '../../common/loader';
import EmptyState from '../../EmptyState';


function Payroll(props) {
    const history = useHistory();
    const [payroll, setPayroll] = useState({});
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
                setPayroll(routeState.payroll);
                setLoading(false);
            }
        }
        fetchData();
    });

    if(loading){
        return <Loader />
    }

    if (!featureEnabled) {
        return <FeatureNotAvailable />
    }

    if(payroll.length === 0){
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
                                            <Link onClick={() => history.goBack()} className="nav-link active">
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
                                                                <th className="w200">Employee Name</th>
                                                                <th className="w200">Department</th>
                                                                <th className="w200">Salary</th>
                                                                <th className="w150">Role</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {payroll?.employees?.map((employee, index) => (
                                                                <tr key={index}>
                                                                    <td>
                                                                        <span>{employee.name}</span>
                                                                    </td>
                                                                    <td>
                                                                        <span>{employee.department}</span>
                                                                    </td>
                                                                    <td>{formatMoney(employee.salary)}</td>
                                                                    <td>{employee.role}</td>
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
                                                                <td>{formatMoney(calPercentage(payroll.totalSalary, 10))}</td>
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