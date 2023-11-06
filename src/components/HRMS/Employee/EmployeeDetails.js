
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
    statisticsAction,
    statisticsCloseAction
} from "../../../actions/settingsAction";
import { formatMoney, getUser } from '../../../config/common';
import { createActivity, getActivity } from '../../../services/activities';
import EmptyState from '../../EmptyState';
import Skeleton from 'react-loading-skeleton'
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { toast } from 'material-react-toastify';
import { approveLeave, deleteLeave, disapproveLeave, getEmployeeLeave,  } from '../../../services/leave';
import { sendEmail } from '../../../services/mail/sendMail';
import { emailCase } from '../../../enums/emailCase';
import { getEmployeeRequisition } from '../../../services/expense';
import { getAttendance } from '../../../services/attendance';



// import 'react-toastify/dist/ReactToastify.css';
const EmployeeDetails = (employee) => {

    const { location } = employee;
    const { state } = location;
    const employeeData = state.employee[0];

    if (!employeeData) {
        window.location.href = "/hr-employees";
    }

    const [activities, setActivities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageActivities, setCurrentPageActivities] = useState(1);
    const [currentPageLeaves, setCurrentPageLeaves] = useState(1);
    const [ActivityPerPage] = useState(8);
    const [searchActivity, setSearchActivity] = useState('');
    const [loading, setLoading] = useState(false);
    const [LeavePerPage] = useState(8);
    const [leaves, setLeaves] = useState([]);
    const [searchLeave, setSearchLeave] = useState('');
    const [featureEnabled, setFeatureEnabled] = useState(false);
    const [user, setUser] = useState([]);
    const [requisitions, setRequisitions] = useState([]);
    const [RequisitionsPerPage] = useState(8);
    const [searchExpense, setSearchExpense] = useState('');
    const [currentPageRequisition, setCurrentPageRequisition] = useState(1);
    const [attendance, setAttendance] = useState([]);
    const [timeEntries, setTimeEntries] = useState([]);

    const removeLeave = async (leaveId) => {
        if (!featureEnabled) {
            toast.error('Feature not enabled');
            return;
        }
        try {
            const response = await deleteLeave(leaveId);

            if (!response.error) {

                const logLeave = await createActivity(
                    {
                        name: 'Delete Leave',
                        employee_id: user.employee_id,
                        activity: `${user.name} Deleted a leave`,
                        activity_name: 'Deletion',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )

                setLeaves(leaves.filter(leave => leave.id !== leaveId));

                toast.info("Leave request deleted successfully");

                if (logLeave.id) {
                    const newLeaves = leaves.filter(leave => leave.id !== leaveId);
                    setLeaves(newLeaves);
                    sendEmail(user.emailAddress, user.name, emailCase.deleteLeave);
                }
            }

        } catch (err) {
            toast.error("Error, try again");
        }

    };

    const toggleLeave = async (leaveId, type) => {
        try {
            if (!featureEnabled) {
                toast.error('Feature not enabled');
                return;
            }
            let response;

            if (type === 'approve') {

                response = await approveLeave(leaveId);

            } else {

                response = await disapproveLeave(leaveId);
            }

            if (!response.error) {

                const logLeave = await createActivity(
                    {
                        name: type === 'approve' ? 'Approve Leave' : 'Reject Leave',
                        employee_id: user.employee_id,
                        activity: `${user.name} ${type === 'approve' ? 'Approved' : 'Rejected'} a leave`,
                        activity_name: type === 'approve' ? 'Approval' : 'Rejection',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )

                if (logLeave.id) {
                    if (type === 'approve') {
                        sendEmail(user.emailAddress, user.name, emailCase.approveLeave);
                        const newLeaves = leaves.map(leave => {
                            if (leave.id === leaveId) {
                                leave.status = 'approve'
                            }
                            return leave;
                        });
                        setLeaves(newLeaves);
                    } else {
                        const newLeaves = leaves.map(leave => {
                            if (leave.id === leaveId) {
                                leave.status = 'disapprove'
                            }
                            return leave;
                        });
                        setLeaves(newLeaves);
                        sendEmail(user.emailAddress, user.name, emailCase.rejectLeave);
                    }
                    toast.info(response.message);
                }
            }

        } catch (err) {
            toast.error("Error, try again");
        }

    };

    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            const user = await getUser();
            const isAdmin = user?.role === "HR Manager";
            setUser(user)

	        if(!isAdmin){window.location.href = '/'}
            
            if (user) {
                // const company_id = user.company_id;
                const activity = await getActivity(employeeData.id);
                const leave = await getEmployeeLeave(employeeData.id)
                const requisition = await getEmployeeRequisition(employeeData.id)
                const allAttendance = await getAttendance(employeeData.id);
                // companyData.settings?.features['activity'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
                setActivities(activity);
                setLeaves(leave)
                setRequisitions(requisition)
                setAttendance(allAttendance);
                setLoading(false);
            }

            
        }
        fetchData();
    }, []);

    // Group time entries by day
    const groupedTimeEntries = attendance.reduce((result, entry) => {
        const day = moment(entry.date).format('MMMM DD, YYYY');
        if (!result[day]) {
            result[day] = [];
        }
        result[day].push(entry);
        return result;
    }, {});

    // State to manage the current page
    
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

    const activitySearch = (e) => {
        const { value } = e.target;
        setSearchActivity(value);
    };
    const leaveSearch = (e) => {
        const { value } = e.target;
        setSearchLeave(value);
    };

    const setSearch = (e) => {
        const { value } = e.target;
        setSearchExpense(value);
    };

    const getActivityBySearchQuery = (
        activities,
        searchQuery,
    ) => {
        return activities.filter(activity =>
            activity.name.toLowerCase().includes(searchQuery.toLowerCase())
            || activity.activity.toLowerCase().includes(searchQuery.toLowerCase())
            || activity.activity_name.toLowerCase().includes(searchQuery.toLowerCase())
            || activity.user.toLowerCase().includes(searchQuery.toLowerCase())

        );
    };

    const allActivitiesArray = useMemo(() => {
        let allActivities = activities;
        if (searchActivity) {
            allActivities = getActivityBySearchQuery(allActivities, searchActivity);
        }

        return allActivities || [];
    }, [activities, searchActivity]);

    const getLeaveBySearchQuery = (
        leaves,
        searchQuery,
    ) => {
        return leaves.filter(leave =>
			leave.employee.toLowerCase().includes(searchQuery.toLowerCase()) 
			|| leave.leave_type.toLowerCase().includes(searchQuery.toLowerCase()) 
			|| leave.status.toLowerCase().includes(searchQuery.toLowerCase())
			|| leave.reason.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const allLeavesArray = useMemo(() => {
        let allLeaves = leaves;
        if (searchLeave) {
            allLeaves = getLeaveBySearchQuery(allLeaves, searchLeave);
        }

        return allLeaves || [];
    }, [leaves, searchLeave]);

    const getExpenseBySearchQuery = (
        expenses,
        searchQuery,
    ) => {
        return expenses.filter(expense =>
			expense.amount.toLowerCase().includes(searchQuery.toLowerCase()) 
			|| expense.category.toLowerCase().includes(searchQuery.toLowerCase()) 
			|| expense.status.toLowerCase().includes(searchQuery.toLowerCase())
			|| expense.note.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const allExpensesArray = useMemo(() => {
        let allExpenses = requisitions;
        if (searchExpense) {
            allExpenses = getExpenseBySearchQuery(allExpenses, searchExpense);
        }

        return allExpenses || [];
    }, [requisitions, searchExpense]);

    const indexOfLastActivity = currentPageActivities * ActivityPerPage;
    const indexOfFirstActivity = indexOfLastActivity - ActivityPerPage;
    const currentActivity = allActivitiesArray.slice(indexOfFirstActivity, indexOfLastActivity);

    const indexOfLastLeave = currentPageLeaves * LeavePerPage;
    const indexOfFirstLeave = indexOfLastLeave - LeavePerPage;
    const currentLeaves = allLeavesArray.slice(indexOfFirstLeave, indexOfLastLeave);

    const indexOfLastRequisitions = currentPage * RequisitionsPerPage;
    const indexOfFirstRequisitions = indexOfLastRequisitions - RequisitionsPerPage;
    const currentRequisitions = allExpensesArray.slice(indexOfFirstRequisitions, indexOfLastRequisitions);

    // Activities Pagination Functions
    const paginateActivities = (pageNumber) => setCurrentPageActivities(pageNumber);
    const nextPageActivities = () => setCurrentPageActivities(currentPageActivities + 1);
    const prevPageActivities = () => setCurrentPageActivities(currentPageActivities - 1);

    // Leaves Pagination Functions
    const paginateLeaves = (pageNumber) => setCurrentPageLeaves(pageNumber);
    const nextPageLeaves = () => setCurrentPageLeaves(currentPageLeaves + 1);
    const prevPageLeaves = () => setCurrentPageLeaves(currentPageLeaves - 1);

    // Requisition Pagination Functions
    const paginateRequisite = pageNumber => setCurrentPageRequisition(pageNumber);
    const nextPageRequisite = () => setCurrentPageRequisition(currentPageRequisition + 1);
    const prevPageRequisite = () => setCurrentPageRequisition(currentPageRequisition - 1);

    const pageActivityNumbers = [];
    for (let i = 1; i <= Math.ceil(allActivitiesArray.length / ActivityPerPage); i++) {
        pageActivityNumbers.push(i);
    }

    const pageLeaveNumbers = [];
    for (let i = 1; i <= Math.ceil(allLeavesArray.length / LeavePerPage); i++) {
        pageLeaveNumbers.push(i);
    }

    const pageRequisitionNumbers = [];
    for (let i = 1; i <= Math.ceil(allExpensesArray.length / RequisitionsPerPage); i++) {
        pageRequisitionNumbers.push(i);
    }

    const successActivities = [
        'Completion',
        'Creation',
        'Completion',
        'Updating',
        'Update Password',
        'Update Profile',
        'Approval',
        'Paid for subscription'
    ];
    return (
        <>
            <div className="section-body">
                <div className="container-fluid">
                    <div className="">
                    <ul className="nav nav-tabs page-header-tab">
                    <li className="nav-item">
                        <Link to={'/admin/hr-employees'} className="nav-link active">
                            <i className="fa fa-arrow-left"></i>
                        </Link>
                        </li>
                    </ul>
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media mb-4">
                                            {employeeData.gender === 'Female' ? (
                                                <img
                                                    className="avatar avatar-xl mr-3"
                                                    src="../assets/images/sm/avatar1.jpg"
                                                    alt={employeeData.name}
                                                />
                                            ) : (
                                                <img
                                                    className="avatar avatar-xl mr-3"
                                                    src="../assets/images/sm/avatar2.jpg"
                                                    alt={employeeData.name}

                                                />
                                            )}
                                            <div className="media-body">
                                                <h5 className="m-0">{employeeData.name}</h5>
                                                <p className="text-muted mb-0">{employeeData.role}</p>
                                            </div>
                                        </div>
                                        <p className="mb-4">
                                            <span>{employeeData.phone}</span><br />
                                            <a href={`mailto:${employeeData.email}`}>{employeeData.email}</a><br />
                                            <span>{employeeData.country}</span>
                                        </p>
                                        <button style={{ marginRight: '10px' }} className="btn btn-outline-primary btn-sm">
                                            <a href={`mailto:${employeeData.email}`}><span className="fa fa-envelope" /></a>
                                        </button>

                                        <button className="btn btn-outline-primary btn-sm">
                                            <a href={`tel:${employeeData.phone}`}><span className="fa fa-phone" /></a>
                                        </button>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className='card-header'>
                                        Salary Details
                                    </div>
                                    <div className="card-body">
                                        <div className="media-body">
                                            <h5 className="m-0">{employeeData.bank_account_name}</h5>
                                            <p className="text-muted mb-0">{employeeData.bank_account_number}</p>
                                            <p className="text-muted mb-0">{employeeData.bank_name}</p>
                                            <p className="text-muted mb-0">{formatMoney(employeeData.salary)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='card'>
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
                                <div className="card disabled-card">
                                    <div className='card-header'>
                                        Send Message
                                    </div>
                                    <div className="card-body">
                                        <div className="media mb-4">
                                            <div className="media-body">
                                                <div className="form-group">
                                                    <label className="form-label">Subject</label>
                                                    <input type="text" className="form-control" placeholder="Subject" />

                                                    <label className="form-label">Message</label>
                                                    <textarea className="form-control" rows="5" placeholder="Message" />

                                                    <button style={{ marginTop: '10px' }} className="btn btn-outline-primary btn-sm">
                                                        <span className="fa fa-send" /> Send Message
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-8 col-md-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="tab-content mt-3">
                                                        <div className="tab-pane fade show active" id="Leaves-list" role="tabpanel">
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <h3 className="card-title">Employee Leave Record</h3>
                                                                    <div className="card-options">
                                                                        <form>
                                                                            <div className="input-group">
                                                                                <input value={searchLeave} onChange={leaveSearch} type="text" className="form-control form-control-sm" placeholder="Search Leave..." name="s" />
                                                                                <span className="input-group-btn ml-2"><button className="btn btn-icon"><span className="fe fe-search" /></button></span>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                {currentLeaves.length === 0 && !loading ? (
                                                                    <EmptyState />
                                                                ) : (
                                                                    <div className="card-body">
                                                                        <div className="table-responsive">

                                                                            {loading ? (
                                                                                <Skeleton count={4} height={50} />
                                                                            ) : (
                                                                                <table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th>#</th>
                                                                                            <th>Name</th>
                                                                                            <th>Leave Type</th>
                                                                                            <th>Duration</th>
                                                                                            <th>Reason</th>
                                                                                            <th>Status</th>
                                                                                            <th>Action</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        {currentLeaves.map((leave) => (
                                                                                            <tr key={leave.id}>
                                                                                                <td className="width45">
                                                                                                    <span
                                                                                                        className="avatar avatar-orange"
                                                                                                        data-toggle="tooltip"
                                                                                                        title="Avatar Name"
                                                                                                    >
                                                                                                        {leave.employee?.charAt(0).toUpperCase()}
                                                                                                    </span>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <div className="font-15">{leave.employee}</div>
                                                                                                </td>

                                                                                                <td>
                                                                                                    <span>{leave.leave_type}</span>
                                                                                                </td>

                                                                                                <td> {moment(leave.from).format('MMM Do YYYY')} To {moment(leave.to).format('MMM Do YYYY')}</td>
                                                                                                <td>{leave.reason}</td>
                                                                                                <td> {leave.status === 'approve' && ( 
                                                                                                <span className="badge badge-success">approved</span>
                                                                                                )}
                                                                                                {leave.status === 'disapprove' && (
                                                                                                <span className="badge badge-danger">rejected</span>
                                                                                                )}
                                                                                                {leave.status === 'pending' && (
                                                                                                <span className="badge badge-grey">pending</span>
                                                                                                )}
                                                                                                </td>

                                                                                                <td>
                                                                                                    {leave.status === 'approve'  &&  ( 
                                                                                                    <OverlayTrigger trigger="focus" placement="bottom" delay={1}
                                                                                                        overlay={
                                                                                                            <Popover id="popover-basic">
                                                                                                                <Popover.Header as="p">Confirm Decline</Popover.Header>
                                                                                                                <Popover.Body>
                                                                                                                    <div className="clearfix" >
                                                                                                                        <button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success">Cancel</button>
                                                                                                                        <button style={{ margin: '10px' }} onClick={() => toggleLeave(leave.id, 'reject')} type="button" className="btn btn-sm btn-danger">Disapprove</button>
                                                                                                                    </div>
                                                                                                                </Popover.Body>
                                                                                                            </Popover>
                                                                                                        }>
                                                                                                        <button type="button" className="btn btn-icon js-sweetalert" title="Approve" data-type="confirm"><i className="fa fa-close text-warning" /></button>
                                                                                                    </OverlayTrigger>
                                                                                                    )}
                                                                                                    {(leave.status === 'pending' || leave.status === 'disapprove') && (
                                                                                                    <OverlayTrigger trigger="focus" placement="bottom" delay={1}
                                                                                                        overlay={ 
                                                                                                            <Popover id="popover-basic">
                                                                                                                <Popover.Header as="p">Confirm Approval</Popover.Header>
                                                                                                                <Popover.Body>
                                                                                                                    <div className="clearfix" >
                                                                                                                        <button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success">Cancel</button>
                                                                                                                        <button style={{ margin: '10px' }} onClick={() => toggleLeave(leave.id, 'approve')} type="button" className="btn btn-sm btn-danger">Approve</button>
                                                                                                                    </div>
                                                                                                                </Popover.Body>
                                                                                                            </Popover>
                                                                                                        }>
                                                                                                        <button type="button" className="btn btn-icon js-sweetalert" title="Approve" data-type="confirm"><i className="fa fa-check text-success" /></button>
                                                                                                    </OverlayTrigger>
                                                                                                    )}
                                                                                                    <OverlayTrigger trigger="focus" placement="bottom" delay={1}
                                                                                                        overlay={
                                                                                                            <Popover id="popover-basic">
                                                                                                                <Popover.Header as="p">Confirm Delete</Popover.Header>
                                                                                                                <Popover.Body>
                                                                                                                    <div className="clearfix" >
                                                                                                                        <button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success">Cancel</button>
                                                                                                                        <button style={{ margin: '10px' }} onClick={() => removeLeave(leave.id)} type="button" className="btn btn-sm btn-danger">Delete</button>
                                                                                                                    </div>
                                                                                                                </Popover.Body>
                                                                                                            </Popover>
                                                                                                        }>
                                                                                                        <button type="button" className="btn btn-icon js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                                                                                                    </OverlayTrigger>
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
                                                                                        <button className="btn btn-sm btn-primary" onClick={prevPageLeaves} disabled={currentPageLeaves === 1 ? true : false}><i className="fa fa-angle-double-left"></i></button>
                                                                                    </li>
                                                                                    {pageLeaveNumbers.map(number => (
                                                                                        <li key={number} className="page-item" style={{ marginRight: '5px' }}>
                                                                                            <button onClick={() => paginateLeaves(number)} className={currentPageLeaves === number ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline-primary'}>{number}</button>
                                                                                        </li>
                                                                                    ))}
                                                                                    <li className="page-item">
                                                                                        <button className="btn btn-sm btn-primary" onClick={nextPageLeaves} disabled={currentPageLeaves === pageLeaveNumbers.length ? true : false}><i className="fa fa-angle-double-right"></i></button>
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
                                            <div className="tab-content mt-3">
									<div className="tab-pane fade show active" id="Expense-Salary" role="tabpanel">
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Expenses</h3>
												<div className="card-options">
													<form>
														<div className="input-group">
															<input
																type="text"
																className="form-control form-control-sm"
																placeholder="Search expense..."
																value={searchExpense}
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
											{requisitions.length === 0 && !loading ? (
												<EmptyState />
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
																		<th className="w200">Employee</th>
																		<th className="w200">Category</th>
																		<th className="w60">Due Date</th>
																		<th className="w60">Amount</th>
																		<th className="w60">Status</th>
																		{/* <th className="w200">Action</th> */}
																	</tr>
																</thead>
																<tbody>

																	{currentRequisitions.map((request, index) => (
																		<tr key={index}>
																			<td>
																				<div className="d-flex align-items-center">
																					<span
																						className="avatar avatar-pink"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Avatar Name"
																					>
																						{(request.employee ? request.employee[0] + request.employee[1] : '').toUpperCase()}
																					</span>
																					<div className="ml-3">
																						<a href="#">{request.employee}</a>
																						<p className="mb-0">{request.note}</p>
																					</div>
																				</div>
																			</td>
																			<td>{request.category}</td>
																			<td>{moment(request.dueDate).format('MMM Do YYYY')}</td>
																			<td>{formatMoney(request.amount)}</td>
																			<td>
																				{request.status === 'approve' && (
																					<span className="badge badge-success">approved</span>
																				)}
																				{request.status === 'disapprove' && (
																					<span className="badge badge-danger">rejected</span>
																				)}
																				{request.status === 'pending' && (
																					<span className="badge badge-grey">pending</span>
																				)}
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
																<button className="btn btn-sm btn-primary" onClick={prevPageRequisite} disabled={currentPageRequisition === 1 ? true : false}><i className="fa fa-angle-double-left"></i></button>
															</li>
															{pageRequisitionNumbers.map(number => (
																<li key={number} className="page-item" style={{ marginRight: '5px' }}>
																	<button onClick={() => paginateRequisite(number)} className={currentPageRequisition === number ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline-primary'}>{number}</button>
																</li>
															))}
															<li className="page-item">
																<button className="btn btn-sm btn-primary" onClick={nextPageRequisite} disabled={currentPageRequisition === pageRequisitionNumbers.length ? true : false}><i className="fa fa-angle-double-right"></i></button>
															</li>
														</ul>
													</nav>
												</div>
											</div>
											)}
										</div>
									</div>
								</div>
                                <div className="card">
                                    <div className="card-body">
                                    <div className="card-options" style={{marginBottom: '20px', marginLeft: '10px'}}>
                                        <form>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    onChange={activitySearch}
                                                    value={searchActivity}
                                                    className="form-control form-control-sm"
                                                    placeholder="Search Activity..."
                                                    name="" />

                                            </div>
                                        </form>
                                    </div>
                                        <ul className="new_timeline mt-3">
                                            {currentActivity.map((activity, index) => (
                                                <li key={index}>
                                                    <div className={`bullet ${successActivities.includes(activity.activity_name) ? 'green' : 'pink'}`} />
                                                    <div className="time">{moment(activity.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                                                    <div className="desc">
                                                        <h3>{activity.activity_name}</h3>
                                                        <h4>{activity.activity}</h4>
                                                    </div>
                                                </li>
                                            ))}
                                            <div className=''>
                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination justify-content-end">
                                                        <li className="page-item" style={{ marginRight: '5px' }}>
                                                            <button className="btn btn-sm btn-primary" onClick={prevPageActivities} disabled={currentPageActivities === 1 ? true : false}><i className="fa fa-angle-double-left"></i></button>
                                                        </li>
                                                        {pageActivityNumbers.map(number => (
                                                            <li key={number} className="page-item" style={{ marginRight: '5px' }}>
                                                                <button onClick={() => paginateActivities(number)} className={currentPageActivities === number ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline-primary'}>{number}</button>
                                                            </li>
                                                        ))}
                                                        <li className="page-item">
                                                            <button className="btn btn-sm btn-primary" onClick={nextPageActivities} disabled={currentPageActivities === pageActivityNumbers.length ? true : false}><i className="fa fa-angle-double-right"></i></button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    fixNavbar: state.settings.fixNavbar,
    statisticsOpen: state.settings.isStatistics,
    statisticsClose: state.settings.isStatisticsClose
});

const mapDispatchToProps = dispatch => ({
    statisticsAction: e => dispatch(statisticsAction(e)),
    statisticsCloseAction: e => dispatch(statisticsCloseAction(e))
});
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);
