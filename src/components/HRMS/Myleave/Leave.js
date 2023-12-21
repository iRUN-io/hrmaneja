import React, { useState, useEffect, useMemo } from 'react'
import { createLeave, getEmployeeLeave } from '../../../services/leave'
import { getCompanyData, getUser } from '../../../config/common';
import { toast } from 'material-react-toastify';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import moment from 'moment';
import { createActivity } from '../../../services/activities';
import { sendEmail } from '../../../services/mail/sendMail';
import { emailCase } from '../../../enums/emailCase';
import { getAllEmployees, getEmployee } from '../../../services/employee';
import { Link, useHistory } from 'react-router-dom';
import EmptyState from '../../EmptyState';
import FeatureNotAvailable from '../../common/featureDisabled';
import { createNotification } from '../../../services/notification';
import { getAllUsers } from '../../../services/user';


const MyLeave = () => {
    const [leaves, setLeaves] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [LeavePerPage] = useState(10);
    const [user, setUser] = useState([]);
    const [employees, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchLeave, setSearchLeave] = useState('');
    const [featureEnabled, setFeatureEnabled] = useState(false);
    const [AllUsers, setAllUsers] = useState([]);
    const [formState, setFormState] = useState({
        employeeId: '',
        employeeName: '',
        leaveType: '',
        fromDate: '',
        toDate: '',
        notifyEmployee: '',
        leaveReason: '',
    });
    const history = useHistory();
    console.log({employees});
    useEffect(() => {
        const user = getUser();
        setFormState({ ...formState, employeeId: user.id, employeeName: user.name });
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
                employeeId: user.employee_id,
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
                const logActivity = await createActivity(
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
                        hr_id: AllUsers[0]?.employee_id,
                        notification: `${user.name} want's to notify you about their leave request; ${body.leaveType}`,
                        notification_name: 'Creation',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )

                if (logActivity.id) {
                    sendEmail(user.emailAddress, user.name, emailCase.createLeave);
                    if (body.notifyEmployee) {
                        const notifyEmployee = await getEmployee(body.notifyEmployee);
                        if (notifyEmployee.id) {
                            sendEmail(notifyEmployee.email, notifyEmployee.name, emailCase.notifyLeave);
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
        async function fetchData() {
            setLoading(true);
            const user = await getUser();
            if (user) {
                const {employee_id, company_id} = user;
                const companyData = await getCompanyData();
                companyData.settings?.features['leave'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
                
                const response = await getEmployeeLeave(employee_id);
                const userResponse = await getAllEmployees(company_id);
                
                const allUsers = await getAllUsers(company_id);
                const filteredAllUsers = allUsers.filter(
                    (allUser) => allUser.role === "HR Manager"
                  );
                setAllUsers(filteredAllUsers)
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
                                    <Link to={'/'} className="nav-link active">
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
                                        <h3 className="card-title">My Leave Record</h3>
                                        <div className="card-options">
                                            <form>
                                                <div className="input-group">
                                                    <input value={searchLeave} onChange={setSearch} type="text" className="form-control form-control-sm" placeholder="Search leave..." name="s" />
                                                    <span className="input-group-btn ml-2"><button className="btn btn-icon"><span className="fe fe-search" /></button></span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {leaves.length === 0 && !loading ? (
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
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {currentLeaves.map((leave) => (
                                                                <tr key={leave?.id}>
                                                                    <td className="width45">
                                                                        <span
                                                                            className="avatar avatar-orange"
                                                                            data-toggle="tooltip"
                                                                            title="Avatar Name"
                                                                        >
                                                                            {leave?.employee?.charAt(0).toUpperCase()}
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <div className="font-15">{leave?.employee}</div>
                                                                    </td>

                                                                    <td>
                                                                        <span>{leave?.leave_type}</span>
                                                                    </td>

                                                                    <td> {moment(leave?.from).format('MMM Do YYYY')} To {moment(leave?.to).format('MMM Do YYYY')}</td>
                                                                    <td>{leave?.reason}</td>
                                                                    <td> {leave?.status === 'approve' && ( 
                                                                    <span className="badge badge-success">approved</span>
                                                                    )}
                                                                    {leave?.status === 'disapprove' && (
                                                                    <span className="badge badge-danger">rejected</span>
                                                                    )}
                                                                    {leave?.status === 'pending' && (
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
                                        <label>Leave Type</label>
                                        <select name='leaveType' value={formState?.leaveType}
                                            onChange={updateForm} required className="form-control show-tick ms select2" data-placeholder="Select">
                                            <option>Select Type</option>
                                            <option value="Sick Leave">Sick Leave</option>
                                            <option value="Paid Leave">Paid Leave</option>
                                            <option value="Rest Leave">Rest Leave</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Leave Reason</label>
                                        <textarea onChange={updateForm} className='form-control' name='leaveReason' value={formState?.leaveReason} />
                                    </div>
                                </div>
                                {/* date input from and to */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <label>Leave Duration (From | To)</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                            </div>
                                            <input type="date" aria-label='fromDate' className="form-control" name='fromDate' value={formState?.fromDate} onChange={updateForm} />

                                            <input type="date" className="form-control" name='toDate' value={formState?.toDate} onChange={updateForm} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Notify Employee</label>
                                        <select name='notifyEmployee' value={formState?.notifyEmployee}
                                            onChange={updateForm} required className="form-control show-tick ms select2" data-placeholder="Select">
                                            <option>Select Employee</option>
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
                            <button onClick={() => createLeaveAction()} className="btn btn-primary">Send Request</button>
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
                        {/* <EditLeaves leave={leave} /> */}
                    </div>
                </div>
            </div>

        </>
    );
}

export default MyLeave;