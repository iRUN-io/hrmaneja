import React, { useState, useEffect } from 'react'
import { getAllLeaves, createLeave, deleteLeave } from '../../../services/leave'
import { getAllUsers } from '../../../services/user'
import { getUser } from '../../../config/common';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { OverlayTrigger, Popover } from 'react-bootstrap';
import EditLeaves from './EditLeave';
import { getEmployeeById } from '../Employee/Employee';
import moment from 'moment';

const Leave = () => {
    const [leaves, setLeaves] = useState([]);
    const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);
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

    useEffect(() => {
        const user = getUser();
        setFormState({ ...formState, employeeId: user.id, employeeName: user.name });
    }, []);

    console.log('formState', formState)

    const createLeaveAction = async () => {
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
                status: 'Pending',
            }
            if (body.employeeName === '' || body.leaveType === '' || body.fromDate === '' || body.toDate === '' || body.leaveReason === '') {
                toast.error('Please fill all the fields');
                return;
            }
            const response = await createLeave(body, user.id);

            if (!response.error) {
                toast.success("Leave created successfully");
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
        // console.log(body)
    };

    const updateForm = (e) => {
        const { value, name } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
        // console.log(value)
    };

    const removeLeave = async (leaveId) => {
        try {
            const response = await deleteLeave(leaveId);

            if (response.message) {
                toast.info(response.message);
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
                const userId = user.id;
                const response = await getAllLeaves(userId);
                const userResponse = await getAllUsers(userId);
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
                <ToastContainer />
                <div>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item"><a className="nav-link active" id="Leaves-tab" data-toggle="tab" href="#Leaves-list">List</a></li>
                            </ul>
                            <div className="header-action">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="tab-content mt-3">
                            <div className="tab-pane fade show active" id="Leaves-list" role="tabpanel">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Leaves List</h3>
                                        <div className="card-options">
                                            <form>
                                                <div className="input-group">
                                                    <input type="text" className="form-control form-control-sm" placeholder="Search something..." name="s" />
                                                    <span className="input-group-btn ml-2"><button className="btn btn-icon"><span className="fe fe-search" /></button></span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
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
                                                            {/* <th>Employee ID</th> */}
                                                            <th>Leave Type</th>
                                                            <th>Date</th>
                                                            <th>Reason</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {leaves.map((leave) => (
                                                            <tr>
                                                                <td className="width45">
                                                                    <span
                                                                        className="avatar avatar-orange"
                                                                        data-toggle="tooltip"
                                                                        title="Avatar Name"
                                                                    >
                                                                        {leave.employee.charAt(0).toUpperCase()}
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
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-icon btn-sm"
                                                                        title="Approved"
                                                                    >
                                                                        <i className="fa fa-check text-success" />
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-icon btn-sm js-sweetalert"
                                                                        title="Delete"
                                                                        data-type="confirm"
                                                                        onClick={() => removeLeave(leave.id)}
                                                                    >
                                                                        <i className="fa fa-trash-o text-danger" />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            )}
                                        </div>
                                    </div>
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
                            <h5 className="modal-title" id="exampleModalLabel">Add Leave</h5>
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
                                            {users.map((user) => (
                                                <>
                                                    <option value={user.id}>{user.name}</option>
                                                </>
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