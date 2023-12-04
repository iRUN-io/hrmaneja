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
import { createBilling } from '../../../services/billing';
import { sendEmail } from '../../../services/mail/sendMail';
import { emailCase } from '../../../enums/emailCase';
import Loader from '../../common/loader';
import { getAllUsers } from '../../../services/user';
import { createNotification } from '../../../services/notification';



function Timesheet(props) {
    ///// NEW PHASE STARTS HERE
    const [clockedIn, setClockedIn] = useState(false);
    const [timeEntries, setTimeEntries] = useState([]);
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [allAttendance, setAttendance] = useState([]);
    const [user, setUser] = useState({});
    const [employee, setEmployee] = useState({});
    const [lineManager, setLineManager] = useState({});
    const [company, setCompany] = useState({});
    const [featureEnabled, setFeatureEnabled] = useState(true);
    const [hrID, setHrID] = useState([]);
    const comingSoon = false;

    useEffect(() => {
        // Load time entries from local storage on component mount
        const savedEntries = JSON.parse(localStorage.getItem('timeEntries')) || [];
        setTimeEntries(savedEntries);
      
        // const intervalId = setInterval(() => {
        //   setCurrentDateTime(new Date());
        // }, 1000);
      
        // return () => clearInterval(intervalId);
      }, []);
      
      useEffect(() => {
        async function fetchData() {
          setLoading(true);
      
          const user = getUser();
          const week = moment().week().toString();
          const month = moment().month().toString();
          const year = moment().year().toString();
      
          if (user) {
            const companyData = await getCompanyData();
            // companyData.settings?.features['expenseManagement']
            //   ? setFeatureEnabled(true)
            //   : setFeatureEnabled(false);
            setCompany(companyData);
            const employeeRecord = await getEmployee(user.employee_id);
            const lineManager = await getEmployee(employeeRecord.line_manager);
      
            setLineManager(lineManager);
            const allAttendance = await getAttendance(user.employee_id);
            setAttendance(allAttendance);
            // const thisWeekAttendance = allAttendance.filter(
            //   (attendance) =>
            //     attendance.week === week &&
            //     attendance.year === year &&
            //     attendance.month === month
            // );
            // const savedData = thisWeekAttendance[0]?.timeSheet;
            setEmployee(employeeRecord);
            const allUsers = await getAllUsers(user.company_id);
                const filteredAllUsers = allUsers.filter(
                    (allUser) => allUser.role === "HR Manager"
                  );
            setHrID(filteredAllUsers)
      
            const combinedTimesheets = {};

      
            allAttendance.forEach((entry) => {
              const employeeId = entry.employee_id;
      
              if (!combinedTimesheets[employeeId]) {
                combinedTimesheets[employeeId] = {
                  employee_id: employeeId,
                  timeSheet: [],
                  company_id: entry.company_id,
                  date: entry.date,
                  month: entry.month,
                  week: entry.week,
                  year: entry.year,
                  status: entry.status,
                  createdAt: entry.createdAt,
                  updatedAt: entry.updatedAt,
                  id: entry.id,
                };
              }
      
              // Combine the timesheets for this employee
              combinedTimesheets[employeeId].timeSheet = combinedTimesheets[employeeId].timeSheet.concat(
                entry.timeSheet
              );
            });
      
            // Convert the combinedTimesheets object into an array
            const result = Object.values(combinedTimesheets);
            
            if(result.length > 0){
                localStorage.setItem('timeEntries', JSON.stringify(result[0].timeSheet));
                setTimeEntries(result[0].timeSheet);
            }
            
            // if (savedData) {
            //     setFormFunction(null, savedData);
            // }
          }
          setLoading(false);
          setUser(user);
        }
        fetchData();
      }, []);
    const clockIn = () => {
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
            toast.error("You have already clocked in today.");
        }
    };

    const clockOut = async () => {
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

            const week = moment().week().toString();
            const month = moment().month().toString();
            const year = moment().year().toString();
            const date = moment().format('YYYY-MM-DD');

            const body = {
                employee_id: user.employee_id,
                company_id: company.id,
                week: week,
                year: year,
                date: date,
                month: month,
                timeSheet: updatedEntries
            }

            const response = await createAttendance(body);

            if (!response.error) {
                const logActivity = await createActivity(
                    {
                        name: 'Update TimeSheet',
                        employee_id: user.employee_id,
                        activity: `${user.name} TimeSheet updated for week ${week} of ${year} | ${date}`,
                        activity_name: 'Creation',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )
                const notifyRequisition = await createNotification(
                    {
                        name: 'Update TimeSheet',
                        sender_id: user.employee_id,
                        receiver_id: employee.line_manager,
						hr_id: hrID[0]?.employee_id,
                        notification: `${user.name} TimeSheet updated for week ${week} of ${year} | ${date}`,
                        notification_name: 'Creation',
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

        } else {
            toast.error("You have already clocked out today");
            //   alert('You have already clocked out today.');
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

    // 63ea33bb6896dc1d2ba9e54c
    // const initiatePayroll = async () => {
    // const body = {
    //     amount: 37500,
    //     paidBy: '652fae4fda18b490584f7fc3',
    //     company_id: '65042d837c7d024918a1a56d',
    //     plan: 'Company Premium',
    //     expiryDate: new Date().setMonth(new Date().getMonth() + 1),
    //     status: 'active',
    //   }
    //   if (body.amount === '') {
    //     toast.error('Please select a plan');
    //     return;
    //   }
    //   const billing = await createBilling(body, user.employee_id);

    //   toast.success('billing sent');
    // };


    // const approvalRequest = async (timeSheetId) => {
    //     try {
    //         if (!featureEnabled) {
    //             toast.error('Feature not enabled');
    //             return;
    //         }
    //         let response;
    //         response = await approveTimeSheetRequest(timeSheetId);
    //         if (!response.error) {

    //             const logLeave = await createActivity(
    //                 {
    //                     name: 'Approve Timesheet',
    //                     employee_id: user.employee_id,
    //                     activity: `Timesheet approval request for week ${formState.week} of ${formState.year}`,
    //                     activity_name: 'Update',
    //                     user: user.name,
    //                     company_id: user.company_id,
    //                 }
    //             )

    //             if (logLeave.id) {
    //                 // sendEmail(user.emailAddress, user.name, emailCase.makeRequisition);
    //                 toast.info(response.message);
    //             }
    //         }

    //     } catch (err) {
    //         toast.error("Error, try again");
    //         setFormState({ ...formState });
    //     }

    // };


    const handleSaveEntries = async (timeSheetId) => {
        try {
            if (!featureEnabled) {
                toast.error('Feature not enabled');
                return;
            }
            if(!lineManager.email){
                toast.error('You do not have a line manager, contact your admin')
                return;
            }
            sendEmail(lineManager.email, lineManager.name, emailCase.attendanceApprovalRequest);
                    toast.info('emailm sent');
            let response;
            // response = await approveTimeSheetRequest(timeSheetId);
            // if (!response.error) {
            //     const week = moment().week().toString();
            //     const year = moment().year().toString();
            //     const date = moment().format('YYYY-MM-DD');
            //     const logLeave = await createActivity(
            //         {
            //             name: 'Approve Timesheet Request',
            //             employee_id: user.employee_id,
            //             activity: `Timesheet approval request for week ${week} of ${year}, date; ${date}`,
            //             activity_name: 'Update',
            //             user: user.name,
            //             company_id: user.company_id,
            //         }
            //     )

            //     if (logLeave.id) {
            //         sendEmail(lineManager.emailAddress, user.name, emailCase.attendanceApprovalRequest);
            //         toast.info(response.message);
            //     }
            // }

        } catch (err) {
            toast.error("Error, try again");
        }

    };

    if (!featureEnabled && !loading) {
        return <FeatureNotAvailable />
    }

    if (loading ) {
        			return <Loader />
    }


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
                                </div>
                                <div className="tab-content mt-3">
                                    <div className="tab-pane fade show active" role="tabpanel">
                                        <div className="card table-card">
                                            <div className="card-header">
                                                <p style={{ fontSize: 12 }} className="card-title mx-auto">
                                                    {currentDateTime.toLocaleString('en-US', {
                                                        weekday: 'long',
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                        second: '2-digit',
                                                    })}</p>
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
                                                    {/* {!clockedIn && timeEntries.length > 0 && (
                                                        <button
                                                            style={{ width: 200, height: 50, marginLeft: 10 }}
                                                            className="btn btn-lg btn-primary"
                                                            onClick={()=>initiatePayroll()}
                                                        >
                                                            Save Entries
                                                        </button>
                                                    )} */}
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
                                                                {groupedTimeEntries[day]
                                                                    .filter((entry, index, self) => {

                                                                        return (
                                                                            index === self.findIndex((e) => e.date === entry.date)
                                                                        );
                                                                    })
                                                                    .map((entry, index) => (
                                                                        <tr key={index}>
                                                                            <td> <small className="float-left">{moment(entry.date).format('MMMM DD, YYYY, hh:mm:ss A z')}</small></td>
                                                                            <td style={{ textTransform: 'uppercase' }}>{entry.type}</td>
                                                                        </tr>
                                                                    ))}
                                                            </React.Fragment>
                                                        ))}
                                                    </tbody>

                                                </table>

                                                <div className="pagination justify-content-end">
                                                    <button
                                                        className='btn-primary btn-sm'
                                                        disabled={currentPage === 1}
                                                        onClick={() => handlePageChange(currentPage - 1)}
                                                    >
                                                        <i className="fa fa-angle-double-left"></i>
                                                    </button>
                                                    <span>{currentPage} of {totalPages}</span>
                                                    <button
                                                        className='btn-primary btn-sm'
                                                        disabled={currentPage === totalPages}
                                                        onClick={() => handlePageChange(currentPage + 1)}
                                                    >
                                                        <i className="fa fa-angle-double-right"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* <div style={{ float: 'right' }}>
                                            {timeSheetStatus === 'pending' || timeSheetStatus === undefined ?
                                                <>
                                                    <Link onClick={() => updateTimesheet()} style={{ marginRight: '10px' }} type="button" className="btn btn-outline-primary btn-sm">Save</Link>
                                                    <Link onClick={() => approvalRequest(timeSheetId)} style={{ marginRight: '10px' }} type="button" className="btn btn-primary btn-sm">Submit</Link>
                                                </>
                                                : <small className='text-success'>Timesheet Submitted</small>}
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

}
const mapStateToProps = state => ({
    fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Timesheet);