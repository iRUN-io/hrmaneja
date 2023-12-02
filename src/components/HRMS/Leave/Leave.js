import React, { useState, useEffect, useMemo } from 'react'
import { getAllLeaves, createLeave, deleteLeave, approveLeave, disapproveLeave } from '../../../services/leave'
import { getCompanyData, getUser } from '../../../config/common';
import { toast } from 'material-react-toastify';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import EditLeaves from './EditLeave';
import moment from 'moment';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { sendEmail } from '../../../services/mail/sendMail';
import { emailCase } from '../../../enums/emailCase';
import { getAllEmployees, getEmployee } from '../../../services/employee';
import { Link } from 'react-router-dom';
import EmptyState from '../../EmptyState';
import { createActivity } from '../../../services/activities';
import FeatureNotAvailable from '../../common/featureDisabled';
import { createNotification } from '../../../services/notification';


const Leave = () => {
    const [leaves, setLeaves] = useState([]);
    const [user, setUser] = useState([]);
    const [employees, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [LeavePerPage] = useState(10);
    const [loading, setLoading] = useState(false);
    const [leave,] = useState([]);
    // console.log({leaves });
    const [searchLeave, setSearchLeave] = useState('');
    const [featureEnabled, setFeatureEnabled] = useState(false);
    const [openPopoverId, setOpenPopoverId] = useState(null);
    const [approvalPopover, setApprovalPopover] = useState(false);
    const [showPopover, setShowPopover] = useState(null);
    const [cancelClicked, setCancelClicked] = useState(false);
    
    const [formState, setFormState] = useState({
        employeeId: '',
        employeeName: '',
        leaveType: '',
        fromDate: '',
        toDate: '',
        notifyEmployee: '',
        leaveReason: '',
    });
  
    
    useEffect(() => {
        const user = getUser();
        setFormState({ ...formState, employeeId: user.employee_id, employeeName: user.name });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const createLeaveAction = async () => {
        if (!featureEnabled) {
            toast.error('Feature not enabled');
            return;
        }
        try {
            setFormState({ ...formState });

            const body = {
                employeeId: formState.employeeId,
                employeeName: formState.employeeName,
                leaveType: formState.leaveType,
                fromDate: formState.fromDate,
                toDate: formState.toDate,
                company_id: user.company_id,
                notifyEmployee: formState.notifyEmployee,
                leaveReason: formState.leaveReason,
                status: 'pending',
            }
            if (body.employeeName === '' || body.leaveType === '' || body.fromDate === '' || body.toDate === '' || body.leaveReason === '') {
                toast.error('Please fill all the fields');
                return;
            }
            const response = await createLeave(body, user.employee_id);

            if (!response.error) {
                const logLeave = await createActivity(
                    {
                        name: 'Create Leave',
                        employee_id: user.employee_id,
                        activity: `${user.name} Created a new leave ; ${body.leaveType}`,
                        activity_name: 'Creation',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )
                const notifyLeave = await createNotification(
                    {
                        name: 'Create Leave',
                        sender_id: user.employee_id,
                        receiver_id: body.notifyEmployee,
                        notification: `${user.name} want's to notify you about their leave request; ${body.leaveType}`,
                        notification_name: 'Creation',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )

                if (logLeave.id) {
                    sendEmail(user.emailAddress, user.name, emailCase.createLeave);
                    if (body.notifyEmployee) {
                        const notifyEmployee = await getEmployee(body.notifyEmployee);
                        if (notifyEmployee.id) {
                            sendEmail(notifyEmployee.emailAddress, notifyEmployee.name, emailCase.notifyLeave);
                        }
                    }
                    setLeaves([...leaves, response])
                    toast.success("Leave request sent successfully");
                }
            }

            setFormState({
                employeeId: '',
                employeeName: '',
                leaveType: '',
                fromDate: '',
                toDate: '',
                notifyEmployee: '',
                leaveReason: '',
            });
        } catch (err) {
            toast.error("Error, try again");
            setFormState({ ...formState });
        }
    };

    const updateForm = (e) => {
        const { value, name } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    
    useEffect(() => {
        if (cancelClicked) {
          // Close the popover when cancelClicked is true
          setShowPopover(null);
          // Reset cancelClicked for the next interaction
          setCancelClicked(false);
        }
      }, [cancelClicked]);

      
    

    const removeLeave = async (leaveId, leaveType, receiver_id) => {
        // console.log("Leave ID to be removed:", leaveId);
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
                const notifyLeave = await createNotification(
                    {
                        name: 'Delete Leave',
                        sender_id: user.employee_id,
                        receiver_id: receiver_id,
                        notification: `${user.name} Deleted your ${leaveType}`,
                        notification_name: 'Deletion',
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
            
            setFormState({ ...formState });
        }

    };

    const handleCancelClick = () => {
        setOpenPopoverId(null);  // Close the popover when "Cancel" is clicked
      };

    const toggleLeave = async (leaveId, type, receiver_id, leaveType) => {
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

                const notifyLeave = await createNotification(
                    {
                        name: type === 'approve' ? 'Approve Leave' : 'Reject Leave',
                        sender_id: user.employee_id,
                        receiver_id: receiver_id,
                        notification: `${user.name} ${type === 'approve' ? 'Approved' : 'Rejected'} your ${leaveType}`,
                        notification_name: type === 'approve' ? 'Approval' : 'Rejection',
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
            setFormState({ ...formState });
        }

    };

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const user = await getUser();
            if (user) {
                const isAdmin = user?.role === "HR Manager";

                if(!isAdmin){window.location.href = '/'}
                const company_id = user.company_id;
                const companyData = await getCompanyData();
                companyData.settings?.features['leave'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
                const response = await getAllLeaves(company_id);
                const userResponse = await getAllEmployees(company_id);
                setLeaves(response);
                setUsers(userResponse);
                setUser(user);
                setLoading(false);

            }
        }
        fetchData();

    }, []);


	const setSearch = (e) => {
        const { value } = e.target;
        setSearchLeave(value);
    };

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

    const indexOfLastLeave = currentPage * LeavePerPage;
    const indexOfFirstLeave = indexOfLastLeave - LeavePerPage;
    const currentLeaves = allLeavesArray.slice(indexOfFirstLeave, indexOfLastLeave);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allLeavesArray.length / LeavePerPage); i++) {
        pageNumbers.push(i);
    }

    if (!featureEnabled && !loading ) {
		return <FeatureNotAvailable />
	}

    return (
        <>
            <div style={{ marginBottom: '50px' }}>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item">
                                    <Link to={'/admin/settings'} className="nav-link active">
                                        <i className="fa fa-arrow-left"></i>
                                    </Link>
                                </li>
                            </ul>
                            <div className="header-action">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Add</button>
                            </div>
                        </div>
                        <div className="tab-content mt-3">
                            <div className="tab-pane fade show active" id="Leaves-list" role="tabpanel">
                                <div className="card table-card">
                                    <div className="card-header">
                                        <h3 className="card-title">Employee Leave Record</h3>
                                        <div className="card-options">
                                            <form>
                                                <div className="input-group">
                                                    <input value={searchLeave} onChange={setSearch} type="text" className="form-control form-control-sm" placeholder="Search Leave..." name="s" />
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
                                                                        <OverlayTrigger trigger="click" placement="bottom" show={showPopover === leave.id} delay={1}
                                                                            overlay={
                                                                                <Popover id="popover-basic">
                                                                                    <Popover.Header as="p">Confirm Decline</Popover.Header>
                                                                                    <Popover.Body>
                                                                                        <div className="clearfix" >
                                                                                            <button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success" onClick={() => setCancelClicked(true)}>Cancel</button>
                                                                                            <button style={{ margin: '10px' }} onClick={() => toggleLeave(leave.id, 'reject', leave.employee_id, leave.leave_type)} type="button" className="btn btn-sm btn-danger">Disapprove</button>
                                                                                        </div>
                                                                                    </Popover.Body>
                                                                                </Popover>
                                                                            }>
                                                                            <button type="button" className="btn btn-icon js-sweetalert" title="Approve" data-type="confirm" onClick={() => setShowPopover(leave.id)}><i className="fa fa-close text-warning" /></button>
                                                                        </OverlayTrigger>
                                                                        )}
                                                                        {(leave.status === 'pending' || leave.status === 'disapprove') && (
                                                                        <OverlayTrigger trigger="click" placement="bottom" show={showPopover === leave.id} delay={1} 
                                                                            overlay={ 
                                                                                <Popover id="popover-basic">
                                                                                    <Popover.Header as="p">Confirm Approval</Popover.Header>
                                                                                    <Popover.Body>
                                                                                        <div className="clearfix" >
                                                                                            <button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success" onClick={() => setCancelClicked(true)}>Cancel</button>
                                                                                            <button style={{ margin: '10px' }} onClick={() => toggleLeave(leave.id, 'approve', leave.employee_id, leave.leave_type)} type="button" className="btn btn-sm btn-danger">Approve</button>
                                                                                        </div>
                                                                                    </Popover.Body>
                                                                                </Popover>
                                                                            }>
                                                                            <button type="button" className="btn btn-icon js-sweetalert" title="Approve" data-type="confirm" onClick={() => setShowPopover(leave.id)}><i className="fa fa-check text-success" /></button>
                                                                        </OverlayTrigger>
                                                                        )}
                                                                        <OverlayTrigger    trigger="click"  placement="bottom" show={openPopoverId === leave.id} onHide={() => setOpenPopoverId(null)} overlay={
                                                                            <Popover id="popover-basic">
                                                                                <Popover.Header as="p">Confirm Delete</Popover.Header>
                                                                                <Popover.Body>
                                                                                    <div className="clearfix">
                                                                                        <button
                                                                                            style={{ margin: '10px' }}
                                                                                            type="button"
                                                                                            className="btn btn-sm btn-success"
                                                                                            onClick={() => setOpenPopoverId(null)}
                                                                                        >
                                                                                            Cancel
                                                                                        </button>
                                                                                        <button
                                                                                            style={{ margin: '10px' }}
                                                                                            onClick={() => removeLeave(leave.id, leave.leave_type, leave.employee_id)}
                                                                                            type="button"
                                                                                            className="btn btn-sm btn-danger"
                                                                                        >
                                                                                            Delete
                                                                                        </button>
                                                                                    </div>
                                                                                </Popover.Body>
                                                                            </Popover>
                                                                        }
                                                                    >
                                                                        <button type="button" className="btn btn-icon js-sweetalert" title="Delete" data-type="confirm" onClick={() => setOpenPopoverId(leave.id)}>
                                                                            <i className="fa fa-trash-o text-danger" />
                                                                        </button>
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

            </div>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Request Leave</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        {/* update form */}
                        <div className="modal-body">
                            <div className="row clearfix">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <select name='leaveType' value={formState?.leaveType}
                                            onChange={updateForm} required className="form-control show-tick ms select2" data-placeholder="Select">
                                            <option>Leave Type</option>
                                            <option value="Sick Leave">Sick Leave</option>
                                            <option value="Paid Leave">Paid Leave</option>
                                            <option value="Rest Leave">Rest Leave</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea onChange={updateForm} className='form-control' name='leaveReason' value={formState?.leaveReason} />
                                    </div>
                                </div>
                                {/* date input from and to */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                            </div>
                                            <input type="date" className="form-control" name='fromDate' value={formState?.fromDate} onChange={updateForm} />
                                            <input type="date" className="form-control" name='toDate' value={formState?.toDate} onChange={updateForm} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <select name='notifyEmployee' value={formState?.notifyEmployee}
                                            onChange={updateForm} required className="form-control show-tick ms select2" data-placeholder="Select">
                                            <option>Notify Employee</option>
                                            {employees.map((user) => (

                                                <option key={user.id} value={user.id}>{user.name}</option>

                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={() => createLeaveAction()} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Update Modal */}
            <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Leave</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        <EditLeaves leave={leave} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Leave;