/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { getEmployee } from "../../../services/employee";
import { formatMoney, getCompanyData, getUser } from "../../../config/common";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ComingSoon from '../../common/comingSoon';
import { Link } from 'react-router-dom';
import { toast } from 'material-react-toastify';
import { createActivity } from '../../../services/activities';
import { emailCase } from '../../../enums/emailCase';
import { sendEmail } from '../../../services/mail/sendMail';
import { createRequisition, getEmployeeRequisition } from '../../../services/expense';
import moment from 'moment';
import FeatureNotAvailable from '../../common/featureDisabled';
import { createAttendance } from '../../../services/attendance';


function Timesheet(props) {
    const [loading, setLoading] = useState(false);
    const [requisitions, setRequisitions] = useState([]);
    const [user, setUser] = useState({});
    const [featureEnabled, setFeatureEnabled] = useState(false);
    const comingSoon = false;

    const [formState, setFormState] = useState({
        week: moment().week(),
        month: moment().month(),
        year: moment().year(),
        date: moment().format('YYYY-MM-DD'),
        employeeName: '',
        companyId: '',
        // monday
        mondayStartTime: '',
        mondayEndTime: '',
        mondayHours: '',
        mondayNote: '',
        // tuesday
        tuesdayStartTime: '',
        tuesdayEndTime: '',
        tuesdayHours: '',
        tuesdayNote: '',
        // wednesday
        wednesdayStartTime: '',
        wednesdayEndTime: '',
        wednesdayHours: '',
        wednesdayNote: '',
        // thursday
        thursdayStartTime: '',
        thursdayEndTime: '',
        thursdayHours: '',
        thursdayNote: '',
        // friday
        fridayStartTime: '',
        fridayEndTime: '',
        fridayHours: '',
        fridayNote: '',
    });

    const updateTimesheet = async () => {
        if (!featureEnabled) {
            toast.error('Feature not enabled');
            return;
        }
        try {
            setFormState({ ...formState });

            const body = {
                employee_id: formState.employeeId,
                company_id: formState.companyId,
                week: formState.week,
                year: formState.year,
                month: formState.month,
                timeSheet: {
                    monday: {
                        startTime: formState.mondayStartTime,
                        endTime: formState.mondayEndTime,
                        hours: formState.mondayHours,
                        note: formState.mondayNote,
                    },
                    tuesday: {
                        startTime: formState.tuesdayStartTime,
                        endTime: formState.tuesdayEndTime,
                        hours: formState.tuesdayHours,
                        note: formState.tuesdayNote,
                    },
                    wednesday: {
                        startTime: formState.wednesdayStartTime,
                        endTime: formState.wednesdayEndTime,
                        hours: formState.wednesdayHours,
                        note: formState.wednesdayNote,
                    },
                    thursday: {
                        startTime: formState.thursdayStartTime,
                        endTime: formState.thursdayEndTime,
                        hours: formState.thursdayHours,
                        note: formState.thursdayNote,
                    },
                    friday: {
                        startTime: formState.fridayStartTime,
                        endTime: formState.fridayEndTime,
                        hours: formState.fridayHours,
                        note: formState.fridayNote,
                    },
                },

            }

            const response = await createAttendance(body);

            if (!response.error) {
                const logActivity = await createActivity(
                    {
                        name: 'Update TimeSheet',
                        employee_id: user.employee_id,
                        activity: `TimeSheet updated for week ${formState.week} of ${formState.year}`,
                        activity_name: 'Creation',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )

                if (logActivity.id) {
                    sendEmail(user.emailAddress, user.name, emailCase.makeRequisition);
                    setRequisitions([...requisitions, response])
                    toast.success("Requisition request sent successfully");
                }
            }

            setFormState({
                ...formState,
            });
        } catch (err) {
            toast.error("Error, try again");
            setFormState({ ...formState });
        }
    };

    useEffect(() => {
        async function fetchData() {
            setLoading(false);
            const user = getUser();
            if (user) {
                const companyData = await getCompanyData();
                companyData.settings?.features['expenseManagement'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
                const employeeRecord = await getEmployee(user.employee_id);
                const allRequisition = await getEmployeeRequisition(user.employee_id);
                setRequisitions(allRequisition);
                setFormState({
                    ...formState,
                    employeeId: employeeRecord.id,
                    employeeName: employeeRecord.name,
                    companyId: employeeRecord.company_id,
                });
                setLoading(false);
                setUser(user);

            }
        }
        fetchData();
    }, []);

    const updateForm = (e) => {
        const { value, name } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const getWeek = () => {
        const today = new Date();
        const day = today.getDay();
        const diff = today.getDate() - day + (day === 0 ? -6 : 1);
        const monday = new Date(today.setDate(diff));
        const tuesday = new Date(today.setDate(diff + 1));
        const wednesday = new Date(today.setDate(diff + 2));
        const thursday = new Date(today.setDate(diff + 3));
        const friday = new Date(today.setDate(diff + 4));
        const saturday = new Date(today.setDate(diff + 5));
        const sunday = new Date(today.setDate(diff + 6));
        const week = [
            {
                monday: monday,
                tuesday: tuesday,
                wednesday: wednesday,
                thursday: thursday,
                friday: friday,
                saturday: saturday,
                sunday: sunday,
            }
        ];
        return week;
    }

    const week = getWeek()[0];

    console.log('formstate', formState);
    return (
        <>

            <div>
                {comingSoon ?
                    <ComingSoon />
                    :
                    <>
                        <div className="section-body mt-3">
                            <div className="container-fluid">
                                <div className="d-flex justify-content-between align-items-center">
                                    <ul className="nav nav-tabs page-header-tab">
                                        <li className="nav-item">
                                            <Link to={'/'} className="nav-link active">
                                                <i className="fa fa-arrow-left"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* <div className="header-action">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Make Requisition</button>
                </div> */}
                                </div>
                                <div className="tab-content mt-3">
                                    <div className="tab-pane fade show active" role="tabpanel">
                                        <div className="card table-card">
                                            <div className="card-header">
                                                <h3 className="card-title">TimeSheet</h3>
                                                <div className="card-options">
                                                    <button to="/hr-past-payroll" style={{ marginRight: '10px' }} type="button" className="btn btn-outline-primary btn-sm">Past timesheets</button>
                                                    <button to="/hr-past-payroll" style={{ marginRight: '10px' }} type="button" className="btn btn-outline-primary btn-sm">Pending timesheets</button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    {loading ? (
                                                        <Skeleton count={5} height={57} />
                                                    ) :
                                                        (
                                                            <><table className="table table-hover table-striped table-vcenter text-nowrap">
                                                                <thead>
                                                                    <tr style={{ fontWeight: 'bolder' }}>
                                                                        <th className="w60">
                                                                            <p>Monday</p>
                                                                            <small>{moment(week.monday).format('Do MMM YYYY')}</small>
                                                                        </th>
                                                                        <th className="w60">
                                                                            <p>Tuesday</p>
                                                                            <small>{moment(week.tuesday).format('Do MMM YYYY')}</small>
                                                                        </th>
                                                                        <th className="w60">
                                                                            <p>Wednesday</p>
                                                                            <small>{moment(week.wednesday).format('Do MMM YYYY')}</small>
                                                                        </th>
                                                                        <th className="w60">
                                                                            <p>Thursday</p>
                                                                            <small>{moment(week.thursday).format('Do MMM YYYY')}</small>
                                                                        </th>
                                                                        <th className="w60">
                                                                            <p>Friday</p>
                                                                            <small>{moment(week.friday).format('Do MMM YYYY')}</small>
                                                                        </th>
                                                                        {/* <th className="w60 disabled-card">
                                                                            <p>Saturday</p>
                                                                            <small>{moment(week.saturday).format('Do MMM YYYY')}</small>
                                                                        </th>
                                                                        <th className="w60 disabled-card">
                                                                            <p>Sunday</p>
                                                                            <small>{moment(week.sunday).format('Do MMM YYYY')}</small>
                                                                        </th> */}
                                                                        {/* <th className="w200">Action</th> */}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                    <tr style={{ lineHeight: '50px' }}>
                                                                        {/* Monday */}
                                                                        <td>
                                                                            <div className="align-items-center">
                                                                                <div className="form-group">
                                                                                    <label className="form-label">Start Time</label>
                                                                                    <input type="time" name="mondayStartTime" value={formState.mondayStartTime} onChange={updateForm} className="form-control"
                                                                                        min="08:00" max="18:00" required />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="form-label">End Time</label>
                                                                                    <input name="mondayEndTime" value={formState.mondayEndTime} onChange={updateForm} type="time"
                                                                                        min="08:00" max="18:00" className="form-control" required />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="form-label">Notes</label>
                                                                                    <textarea name='mondayNote' onChange={updateForm} value={formState.mondayNote} className="form-control" rows={3} />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="align-items-center">
                                                                                <div className="form-group">
                                                                                    <label className="form-label">Start Time</label>
                                                                                    <input type="time" name="tuesdayStartTime" value={formState.tuesdayStartTime} onChange={updateForm} className="form-control"
                                                                                        min="08:00" max="18:00" required />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="form-label">End Time</label>
                                                                                    <input name="tuesdayEndTime" value={formState.tuesdayEndTime} onChange={updateForm} type="time"
                                                                                        min="08:00" max="18:00" className="form-control" required />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="form-label">Notes</label>
                                                                                    <textarea name='tuesdayNote' onChange={updateForm} value={formState.tuesdayNote} className="form-control" rows={3} />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <div className="align-items-center">
                                                                                <div className="form-group">
                                                                                    <label className="form-label">Start Time</label>
                                                                                    <input type="time" name="wednesdayStartTime" value={formState.wednesdayStartTime} onChange={updateForm} className="form-control"
                                                                                        min="08:00" max="18:00" required />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="form-label">End Time</label>
                                                                                    <input name="wednesdayEndTime" value={formState.wednesdayEndTime} onChange={updateForm} type="time"
                                                                                        min="08:00" max="18:00" className="form-control" required />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="form-label">Notes</label>
                                                                                    <textarea name='wednesdayNote' onChange={updateForm} value={formState.wednesdayNote} className="form-control" rows={3} />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <div className="align-items-center">
                                                                                <div className="form-group">
                                                                                    <label className="form-label">Start Time</label>
                                                                                    <input type="time" name="thursdayStartTime" value={formState.thursdayStartTime} onChange={updateForm} className="form-control"
                                                                                        min="08:00" max="18:00" required />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="form-label">End Time</label>
                                                                                    <input name="thursdayEndTime" value={formState.thursdayEndTime} onChange={updateForm} type="time"
                                                                                        min="08:00" max="18:00" className="form-control" required />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="form-label">Notes</label>
                                                                                    <textarea name='thursdayNote' onChange={updateForm} value={formState.thursdayNote} className="form-control" rows={3} />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <div className="align-items-center">
                                                                                <div className="form-group">
                                                                                    <label className="form-label">Start Time</label>
                                                                                    <input type="time" name="fridayStartTime" value={formState.fridayStartTime} onChange={updateForm} className="form-control"
                                                                                        min="08:00" max="18:00" required />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="form-label">End Time</label>
                                                                                    <input name="fridayEndTime" value={formState.fridayEndTime} onChange={updateForm} type="time"
                                                                                        min="08:00" max="18:00" className="form-control" required />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="form-label">Notes</label>
                                                                                    <textarea name='fridayNote' onChange={updateForm} value={formState.fridayNote} className="form-control" rows={3} />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        {/* <td>
                                                                            <div className="align-items-center disabled-card">
                                                                                <div className="form-group">
                                                                                    <label className="form-label">Start Time</label>
                                                                                    <input disabled type="time" name="time"
                                                                                        min="08:00" max="18:00" className="form-control" required />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="form-label">End Time</label>
                                                                                    <input disabled type="time" name="time"
                                                                                        min="08:00" max="18:00" className="form-control" required />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="form-label">Notes</label>
                                                                                    <textarea disabled name='note' className="form-control" rows={3} />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="align-items-center disabled-card">
                                                                                <div className="form-group">
                                                                                    <label className="form-label">Start Time</label>
                                                                                    <input disabled type="time" name="time"
                                                                                        min="08:00" max="18:00" className="form-control" required />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="form-label">End Time</label>
                                                                                    <input disabled type="time" name="time"
                                                                                        min="08:00" max="18:00" className="form-control" required />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label className="form-label">Notes</label>
                                                                                    <textarea disabled name='note' className="form-control" rows={3} />
                                                                                </div>
                                                                            </div>
                                                                        </td> */}
                                                                    </tr>
                                                                </tbody>
                                                            </table>

                                                                <div style={{ float: 'right' }}>
                                                                    <Link onClick={() => updateTimesheet()} style={{ marginRight: '10px' }} type="button" className="btn btn-outline-primary btn-sm">Save</Link>
                                                                    <Link to="/hr-past-payroll" style={{ marginRight: '10px' }} type="button" className="btn btn-primary btn-sm">Submit</Link>
                                                                </div>
                                                            </>
                                                        )}
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
export default connect(mapStateToProps, mapDispatchToProps)(Timesheet);