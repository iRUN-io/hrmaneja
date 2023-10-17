/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import { getEmployee } from "../../../services/employee";
import { getCompanyData, getUser } from "../../../config/common";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ComingSoon from '../../common/comingSoon';
import { Link } from 'react-router-dom';
import { toast } from 'material-react-toastify';
import { createActivity } from '../../../services/activities';
// import { emailCase } from '../../../enums/emailCase';
// import { sendEmail } from '../../../services/mail/sendMail';
import moment from 'moment';
import FeatureNotAvailable from '../../common/featureDisabled';
import { approveTimeSheetRequest, createAttendance, getAttendance } from '../../../services/attendance';


function Timesheet(props) {
    ///// NEW PHASE STARTS HERE
    const [clockedIn, setClockedIn] = useState(false);
    const [timeEntries, setTimeEntries] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        // Load time entries from local storage on component mount
        const savedEntries = JSON.parse(localStorage.getItem('timeEntries')) || [];
        setTimeEntries(savedEntries);

        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        
        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const clockIn = () => {
        // Check if there is already a clock-in entry for the current day
        const hasClockInToday = timeEntries.some(
          (entry) =>
            entry.type === 'in' &&
            moment(entry.date).isSame(new Date(), 'day')
        );
    
        if (!hasClockInToday) {
          // Clock in logic
          const newEntry = { date: new Date(), type: 'in' };
          const updatedEntries = [...timeEntries, newEntry];
          setTimeEntries(updatedEntries);
          setClockedIn(true);
    
          // Save time entries to local storage
          localStorage.setItem('timeEntries', JSON.stringify(updatedEntries));
        } else {
          alert('You have already clocked in today.');
        }
      };
    
      const clockOut = () => {
        // Check if there is already a clock-out entry for the current day
        const hasClockOutToday = timeEntries.some(
          (entry) =>
            entry.type === 'out' &&
            moment(entry.date).isSame(new Date(), 'day')
        );
    
        if (!hasClockOutToday) {
          // Clock out logic
          const newEntry = { date: new Date(), type: 'out' };
          const updatedEntries = [...timeEntries, newEntry];
          setTimeEntries(updatedEntries);
          setClockedIn(false);
    
          // Save time entries to local storage
          localStorage.setItem('timeEntries', JSON.stringify(updatedEntries));
        } else {
          alert('You have already clocked out today.');
        }
      };
    // Group time entries by day
    const groupedTimeEntries = timeEntries.reduce((result, entry) => {
        const day = moment(entry.date).format('MMMM DD, YYYY');
        if (!result[day]) {
            result[day] = [];
        }
        result[day].push(entry);
        return result;
    }, {});

    // State to manage the current page
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 5; // Number of entries to display per page

    // Calculate the total number of pages based on the number of unique days
    const uniqueDays = Object.keys(groupedTimeEntries);
    const totalPages = Math.ceil(uniqueDays.length / entriesPerPage);

    // Get the current page's entries based on the current page number
    const currentDays = uniqueDays.slice(
        (currentPage - 1) * entriesPerPage,
        currentPage * entriesPerPage
    );

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleSaveEntries = () => {
        // Handle saving time entries, for example, send them to an API
        // You can implement your saving logic here
        console.log('logging')
      };

    ///// NEW PHASE ENDS HERE


    const [loading, setLoading] = useState(false);
    const [allAttendance, setAttendance] = useState([]);
    const [user, setUser] = useState({});
    const [employee, setEmployee] = useState({});
    const [featureEnabled, setFeatureEnabled] = useState(true);
    const comingSoon = false;
    const [timeSheetId, setTimeSheetId] = useState();
    const [currentWeek, setCurrentWeekState] = useState({});
    const [timeSheetStatus, setTimeSheetStatus] = useState('');
    const [formState, setFormState] = useState({
        week: moment().week().toString(),
        month: moment().month().toString(),
        year: moment().year().toString(),
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
                employee_id: user.employee_id,
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
                    // sendEmail(user.emailAddress, user.name, emailCase.makeRequisition);
                    setAttendance([...allAttendance, response])
                    toast.success("Timesheet updated successfully");
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

    const approvalRequest = async (timeSheetId) => {
        try {
            if (!featureEnabled) {
                toast.error('Feature not enabled');
                return;
            }
            let response;
            response = await approveTimeSheetRequest(timeSheetId);
            if (!response.error) {

                const logLeave = await createActivity(
                    {
                        name: 'Approve Timesheet',
                        employee_id: user.employee_id,
                        activity: `Timesheet approval request for week ${formState.week} of ${formState.year}`,
                        activity_name: 'Update',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )

                if (logLeave.id) {
                    // sendEmail(user.emailAddress, user.name, emailCase.makeRequisition);
                    toast.info(response.message);
                }
            }

        } catch (err) {
            toast.error("Error, try again");
            setFormState({ ...formState });
        }

    };

    const setFormFunction = useCallback((dateData, formData) => {
        setFormState({
            ...formState,
            week: dateData?.week ? dateData.week : moment().week().toString(),
            month: dateData?.month ? dateData.month : moment().month().toString(),
            year: dateData?.year ? dateData.year : moment().year().toString(),
            date: dateData?.date ? dateData.date : moment().format('YYYY-MM-DD'),
            employeeId: user.employee_id,
            employeeName: employee.name,
            companyId: employee.company_id,
            mondayStartTime: formData.monday.startTime,
            mondayEndTime: formData.monday.endTime,
            mondayHours: formData.monday.hours,
            mondayNote: formData.monday.note,
            tuesdayStartTime: formData.tuesday.startTime,
            tuesdayEndTime: formData.tuesday.endTime,
            tuesdayHours: formData.tuesday.hours,
            tuesdayNote: formData.tuesday.note,
            wednesdayStartTime: formData.wednesday.startTime,
            wednesdayEndTime: formData.wednesday.endTime,
            wednesdayHours: formData.wednesday.hours,
            wednesdayNote: formData.wednesday.note,
            thursdayStartTime: formData.thursday.startTime,
            thursdayEndTime: formData.thursday.endTime,
            thursdayHours: formData.thursday.hours,
            thursdayNote: formData.thursday.note,
            fridayStartTime: formData.friday.startTime,
            fridayEndTime: formData.friday.endTime,
            fridayHours: formData.friday.hours,
            fridayNote: formData.friday.note,

        });
    }, [formState, employee, user]);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const user = getUser();
            if (user) {
                // const companyData = await getCompanyData();
                // companyData.settings?.features['expenseManagement'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
                const employeeRecord = await getEmployee(user.employee_id);
                const allAttendance = await getAttendance(user.employee_id);
                setAttendance(allAttendance);
                const thisWeekAttendance = allAttendance.filter(attendance => attendance.week === formState.week && attendance.year === formState.year);
                const savedData = thisWeekAttendance[0]?.timeSheet[0];
                setTimeSheetId(thisWeekAttendance[0]?.id);
                setTimeSheetStatus(thisWeekAttendance[0]?.status);
                setEmployee(employeeRecord);
                if (savedData) {
                    setFormFunction(null, savedData);
                }
            }
            setLoading(false);
            setUser(user);
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

    useEffect(() => {
        const currentTimesheetById = allAttendance.filter(attendance => attendance.id === timeSheetId);
        const today = new Date(currentTimesheetById[0]?.updatedAt);
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
                week: moment(monday).week().toString(),
                year: moment(monday).year().toString(),
                month: moment(monday).month().toString(),
                date: moment(monday).format('YYYY-MM-DD'),
                monday: monday,
                tuesday: tuesday,
                wednesday: wednesday,
                thursday: thursday,
                friday: friday,
                saturday: saturday,
                sunday: sunday,
            }
        ];

        setCurrentWeekState(week[0]);
    }, [allAttendance, timeSheetId]);

    const week = currentWeek;

    const pastWeeks = useMemo(() => {
        const pastWeeks = allAttendance;
        return (
            <>
                {!loading && pastWeeks.length > 0 && (
                    <>
                        {pastWeeks.map((week, index) => (
                            <option className='' key={index} value={week.id}>
                                {moment().week(week.week).startOf('week').format('Do MMM YYYY')} - {moment().week(week.week).endOf('week').format('Do MMM YYYY')} {' '}
                            </option>
                        ))}
                    </>
                )}

            </>
        )
    }, [allAttendance, loading]);

    const setCurrentWeek = useCallback((id) => {
        setTimeSheetId(id);
        const currentTimesheetById = allAttendance.filter(attendance => attendance.id === id);
        const currentTimesheet = currentTimesheetById[0];
        const timeSheet = currentTimesheet.timeSheet[0];
        setTimeSheetStatus(currentTimesheetById[0].status);
        setFormFunction(currentTimesheet, timeSheet);
    }, [allAttendance, setFormFunction]);

    const resetDate = useCallback(() => {
        const latestTimesheet = allAttendance.filter(attendance => attendance.week === formState.week && attendance.year === formState.year);
        setTimeSheetId(latestTimesheet[0].id);
        console.log(latestTimesheet[0].id);
        const timeSheet = latestTimesheet[0].timeSheet[0];
        setFormFunction(null, timeSheet);
    }, [allAttendance, formState.week, formState.year, setFormFunction]);

    if (!featureEnabled && !loading) {
        return <FeatureNotAvailable />
    }

    console.log('time', timeEntries)


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
                                                <h1 style={{ fontSize: 20 }} className="card-title mx-auto">
                                                    {currentDateTime.toLocaleString('en-US', {
                                                        weekday: 'long',
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                        second: '2-digit',
                                                    })}</h1>
                                            </div>
                                            <div className='card-body'>
                                                <div className='mx-auto' style={{ textAlign: 'center' }}>
                                                {clockedIn ? (
                                                    <button
                                                    style={{ width: 200, height: 50 }}
                                                    className="btn btn-lg btn-danger"
                                                    onClick={clockOut}
                                                    // disabled={clockedIn || hasClockedInToday()}
                                                    >
                                                    Clock Out
                                                    </button>
                                                ) : (
                                                    <button
                                                    style={{ width: 200, height: 50 }}
                                                    className="btn btn-lg btn-danger"
                                                    // disabled={!clockedIn || hasClockedOutToday()}
                                                    onClick={clockIn}
                                                    >
                                                    Clock In
                                                    </button>
                                                )}

                                                {/* Save Entries Button */}
                                                {!clockedIn && timeEntries.length > 0 && (
                                                    <button
                                                    style={{ width: 200, height: 50, marginLeft: 10 }}
                                                    className="btn btn-lg btn-primary"
                                                    onClick={handleSaveEntries}
                                                    >
                                                    Save Entries
                                                    </button>
                                                )}
                                                </div>
                                                <table className='table table-hover table-striped table-vcenter text-nowrap'>
                                                    <thead>
                                                        <tr>
                                                            <th>Date</th>
                                                            <th>Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {currentDays.map((day, dayIndex) => (
                                                            <React.Fragment key={dayIndex}>
                                                                <tr>
                                                                    <th colSpan="2"> <small className="float-right badge badge-primary">{day}</small></th>
                                                                </tr>
                                                                {groupedTimeEntries[day].map((entry, index) => (
                                                                    <tr key={index}>
                                                                        <td> <small className="float-left badge badge-primary">{moment(entry.date).format('MMMM DD, YYYY, hh:mm:ss A z')}</small></td>
                                                                        <td>{entry.type}</td>
                                                                    </tr>
                                                                ))}
                                                            </React.Fragment>
                                                        ))}
                                                    </tbody>

                                                </table>

                                                <div className="pagination">
                                                    <button
                                                    className='btn-primary btn-sm'
                                                        disabled={currentPage === 1}
                                                        onClick={() => handlePageChange(currentPage - 1)}
                                                    >
                                                        Previous
                                                    </button>
                                                    <span>{currentPage} of {totalPages}</span>
                                                    <button
                                                    className='btn-primary btn-sm'
                                                        disabled={currentPage === totalPages}
                                                        onClick={() => handlePageChange(currentPage + 1)}
                                                    >
                                                        Next
                                                    </button>
                                                </div>
                                            </div>
                                            {/* <div className="card-header">
                                                <h3 className="card-title">TimeSheet</h3>
                                                <div className="card-options">
                                                    <div className="item-action dropdown">
                                                        <select className="form-control form-control btn btn-primary dropdown-toggle" name="week"
                                                            onChange={
                                                                (e) => {
                                                                    setCurrentWeek(e.target.value);
                                                                }
                                                            }
                                                        >
                                                            {pastWeeks}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className="card-body">
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
                                                                </th> 

                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                    <tr style={{ lineHeight: '50px' }}>
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

                                                                    </tr>
                                                                </tbody>
                                                            </table>

                                                                <div style={{ float: 'right' }}>
                                                                    {timeSheetStatus === 'pending' || timeSheetStatus === undefined ?
                                                                        <>
                                                                            <Link onClick={() => updateTimesheet()} style={{ marginRight: '10px' }} type="button" className="btn btn-outline-primary btn-sm">Save</Link>
                                                                            <Link onClick={() => approvalRequest(timeSheetId)} style={{ marginRight: '10px' }} type="button" className="btn btn-primary btn-sm">Submit</Link>
                                                                        </>
                                                                        : <small className='text-success'>Timesheet Submitted</small>}
                                                                </div>
                                                            </>
                                                        )}
                                                </div>
                                            </div> */}
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

    function hasClockedInToday() {
        return timeEntries.some(
          (entry) =>
            entry.type === 'in' &&
            moment(entry.date).isSame(new Date(), 'day')
        );
      }
    
      function hasClockedOutToday() {
        return timeEntries.some(
          (entry) =>
            entry.type === 'out' &&
            moment(entry.date).isSame(new Date(), 'day')
        );
      }
}
const mapStateToProps = state => ({
    fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Timesheet);