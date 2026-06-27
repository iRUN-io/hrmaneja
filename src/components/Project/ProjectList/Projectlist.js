import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    boxAction, box2Action, box3Action, box4Action, box5Action, box6Action
} from '../../../actions/settingsAction';

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.handleBox = this.handleBox.bind(this);
    }
    handleBox(e) {
        this.props.boxAction(e)
    }
    handleBox2(e) {
        this.props.box2Action(e)
    }
    handleBox3(e) {
        this.props.box3Action(e)
    }
    handleBox4(e) {
        this.props.box4Action(e)
    }
    handleBox5(e) {
        this.props.box5Action(e)
    }
    handleBox6(e) {
        this.props.box6Action(e)
    }
    render() {
        const { fixNavbar, boxOpen, box2Open, box3Open, box4Open, box5Open, box6Open } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item"><a className="nav-link active" id="Project-tab" data-toggle="tab" href="#Project-OnGoing">OnGoing</a></li>
                                <li className="nav-item"><a className="nav-link" id="Project-tab" data-toggle="tab" href="#Project-UpComing">UpComing</a></li>
                            </ul>
                            <div className="header-action d-md-flex">
                                <div className="input-group mr-2">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                </div>
                                <button type="button" className="btn btn-primary"><i className="fe fe-plus mr-2" />Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="Project-OnGoing" role="tabpanel">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12">

                                        <div className={`card ${!boxOpen ? 'card-collapsed' : ""}`}>
                                            <div className="card-header">
                                                <h3 className="card-title">New Admin Design</h3>
                                                <div className="card-options">
                                                    <label className="custom-switch m-0">
                                                        <input type="checkbox" defaultValue={1} className="custom-switch-input" defaultChecked />
                                                        <span className="custom-switch-indicator" />
                                                    </label>
                                                    <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox(!boxOpen)}
                                                    ><i className="fe fe-chevron-up" /></span>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <span className="tag tag-blue mb-3">Web Design</span>
                                                <p>Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!</p>
                                                <div className="row">
                                                    <div className="col-5 py-1"><strong>Created:</strong></div>
                                                    <div className="col-7 py-1">09 Jun 2019 11:32AM</div>
                                                    <div className="col-5 py-1"><strong>Creator:</strong></div>
                                                    <div className="col-7 py-1">Nathan Guerrero</div>
                                                    <div className="col-5 py-1"><strong>Question:</strong></div>
                                                    <div className="col-7 py-1"><strong>23</strong></div>
                                                    <div className="col-5 py-1"><strong>Comments:</strong></div>
                                                    <div className="col-7 py-1"><strong>32</strong></div>
                                                    <div className="col-5 py-1"><strong>Bug:</strong></div>
                                                    <div className="col-7 py-1"><strong>5</strong></div>
                                                    <div className="col-5 py-1"><strong>Team:</strong></div>
                                                    <div className="col-7 py-1">
                                                        <div className="avatar-list avatar-list-stacked">
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <span className="avatar avatar-sm">+8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>15%</strong></div>
                                                    <div className="float-right"><small className="text-muted">Progress</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-red" role="progressbar" style={{ width: '15%' }} aria-valuenow={36} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className={`card ${!box2Open ? 'card-collapsed' : ""}`}>
                                            <div className="card-header">
                                                <h3 className="card-title">Job Portal Web App</h3>
                                                <div className="card-options">
                                                    <label className="custom-switch m-0">
                                                        <input type="checkbox" defaultValue={1} className="custom-switch-input" defaultChecked />
                                                        <span className="custom-switch-indicator" />
                                                    </label>
                                                    <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox2(!box2Open)}><i className="fe fe-chevron-up" /></span>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <span className="tag tag-pink mb-3">Angular</span>
                                                <p>Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!</p>
                                                <div className="row">
                                                    <div className="col-5 py-1"><strong>Created:</strong></div>
                                                    <div className="col-7 py-1">09 Jun 2019 11:32AM</div>
                                                    <div className="col-5 py-1"><strong>Creator:</strong></div>
                                                    <div className="col-7 py-1">Nathan Guerrero</div>
                                                    <div className="col-5 py-1"><strong>Question:</strong></div>
                                                    <div className="col-7 py-1"><strong>55</strong></div>
                                                    <div className="col-5 py-1"><strong>Comments:</strong></div>
                                                    <div className="col-7 py-1"><strong>43</strong></div>
                                                    <div className="col-5 py-1"><strong>Bug:</strong></div>
                                                    <div className="col-7 py-1"><strong>5</strong></div>
                                                    <div className="col-5 py-1"><strong>Team:</strong></div>
                                                    <div className="col-7 py-1">
                                                        <div className="avatar-list avatar-list-stacked">
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar7.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar8.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <span className="avatar avatar-sm">+8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>75%</strong></div>
                                                    <div className="float-right"><small className="text-muted">Progress</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-green" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className={`card ${!box3Open ? 'card-collapsed' : ""}`}>
                                            <div className="card-header">
                                                <h3 className="card-title">App design and Development</h3>
                                                <div className="card-options">
                                                    <label className="custom-switch m-0">
                                                        <input type="checkbox" defaultValue={1} className="custom-switch-input" defaultChecked />
                                                        <span className="custom-switch-indicator" />
                                                    </label>
                                                    <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox3(!box3Open)}><i className="fe fe-chevron-up" /></span>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <span className="tag tag-green mb-3">Android</span>
                                                <p>Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!</p>
                                                <div className="row">
                                                    <div className="col-5 py-1"><strong>Created:</strong></div>
                                                    <div className="col-7 py-1">09 Jun 2019 11:32AM</div>
                                                    <div className="col-5 py-1"><strong>Creator:</strong></div>
                                                    <div className="col-7 py-1">Nathan Guerrero</div>
                                                    <div className="col-5 py-1"><strong>Question:</strong></div>
                                                    <div className="col-7 py-1"><strong>12</strong></div>
                                                    <div className="col-5 py-1"><strong>Comments:</strong></div>
                                                    <div className="col-7 py-1"><strong>96</strong></div>
                                                    <div className="col-5 py-1"><strong>Bug:</strong></div>
                                                    <div className="col-7 py-1"><strong>7</strong></div>
                                                    <div className="col-5 py-1"><strong>Team:</strong></div>
                                                    <div className="col-7 py-1">
                                                        <div className="avatar-list avatar-list-stacked">
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <span className="avatar avatar-sm">+8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>47%</strong></div>
                                                    <div className="float-right"><small className="text-muted">Progress</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-blue" role="progressbar" style={{ width: '47%' }} aria-valuenow={47} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className={`card ${!box4Open ? 'card-collapsed' : ""}`}>
                                            <div className="card-header">
                                                <h3 className="card-title">Job Portal Web App</h3>
                                                <div className="card-options">
                                                    <label className="custom-switch m-0">
                                                        <input type="checkbox" defaultValue={1} className="custom-switch-input" defaultChecked />
                                                        <span className="custom-switch-indicator" />
                                                    </label>
                                                    <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox4(!box4Open)}><i className="fe fe-chevron-up" /></span>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <span className="tag tag-pink mb-3">Angular</span>
                                                <p>Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!</p>
                                                <div className="row">
                                                    <div className="col-5 py-1"><strong>Created:</strong></div>
                                                    <div className="col-7 py-1">09 Jun 2019 11:32AM</div>
                                                    <div className="col-5 py-1"><strong>Creator:</strong></div>
                                                    <div className="col-7 py-1">Nathan Guerrero</div>
                                                    <div className="col-5 py-1"><strong>Question:</strong></div>
                                                    <div className="col-7 py-1"><strong>55</strong></div>
                                                    <div className="col-5 py-1"><strong>Comments:</strong></div>
                                                    <div className="col-7 py-1"><strong>43</strong></div>
                                                    <div className="col-5 py-1"><strong>Bug:</strong></div>
                                                    <div className="col-7 py-1"><strong>5</strong></div>
                                                    <div className="col-5 py-1"><strong>Team:</strong></div>
                                                    <div className="col-7 py-1">
                                                        <div className="avatar-list avatar-list-stacked">
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar7.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar8.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <span className="avatar avatar-sm">+8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>75%</strong></div>
                                                    <div className="float-right"><small className="text-muted">Progress</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-green" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className={`card ${!box5Open ? 'card-collapsed' : ""}`}>
                                            <div className="card-header">
                                                <h3 className="card-title">One Page landing</h3>
                                                <div className="card-options">
                                                    <label className="custom-switch m-0">
                                                        <input type="checkbox" defaultValue={1} className="custom-switch-input" defaultChecked />
                                                        <span className="custom-switch-indicator" />
                                                    </label>
                                                    <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox5(!box5Open)}><i className="fe fe-chevron-up" /></span>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <span className="tag tag-blue mb-3">Wordpress</span>
                                                <p>Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!</p>
                                                <div className="row">
                                                    <div className="col-5 py-1"><strong>Created:</strong></div>
                                                    <div className="col-7 py-1">09 Jun 2019 11:32AM</div>
                                                    <div className="col-5 py-1"><strong>Creator:</strong></div>
                                                    <div className="col-7 py-1">Nathan Guerrero</div>
                                                    <div className="col-5 py-1"><strong>Question:</strong></div>
                                                    <div className="col-7 py-1"><strong>23</strong></div>
                                                    <div className="col-5 py-1"><strong>Comments:</strong></div>
                                                    <div className="col-7 py-1"><strong>32</strong></div>
                                                    <div className="col-5 py-1"><strong>Bug:</strong></div>
                                                    <div className="col-7 py-1"><strong>5</strong></div>
                                                    <div className="col-5 py-1"><strong>Team:</strong></div>
                                                    <div className="col-7 py-1">
                                                        <div className="avatar-list avatar-list-stacked">
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <span className="avatar avatar-sm">+8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>17%</strong></div>
                                                    <div className="float-right"><small className="text-muted">Progress</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-red" role="progressbar" style={{ width: '17%' }} aria-valuenow={36} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className={`card ${!box6Open ? 'card-collapsed' : ""}`}>
                                            <div className="card-header">
                                                <h3 className="card-title">Job Portal Web App</h3>
                                                <div className="card-options">
                                                    <label className="custom-switch m-0">
                                                        <input type="checkbox" defaultValue={1} className="custom-switch-input" defaultChecked />
                                                        <span className="custom-switch-indicator" />
                                                    </label>
                                                    <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox6(!box6Open)}><i className="fe fe-chevron-up" /></span>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <span className="tag tag-gray mb-3">iOS App</span>
                                                <p>Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!</p>
                                                <div className="row">
                                                    <div className="col-5 py-1"><strong>Created:</strong></div>
                                                    <div className="col-7 py-1">09 Jun 2019 11:32AM</div>
                                                    <div className="col-5 py-1"><strong>Creator:</strong></div>
                                                    <div className="col-7 py-1">Nathan Guerrero</div>
                                                    <div className="col-5 py-1"><strong>Question:</strong></div>
                                                    <div className="col-7 py-1"><strong>55</strong></div>
                                                    <div className="col-5 py-1"><strong>Comments:</strong></div>
                                                    <div className="col-7 py-1"><strong>43</strong></div>
                                                    <div className="col-5 py-1"><strong>Bug:</strong></div>
                                                    <div className="col-7 py-1"><strong>5</strong></div>
                                                    <div className="col-5 py-1"><strong>Team:</strong></div>
                                                    <div className="col-7 py-1">
                                                        <div className="avatar-list avatar-list-stacked">
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar7.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar8.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <img className="avatar avatar-sm" src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-original-title="Avatar Name" alt="fake_url" />
                                                            <span className="avatar avatar-sm">+8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>81%</strong></div>
                                                    <div className="float-right"><small className="text-muted">Progress</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-green" role="progressbar" style={{ width: '81%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="Project-UpComing" role="tabpanel">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-striped table-vcenter mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Owner</th>
                                                        <th>Milestone</th>
                                                        <th className="w100">Work</th>
                                                        <th className="w100">Duration</th>
                                                        <th>Priority</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>Isidore Dilao</span></td>
                                                        <td>Account receivable</td>
                                                        <td><span>30:00</span></td>
                                                        <td>30:0 hrs</td>
                                                        <td><span className="text-warning">Medium</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>Maricel Villalon</span></td>
                                                        <td>Account receivable</td>
                                                        <td><span>68:00</span></td>
                                                        <td>105:0 hrs</td>
                                                        <td><span className="text-danger">High</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="../assets/images/xs/avatar3.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>Theresa Wright</span></td>
                                                        <td>Approval site</td>
                                                        <td><span>74:00</span></td>
                                                        <td>89:0 hrs</td>
                                                        <td><span>None</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="../assets/images/xs/avatar4.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>Jason Porter</span></td>
                                                        <td>Final touch up</td>
                                                        <td><span>30:00</span></td>
                                                        <td>30:0 hrs</td>
                                                        <td><span>None</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="../assets/images/xs/avatar5.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>Annelyn Mercado</span></td>
                                                        <td>Account receivable</td>
                                                        <td><span>30:00</span></td>
                                                        <td>30:0 hrs</td>
                                                        <td><span>None</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="../assets/images/xs/avatar6.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>Sean Black</span></td>
                                                        <td>Basement slab preparation</td>
                                                        <td><span>88:00</span></td>
                                                        <td>88:0 hrs</td>
                                                        <td><span>None</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="../assets/images/xs/avatar7.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>Scott Ortega</span></td>
                                                        <td>Account receivable</td>
                                                        <td><span>56:00</span></td>
                                                        <td>125:0 hrs</td>
                                                        <td><span className="text-warning">Medium</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="../assets/images/xs/avatar8.jpg" alt="Avatar" className="w30 rounded-circle mr-2" /> <span>David Wallace</span></td>
                                                        <td>Account receivable</td>
                                                        <td><span>30:00</span></td>
                                                        <td>30:0 hrs</td>
                                                        <td><span>None</span></td>
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

            </>
        )
    }
}
const mapStateToProps = state => ({
    fixNavbar: state.settings.isFixNavbar,
    boxOpen: state.settings.isbox,
    box2Open: state.settings.isbox2,
    box3Open: state.settings.isbox3,
    box4Open: state.settings.isbox4,
    box5Open: state.settings.isbox5,
    box6Open: state.settings.isbox6,
})

const mapDispatchToProps = dispatch => ({
    boxAction: (e) => dispatch(boxAction(e)),
    box2Action: (e) => dispatch(box2Action(e)),
    box3Action: (e) => dispatch(box3Action(e)),
    box4Action: (e) => dispatch(box4Action(e)),
    box5Action: (e) => dispatch(box5Action(e)),
    box6Action: (e) => dispatch(box6Action(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);