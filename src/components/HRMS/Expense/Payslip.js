import React, { useState, useEffect } from 'react'
import { getAllLeaves, createLeave, deleteLeave, approveLeave, disapproveLeave } from '../../../services/leave'
import { getUser } from '../../../config/common';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import EditLeaves from './EditLeave';
import moment from 'moment';
import { createActivity } from '../../../services/activities';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { sendEmail } from '../../../services/mail/sendMail';
import { emailCase } from '../../../enums/emailCase';
import { getAllEmployees, getEmployee } from '../../../services/employee';
import { Link, useHistory } from 'react-router-dom';
import EmptyState from '../../EmptyState';

const Payslip = () => {
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

    const removeLeave = async (leaveId) => {
        try {
            const response = await deleteLeave(leaveId);

            if (!response.error) {

                const logActivity = await createActivity(
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

                if (logActivity.id) {
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

    const toggleLeave = async (leaveId, type) => {
        try {
            let response;

            if (type === 'approve') {

                response = await approveLeave(leaveId);

            } else {

                response = await disapproveLeave(leaveId);
            }

            if (!response.error) {

                const logActivity = await createActivity(
                    {
                        name: type === 'approve' ? 'Approve Leave' : 'Reject Leave',
                        employee_id: user.employee_id,
                        activity: `${user.name} ${type === 'approve' ? 'Approved' : 'Rejected'} a leave`,
                        activity_name: type === 'approve' ? 'Approval' : 'Rejection',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )

                if (logActivity.id) {
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
                const company_id = user.company_id;
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



    return (
        <>

            <div className="tab-pane fade" id="Expense-Payslip" role="tabpanel">
                <div className="card">
                    <div className="card-body">
                        <div className="media mb-4">
                            <div className="mr-3">
                                <img
                                    className="rounded"
                                    src="../assets/images/xs/avatar4.jpg"
                                    alt="fake_url" />
                            </div>
                            <div className="media-body">
                                <div className="content">
                                    <span>
                                        <strong>Order ID: </strong> C09
                                    </span>
                                    <p className="h5">
                                        John Smith{' '}
                                        <small className="float-right badge badge-primary">
                                            Jun 15, 2019
                                        </small>
                                    </p>
                                    <p>795 Folsom Ave, Suite 546 San Francisco, CA 54656</p>
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
                                <thead className="dark-mode">
                                    <tr>
                                        <th className="w60">#</th>
                                        <th />
                                        <th className="w100">Earnings</th>
                                        <th className="w100">Deductions</th>
                                        <th className="w100 text-right">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td>
                                            <span>Basic Salary</span>
                                        </td>
                                        <td>$1,500</td>
                                        <td>-</td>
                                        <td className="text-right">$380</td>
                                    </tr>
                                    <tr>
                                        <td>02</td>
                                        <td>
                                            <span>House Rent Allowance (H.R.A.)</span>
                                        </td>
                                        <td>$62</td>
                                        <td>-</td>
                                        <td className="text-right">$250</td>
                                    </tr>
                                    <tr>
                                        <td>03</td>
                                        <td>
                                            <span>Tax Deducted at Source (T.D.S.)</span>
                                        </td>
                                        <td>-</td>
                                        <td>$80</td>
                                        <td className="text-right">$120</td>
                                    </tr>
                                    <tr>
                                        <td>04</td>
                                        <td>
                                            <span>C/Bank Loan</span>
                                        </td>
                                        <td>-</td>
                                        <td>$120</td>
                                        <td className="text-right">$120</td>
                                    </tr>
                                    <tr>
                                        <td>05</td>
                                        <td>
                                            <span>Other Allowance</span>
                                        </td>
                                        <td>$121</td>
                                        <td>-</td>
                                        <td className="text-right">$120</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={2}>
                                            <span>
                                                <strong>Note:</strong> Ipsum is simply dummy text of the
                                                printing and typesetting industry.
                                            </span>
                                        </td>
                                        <td>$1683</td>
                                        <td>$200</td>
                                        <td className="text-right">
                                            <strong className="text-success">$1483.00</strong>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                            <button className="btn btn-info float-right">
                                <i className="icon-printer" /> Print
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Payslip;