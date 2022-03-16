import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import {
    boxAction, box2Action, box3Action, box4Action, box5Action, box6Action,
    boxCloseAction, box2CloseAction, box3CloseAction, box4CloseAction, box5CloseAction, box6CloseAction,
} from '../../actions/settingsAction';


class WData extends Component {
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

    closeBox(e) {
        this.props.boxCloseAction(e)
    }
    closeBox2(e) {
        this.props.box2CloseAction(e)
    }
    closeBox3(e) {
        this.props.box3CloseAction(e)
    }
    closeBox4(e) {
        this.props.box4CloseAction(e)
    }
    closeBox5(e) {
        this.props.box5CloseAction(e)
    }
    closeBox6(e) {
        this.props.box6CloseAction(e)
    }
    render() {
        const { fixNavbar, boxOpen, box2Open, box3Open, box4Open, box5Open, box6Open,
            boxClose, box2Close, box3Close,
            box4Close, box5Close, box6Close } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
                    <div className="container-fluid">
                        <ul className="nav nav-tabs page-header-tab">
                            <li className="nav-item"><NavLink to="/widgets" className="nav-link ">Card</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-card" className="nav-link ">Card Image</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-statistics" className="nav-link">Statistics</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-data" className="nav-link active" >Data</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-social" className="nav-link">Social</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-other" className="nav-link">Mix</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                {boxClose ?
                                    <div className="card">
                                        <div className="card-header">
                                            <h2 className="card-title">Projects</h2>
                                            <div className="card-options">
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
                                        <table className="table card-table">
                                            <tbody>
                                                <tr>
                                                    <td>Admin Template</td>
                                                    <td className="text-right">
                                                        <span className="tag tag-default">65%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Landing Page</td>
                                                    <td className="text-right">
                                                        <span className="tag tag-success">Finished</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Backend UI</td>
                                                    <td className="text-right">
                                                        <span className="tag tag-danger">Rejected</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Personal Blog</td>
                                                    <td className="text-right">
                                                        <span className="tag tag-default">40%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>E-mail Templates</td>
                                                    <td className="text-right">
                                                        <span className="tag tag-default">13%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Corporate Website</td>
                                                    <td className="text-right">
                                                        <span className="tag tag-warning">Pending</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    : ""}
                                <div className="card">
                                    <img className="card-img-top" src="../assets/images/gallery/6.jpg" alt="Card  cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Daniel Kristeen</h5>
                                        <p className="card-text">795 Folsom Ave, Suite 600 San Francisco, 94107</p>
                                        <div className="row">
                                            <div className="col-4">
                                                <h6><strong>3265</strong></h6>
                                                <span>Post</span>
                                            </div>
                                            <div className="col-4">
                                                <h6><strong>1358</strong></h6>
                                                <span>Followers</span>
                                            </div>
                                            <div className="col-4">
                                                <h6><strong>10K</strong></h6>
                                                <span>Likes</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">michael@gmail.com</li>
                                        <li className="list-group-item">+ 202-555-2828</li>
                                        <li className="list-group-item">October 22th, 1990</li>
                                    </ul>
                                    <div className="card-body">
                                        <a href="fake_url;" className="card-link">View More</a>
                                        <a href="fake_url;" className="card-link">Another link</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Subscribe</h3>

                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" defaultValue placeholder="Enter Name" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" defaultValue placeholder="Enter Email" className="form-control" />
                                            </div>
                                            <button className="btn btn-primary">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                                {box2Close ?
                                    <div className={`card  ${!box2Open ? 'card-collapsed' : ""}`}>
                                        <div className="card-header">
                                            <h3 className="card-title">Followers</h3>
                                            <div className="card-options">
                                                <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox2(!box2Open)}><i className="fe fe-chevron-up" /></span>
                                                <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox2(false)}><i className="fe fe-x" /></span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="input-group m-b-20">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="icon-magnifier" /></span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Search..." />
                                                </div>
                                            </form>
                                            <ul className="right_chat list-unstyled">
                                                <li className="online">
                                                    <a href="fake_url;">
                                                        <div className="media">
                                                            <img className="media-object " src="../assets/images/xs/avatar4.jpg" alt="fake_url" />
                                                            <div className="media-body">
                                                                <span className="name">Donald Gardner</span>
                                                                <span className="message">Designer, Blogger</span>
                                                                <span className="badge badge-outline status" />
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="online">
                                                    <a href="fake_url;">
                                                        <div className="media">
                                                            <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt="fake_url" />
                                                            <div className="media-body">
                                                                <span className="name">Wendy Keen</span>
                                                                <span className="message">Java Developer</span>
                                                                <span className="badge badge-outline status" />
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="offline">
                                                    <a href="fake_url;">
                                                        <div className="media">
                                                            <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt="fake_url" />
                                                            <div className="media-body">
                                                                <span className="name">Matt Rosales</span>
                                                                <span className="message">CEO, Epic Theme</span>
                                                                <span className="badge badge-outline status" />
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="offline">
                                                    <a href="fake_url;">
                                                        <div className="media">
                                                            <img className="media-object " src="../assets/images/xs/avatar1.jpg" alt="fake_url" />
                                                            <div className="media-body">
                                                                <span className="name">Nancy Flanary</span>
                                                                <span className="message">Art director, Movie Cut</span>
                                                                <span className="badge badge-outline status" />
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="online">
                                                    <a href="fake_url;">
                                                        <div className="media">
                                                            <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt="fake_url" />
                                                            <div className="media-body">
                                                                <span className="name">Phillip Smith</span>
                                                                <span className="message">Writter, Mag Editor</span>
                                                                <span className="badge badge-outline status" />
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    : ""}
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Referrals</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-vcenter text-nowrap card-table table_custom">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="clearfix">
                                                                <div className="float-left"><strong>35%</strong></div>
                                                                <div className="float-right"><small className="text-muted">visitor from America</small></div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-azure" role="progressbar" style={{ width: '35%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="clearfix">
                                                                <div className="float-left"><strong>25%</strong></div>
                                                                <div className="float-right"><small className="text-muted">visitor from Canada</small></div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-green" role="progressbar" style={{ width: '25%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="clearfix">
                                                                <div className="float-left"><strong>15%</strong></div>
                                                                <div className="float-right"><small className="text-muted">visitor from India</small></div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-orange" role="progressbar" style={{ width: '15%' }} aria-valuenow={36} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="clearfix">
                                                                <div className="float-left"><strong>20%</strong></div>
                                                                <div className="float-right"><small className="text-muted">visitor from UK</small></div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-indigo" role="progressbar" style={{ width: '20%' }} aria-valuenow={6} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="clearfix">
                                                                <div className="float-left"><strong>5%</strong></div>
                                                                <div className="float-right"><small className="text-muted">visitor from Australia</small></div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-cyan" role="progressbar" style={{ width: '5%' }} aria-valuenow={7} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className={`card  ${!box3Open ? 'card-collapsed' : ""}`}>
                                    <div className="card-status bg-green" />
                                    <div className="card-header">
                                        <h3 className="card-title">ToDo List <small>This Month task list</small></h3>
                                        <div className="card-options">
                                            <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox3(!box3Open)}><i className="fe fe-chevron-up" /></span>
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
                                    <div className="card-body todo_list">
                                        <ul className="list-unstyled mb-0">
                                            <li>
                                                <label className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                                                    <span className="custom-control-label">Report Panel Usag</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" />
                                                    <span className="custom-control-label">Report Panel Usag</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                                                    <span className="custom-control-label">New logo design for Angular Admin</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" />
                                                    <span className="custom-control-label">Design PSD files for Angular Admin</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {box4Close ?
                                    <div className={`card  ${!box4Open ? 'card-collapsed' : ""}`}>
                                        <div className="card-status bg-teal" />
                                        <div className="card-header">
                                            <h3 className="card-title">Timeline</h3>
                                            <div className="card-options">
                                                <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox4(!box4Open)}><i className="fe fe-chevron-up" /></span>
                                                <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox4(false)}><i className="fe fe-x" /></span>
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
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="bullet green" />
                                                    <div className="time">12:00pm</div>
                                                    <div className="desc">
                                                        <h3>Developer Team</h3>
                                                        <h4>Hangouts</h4>
                                                        <ul className="list-unstyled team-info margin-0 p-t-5">
                                                            <li><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
                                                            <li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                                                            <li><img src="../assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                                                            <li><img src="../assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="bullet green" />
                                                    <div className="time">2:00pm</div>
                                                    <div className="desc">
                                                        <h3>Responded to need</h3>
                                                        <a href="/#">“In-Kind Opportunity”</a>
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
                                    : ""}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="list-group list-widget">
                                            <a href="app-inbox.html" className="list-group-item"><span className="badge badge-success">654</span><i className="fa fa-envelope text-muted" />Inbox</a>
                                            <a href="fake_url;" className="list-group-item"><span className="badge badge-info">364</span><i className="fa fa-eye text-muted" /> Profile visits</a>
                                            <a href="fake_url;" className="list-group-item"><span className="badge badge-warning">12</span><i className="fa fa-phone text-muted" /> Call</a>
                                            <a href="fake_url;" className="list-group-item"><span className="badge badge-danger">54</span><i className="fa fa-comments-o text-muted" /> Messages</a>
                                            <a href="fake_url;" className="list-group-item"><span className="badge badge-warning">19</span><i className="fa fa-bookmark text-muted" /> Bookmarks</a>
                                            <a href="fake_url;" className="list-group-item"><span className="badge badge-warning">56</span><i className="fa fa-bell text-muted" /> Notifications</a>
                                            <a href="fake_url;" className="list-group-item"><span className="badge badge-info">25</span><i className="fa fa-clock-o text-muted" /> Watch</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Site Traffic</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row text-center">
                                            <div className="col-6 border-right pb-4 pt-4">
                                                <label className="mb-0">User</label>
                                                <h4 className="font-30 font-weight-bold text-col-blue">11,545</h4>
                                            </div>
                                            <div className="col-6 pb-4 pt-4">
                                                <label className="mb-0">Chat</label>
                                                <h4 className="font-30 font-weight-bold text-col-blue">542</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label className="d-block">New items <span className="float-right">77%</span></label>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={77} aria-valuemin={0} aria-valuemax={100} style={{ width: '77%' }} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="d-block">Uploads <span className="float-right">50%</span></label>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="d-block">Comments <span className="float-right">23%</span></label>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={23} aria-valuemin={0} aria-valuemax={100} style={{ width: '23%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-status bg-green" />
                                    <div className="card-body text-center">
                                        <div className="card-category">Premium</div>
                                        <div className="display-3 my-4">$49</div>
                                        <ul className="list-unstyled leading-loose">
                                            <li><strong>10</strong> Users</li>
                                            <li><i className="fe fe-check text-success mr-2" aria-hidden="true" /> Sharing Tools</li>
                                            <li><i className="fe fe-check text-success mr-2" aria-hidden="true" /> Design Tools</li>
                                            <li><i className="fe fe-x text-danger mr-2" aria-hidden="true" /> Private Messages</li>
                                            <li><i className="fe fe-x text-danger mr-2" aria-hidden="true" /> Twitter API</li>
                                        </ul>
                                        <div className="text-center mt-6">
                                            <a href="/#" className="btn btn-block btn-success">Choose plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4 col-md-12">
                                {box5Close ?
                                    <div className={`card  ${!box5Open ? 'card-collapsed' : ""}`}>
                                        <div className="card-header">
                                            <h3 className="card-title">Invoice</h3>
                                            <div className="card-options">
                                                <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox5(!box5Open)}><i className="fe fe-chevron-up" /></span>
                                                <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox5(false)}><i className="fe fe-x" /></span>
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
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <address>
                                                        <strong>Epic Theme Inc.</strong> <small className="float-right">16/05/2018</small><br />
                                                    795 Folsom Ave, Suite 546<br />
                                                    San Francisco, CA 54656<br />
                                                        <abbr title="Phone">P:</abbr> (123) 456-34636
                  </address>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Item</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Simple Black Clock</td>
                                                            <td>$30</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Brone Candle</td>
                                                            <td>$25</td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td />
                                                            <td />
                                                            <td><strong>$55</strong></td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 align-right">
                                                    <button className="btn btn-warning"><i className="icon-printer" /></button>
                                                    <button className="btn btn-primary">Pay Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : ""}
                                {box6Close ?
                                    <div className={`card  ${!box6Open ? 'card-collapsed' : ""}`}>
                                        <div className="card-header">
                                            <h3 className="card-title">Last comments</h3>
                                            <div className="card-options">
                                                <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox6(!box6Open)}><i className="fe fe-chevron-up" /></span>
                                                <span className="card-options-remove" data-toggle="card-remove" onClick={() => this.closeBox6(false)}><i className="fe fe-x" /></span>
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
                                            <ul className="recent_comments list-unstyled">
                                                <li>
                                                    <div className="avatar_img">
                                                        <img className="rounded img-fluid" src="../assets/images/xs/avatar4.jpg" alt="fake_url" />
                                                    </div>
                                                    <div className="comment_body">
                                                        <h6>Donald Gardner <small className="float-right">Just now</small></h6>
                                                        <p>Lorem ipsum Veniam aliquip culpa laboris minim tempor</p>
                                                        <div>
                                                            <span className="tag tag-success">Approved</span>
                                                            <a href="fake_url;"><i className="icon-bubbles" /></a>
                                                            <a href="fake_url;"><i className="icon-trash" /></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="avatar_img">
                                                        <img className="rounded img-fluid" src="../assets/images/xs/avatar3.jpg" alt="fake_url" />
                                                    </div>
                                                    <div className="comment_body">
                                                        <h6>Dessie Parks <small className="float-right">1min ago</small></h6>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
                                                        <div>
                                                            <span className="tag tag-danger">Rejected</span>
                                                            <a href="fake_url;"><i className="icon-bubbles" /></a>
                                                            <a href="fake_url;"><i className="icon-trash" /></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="avatar_img">
                                                        <img className="rounded img-fluid" src="../assets/images/xs/avatar6.jpg" alt="fake_url" />
                                                    </div>
                                                    <div className="comment_body">
                                                        <h6>Gary Camara <small className="float-right">5imn ago</small></h6>
                                                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                                        <div>
                                                            <span className="tag tag-warning">Pending</span>
                                                            <a href="fake_url;"><i className="icon-bubbles" /></a>
                                                            <a href="fake_url;"><i className="icon-trash" /></a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    : ""}
                                {box3Close ?
                                    <div className={`card  ${!boxOpen ? 'card-collapsed' : ""}`}>
                                        <div className="card-header">
                                            <h3 className="card-title">Feeds Notifications</h3>
                                            <div className="card-options">
                                                <span className="card-options-collapse" data-toggle="card-collapse" onClick={() => this.handleBox(!boxOpen)}><i className="fe fe-chevron-up" /></span>
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
                                            <ul className="list-unstyled feeds_widget">
                                                <li>
                                                    <div className="feeds-left"><i className="fa fa-thumbs-o-up" /></div>
                                                    <div className="feeds-body">
                                                        <h4 className="title">7 New Feedback <small className="float-right text-muted">Today</small></h4>
                                                        <small>It will give a smart finishing to your site</small>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="feeds-left"><i className="fa fa-user" /></div>
                                                    <div className="feeds-body">
                                                        <h4 className="title">New User <small className="float-right text-muted">10:45</small></h4>
                                                        <small>I feel great! Thanks team</small>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="feeds-left"><i className="fa fa-question-circle" /></div>
                                                    <div className="feeds-body">
                                                        <h4 className="title text-warning">Server Warning <small className="float-right text-muted">10:50</small></h4>
                                                        <small>Your connection is not private</small>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="feeds-left"><i className="fa fa-check" /></div>
                                                    <div className="feeds-body">
                                                        <h4 className="title text-danger">Issue Fixed <small className="float-right text-muted">11:05</small></h4>
                                                        <small>WE have fix all Design bug with Responsive</small>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="feeds-left"><i className="fa fa-shopping-cart" /></div>
                                                    <div className="feeds-body">
                                                        <h4 className="title">7 New Orders <small className="float-right text-muted">11:35</small></h4>
                                                        <small>You received a new oder from Tina.</small>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    : ""}
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Twitter Feed</h3>
                                        <div className="card-options">
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
                                        <form>
                                            <div className="form-group">
                                                <textarea rows={4} className="form-control no-resize" placeholder="Enter here for tweet..." defaultValue={""} />
                                            </div>
                                            <button className="btn btn-primary">Tweet</button>
                                            <a href="fake_url;" className="float-right">13K users active</a>
                                        </form>
                                        <hr />
                                        <ul className="right_chat list-unstyled">
                                            <li className="offline">
                                                <a href="fake_url;">
                                                    <div className="media">
                                                        <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt="fake_url" />
                                                        <div className="media-body">
                                                            <span className="name">@Matt Rosales <small className="float-right">1 hours ago</small></span>
                                                            <span className="message">Contrary to popular belief, Lorem Ipsum is not simply random text</span>
                                                            <span className="badge badge-outline status" />
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="offline">
                                                <a href="fake_url;">
                                                    <div className="media">
                                                        <img className="media-object " src="../assets/images/xs/avatar1.jpg" alt="fake_url" />
                                                        <div className="media-body">
                                                            <span className="name">@Nancy Flanary <small className="float-right">45 hours ago</small></span>
                                                            <span className="message">There are many variations of passages of Lorem Ipsum available, but the majority</span>
                                                            <span className="badge badge-outline status" />
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="online">
                                                <a href="fake_url;">
                                                    <div className="media">
                                                        <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt="fake_url" />
                                                        <div className="media-body">
                                                            <span className="name">@Phillip Smith <small className="float-right">1 day ago</small></span>
                                                            <span className="message">It is a long established fact that a reader will be distracted</span>
                                                            <span className="badge badge-outline status" />
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
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
    boxClose: state.settings.isBoxClose,
    box2Close: state.settings.isBox2Close,
    box3Close: state.settings.isBox3Close,
    box4Close: state.settings.isBox4Close,
    box5Close: state.settings.isBox5Close,
    box6Close: state.settings.isBox6Close,
})

const mapDispatchToProps = dispatch => ({
    boxAction: (e) => dispatch(boxAction(e)),
    box2Action: (e) => dispatch(box2Action(e)),
    box3Action: (e) => dispatch(box3Action(e)),
    box4Action: (e) => dispatch(box4Action(e)),
    box5Action: (e) => dispatch(box5Action(e)),
    box6Action: (e) => dispatch(box6Action(e)),
    boxCloseAction: (e) => dispatch(boxCloseAction(e)),
    box2CloseAction: (e) => dispatch(box2CloseAction(e)),
    box3CloseAction: (e) => dispatch(box3CloseAction(e)),
    box4CloseAction: (e) => dispatch(box4CloseAction(e)),
    box5CloseAction: (e) => dispatch(box5CloseAction(e)),
    box6CloseAction: (e) => dispatch(box6CloseAction(e)),

})
export default connect(mapStateToProps, mapDispatchToProps)(WData);