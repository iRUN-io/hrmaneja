import React, { useState, useEffect } from 'react'
import { createLeave, getEmployeeLeave } from '../../../services/leave'
import { getUser } from '../../../config/common';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import EditLeaves from './EditLeave';
import moment from 'moment';
import { createActivity } from '../../../services/activities';
import { sendEmail } from '../../../services/mail/sendMail';
import { emailCase } from '../../../enums/emailCase';
import { getAllEmployees, getEmployee } from '../../../services/employee';
import { Link, useHistory } from 'react-router-dom';
import EmptyState from '../../EmptyState';

const MyLeave = () => {
    const [leaves, setLeaves] = useState([]);
    const [user, setUser] = useState([]);
    const [employees, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [leave, setLeave] = useState([]);
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
    useEffect(() => {
        const user = getUser();
        setFormState({ ...formState, employeeId: user.id, employeeName: user.name });
    }, []);


    const createLeaveAction = async () => {
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
            const response = await createLeave(body, user.id);

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

                if (logActivity.id) {
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
        async function fetchData() {
            setLoading(true);
            const user = await getUser();
            if (user) {
                const {employee_id, company_id} = user;
                const response = await getEmployeeLeave(employee_id);
                const userResponse = await getAllEmployees(company_id);
                setLeaves(response);
                setUsers(userResponse);
                setUser(user);
                setLoading(false);
            }
        }
        fetchData();

    }, []);



    return (
        <>
            <div style={{ marginBottom: '50px' }}>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item">
                                    <Link onClick={() => history.goBack()} className="nav-link active">
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
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">My Leave Record</h3>
                                        <div className="card-options">
                                            <form>
                                                <div className="input-group">
                                                    <input type="text" className="form-control form-control-sm" placeholder="Search something..." name="s" />
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
                                                                <th>Date</th>
                                                                <th>Reason</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {leaves.map((leave) => (
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
                                                                    <span className="badge badge-warning">rejected</span>
                                                                    )}
                                                                    {leave?.status === 'pending' && (
                                                                    <span className="badge badge-primary">pending</span>
                                                                    )}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                )}
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

export default MyLeave;