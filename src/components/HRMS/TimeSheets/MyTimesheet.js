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
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { getEmployeeLeave } from '../../../services/leave';




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
    const [selectedMonthYear, setSelectedMonthYear] = useState('');
    const [leaveRange, setLeaveRange] = useState({ from: null, to: null });
    const [hasClockedInToday, setHasClockedInToday] = useState(false);
    const [hasClockedOutToday, setHasClockedOutToday] = useState(false);
    const [isLeaveUpdateApplied, setLeaveUpdateApplied] = useState(false);
    const comingSoon = false;

    console.log({allAttendance});

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
        // Fetch leave information for the user
        const fetchLeave = async () => {
            try {
                const leaveResponse = await getEmployeeLeave(user.employee_id);
    
                // Filter approved leave requests that have not passed
                const currentDate = new Date();
                const approvedLeave = leaveResponse.filter(request => 
                    request.status === 'approve' && new Date(request.to) >= currentDate
                );
    
                // Extract start and end dates of approved leave
                const leaveStartDate = approvedLeave.length > 0 ? approvedLeave[0].from : null;
                const leaveEndDate = approvedLeave.length > 0 ? approvedLeave[approvedLeave.length - 1].to : null;
    
                setLeaveRange({ from: leaveStartDate, to: leaveEndDate });
            } catch (error) {
                console.error('Error fetching leave information:', error);
            }
            
        };
    
        fetchLeave();
    }, [user.employee_id]);
    
    const isLeaveDay = (day) => {
        if (leaveRange.from && leaveRange.to) {
            const leaveFrom = moment(leaveRange.from);
            const leaveTo = moment(leaveRange.to);
            const currentDate = moment(day);

            return currentDate.isBetween(leaveFrom, leaveTo, 'day', '[]');
        }

        return false;
    };

    

    // Function to update timesheet during leave
    const updateTimesheetDuringLeave = async () => {
        const { from, to } = leaveRange;
        const startDate = moment(from);
        const endDate = moment(to);
        console.log({startDate});
    
        // Create an array of leave days
        const leaveDays = [];
        while (startDate.isSameOrBefore(endDate, 'day')) {
            leaveDays.push(startDate.format('YYYY-MM-DD'));
            startDate.add(1, 'days');
        }
    
        // Iterate over each leave day
        for (const leaveDay of leaveDays) {
            const body = {
                employee_id: user.employee_id,
                company_id: company.id,
                date: leaveDay,
                type: 'leave',
            };
            console.log({body});
            try {
                const response = await createAttendance(body);
                
    
                // Handle the response as needed
                if (!response.error) {
                    // Update local state or perform any additional actions
                    setAttendance([...allAttendance, response]);
                }
            } catch (error) {
                console.error('Error updating timesheet during leave:', error);
            }
        }
    
        // After creating leave entries, create regular timesheet entries for the days following the leave
        // const lastLeaveDate = leaveDays[leaveDays.length - 1];
        // const nextDay = moment(lastLeaveDate).add(1, 'days'); // Increment one day from the last leave day
    
        // while (nextDay.isBefore(moment())) {
        //     const body = {
        //         employee_id: user.employee_id,
        //         company_id: company.id,
        //         date: nextDay.format('YYYY-MM-DD'),
        //         type: "leave", // You can set the type based on clock in/out logic
        //     };
    
        //     try {
        //         const response = await createAttendance(body);
    
        //         // Handle the response as needed
        //         if (!response.error) {
        //             // Update local state or perform any additional actions
        //             setAttendance([...allAttendance, response]);
        //         }
        //     } catch (error) {
        //         console.error('Error updating timesheet after leave:', error);
        //     }
    
        //     nextDay.add(1, 'days'); // Move to the next day
        // }
    };
    
    useEffect(() => {
        // Call updateTimesheetDuringLeave for leave days
        if (leaveRange.from && leaveRange.to) {
            updateTimesheetDuringLeave();
        }
    }, [leaveRange]);
    
    // useEffect(() => {
    //     const updateLeaveInAndOut = async () => {
    //       await Promise.all([updateLeaveIn(), updateLeaveOut()]);
    //     };

    //     let currentDate = moment().format('YYYY-MM-DD');
      
    //     const updateLeaveIn = async () => {
    //         // Check if the current date is a leave day
    //         if (isLeaveDay(currentDate)) {
    //           // Clone the existing time entries
    //           let updatedEntries = [...timeEntries];
          
    //           // Check if there is no existing 'leaveIn' entry for the current day
    //           const leaveEntriesExist = timeEntries.some(
    //             (entry) =>
    //               entry.type === 'leaveIn' &&
    //               moment(entry.date).isSame(moment(currentDate), 'day')
    //           );
    //           console.log({ leaveEntriesExist });
          
    //           // If there is no existing 'leaveIn' entry, add a new one
    //           if (!leaveEntriesExist) {
    //             const newEntry = { date: new Date(), type: 'leaveIn' };
    //             updatedEntries.push(newEntry);
    //           } else {
    //             // If there is an existing 'leaveIn' entry, display an error message
    //             toast.error("You have already updated your leave for today.");
    //           }
          
    //           // Update the time entries state and local storage
    //           setTimeEntries(updatedEntries);
    //           localStorage.setItem('timeEntries', JSON.stringify(updatedEntries));
          
    //           // Set the state to indicate that the leave update has been applied
    //           setLeaveUpdateApplied(true);
    //         } else {
    //           // If the current date is not a leave day, display an error message and return early
    //           toast.error("You are not on leave.");
    //           return;
    //         }
    //       };
          
          
      
    //     const updateLeaveOut = async () => {
    //       await new Promise((resolve) => setTimeout(resolve, 5000)); 
      
    //       if (isLeaveDay(currentDate)) {
    //         let updatedEntries = [...timeEntries];
      
    //         const leaveEntriesExist = timeEntries.some(
    //           (entry) =>
    //             entry.type === 'leaveOut' &&
    //             moment(entry.date).isSame(moment(currentDate), 'day')
    //         );
      
    //         if (!leaveEntriesExist) {
    //           const newEntry = { date: new Date(), type: 'leaveOut' };
    //           updatedEntries.push(newEntry);
    //         } else {
    //           toast.error("You are not on leave.");
    //         }
      
    //         const week = moment().week().toString();
    //         const month = moment().month().toString();
    //         const year = moment().year().toString();
    //         const date = moment().format('YYYY-MM-DD');
      
    //         const body = {
    //           employee_id: user.employee_id,
    //           company_id: company.id,
    //           week: week,
    //           year: year,
    //           date: date,
    //           month: month,
    //           timeSheet: updatedEntries,
    //         };
      
    //         const response = await createAttendance(body);
      
    //         if (!response.error) {
    //           const logActivity = await createActivity({
    //             name: 'Update TimeSheet',
    //             employee_id: user.employee_id,
    //             activity: `${user.name} TimeSheet updated for week ${week} of ${year} | ${date}`,
    //             activity_name: 'Creation',
    //             user: user.name,
    //             company_id: user.company_id,
    //           });
      
    //           const notifyRequisition = await createNotification({
    //             name: 'Update TimeSheet',
    //             sender_id: user.employee_id,
    //             receiver_id: employee.line_manager,
    //             hr_id: hrID[0]?.employee_id,
    //             notification: `${user.name} TimeSheet updated for week ${week} of ${year} | ${date}`,
    //             notification_name: 'Creation',
    //             user: user.name,
    //             company_id: user.company_id,
    //           });
      
    //           if (logActivity.id) {
    //             setAttendance([...allAttendance, response]);
    //           }
    //         }
      
    //       // Set the state to indicate that the leave update has been applied
    //       setLeaveUpdateApplied(true);
    //     };
    //         return;
    //       }
      
          
      
    //     if (leaveRange.from && leaveRange.to && !isLeaveUpdateApplied) {
    //       updateLeaveInAndOut();
    //     }
    //   }, [leaveRange, isLeaveUpdateApplied, timeEntries, setTimeEntries]);
      
      
      
    
    
      
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
    
            const user = getUser();
            const week = moment().week().toString();
            const month = moment().month().toString();
            const year = moment().year().toString();
    
            if (user) {
                const companyData = await getCompanyData();
                setCompany(companyData);
                const employeeRecord = await getEmployee(user.employee_id);
                const lineManager = await getEmployee(employeeRecord.line_manager);
    
                setLineManager(lineManager);
                const allAttendance = await getAttendance(user.employee_id);
                setAttendance(allAttendance);
    
                // Call updateTimesheetDuringLeave for leave days
                // const approvedLeave = allAttendance.filter(request => request.status === 'approve');
                // const leaveStartDate = approvedLeave.length > 0 ? approvedLeave[0].from : null;
                // const leaveEndDate = approvedLeave.length > 0 ? approvedLeave[approvedLeave.length - 1].to : null;
                // setLeaveRange({ from: leaveStartDate, to: leaveEndDate });
    
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
    
                if (result.length > 0) {
                    localStorage.setItem('timeEntries', JSON.stringify(result[0].timeSheet));
                    setTimeEntries(result[0].timeSheet);
                }
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

        const currentDate = moment().format('YYYY-MM-DD');

        if (!hasClockInToday && !isLeaveDay(currentDate)) {
            // Clock in logic
            const newEntry = { date: new Date(), type: 'in' };
            const updatedEntries = [...timeEntries, newEntry];
            setTimeEntries(updatedEntries);
            setClockedIn(true);

            // Save time entries to local storage
            localStorage.setItem('timeEntries', JSON.stringify(updatedEntries));

            // Check if the current date is a leave day
            // if (isLeaveDay(currentDate)) {
            //     updateTimesheetDuringLeave([currentDate]);
            // }
        } else {
            toast.error("You have already clocked in today or you are on leave.");
        }
    };

    const clockOut = async () => {
        // Check if there is already a clock-out entry for the current day
        const hasClockOutToday = timeEntries.some(
            (entry) =>
                entry.type === 'out' &&
                moment(entry.date).isSame(new Date(), 'day')
        );

        const currentDate = moment().format('YYYY-MM-DD');

        if (!hasClockOutToday && !isLeaveDay(currentDate)) {
            // Clock out logic
            const newEntry = { date: new Date(), type: 'out' };
            const updatedEntries = [...timeEntries, newEntry];
            setTimeEntries(updatedEntries);
            setClockedIn(false);

            // Save time entries to local storage
            localStorage.setItem('timeEntries', JSON.stringify(updatedEntries));

            // Check if the current date is a leave day
            // if (isLeaveDay(currentDate)) {
            //     await updateTimesheetDuringLeave([currentDate]);
            // }

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
            };

            const response = await createAttendance(body);

            if (!response.error) {
                const logActivity = await createActivity({
                    name: 'Update TimeSheet',
                    employee_id: user.employee_id,
                    activity: `${user.name} TimeSheet updated for week ${week} of ${year} | ${date}`,
                    activity_name: 'Creation',
                    user: user.name,
                    company_id: user.company_id,
                });

                const notifyRequisition = await createNotification({
                    name: 'Update TimeSheet',
                    sender_id: user.employee_id,
                    receiver_id: employee.line_manager,
                    hr_id: hrID[0]?.employee_id,
                    notification: `${user.name} TimeSheet updated for week ${week} of ${year} | ${date}`,
                    notification_name: 'Creation',
                    user: user.name,
                    company_id: user.company_id,
                });

                if (logActivity.id) {
                    setAttendance([...allAttendance, response]);
                    toast.success("Timesheet updated successfully");
                }
            }

        } else {
            toast.error("You have already clocked out today or you are on leave.");
        }
    };


    const handleMonthYearChange = (event) => {
        setSelectedMonthYear(event.target.value);
      };

      const filteredTimesheet = timeEntries.filter(entry => {
        const entryMonthYear = moment(entry.date).format('YYYY-MM');
        return !selectedMonthYear || entryMonthYear === selectedMonthYear;
      });

    // Group time entries by day
    // const groupedTimeEntries = timeEntries.reduce((result, entry) => {
    //     const day = moment(entry.date).format('MMMM DD, YYYY');
    //     if (!result[day]) {
    //         result[day] = [];
    //     }
    //     result[day].push(entry);
    //     return result;
    // }, {});
    const groupedTimeEntries = filteredTimesheet.reduce((result, entry) => {
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
                                                        // disabled={clockedIn || hasClockedInToday() || isLeaveDay(moment().format('YYYY-MM-DD'))}
                                                        >
                                                            Clock Out
                                                        </button>
                                                    ) : (
                                                        <button
                                                            style={{ width: 200, height: 50 }}
                                                            className="btn btn-lg btn-danger"
                                                            // disabled={!clockedIn || hasClockedOutToday()}
                                                            // disabled={!clockedIn || hasClockedOutToday() || isLeaveDay(moment().format('YYYY-MM-DD'))}
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
                                                <div className="form-group col-md-6">
                                                        <label htmlFor="selectedMonthYear">Select Month and Year</label>
                                                        <input
                                                            type="month"
                                                            className="form-control"
                                                            id="selectedMonthYear"
                                                            onChange={handleMonthYearChange}
                                                            value={selectedMonthYear}
                                                            style={{ width: '200px' }} 
                                                        />
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