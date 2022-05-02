import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { connect } from 'react-redux';
import {
    statisticsAction,
    statisticsCloseAction
} from '../../../actions/settingsAction';
import { getAllEmployees, createEmployee } from '../../../services/employee';
import { getAllUsers } from '../../../services/user'
import { getUser } from '../../../config/common';
import { ToastContainer, toast } from 'react-toastify';
import LeaveRequest from './LeaveRequest';
import 'react-toastify/dist/ReactToastify.css';
import EmployeeDetails from './EmployeeDetails';
import Currency from '../../common/currency';
import Country from '../../common/country';
import { getAllDepartments } from '../../../services/department';


function Employee(props) {
    const { fixNavbar } = props;

    const sparkline1 = useRef(null);
    const sparkline2 = useRef(null);
    const sparkline3 = useRef(null);
    const sparkline4 = useRef(null);


    const [employees, setEmployee] = useState([]);
    const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [maleEmployee, setMaleEmployee] = useState([]);
    const [femaleEmployee, setFemaleEmployee] = useState([]);

    const [formState, setFormState] = useState({
        // employeeID: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        company_id: '',
        role: '',
        salary: '',
        line_manager: '',
        department: '',
        gender: '',
        office: '',
        country_of_employment: '',
        currency: '',
        salary_frequency: '',
        salary_start_date: '',
        profile_picture: '',
        dob: '',
        country: '',
        bank_name: '',
        bank_account_number: '',
        bank_account_name: '',
        company_admin: '',
    });

    const createEmployeeAction = async () => {
        try {
            setFormState({ ...formState });
            const body = {
                // employeeID: formState.employeeID,
                name: formState.name,
                email: formState.email,
                phone: formState.phone,
                address: formState.address,
                company_id: formState.company_id,
                role: formState.role,
                salary: formState.salary,
                gender: formState.gender,
                line_manager: formState.line_manager,
                department: formState.department,
                office: formState.office,
                country_of_employment: formState.country_of_employment,
                currency: formState.currency,
                salary_frequency: formState.salary_frequency,
                salary_start_date: formState.salary_start_date,
                profile_picture: formState.profile_picture,
                dob: formState.dob,
                country: formState.country,
                bank_name: formState.bank_name,
                bank_account_number: formState.bank_account_number,
                bank_account_name: formState.bank_account_name,
                company_admin: formState.company_admin,
            }

            if (body.name === '' || body.email === '') {
                toast.error('Please fill all the fields');
                return;
            }
            const response = await createEmployee(body, user.id);

            if (response.error === false) {
                toast.success("Employee created successfully");
            }

            setFormState({
                // employeeID: '',
                name: '',
                email: '',
                phone: '',
                address: '',
                company_id: '',
                role: '',
                gender: '',
                salary: '',
                line_manager: '',
                department: '',
                office: '',
                country_of_employment: '',
                currency: '',
                salary_frequency: '',
                salary_start_date: '',
                profile_picture: '',
                dob: '',
                country: '',
                bank_name: '',
                bank_account_number: '',
                bank_account_name: '',
                company_admin: '',
            });
        } catch (err) {
            toast.error("Error, try again");
            setFormState({ ...formState })
        };
    };

    const updateForm = (e) => {
        const { value, name } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
        console.log({ [name]: value })
    };

    useEffect(() => {
        const filteredEmployee = employees.filter(employee => employee.gender === 'Male');
        setMaleEmployee(filteredEmployee);
    }, [employees]);

    useEffect(() => {
        const filteredEmployee = employees.filter(employee => employee.gender === 'Female');
        setFemaleEmployee(filteredEmployee);
    }, [employees]);

    useEffect(() => {
        async function fetchData() {
            const user = await getUser();
            if (user) {
                const userId = user.id;
                const response = await getAllEmployees(userId);
                const userResponse = await getAllUsers(userId);
                const departmentResponse = await getAllDepartments(userId);
                setDepartments(departmentResponse);
                setEmployee(response);
                setUsers(userResponse);
                setUser(user);
            }
        }
        fetchData();

    }, []);

    return (
        <>
            <div>
                <ToastContainer />
                <div>
                    <div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
                        <div className="container-fluid">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <ul className="nav nav-tabs page-header-tab">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            id="Employee-tab"
                                            data-toggle="tab"
                                            href="#Employee-list"
                                        >
                                            All
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="Employee-tab"
                                            data-toggle="tab"
                                            href="#Employee-view"
                                        >
                                            View
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="Employee-tab"
                                            data-toggle="tab"
                                            href="#Employee-Request"
                                        >
                                            Leave Request
                                        </a>
                                    </li>
                                </ul>
                                <div className="header-action">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                    >
                                        <i className="fe fe-plus mr-2" />
                                        Add
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body w_sparkline">
                                            <div className="details">
                                                <span>Total Employee</span>
                                                <h3 className="mb-0">
                                                    <span className="counter">	<CountUp end={employees.length} /></span>
                                                </h3>
                                            </div>
                                            <div className="w_chart">
                                                <div id="mini-bar-chart1" className="mini-bar-chart" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="w_chart">
                                        <span
                                            ref={sparkline1}
                                            id="mini-bar-chart1"
                                            className="mini-bar-chart"
                                        ></span>
                                    </div> */}

                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body w_sparkline">
                                            <div className="details">
                                                <span>New Employee</span>
                                                <h3 className="mb-0">
                                                    <CountUp end={employees.length} />
                                                    {/* <span >124</span> */}
                                                </h3>
                                            </div>
                                            <div className="w_chart">
                                                <span
                                                    ref={sparkline2}
                                                    id="mini-bar-chart2"
                                                    className="mini-bar-chart"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body w_sparkline">
                                            <div className="details">
                                                <span>Male</span>
                                                <h3 className="mb-0 counter">	<CountUp end={maleEmployee.length} /></h3>
                                            </div>
                                            <div className="w_chart">
                                                <span
                                                    ref={sparkline3}
                                                    id="mini-bar-chart3"
                                                    className="mini-bar-chart"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body w_sparkline">
                                            <div className="details">
                                                <span>Female</span>
                                                <h3 className="mb-0 counter">	<CountUp end={femaleEmployee.length} /></h3>
                                            </div>
                                            <div className="w_chart">
                                                <span
                                                    ref={sparkline4}
                                                    id="mini-bar-chart4"
                                                    className="mini-bar-chart"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-body">
                        <div className="container-fluid">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="Employee-list" role="tabpanel">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Employee List</h3>
                                            <div className="card-options">
                                                <form>
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-sm"
                                                            placeholder="Search something..."
                                                            name="s"
                                                        />
                                                        <span className="input-group-btn ml-2">
                                                            <button className="btn btn-icon btn-sm" type="submit">
                                                                <span className="fe fe-search" />
                                                            </button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Name</th>
                                                            <th>Employee ID</th>
                                                            <th>Phone</th>
                                                            <th>Join Date</th>
                                                            <th>Role</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {employees.map((employee, index) => (
                                                            <tr key={index}>
                                                                <td className="w40">
                                                                    <label className="custom-control custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            className="custom-control-input"
                                                                            name="example-checkbox1"
                                                                            defaultValue="option1"
                                                                        />
                                                                        <span className="custom-control-label">
                                                                            &nbsp;
                                                                        </span>
                                                                    </label>
                                                                </td>
                                                                <td className="d-flex">
                                                                    <span
                                                                        className="avatar avatar-blue"
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Avatar Name"
                                                                    >
                                                                        {(employee.name[0] + employee.name[1]).toUpperCase()}
                                                                    </span>
                                                                    <div className="ml-3">
                                                                        <h6 className="mb-0">{employee?.name}</h6>
                                                                        <span className="text-muted">
                                                                            {employee?.email}
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span>{employee?.id}</span>
                                                                </td>
                                                                <td>
                                                                    <span>{employee?.phone}</span>
                                                                </td>
                                                                <td>{employee?.created_at}</td>
                                                                <td>{employee?.role}</td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-icon btn-sm"
                                                                        title="View"
                                                                    >
                                                                        <i className="fa fa-eye" />
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-icon btn-sm"
                                                                        title="Edit"
                                                                    >
                                                                        <i className="fa fa-edit" />
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-icon btn-sm js-sweetalert"
                                                                        title="Delete"
                                                                        data-type="confirm"
                                                                    >
                                                                        <i className="fa fa-trash-o text-danger" />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <EmployeeDetails />
                                <LeaveRequest />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Add Employee
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <small id="fileHelp" className="form-text text-muted">
                                Employee Basic Details
                            </small><br></br>
                            <div className="row clearfix">
                                {/* <div className="col-md-6 col-sm-6">
                                    <label>Employee ID</label>
                                    <div className="form-group">
                                        <input
                                            type="text" name="employeeID"
                                            value={formState?.employeeID}
                                            onChange={updateForm}
                                            id='employeeID'
                                            className="form-control" placeholder="Employee ID" />
                                    </div>
                                </div> */}
                                <div className="col-md-6 col-sm-6">
                                    <label>Employee Name</label>
                                    <div className="form-group">
                                        <input type="text" name='name' id='name'
                                            value={formState?.name}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Name" />
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6">
                                    <label>Employee Gender</label>
                                    <div className="form-group">
                                        <select className="form-control" name='gender' id='gender'
                                            value={formState?.gender}
                                            onChange={updateForm}>
                                            <option value={''}>Choose Gender</option>
                                            <option value={'Male'}>Male</option>
                                            <option value={'Female'}>Female</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input type="text" name='email'
                                            value={formState?.email}
                                            onChange={updateForm}
                                            className="form-control" placeholder="e.g email@gmail.com" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <label>Phone Number</label>
                                    <div className="form-group">
                                        <input type="number" name='phone' id='phoneNo'
                                            value={formState?.phone}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Phone Number" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <small id="fileHelp" className="form-text text-muted">
                                        Employee General Details
                                    </small><br></br>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Salary</label>
                                        <input type="number"
                                            name='salary' id='salary'
                                            value={formState?.salary}
                                            onChange={updateForm}
                                            className="form-control" placeholder="e.g 100000" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Currency</label>
                                        <select className="form-control" name='currency' id='currency'
                                            value={formState?.currency}
                                            onChange={updateForm}>
                                            <Currency />
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Department</label>
                                        <select onChange={updateForm} value={formState?.department} className="form-control" name='department' id='department'>
                                            <option value="">Select Department</option>
                                            {departments.map((department, index) => (
                                                <option key={index} value={department.id}>{department.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Line Manager</label>
                                        <select onChange={updateForm} value={formState?.line_manager} className="form-control" name='line_manager' id='line_manager'>
                                            <option value="">Select Line Manager</option>
                                            {users.map((user, index) => (
                                                <option key={index} value={user.id}>{user.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>


                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Start Date</label>
                                        <input type="date" name='startDate' id='startDate'
                                            value={formState?.startDate}
                                            onChange={updateForm}
                                            className="form-control" placeholder="" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Employment Type</label>
                                        <input type="text" name='employment_type' id='employment_type'
                                            value={formState?.employment_type}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Employment Type" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Salary Frequency</label>
                                        {/* Montly, Weekly or Daily */}
                                        <input type="text" name='salary_frequency' id='salary_frequency'
                                            value={formState?.salary_frequency || 'Monthly'}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Salary Frequency" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Salary Start Date</label>
                                        <input type="date" name='salary_start_date' id='salary_start_date'
                                            value={formState?.salary_start_date}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Salary Start Date" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <input type="date" name='dob' id='dob'
                                            value={formState?.dob}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Date of Birth" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Country</label>
                                        <select className="form-control" name='country' id='country'
                                            value={formState?.country}
                                            onChange={updateForm}>
                                            <Country />
                                        </select>
                                    </div>
                                </div>


                                <div className="col-md-6 col-sm-6">
                                    <label>Role</label>
                                    <div className="form-group">
                                        <input type="text" name='role' id='role'
                                            value={formState?.role}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Role" />
                                    </div>

                                </div>
                                <div className='col-md-12 col-sm-12'>
                                    <small id="fileHelp" className="form-text text-muted">
                                        Banking Details
                                    </small><br></br>
                                </div>

                                <div className="col-lg-6 col-md-6">

                                    <div className="form-group">
                                        <label>Bank Name</label>
                                        <input type="text" name='bank_name' id='bank_name'
                                            value={formState?.bank_name}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Bank Name" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Bank Account Number</label>
                                        <input type="text" name='bank_account_number' id='bank_account_number'
                                            value={formState?.bank_account_number}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Bank Account Number" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Bank Account Name</label>
                                        <input type="text" name='bank_account_name' id='bank_account_name'
                                            value={formState?.bank_account_name}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Bank Account Name" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                            <button type="submit" className="btn btn-primary"
                                onClick={() => createEmployeeAction()}>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    fixNavbar: state.settings.isFixNavbar,
    statisticsOpen: state.settings.isStatistics,
    statisticsClose: state.settings.isStatisticsClose,
})

const mapDispatchToProps = dispatch => ({
    statisticsAction: (e) => dispatch(statisticsAction(e)),
    statisticsCloseAction: (e) => dispatch(statisticsCloseAction(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(Employee);