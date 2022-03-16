import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
    boxAction, box2Action, box3Action, boxCloseAction, box2CloseAction, box3CloseAction
} from '../../../actions/settingsAction';

class Taskboard extends Component {
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
    closeBox(e) {
        this.props.boxCloseAction(e)
    }
    closeBox2(e) {
        this.props.box2CloseAction(e)
    }
    closeBox3(e) {
        this.props.box3CloseAction(e)
    }

    render() {
        const { fixNavbar, boxOpen, box2Open, box3Open, boxClose, box2Close, box3Close } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
                    <div className="container-fluid">
                        <div className="d-md-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item"><a className="nav-link active" id="TaskBoard-tab" data-toggle="tab" href="#TaskBoard-list">List View</a></li>
                                <li className="nav-item"><a className="nav-link" id="TaskBoard-tab" data-toggle="tab" href="#TaskBoard-grid">Grid View</a></li>
                            </ul>
                            <div className="header-action d-flex">
                                <div className="input-group mr-2">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                </div>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addtask"><i className="fe fe-plus mr-2" />Add</button>
                            </div>
                        </div>
                        <div className="row clearfix mt-2">
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h6>Planned</h6>
                                        <div style={{ width: '50%', margin: 'auto' }} >
                                            <CircularProgressbar value={20} text={`${20}`} strokeWidth={5} styles={buildStyles({ pathColor: `rgb(110, 118, 135)` })} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h6>In progress</h6>
                                        <div style={{ width: '50%', margin: 'auto' }} >
                                            <CircularProgressbar value={43} text={`${43}`} strokeWidth={5} styles={buildStyles({ pathColor: `rgb(110, 118, 135)` })} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h6>Completed</h6>
                                        <div style={{ width: '50%', margin: 'auto' }} >
                                            <CircularProgressbar value={83} text={`${83}`} strokeWidth={5} styles={buildStyles({ pathColor: `rgb(110, 118, 135)` })} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h6>In Completed</h6>
                                        <div style={{ width: '50%', margin: 'auto' }} >
                                            <CircularProgressbar value={12} text={`${12}`} strokeWidth={5} styles={buildStyles({ pathColor: `rgb(110, 118, 135)` })} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body">
                    <div className="container-fluid">
                        <div className="tab-content taskboard">
                            <div className="tab-pane fade show active" id="TaskBoard-list" role="tabpanel">
                                <div className="table-responsive">
                                    <table className="table table-hover table-vcenter mb-0 table_custom spacing8 text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Task</th>
                                                <th>Team</th>
                                                <th>Duration</th>
                                                <th>Action</th>
                                                <th className="w200" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>01</td>
                                                <td>
                                                    <h6 className="mb-0">New code Update on github</h6>
                                                    <span>It is a long established fact that a reader will be distracted...</span>
                                                </td>
                                                <td>
                                                    <ul className="list-unstyled team-info mb-0">
                                                        <li><img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <div className="text-info">Start: 3 Jun 2019</div>
                                                    <div className="text-pink">End: 15 Jun 2019</div>
                                                </td>
                                                <td>
                                                    <span className="tag tag-blue">Planned</span>
                                                </td>
                                                <td>
                                                    <div className="clearfix">
                                                        <div className="float-left"><strong>0%</strong></div>
                                                        <div className="float-right"><small className="text-muted">Progress</small></div>
                                                    </div>
                                                    <div className="progress progress-xs">
                                                        <div className="progress-bar bg-azure" role="progressbar" style={{ width: '0%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>02</td>
                                                <td>
                                                    <h6 className="mb-0">Design Events</h6>
                                                    <span>It is a long established fact that a reader will be distracted...</span>
                                                </td>
                                                <td>
                                                    <ul className="list-unstyled team-info mb-0">
                                                        <li><img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <div className="text-info">Start: 02 Jun 2019</div>
                                                    <div className="text-pink">End: 08 Jun 2019</div>
                                                </td>
                                                <td>
                                                    <span className="tag tag-green">Completed</span>
                                                </td>
                                                <td>
                                                    <div className="clearfix">
                                                        <div className="float-left"><strong>100%</strong></div>
                                                        <div className="float-right"><small className="text-muted">Progress</small></div>
                                                    </div>
                                                    <div className="progress progress-xs">
                                                        <div className="progress-bar bg-green" role="progressbar" style={{ width: '100%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>03</td>
                                                <td>
                                                    <h6 className="mb-0">Feed Details on Dribbble</h6>
                                                    <span>The point of using Lorem Ipsum is that...</span>
                                                </td>
                                                <td>
                                                    <ul className="list-unstyled team-info mb-0">
                                                        <li><img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <div className="text-info">Start: 3 Jun 2019</div>
                                                    <div className="text-pink">End: 15 Jun 2019</div>
                                                </td>
                                                <td>
                                                    <span className="tag tag-orange">In progress</span>
                                                </td>
                                                <td>
                                                    <div className="clearfix">
                                                        <div className="float-left"><strong>35%</strong></div>
                                                        <div className="float-right"><small className="text-muted">Progress</small></div>
                                                    </div>
                                                    <div className="progress progress-xs">
                                                        <div className="progress-bar bg-azure" role="progressbar" style={{ width: '35%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>04</td>
                                                <td>
                                                    <h6 className="mb-0">New code Update on github</h6>
                                                    <span>It is a long established fact that a reader will be distracted...</span>
                                                </td>
                                                <td>
                                                    <ul className="list-unstyled team-info mb-0">
                                                        <li><img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <div className="text-info">Start: 13 Jun 2019</div>
                                                    <div className="text-pink">End: 23 Jun 2019</div>
                                                </td>
                                                <td>
                                                    <span className="tag tag-orange">In progress</span>
                                                </td>
                                                <td>
                                                    <div className="clearfix">
                                                        <div className="float-left"><strong>75%</strong></div>
                                                        <div className="float-right"><small className="text-muted">Progress</small></div>
                                                    </div>
                                                    <div className="progress progress-xs">
                                                        <div className="progress-bar bg-green" role="progressbar" style={{ width: '75%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>05</td>
                                                <td>
                                                    <h6 className="mb-0">New code Update on github</h6>
                                                    <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
                                                </td>
                                                <td>
                                                    <ul className="list-unstyled team-info mb-0">
                                                        <li><img src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <div className="text-info">Start: 8 Jun 2019</div>
                                                    <div className="text-pink">End: 15 Jun 2019</div>
                                                </td>
                                                <td>
                                                    <span className="tag tag-orange">In progress</span>
                                                </td>
                                                <td>
                                                    <div className="clearfix">
                                                        <div className="float-left"><strong>35%</strong></div>
                                                        <div className="float-right"><small className="text-muted">Progress</small></div>
                                                    </div>
                                                    <div className="progress progress-xs">
                                                        <div className="progress-bar bg-azure" role="progressbar" style={{ width: '35%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>06</td>
                                                <td>
                                                    <h6 className="mb-0">Angular App Design bug</h6>
                                                    <span>There are many variations of passages of Lorem Ipsum available...</span>
                                                </td>
                                                <td>
                                                    <ul className="list-unstyled team-info mb-0">
                                                        <li><img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <div className="text-info">Start: 3 Jun 2019</div>
                                                    <div className="text-pink">End: 15 Jun 2019</div>
                                                </td>
                                                <td>
                                                    <span className="tag tag-orange">Planned</span>
                                                </td>
                                                <td>
                                                    <div className="clearfix">
                                                        <div className="float-left"><strong>35%</strong></div>
                                                        <div className="float-right"><small className="text-muted">Progress</small></div>
                                                    </div>
                                                    <div className="progress progress-xs">
                                                        <div className="progress-bar bg-azure" role="progressbar" style={{ width: '35%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="TaskBoard-grid" role="tabpanel">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12">
                                        {boxClose ?
                                            <div className={`card  planned_task ${!boxOpen ? 'card-collapsed' : ""}`}>

                                                <div className="card-header">
                                                    <h3 className="card-title">Planned</h3>
                                                    <div className="card-options">
                                                        <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox(!boxOpen)}><i className="fe fe-chevron-up" /></span>
                                                        <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox(false)}><i className="fe fe-x" /></span>
                                                        <div className="item-action dropdown ml-2">
                                                            <a href="fake_url" data-toggle="dropdown"><i className="fe fe-more-vertical" /></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                                <div className="dropdown-divider" />
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-copy" /> Copy to</a>
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-folder" /> Move to</a>
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-edit" /> Rename</a>
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-trash" /> Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="dd" data-plugin="nestable">
                                                        <ol className="dd-list">
                                                            <li className="dd-item" data-id={1}>
                                                                <div className="dd-handle">
                                                                    <h6>Dashbaord</h6>
                                                                    <span className="time"><span className="text-primary">Start: 5 Aug</span> to <span className="text-danger">Complete: 15 Aug</span></span>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                    <ul className="list-unstyled team-info">
                                                                        <li><img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                        <li><img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                        <li><img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id={2}>
                                                                <div className="dd-handle">
                                                                    <h6>New project</h6>
                                                                    <span className="time"><span className="text-primary">Start: 6 Aug</span> to <span className="text-danger">Complete: 28 Aug</span></span>
                                                                    <p>It is a long established fact that a reader will be distracted.</p>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id={3}>
                                                                <div className="dd-handle">
                                                                    <h6>Feed Details</h6>
                                                                    <p>here are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                            : ""}
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        {box2Close ?
                                            <div className={`card  progress_task ${!box2Open ? 'card-collapsed' : ""}`}>


                                                <div className="card-header">
                                                    <h3 className="card-title">In progress</h3>
                                                    <div className="card-options">
                                                        <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox2(!box2Open)}><i className="fe fe-chevron-up" /></span>
                                                        <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox2(false)}><i className="fe fe-x" /></span>
                                                        <div className="item-action dropdown ml-2">
                                                            <a href="fake_url" data-toggle="dropdown"><i className="fe fe-more-vertical" /></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                                <div className="dropdown-divider" />
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-copy" /> Copy to</a>
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-folder" /> Move to</a>
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-edit" /> Rename</a>
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-trash" /> Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="dd" data-plugin="nestable">
                                                        <ol className="dd-list">
                                                            <li className="dd-item" data-id={1}>
                                                                <div className="dd-handle">
                                                                    <h6>New Code Update</h6>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id={2}>
                                                                <div className="dd-handle">
                                                                    <h6>Meeting</h6>
                                                                    <span className="time"><span className="text-primary">Start: 5 Aug</span> to <span className="text-danger">Complete: 11 Aug</span></span>
                                                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero</p>
                                                                    <ul className="list-unstyled team-info">
                                                                        <li><img src="../assets/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                        <li><img src="../assets/images/xs/avatar9.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id={2}>
                                                                <div className="dd-handle">
                                                                    <h6>New project</h6>
                                                                    <p>It is a long established fact that a reader will be distracted.</p>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id={3}>
                                                                <div className="dd-handle">
                                                                    <h6>Feed Details</h6>
                                                                    <p>here are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                            : ""}
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        {box3Close ?
                                            <div className={`card  completed_task ${!box3Open ? 'card-collapsed' : ""}`}>
                                                <div className="card-header">
                                                    <h3 className="card-title">Completed</h3>
                                                    <div className="card-options">
                                                        <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox3(!box3Open)}><i className="fe fe-chevron-up" /></span>
                                                        <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox3(false)}><i className="fe fe-x" /></span>
                                                        <div className="item-action dropdown ml-2">
                                                            <a href="fake_url" data-toggle="dropdown"><i className="fe fe-more-vertical" /></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                                <div className="dropdown-divider" />
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-copy" /> Copy to</a>
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-folder" /> Move to</a>
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-edit" /> Rename</a>
                                                                <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-trash" /> Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="dd" data-plugin="nestable">
                                                        <ol className="dd-list">
                                                            <li className="dd-item" data-id={1}>
                                                                <div className="dd-handle">
                                                                    <h6>Job title</h6>
                                                                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                                                    <ul className="list-unstyled team-info">
                                                                        <li><img src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                        <li><img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                        <li><img src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                        <li><img src="../assets/images/xs/avatar8.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id={2}>
                                                                <div className="dd-handle">
                                                                    <h6>Event Done</h6>
                                                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id={1}>
                                                                <div className="dd-handle">
                                                                    <h6>New Code Update</h6>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                            : ""}
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
    boxClose: state.settings.isBoxClose,
    box2Close: state.settings.isBox2Close,
    box3Close: state.settings.isBox3Close,
})

const mapDispatchToProps = dispatch => ({
    boxAction: (e) => dispatch(boxAction(e)),
    box2Action: (e) => dispatch(box2Action(e)),
    box3Action: (e) => dispatch(box3Action(e)),
    boxCloseAction: (e) => dispatch(boxCloseAction(e)),
    box2CloseAction: (e) => dispatch(box2CloseAction(e)),
    box3CloseAction: (e) => dispatch(box3CloseAction(e)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Taskboard);