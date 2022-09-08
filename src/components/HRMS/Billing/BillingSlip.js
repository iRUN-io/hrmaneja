import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { formatMoney, getCompanyData, getUser } from "../../../config/common";
import "react-loading-skeleton/dist/skeleton.css";
import ComingSoon from '../../common/comingSoon';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { createActivity } from '../../../services/activities';
import { sendEmail } from '../../../services/mail/sendMail';
import { emailCase } from '../../../enums/emailCase';
import { toast } from 'material-react-toastify';
import FeatureNotAvailable from '../../common/featureDisabled';
import { getBilling } from '../../../services/billing';


function BillingSlip(props) {
    const { fixNavbar } = props;
    const id = window.location.pathname.split('/')[2];
    const history = useHistory();
    const [billing, setBilling] = useState({});
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
	const [featureEnabled, setFeatureEnabled] = useState(false);
    const comingSoon = false;
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const user = await getUser();
            if (user) {
                const companyData = await getCompanyData();
				companyData.settings?.features['expenseManagement'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
                const billingResponse = await getBilling(id);
                console.log(billingResponse)
                setBilling(billingResponse);
                
                setLoading(false);
                setUser(user)
            }
        }
        fetchData();
    }, []);

   

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
                                                    <div className="mr-3">
                                                    <i className="fa fa-user-circle-o fa-5x" style={{color: "#999"}} aria-hidden="true"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="content">
                                                            <span>
                                                                <strong>BILLING ID: RQ-{billing.id} </strong>
                                                            </span>
                                                            <p className="h5">
                                                                {billing.employee}{' '}
                                                               
                                                                <small className="float-right badge badge-primary">
                                                                    {moment(billing.createdAt).format('MMM Do YYYY')}
                                                                </small>

                                                            </p>
                                                            <p>
                                                                {billing.status === 'approve' && (
                                                                    <span className="badge badge-success">approved</span>
                                                                )}
                                                                {billing.status === 'disapprove' && (
                                                                    <span className="badge badge-danger">rejected</span>
                                                                )}
                                                                {billing.status === 'pending' && (
                                                                    <span className="badge badge-grey">pending</span>
                                                                )}
                                                            </p>
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
                                                                <th className="w100">Amount</th>
                                                                <th className="w100">Category</th>
                                                                <th className="w100">Quantity</th>
                                                                <th className="w100 text-right">Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>01</td>
                                                                <td>
                                                                    <span>{formatMoney(billing.amount)}</span>
                                                                </td>

                                                                <td>{billing.category}</td>
                                                                <td>1</td>
                                                                <td className="text-right">{formatMoney(billing.amount)}</td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <td colSpan={2}>
                                                                    <span>
                                                                        <strong>Note: {' '}</strong>{billing.note}
                                                                    </span>
                                                                </td>
                                                                <td></td>
                                                                <td></td>
                                                                <td className="text-right">
                                                                    <strong className="text-success">{formatMoney(billing.amount)}</strong>
                                                                </td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                    {billing.employee_id !== user.employee_id && (
                                                        <>
                                                    {(billing.status === 'pending' || billing.status === 'approve') && (
                                                                <OverlayTrigger trigger="focus" placement="bottom" delay={1}
                                                                    overlay={
                                                                        <Popover id="popover-basic">
                                                                            <Popover.Header as="p">Confirm Decline</Popover.Header>
                                                                            <Popover.Body>
                                                                                <div className="clearfix" >
                                                                                    <button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success">Cancel</button>
                                                                                    {/* <button style={{ margin: '10px' }} onClick={() => toggleRequisition(billing.id, 'reject')} type="button" className="btn btn-sm btn-danger">Disapprove</button> */}
                                                                                </div>
                                                                            </Popover.Body>
                                                                        </Popover>
                                                                    }>
                                                                          <button type="button" style={{marginRight: '10px'}} className="btn btn-info js-sweetalert" title="Approve" data-type="confirm">
                                                                            <i className="icon-close" /> Reject
                                                                        </button>

                                                                </OverlayTrigger>
                                                            )}
                                                            {(billing.status === 'pending' || billing.status === 'disapprove') && (
                                                                <OverlayTrigger trigger="focus" placement="bottom" delay={1}
                                                                    overlay={
                                                                        <Popover id="popover-basic">
                                                                            <Popover.Header as="p">Confirm Approval</Popover.Header>
                                                                            <Popover.Body>
                                                                                <div className="clearfix" >
                                                                                    <button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success">Cancel</button>
                                                                                    {/* <button style={{ margin: '10px' }} onClick={() => toggleRequisition(billing.id, 'approve')} type="button" className="btn btn-sm btn-danger ">Approve</button> */}
                                                                                </div>
                                                                            </Popover.Body>
                                                                        </Popover>
                                                                    }>
                                                                        <button type="button" className="btn btn-success btn-hrmaneja-success js-sweetalert" title="Approve" data-type="confirm">
                                                                            <i className="icon-check" /> Approve
                                                                        </button>

                                                                </OverlayTrigger>
                                                            )}
                                                            </>
                                                            )}
                                                    {/* <button className="btn btn-info float-right">
                                                        <i className="icon-printer" /> Print
                                                    </button> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(BillingSlip);