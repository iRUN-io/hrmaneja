
import React, {useState, useEffect} from 'react'
import CountUp from 'react-countup';
import 'react-toastify/dist/ReactToastify.css';

export default function  EmployeeCounter ({employees}) {
    const [maleEmployee, setMaleEmployee] = useState([]);
    const [femaleEmployee, setFemaleEmployee] = useState([]);
    
    useEffect(() => {
        const filteredEmployee = employees.filter(employee => employee.gender === 'Male');
        setMaleEmployee(filteredEmployee);
    }, [employees]);

    useEffect(() => {
        const filteredEmployee = employees.filter(employee => employee.gender === 'Female');
        setFemaleEmployee(filteredEmployee);
    }, [employees]);

    return (
        <>
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <ul className="nav nav-tabs page-header-tab">
                        {/* <li className="nav-item">
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
                        </li> */}
                        {/* <li className="nav-item">
                            <a
                                className="nav-link"
                                id="Employee-tab"
                                data-toggle="tab"
                                href="#Employee-Request"
                            >
                                Leave Request
                            </a>
                        </li> */}
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


                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body w_sparkline">
                                <div className="details">
                                    <span>New Employees</span>
                                    <h3 className="mb-0">
                                        <CountUp end={employees.length} />
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body w_sparkline">
                                <div className="details">
                                    <span>Male Employees</span>
                                    <h3 className="mb-0 counter">	<CountUp end={maleEmployee.length} /></h3>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body w_sparkline">
                                <div className="details">
                                    <span>Female Employees</span>
                                    <h3 className="mb-0 counter">	<CountUp end={femaleEmployee.length} /></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

