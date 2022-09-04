
import React from 'react';
import { connect } from "react-redux";
import {
    statisticsAction,
    statisticsCloseAction
  } from "../../../actions/settingsAction";
// import 'react-toastify/dist/ReactToastify.css';
const EmployeeDetails = (employee) => {

    const { location } = employee;
    const { state } = location;
    const  employeeData = state.employee[0];

    if(!employeeData) {
        window.location.href = "/hr-employees";
    }
    return (
        <>
        <div className="section-body">
            <div className="container-fluid">
            <div>
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
                                        <h5 className="m-0">{employeeData.name}</h5>
                                        <p className="text-muted mb-0">{employeeData.role}</p>
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
