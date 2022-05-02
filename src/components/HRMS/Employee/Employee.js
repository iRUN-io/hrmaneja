import React, { useRef, useState } from 'react';
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
import 'react-toastify/dist/ReactToastify.css';


function Employee(props) {
    const { statisticsAction, statisticsCloseAction, fixNavbar, statisticsOpen, statisticsClose } = props;

    const sparkline1 = useRef(null);
    const sparkline2 = useRef(null);
    const sparkline3 = useRef(null);
    const sparkline4 = useRef(null);

    const handleStatistics = (e) => {
        statisticsAction(e)
    }
    const closeStatistics = (e) => {
        statisticsCloseAction(e)
    }
    const [employee, setEmployee] = useState([]);
    const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);

    const [formState, setFormState] = useState({
        employeeID: '',
        name: '',
        emailID: '',
        phoneNo: '',
        startDate: '',
        role: '',
        file: '',
        facebook: '',
        twitter: '',
        instagram: '',
        linkedIn: '',
    });

    const createEmployeeAction = async () => {
        try {
            setFormState({ ...formState });
            const body = {
                employeeID: formState.employeeID,
                name: formState.name,
                emailID: formState.emailID,
                phoneNo: formState.phoneNo,
                startDate: formState.startDate,
                role: formState.role,
                file: formState.file,
                facebook: formState.facebook,
                twitter: formState.twitter,
                instagram: formState.instagram,
                linkedIn: formState.linkedIn,
            }
            console.log(body)
            await createEmployee(body, user.id);
            toast.success("Employee added successfully");

            setFormState({
                employeeID: '',
                name: '',
                emailID: '',
                phoneNo: '',
                startDate: '',
                role: '',
                file: '',
                facebook: '',
                twitter: '',
                instagram: '',
                linkedIn: '',
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
                                                    <span className="counter">	<CountUp end={614} /></span>
                                                </h3>
                                            </div>
                                            <div className="w_chart">
                                                <div id="mini-bar-chart1" className="mini-bar-chart" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* 
                                        <div className="w_chart">
                                                <span
                                                    ref={sparkline1}
                                                    id="mini-bar-chart1"
                                                    className="mini-bar-chart"
                                                ></span>
                                            </div>
                                    */}
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body w_sparkline">
                                            <div className="details">
                                                <span>New Employee</span>
                                                <h3 className="mb-0">
                                                    <CountUp end={124} />
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
                                                <h3 className="mb-0 counter">	<CountUp end={504} /></h3>
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
                                                <h3 className="mb-0 counter">	<CountUp end={100} /></h3>
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
                                                        <tr>
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
                                                                    MN
                                                                </span>
                                                                <div className="ml-3">
                                                                    <h6 className="mb-0">Marshall Nichols</h6>
                                                                    <span className="text-muted">
                                                                        marshall-n@gmail.com
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span>LA-0215</span>
                                                            </td>
                                                            <td>
                                                                <span>+ 264-625-1526</span>
                                                            </td>
                                                            <td>12 Jun, 2015</td>
                                                            <td>Web Designer</td>
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
                                                        <tr>
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
                                                                <img
                                                                    className="avatar"
                                                                    src="../assets/images/xs/avatar2.jpg"
                                                                    data-toggle="tooltip"
                                                                    data-original-title="Avatar Name"
                                                                    alt="fake_url"
                                                                />
                                                                <div className="ml-3">
                                                                    <h6 className="mb-0">Debra Stewart</h6>
                                                                    <span className="text-muted">
                                                                        marshall-n@gmail.com
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span>LA-0216</span>
                                                            </td>
                                                            <td>
                                                                <span>+ 264-625-4613</span>
                                                            </td>
                                                            <td>28 July, 2015</td>
                                                            <td>Web Developer</td>
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
                                                        <tr>
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
                                                                    className="avatar avatar-green"
                                                                    data-toggle="tooltip"
                                                                    data-original-title="Avatar Name"
                                                                >
                                                                    JH
                                                                </span>
                                                                <div className="ml-3">
                                                                    <h6 className="mb-0">Jane Hunt</h6>
                                                                    <span className="text-muted">
                                                                        jane-hunt@gmail.com
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span>LA-0215</span>
                                                            </td>
                                                            <td>
                                                                <span>+ 264-625-4512</span>
                                                            </td>
                                                            <td>13 Jun, 2015</td>
                                                            <td>Web Designer</td>
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
                                                        <tr>
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
                                                                <img
                                                                    className="avatar"
                                                                    src="../assets/images/xs/avatar3.jpg"
                                                                    data-toggle="tooltip"
                                                                    data-original-title="Avatar Name"
                                                                    alt="fake_url"
                                                                />
                                                                <div className="ml-3">
                                                                    <h6 className="mb-0">Susie Willis</h6>
                                                                    <span className="text-muted">
                                                                        sussie-w@gmail.com
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span>LA-0116</span>
                                                            </td>
                                                            <td>
                                                                <span>+ 264-625-4152</span>
                                                            </td>
                                                            <td>9 May, 2016</td>
                                                            <td>Web Developer</td>
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
                                                        <tr>
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
                                                                    className="avatar avatar-azure"
                                                                    data-toggle="tooltip"
                                                                    data-original-title="Avatar Name"
                                                                >
                                                                    DD
                                                                </span>
                                                                <div className="ml-3">
                                                                    <h6 className="mb-0">Darryl Day</h6>
                                                                    <span className="text-muted">
                                                                        darryl.day@gmail.com
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span>LA-0215</span>
                                                            </td>
                                                            <td>
                                                                <span>+ 264-625-8596</span>
                                                            </td>
                                                            <td>24 Jun, 2015</td>
                                                            <td>Web Developer</td>
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
                                                        <tr>
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
                                                                    MN
                                                                </span>
                                                                <div className="ml-3">
                                                                    <h6 className="mb-0">Marshall Nichols</h6>
                                                                    <span className="text-muted">
                                                                        marshall-n@gmail.com
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span>LA-0215</span>
                                                            </td>
                                                            <td>
                                                                <span>+ 264-625-7845</span>
                                                            </td>
                                                            <td>11 Jun, 2015</td>
                                                            <td>Web Designer</td>
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
                                                        <tr>
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
                                                                <img
                                                                    className="avatar"
                                                                    src="../assets/images/xs/avatar2.jpg"
                                                                    data-toggle="tooltip"
                                                                    data-original-title="Avatar Name"
                                                                    alt="fake_url"
                                                                />
                                                                <div className="ml-3">
                                                                    <h6 className="mb-0">Debra Stewart</h6>
                                                                    <span className="text-muted">
                                                                        marshall-n@gmail.com
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span>LA-0216</span>
                                                            </td>
                                                            <td>
                                                                <span>+ 264-625-2583</span>
                                                            </td>
                                                            <td>28 Jun, 2018</td>
                                                            <td>Web Developer</td>
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
                                                        <tr>
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
                                                                    className="avatar avatar-indigo"
                                                                    data-toggle="tooltip"
                                                                    data-original-title="Avatar Name"
                                                                >
                                                                    MN
                                                                </span>
                                                                <div className="ml-3">
                                                                    <h6 className="mb-0">Marshall Nichols</h6>
                                                                    <span className="text-muted">
                                                                        marshall-n@gmail.com
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span>LA-0215</span>
                                                            </td>
                                                            <td>
                                                                <span>+ 264-625-2583</span>
                                                            </td>
                                                            <td>24 Feb, 2019</td>
                                                            <td>Android Developer</td>
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
                                                        <tr>
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
                                                                <img
                                                                    className="avatar"
                                                                    src="../assets/images/xs/avatar2.jpg"
                                                                    data-toggle="tooltip"
                                                                    data-original-title="Avatar Name"
                                                                    alt="fake_url"
                                                                />
                                                                <div className="ml-3">
                                                                    <h6 className="mb-0">Debra Stewart</h6>
                                                                    <span className="text-muted">
                                                                        marshall-n@gmail.com
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span>LA-0216</span>
                                                            </td>
                                                            <td>
                                                                <span>+ 264-625-2589</span>
                                                            </td>
                                                            <td>28 Jun, 2015</td>
                                                            <td>IOS Developer</td>
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
                                                        <tr>
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
                                                                <img
                                                                    className="avatar"
                                                                    src="../assets/images/xs/avatar2.jpg"
                                                                    data-toggle="tooltip"
                                                                    data-original-title="Avatar Name"
                                                                    alt="fake_url"
                                                                />
                                                                <div className="ml-3">
                                                                    <h6 className="mb-0">Debra Stewart</h6>
                                                                    <span className="text-muted">
                                                                        marshall-n@gmail.com
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span>LA-0216</span>
                                                            </td>
                                                            <td>
                                                                <span>+ 264-625-2356</span>
                                                            </td>
                                                            <td>28 Jun, 2015</td>
                                                            <td>Team Leader</td>
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
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="Employee-view" role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="media mb-4">
                                                        <img
                                                            className="avatar avatar-xl mr-3"
                                                            src="../assets/images/sm/avatar1.jpg"
                                                            alt="avatar"
                                                        />
                                                        <div className="media-body">
                                                            <h5 className="m-0">Sara Hopkins</h5>
                                                            <p className="text-muted mb-0">Webdeveloper</p>
                                                            <ul className="social-links list-inline mb-0 mt-2">
                                                                <li className="list-inline-item">
                                                                    <a
                                                                        href="fake_url"
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Facebook"
                                                                    >
                                                                        <i className="fa fa-facebook" />
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a
                                                                        href="fake_url"
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Twitter"
                                                                    >
                                                                        <i className="fa fa-twitter" />
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a
                                                                        href="fake_url"
                                                                        data-toggle="tooltip"
                                                                        data-original-title={1234567890}
                                                                    >
                                                                        <i className="fa fa-phone" />
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a
                                                                        href="fake_url"
                                                                        data-toggle="tooltip"
                                                                        data-original-title="@skypename"
                                                                    >
                                                                        <i className="fa fa-skype" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p className="mb-4">
                                                        Contrary to popular belief, Lorem Ipsum is not simply random
                                                        text. It has roots in a piece of classical Latin literature
                                                        from 45 BC, making it over 2000 years old.
                                                    </p>
                                                    <button className="btn btn-outline-primary btn-sm">
                                                        <span className="fa fa-twitter" /> Follow
                                                    </button>
                                                </div>
                                            </div>
                                            {statisticsClose ?
                                                <div className={`card ${statisticsOpen ? 'card-collapsed' : ""}`}>
                                                    <div className="card-header">
                                                        <h3 className="card-title">Statistics</h3>
                                                        <div className="card-options">
                                                            <span
                                                                className="card-options-collapse"
                                                                data-toggle="card-collapse" onClick={() => handleStatistics(!statisticsOpen)}
                                                            >
                                                                <i className="fe fe-chevron-up" alt="fake_url" />
                                                            </span>
                                                            <span
                                                                className="card-options-remove"
                                                                data-toggle="card-remove" onClick={() => closeStatistics(false)}
                                                            >
                                                                <i className="fe fe-x" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="text-center">
                                                            <div className="row">
                                                                <div className="col-6 pb-3">
                                                                    <label className="mb-0">Project</label>
                                                                    <h4 className="font-30 font-weight-bold">45</h4>
                                                                </div>
                                                                <div className="col-6 pb-3">
                                                                    <label className="mb-0">Growth</label>
                                                                    <h4 className="font-30 font-weight-bold">87%</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="d-block">
                                                                Laravel<span className="float-right">77%</span>
                                                            </label>
                                                            <div className="progress progress-xs">
                                                                <div
                                                                    className="progress-bar bg-blue"
                                                                    role="progressbar"
                                                                    aria-valuenow={77}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                    style={{ width: '77%' }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="d-block">
                                                                HTML<span className="float-right">50%</span>
                                                            </label>
                                                            <div className="progress progress-xs">
                                                                <div
                                                                    className="progress-bar bg-danger"
                                                                    role="progressbar"
                                                                    aria-valuenow={50}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                    style={{ width: '50%' }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-0">
                                                            <label className="d-block">
                                                                Photoshop <span className="float-right">23%</span>
                                                            </label>
                                                            <div className="progress progress-xs">
                                                                <div
                                                                    className="progress-bar bg-green"
                                                                    role="progressbar"
                                                                    aria-valuenow={23}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                    style={{ width: '23%' }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                : ""}
                                        </div>
                                        <div className="col-lg-8 col-md-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <ul className="new_timeline mt-3">
                                                        <li>
                                                            <div className="bullet pink" />
                                                            <div className="time">11:00am</div>
                                                            <div className="desc">
                                                                <h3>Attendance</h3>
                                                                <h4>Computer Class</h4>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="bullet pink" />
                                                            <div className="time">11:30am</div>
                                                            <div className="desc">
                                                                <h3>Added an interest</h3>
                                                                <h4>“Volunteer Activities”</h4>
                                                                <p>
                                                                    Contrary to popular belief, Lorem Ipsum is not
                                                                    simply random text. It has roots in a piece of
                                                                    classical Latin literature from 45 BC, making it
                                                                    over 2000 years old.
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="bullet green" />
                                                            <div className="time">12:00pm</div>
                                                            <div className="desc">
                                                                <h3>Developer Team</h3>
                                                                <h4>Hangouts</h4>
                                                                <ul className="list-unstyled team-info margin-0 p-t-5">
                                                                    <li>
                                                                        <img
                                                                            src="../assets/images/xs/avatar1.jpg"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="../assets/images/xs/avatar2.jpg"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="../assets/images/xs/avatar3.jpg"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="../assets/images/xs/avatar4.jpg"
                                                                            alt="Avatar"
                                                                        />
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="bullet green" />
                                                            <div className="time">2:00pm</div>
                                                            <div className="desc">
                                                                <h3>Responded to need</h3>
                                                                <a href="fake_url">“In-Kind Opportunity”</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="bullet orange" />
                                                            <div className="time">1:30pm</div>
                                                            <div className="desc">
                                                                <h3>Lunch Break</h3>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="bullet green" />
                                                            <div className="time">2:38pm</div>
                                                            <div className="desc">
                                                                <h3>Finish</h3>
                                                                <h4>Go to Home</h4>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="Employee-Request" role="tabpanel">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Name</th>
                                                            <th>Employee ID</th>
                                                            <th>Leave Type</th>
                                                            <th>Date</th>
                                                            <th>Reason</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="width45">
                                                                <span
                                                                    className="avatar avatar-orange"
                                                                    data-toggle="tooltip"
                                                                    title="Avatar Name"
                                                                >
                                                                    DB
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div className="font-15">Marshall Nichols</div>
                                                            </td>
                                                            <td>
                                                                <span>LA-8150</span>
                                                            </td>
                                                            <td>
                                                                <span>Casual Leave</span>
                                                            </td>
                                                            <td>24 July, 2019 to 26 July, 2019</td>
                                                            <td>Going to Family Function</td>
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
                                                                >
                                                                    <i className="fa fa-trash-o text-danger" />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="width45">
                                                                <span
                                                                    className="avatar avatar-pink"
                                                                    data-toggle="tooltip"
                                                                    title="Avatar Name"
                                                                >
                                                                    GC
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div className="font-15">Gary Camara</div>
                                                            </td>
                                                            <td>
                                                                <span>LA-8795</span>
                                                            </td>
                                                            <td>
                                                                <span>Medical Leave</span>
                                                            </td>
                                                            <td>20 July, 2019 to 26 July, 2019</td>
                                                            <td>Going to Development</td>
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
                                                                >
                                                                    <i className="fa fa-trash-o text-danger" />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="width45">
                                                                <img
                                                                    className="avatar"
                                                                    src="../assets/images/xs/avatar1.jpg"
                                                                    data-toggle="tooltip"
                                                                    title="Avatar Name"
                                                                    alt="fake_url"
                                                                />
                                                            </td>
                                                            <td>
                                                                <div className="font-15">Maryam Amiri</div>
                                                            </td>
                                                            <td>
                                                                <span>LA-0258</span>
                                                            </td>
                                                            <td>
                                                                <span>Casual Leave</span>
                                                            </td>
                                                            <td>21 July, 2019 to 26 July, 2019</td>
                                                            <td>Attend Birthday party</td>
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
                                                                >
                                                                    <i className="fa fa-trash-o text-danger" />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="width45">
                                                                <img
                                                                    className="avatar"
                                                                    src="../assets/images/xs/avatar2.jpg"
                                                                    data-toggle="tooltip"
                                                                    title="Avatar Name"
                                                                    alt="fake_url"
                                                                />
                                                            </td>
                                                            <td>
                                                                <div className="font-15">Frank Camly</div>
                                                            </td>
                                                            <td>
                                                                <span>LA-1515</span>
                                                            </td>
                                                            <td>
                                                                <span>Casual Leave</span>
                                                            </td>
                                                            <td>11 Aug, 2019 to 21 Aug, 2019</td>
                                                            <td>Going to Holiday</td>
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
                                                                >
                                                                    <i className="fa fa-trash-o text-danger" />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                Add Departments
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row clearfix">
                                <div className="col-md-4 col-sm-6">
                                    <div className="form-group">
                                        <input
                                            type="text" name="employeeID"
                                            value={formState?.employeeID}
                                            onChange={updateForm}
                                            id='employeeID'
                                            className="form-control" placeholder="Employee ID" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" name='name' id='name'
                                            value={formState?.name}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" name='emailID'
                                            value={formState?.emailID}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Email ID" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="form-group">
                                        <input type="number" name='phoneNo' id='phoneNo'
                                            value={formState?.phoneNo}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name='startDate'
                                            id='startDate'
                                            value={formState?.startDate}
                                            onChange={updateForm}
                                            data-provide="datepicker"
                                            data-date-autoclose="true"
                                            className="form-control"
                                            placeholder="Start date *"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" name='role' id='role'
                                            value={formState?.role}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Role" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group mt-2 mb-3">
                                        <input type="file" className="dropify"
                                            name='file'
                                            value={formState?.file}
                                            onChange={updateForm}
                                        />
                                        <small id="fileHelp" className="form-text text-muted">
                                            This is some placeholder block-level help text for the above input. It's
                                            a bit lighter and easily wraps to a new line.
                                        </small>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text"
                                            name='facebook' id='facebook'
                                            value={formState?.facebook}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Facebook" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" name='twitter' id='twitter'
                                            value={formState?.twitter}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Twitter" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" name='linkedIn' id='linkedIn'
                                            value={formState?.linkedIn}
                                            onChange={updateForm}
                                            className="form-control" placeholder="Linkedin" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" name='instagram' id='instagram'
                                            value={formState?.instagram}
                                            onChange={updateForm}
                                            className="form-control" placeholder="instagram" />
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