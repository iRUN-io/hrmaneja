import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import Columnchart from '../common/columnchart'
import MapChart from '../common/MapChart'
import Donutchart from '../common/donutchart'

class WOther extends Component {

    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
                    <div className="container-fluid">
                        <ul className="nav nav-tabs page-header-tab">
                            <li className="nav-item"><NavLink to="/widgets" className="nav-link">Card</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-card" className="nav-link">Card Image</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-statistics" className="nav-link">Statistics</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-data" className="nav-link" >Data</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-social" className="nav-link">Social</NavLink></li>
                            <li className="nav-item"><NavLink to="/w-other" className="nav-link active">Mix</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="row clearfix row-cards">
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Email Statistics</h3>
                                        <div>
                                            {/* <div id="chart-emails" style={{ height: '15rem' }} /> */}
                                            <Donutchart></Donutchart>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title text-center">Jun 2019</h3>
                                    </div>
                                    <div className="card-body p-3">
                                        <table className="table table-calendar">
                                            <tbody>
                                                <tr>
                                                    <th>Mo</th>
                                                    <th>Tu</th>
                                                    <th>We</th>
                                                    <th>Th</th>
                                                    <th>Fr</th>
                                                    <th>Sa</th>
                                                    <th>Su</th>
                                                </tr>
                                                <tr>
                                                    <td className="text-muted">27</td>
                                                    <td className="text-muted">28</td>
                                                    <td className="text-muted">29</td>
                                                    <td className="text-muted">30</td>
                                                    <td>1</td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="fake_url" className="table-calendar-link">4</a></td>
                                                    <td>5</td>
                                                    <td><a href="fake_url" className="table-calendar-link">6</a></td>
                                                    <td>7</td>
                                                    <td>8</td>
                                                    <td>9</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td><a href="fake_url" className="table-calendar-link">12</a></td>
                                                    <td>13</td>
                                                    <td>14</td>
                                                    <td><a href="fake_url">15</a></td>
                                                    <td>16</td>
                                                    <td>17</td>
                                                </tr>
                                                <tr>
                                                    <td>18</td>
                                                    <td><a href="fake_url" className="table-calendar-link">19</a></td>
                                                    <td><a href="fake_url" className="table-calendar-link">20</a></td>
                                                    <td>21</td>
                                                    <td>22</td>
                                                    <td>23</td>
                                                    <td>24</td>
                                                </tr>
                                                <tr>
                                                    <td>25</td>
                                                    <td>26</td>
                                                    <td>27</td>
                                                    <td>28</td>
                                                    <td>29</td>
                                                    <td>30</td>
                                                    <td className="text-muted">1</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <ul className="list-group card-list-group">
                                        <li className="list-group-item list-group-item-red">
                                            <a href="fake_url" className="text-inherit">Cras justo odio</a>
                                            <span className="float-right text-muted">16 Dec</span>
                                        </li>
                                        <li className="list-group-item list-group-item-blue">
                                            <a href="fake_url" className="text-inherit">Dapibus ac facilisis in</a>
                                            <span className="float-right text-muted">22 Dec</span>
                                        </li>
                                        <li className="list-group-item list-group-item-red">
                                            <a href="fake_url" className="text-inherit">Vestibulum at eros</a>
                                            <span className="float-right text-muted">29 Dec</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card">
                                    <table className="table card-table">
                                        <tbody>
                                            <tr>
                                                <td className="width45"><i className="browser browser-chrome" /></td>
                                                <td>Google Chrome</td>
                                                <td className="text-right"><span className="text-muted">23%</span></td>
                                            </tr>
                                            <tr>
                                                <td><i className="browser browser-firefox" /></td>
                                                <td>Mozila Firefox</td>
                                                <td className="text-right"><span className="text-muted">15%</span></td>
                                            </tr>
                                            <tr>
                                                <td><i className="browser browser-safari" /></td>
                                                <td>Apple Safari</td>
                                                <td className="text-right"><span className="text-muted">7%</span></td>
                                            </tr>
                                            <tr>
                                                <td><i className="browser browser-opera" /></td>
                                                <td>Opera mini</td>
                                                <td className="text-right"><span className="text-muted">23%</span></td>
                                            </tr>
                                            <tr>
                                                <td><i className="browser browser-edge" /></td>
                                                <td>Microsoft edge</td>
                                                <td className="text-right"><span className="text-muted">9%</span></td>
                                            </tr>
                                            <tr>
                                                <td><i className="browser browser-uc-browser" /></td>
                                                <td>UC Browser</td>
                                                <td className="text-right"><span className="text-muted">15%</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Colors</h4>
                                        <div className="w_color">
                                            <div className="d-inline-block bg-blue rounded mr-1" title="blue" data-toggle="tooltip" />
                                            <div className="d-inline-block bg-azure rounded mr-1" title="azure" data-toggle="tooltip" />
                                            <div className="d-inline-block bg-indigo rounded mr-1" title="indigo" data-toggle="tooltip" />
                                            <div className="d-inline-block bg-purple rounded mr-1" title="purple" data-toggle="tooltip" />
                                            <div className="d-inline-block bg-pink rounded mr-1" title="pink" data-toggle="tooltip" />
                                            <div className="d-inline-block bg-red rounded mr-1" title="red" data-toggle="tooltip" />
                                            <div className="d-inline-block bg-orange rounded mr-1" title="orange" data-toggle="tooltip" />
                                            <div className="d-inline-block bg-yellow rounded mr-1" title="yellow" data-toggle="tooltip" />
                                            <div className="d-inline-block bg-lime rounded mr-1" title="lime" data-toggle="tooltip" />
                                            <div className="d-inline-block bg-green rounded mr-1" title="green" data-toggle="tooltip" />
                                            <div className="d-inline-block bg-teal rounded mr-1" title="teal" data-toggle="tooltip" />
                                            <div className="d-inline-block bg-cyan rounded mr-1" title="cyan" data-toggle="tooltip" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media">
                                            <img className="avatar avatar-xxl mr-5" src="../assets/images/sm/avatar3.jpg" alt="avatar" />
                                            <div className="media-body">
                                                <h5 className="m-0">Juan Hernandez</h5>
                                                <p className="text-muted mb-0">Webdeveloper</p>
                                                <ul className="social-links list-inline mb-0 mt-2">
                                                    <li className="list-inline-item"><a href="fake_url" title="Facebook" data-toggle="tooltip"><i className="fa fa-facebook" /></a></li>
                                                    <li className="list-inline-item"><a href="fake_url" title="Twitter" data-toggle="tooltip"><i className="fa fa-twitter" /></a></li>
                                                    <li className="list-inline-item"><a href="fake_url" title={1234567890} data-toggle="tooltip"><i className="fa fa-phone" /></a></li>
                                                    <li className="list-inline-item"><a href="fake_url" title="@skypename" data-toggle="tooltip"><i className="fa fa-skype" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">New users</h4>
                                        <div className="card-options">
                                            <a href="/#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize" /></a>
                                            <a href="/#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
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
                                        <div className="card-text">
                                            <ul className="avatar-list list-inlineblock">
                                                <li className="avatar-list-item"><a href="fake_url"><img className="avatar avatar-lg" src="../assets/images/sm/avatar1.jpg" alt="avatar" /></a></li>
                                                <li className="avatar-list-item"><a href="fake_url"><img className="avatar avatar-lg" src="../assets/images/sm/avatar2.jpg" alt="avatar" /></a></li>
                                                <li className="avatar-list-item"><a href="fake_url"><img className="avatar avatar-lg" src="../assets/images/sm/avatar3.jpg" alt="avatar" /></a></li>
                                                <li className="avatar-list-item"><a href="fake_url"><img className="avatar avatar-lg" src="../assets/images/sm/avatar4.jpg" alt="avatar" /></a></li>
                                                <li className="avatar-list-item"><a href="fake_url"><img className="avatar avatar-lg" src="../assets/images/sm/avatar5.jpg" alt="avatar" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Follow</h4>
                                    </div>
                                    <table className="table card-table">
                                        <tbody><tr>
                                            <td className="align-middle">
                                                <img className="avatar avatar-md" src="../assets/images/xs/avatar1.jpg" alt="avatar" />
                                            </td>
                                            <td>
                                                <strong>Jacob Thornton</strong>
                                                <small className="d-block text-muted">@fat</small>
                                            </td>
                                            <td className="align-middle">
                                                <button className="btn btn-outline-primary btn-sm"><span className="fa fa-twitter" /> Follow</button>
                                            </td>
                                        </tr>
                                            <tr>
                                                <td className="align-middle">
                                                    <img className="avatar avatar-md" src="../assets/images/xs/avatar7.jpg" alt="avatar" />
                                                </td>
                                                <td>
                                                    <strong>Dave Gamache</strong>
                                                    <small className="d-block text-muted">@dhg</small>
                                                </td>
                                                <td className="align-middle">
                                                    <button className="btn btn-outline-primary btn-sm"><span className="fa fa-twitter" /> Follow</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">
                                                    <img className="avatar avatar-md" src="../assets/images/xs/avatar3.jpg" alt="avatar" />
                                                </td>
                                                <td>
                                                    <strong>Mark Otto</strong>
                                                    <small className="d-block text-muted">@mdo</small>
                                                </td>
                                                <td className="align-middle">
                                                    <button className="btn btn-outline-primary btn-sm"><span className="fa fa-twitter" /> Follow</button>
                                                </td>
                                            </tr>
                                        </tbody></table>
                                </div>
                                <div className="card card-profile">
                                    <div className="card-body text-center">
                                        <img className="card-profile-img" src="../assets/images/sm/avatar1.jpg" alt="fake_url" />
                                        <h5 className="mb-3">Peter Richards</h5>
                                        <p className="mb-4">Big belly rude boy, million dollar hustler. Unemployed.</p>
                                        <button className="btn btn-outline-primary btn-sm"><span className="fa fa-twitter" /> Follow</button>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <div className="h5">Today Expenses</div>
                                        <div className="display-5 font-weight-bold mb-4">$8500</div>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-blue" style={{ width: '54%' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-deck">
                                    <div className="col-6">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <div className="h5">New feedback</div>
                                                <div className="display-5 font-weight-bold mb-4">62</div>
                                                <div className="progress progress-sm">
                                                    <div className="progress-bar bg-red" style={{ width: '34%' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <div className="h5">Users online</div>
                                                <div className="display-5 font-weight-bold mb-4">76</div>
                                                <div className="progress progress-sm">
                                                    <div className="progress-bar bg-green" style={{ width: '32%' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div>
                                            <div className="chips">
                                                <a href="fake_url" className="chip"><span className="avatar" style={{ backgroundImage: 'url(../assets/images/xs/avatar1.jpg)' }} /> Victoria</a>
                                                <a href="fake_url" className="chip"><span className="avatar" style={{ backgroundImage: 'url(../assets/images/xs/avatar2.jpg)' }} /> Nathan</a>
                                                <a href="fake_url" className="chip"><span className="avatar" style={{ backgroundImage: 'url(../assets/images/xs/avatar3.jpg)' }} /> Alice</a>
                                                <a href="fake_url" className="chip"><span className="avatar" style={{ backgroundImage: 'url(../assets/images/xs/avatar4.jpg)' }} /> Rose</a>
                                                <a href="fake_url" className="chip"><span className="avatar" style={{ backgroundImage: 'url(../assets/images/xs/avatar5.jpg)' }} /> Peter</a>
                                                <a href="fake_url" className="chip"><span className="avatar" style={{ backgroundImage: 'url(../assets/images/xs/avatar6.jpg)' }} /> Wayne</a>
                                                <a href="fake_url" className="chip"><span className="avatar" style={{ backgroundImage: 'url(../assets/images/xs/avatar7.jpg)' }} /> Michelle</a>
                                                <a href="fake_url" className="chip"><span className="avatar" style={{ backgroundImage: 'url(../assets/images/xs/avatar1.jpg)' }} /> Debra</a>
                                                <a href="fake_url" className="chip"><span className="avatar" style={{ backgroundImage: 'url(../assets/images/xs/avatar3.jpg)' }} /> Phillip</a>
                                                <a href="fake_url" className="chip"><span className="avatar" style={{ backgroundImage: 'url(../assets/images/xs/avatar5.jpg)' }} /> Jack</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="mb-2 status status-danger">Missing Success URL</div>
                                        <div className="mb-2 status status-warning status-animated">Waiting in queue</div>
                                        <div className="mb-2 status status-success">Everything is ready</div>
                                        <div className="status">Unknown status</div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Progress bars</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="progress progress-sm mb-3">
                                            <div className="progress-bar" style={{ width: '20%' }} />
                                        </div>
                                        <div className="progress progress-sm mb-3">
                                            <div className="progress-bar bg-danger" style={{ width: '45%' }} />
                                            <div className="progress-bar bg-warning" style={{ width: '30%' }} />
                                            <div className="progress-bar bg-success" style={{ width: '12%' }} />
                                        </div>
                                        <div className="progress progress-sm mb-3">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '63%' }} />
                                        </div>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar progress-bar-indeterminate" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-tabs">
                                        <a href="fake_url" className="card-tabs-item">
                                            <h5 className="mb-1">72</h5>
                                            <div className="text-uppercase text-success font-weight-bold text-nowrap">Up to date</div>
                                        </a>
                                        <a href="fake_url" className="card-tabs-item">
                                            <h5 className="mb-1">25</h5>
                                            <div className="text-uppercase text-warning font-weight-bold text-nowrap">Outdated</div>
                                        </a>
                                        <a href="fake_url" className="card-tabs-item active">
                                            <h5 className="mb-1">2</h5>
                                            <div className="text-uppercase text-danger font-weight-bold text-nowrap">Danger</div>
                                        </a>
                                    </div>
                                    <table className="table card-table">
                                        <tbody><tr>
                                            <td>
                                                <strong><a href="fake_url" className="text-inherit">uglify-js</a></strong>
                                            </td>
                                            <td className="text-right">3.0.10</td>
                                        </tr>
                                            <tr>
                                                <td>
                                                    <strong><a href="fake_url" className="text-inherit">moment</a></strong>
                                                </td>
                                                <td className="text-right">2.18.1</td>
                                            </tr>
                                        </tbody></table>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">My Profile</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-auto">
                                                    <img className="avatar avatar-xl" src="../assets/images/sm/avatar1.jpg" alt="avatar" />
                                                </div>
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label className="form-label">Email-Address</label>
                                                        <input className="form-control" placeholder="your-email@domain.com" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Bio</label>
                                                <textarea className="form-control" rows={5} defaultValue={"Big belly rude boy, million dollar hustler. Unemployed."} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Email-Address</label>
                                                <input className="form-control" placeholder="your-email@domain.com" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control" defaultValue="password" />
                                            </div>
                                            <div className="form-footer">
                                                <button className="btn btn-primary btn-block">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row text-center">
                                            <div className="col-lg-4">
                                                <h4 className="mb-1"><i className="mdi mdi-trending-down text-danger" /> 25563</h4>
                                                <div className="text-muted-dark">Total tickets</div>
                                            </div>
                                            <div className="col-lg-4">
                                                <h4 className="mb-1"><i className="mdi mdi-trending-up text-success" /> 6952</h4>
                                                <div className="text-muted-dark">Pending Tickets</div>
                                            </div>
                                            <div className="col-lg-4">
                                                <h4 className="mb-1"><i className="mdi mdi-trending-neutral text-warning" /> 18361</h4>
                                                <div className="text-muted-dark">Closed Tickets</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h2 className="card-title">Tasks activity</h2>
                                        <div className="card-options text-muted">
                                            <select className="custom-select custom-select-sm ml-2">
                                                <option>This week</option>
                                                <option>Last week</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Columnchart></Columnchart>
                                    </div>
                                    <div className="card-tabs card-tabs-bottom">
                                        <a href="fake_url" className="card-tabs-item text-center active">
                                            <h3 className="mb-1">120</h3>
                                            <div className="text-muted-dark">Tasks completed</div>
                                        </a>
                                        <a href="fake_url" className="card-tabs-item text-center">
                                            <h3 className="mb-1">25</h3>
                                            <div className="text-muted-dark">Hours logged</div>
                                        </a>
                                        <a href="fake_url" className="card-tabs-item text-center">
                                            <h3 className="mb-1">2</h3>
                                            <div className="text-muted-dark">Invoices sent</div>
                                        </a>
                                        <a href="fake_url" className="card-tabs-item text-center">
                                            <h3 className="mb-1">2</h3>
                                            <div className="text-muted-dark">Files uploaded</div>
                                        </a>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Visitors map</h3>
                                    </div>
                                    <div className="card-body">
                                        <MapChart></MapChart>

                                    </div>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Client card</h3>
                                            </div>
                                            <div className="card-map card-map-placeholder" style={{ backgroundImage: 'url(../assets/images/staticmap.png)' }} />
                                            <div className="card-body">
                                                <div className="media mb-5">
                                                    <img className="d-flex mr-5 rounded" src="../assets/images/xs/avatar2.jpg" alt="Generic placeholder" />
                                                    <div className="media-body">
                                                        <h6>Axa Global Group</h6>
                                                        <address className="text-muted small">
                                                            1290 Avenua of The Americas<br />
                                                            New York, NY 101040105
                      </address>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="h6">Relationship</div>
                                                        <p>Client</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="h6">Business Type</div>
                                                        <p>Insurance Company</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="h6">Website</div>
                                                        <p><a href="fake_url">http://www.axa.com</a></p>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="h6">Office Phone</div>
                                                        <p>+123456789</p>
                                                    </div>
                                                </div>
                                                <div className="h6">Description</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dignissimos doloribus eum fugiat itaque laboriosam maiores nisi nostrum perspiciatis vero.</p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="card-title">Server params</div>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-text">
                                                    <div className="mt-0">
                                                        <small className="float-right text-muted">10/200 GB</small>
                                                        <h6>Memory</h6>
                                                        <div className="progress progress-sm">
                                                            <div style={{ width: '60%' }} className="progress-bar" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <small className="float-right text-muted">20 GB</small>
                                                        <h6>Bandwidth</h6>
                                                        <div className="progress progress-sm">
                                                            <div style={{ width: '50%' }} className="progress-bar" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <small className="float-right text-muted">73%</small>
                                                        <h6>Activity</h6>
                                                        <div className="progress progress-sm">
                                                            <div style={{ width: '40%' }} className="progress-bar" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <small className="float-right text-muted">400 GB</small>
                                                        <h6>FTP</h6>
                                                        <div className="progress progress-sm">
                                                            <div style={{ width: '80%' }} className="progress-bar bg-danger" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Top Countries</h4>
                                            </div>
                                            <table className="table card-table">
                                                <tbody>
                                                    <tr>
                                                        <td><i className="flag flag-us" /></td>
                                                        <td>
                                                            USA
                        <div className="progress progress-xs mt-2">
                                                                <div className="progress-bar" style={{ width: '78%' }} />
                                                            </div>
                                                        </td>
                                                        <td className="text-right"><span className="text-muted">$6425</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="flag flag-pl" /></td>
                                                        <td>
                                                            Poland
                        <div className="progress progress-xs mt-2">
                                                                <div className="progress-bar" style={{ width: '62%' }} />
                                                            </div>
                                                        </td>
                                                        <td className="text-right"><span className="text-muted">$5582</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="flag flag-de" /></td>
                                                        <td>
                                                            Germany
                        <div className="progress progress-xs mt-2">
                                                                <div className="progress-bar" style={{ width: '48%' }} />
                                                            </div>
                                                        </td>
                                                        <td className="text-right"><span className="text-muted">$4587</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="flag flag-ru" /></td>
                                                        <td>
                                                            Russia
                        <div className="progress progress-xs mt-2">
                                                                <div className="progress-bar" style={{ width: '35%' }} />
                                                            </div>
                                                        </td>
                                                        <td className="text-right"><span className="text-muted">$2520</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="flag flag-au" /></td>
                                                        <td>
                                                            Australia
                        <div className="progress progress-xs mt-2">
                                                                <div className="progress-bar" style={{ width: '30%' }} />
                                                            </div>
                                                        </td>
                                                        <td className="text-right"><span className="text-muted">$1899</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="flag flag-gb" /></td>
                                                        <td>
                                                            Great Britain
                        <div className="progress progress-xs mt-2">
                                                                <div className="progress-bar" style={{ width: '22%' }} />
                                                            </div>
                                                        </td>
                                                        <td className="text-right"><span className="text-muted">$1056</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Germany map</h3>
                                            </div>
                                            <div className="card-body">
                                                <MapChart></MapChart>


                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="card-title">Portfolio</div>
                                            </div>
                                            <table className="table card-table">
                                                <tbody>
                                                    <tr>
                                                        <td className="font-weight-bold">AAPL</td>
                                                        <td className="text-right">
                                                            115.52
                        <span className="text-success">(0.34%) <i className="fa fa-caret-up" /></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">GOOG</td>
                                                        <td className="text-right">
                                                            635.3
                        <span className="text-danger">(-1.15%) <i className="fa fa-caret-down" /></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">MSFT</td>
                                                        <td className="text-right">
                                                            46.74
                        <span className="text-success">(0.26%) <i className="fa fa-caret-up" /></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">LNKD</td>
                                                        <td className="text-right">
                                                            190.04
                        <span className="text-success">(0.28%) <i className="fa fa-caret-up" /></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">TSLA</td>
                                                        <td className="text-right">
                                                            181.47
                        <span className="text-danger">(-0.23%) <i className="fa fa-caret-down" /></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">YA</td>
                                                        <td className="text-right">
                                                            37.75
                        <span className="text-danger">(-0.74%) <i className="fa fa-caret-down" /></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Match results</h3>
                                            </div>
                                            <div className="card-body">
                                                <div className="row align-items-center gutters-sm">
                                                    <div className="col text-left">
                                                        <img src="../assets/images/sm/avatar1.jpg" className="img-thumbnail rounded" alt="fake_url" />
                                                    </div>
                                                    <div className="col-auto text-center">
                                                        <div className="display-4 font-weight-bold">2:4</div>
                                                        <div className="text-muted">Today, 20:45</div>
                                                    </div>
                                                    <div className="col text-right">
                                                        <img src="../assets/images/sm/avatar2.jpg" className="img-thumbnail rounded" alt="fake_url" />
                                                    </div>
                                                </div>
                                            </div>
                                            <table className="card-table table table-center table-md mt-4">
                                                <tbody><tr>
                                                    <td />
                                                    <td className="font-weight-bold">Match stats</td>
                                                    <td />
                                                </tr>
                                                    <tr>
                                                        <td>19</td>
                                                        <td>Fouls</td>
                                                        <td>12</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Yellow Cards</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0</td>
                                                        <td>Red Cards</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0</td>
                                                        <td>Offsides</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Corner Kicks</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Saves</td>
                                                        <td>3</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Best Pictures for Today</h3>
                                            </div>
                                            <div className="card-body">
                                                <div>
                                                    <div className="row img-gallery">
                                                        <div className="col-6">
                                                            <a href="fake_url" className="d-block link-overlay">
                                                                <img className="d-block img-fluid rounded" src="../assets/images/gallery/10.jpg" alt="fake_url" />
                                                                <span className="link-overlay-bg rounded"><i className="fa fa-search" /></span>
                                                            </a>
                                                        </div>
                                                        <div className="col-6">
                                                            <a href="fake_url" className="d-block link-overlay">
                                                                <img className="d-block img-fluid rounded" src="../assets/images/gallery/2.jpg" alt="fake_url" />
                                                                <span className="link-overlay-bg rounded"><i className="fa fa-search" /></span>
                                                            </a>
                                                        </div>
                                                        <div className="col-6">
                                                            <a href="fake_url" className="d-block link-overlay">
                                                                <img className="d-block img-fluid rounded" src="../assets/images/gallery/3.jpg" alt="fake_url" />
                                                                <span className="link-overlay-bg rounded"><i className="fa fa-search" /></span>
                                                            </a>
                                                        </div>
                                                        <div className="col-6">
                                                            <a href="fake_url" className="d-block link-overlay">
                                                                <img className="d-block img-fluid rounded" src="../assets/images/gallery/4.jpg" alt="fake_url" />
                                                                <span className="link-overlay-bg rounded"><i className="fa fa-search" /></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Finance Stats</h3>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <div className="h5 mb-0">IPO Margin</div>
                                                                <span className="small text-muted">Awerage IPO Margin</span>
                                                            </div>
                                                            <div className="col text-right">
                                                                <span className="h5 text-primary font-weight-bold">+24%</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mt-4">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <div className="h5 mb-0">Payments</div>
                                                                <span className="small text-muted">Yearly Expenses</span>
                                                            </div>
                                                            <div className="col text-right">
                                                                <span className="h5 text-info font-weight-bold">+$560,800</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mt-4">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <div className="h5 mb-0">Logistics</div>
                                                                <span className="small text-muted">Overall Regional Logistics</span>
                                                            </div>
                                                            <div className="col text-right">
                                                                <span className="h5 text-warning font-weight-bold">-10%</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mt-4">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <div className="h5 mb-0">Expenses</div>
                                                                <span className="small text-muted">Balance</span>
                                                            </div>
                                                            <div className="col text-right">
                                                                <span className="h5 text-danger font-weight-bold">$345,000</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Sales Stats</h3>
                                            </div>
                                            <table className="table card-table">
                                                <tbody><tr>
                                                    <th>Scheduled</th>
                                                    <th>Count</th>
                                                    <th className="text-right">Amount</th>
                                                </tr>
                                                    <tr>
                                                        <td className="text-muted">13.06.2017</td>
                                                        <td>67</td>
                                                        <td className="text-right">$14,740</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-muted">28.02.2017</td>
                                                        <td>120</td>
                                                        <td className="text-right">$11,002</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-muted">06.03.2017</td>
                                                        <td>32</td>
                                                        <td className="text-right">$10,900</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-muted">21.10.2017</td>
                                                        <td>130</td>
                                                        <td className="text-right">$14,740</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-muted">02.01.2017</td>
                                                        <td>5</td>
                                                        <td className="text-right">$18,540</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-muted">06.03.2017</td>
                                                        <td>32</td>
                                                        <td className="text-right">$10,900</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-muted">31.12.2017</td>
                                                        <td>201</td>
                                                        <td className="text-right">$25,609</td>
                                                    </tr>
                                                </tbody></table>
                                            <div className="card-footer">
                                                <div className="text-right">
                                                    <button type="button" className="btn btn-primary"><i className="mdi mdi-export mr-2" />Export data</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Feeds</h3>
                                            </div>
                                            <div className="card-body">
                                                <div className="media mb-3">
                                                    <div className="media-object mr-4"><img className="avatar avatar-md" src="../assets/images/xs/avatar1.jpg" alt="Generic placeholder" /></div>
                                                    <div className="media-body">
                                                        <h6 className="mb-0"><a href="fake_url" className="text-color">Some of the fantastic things people have had to say about Ooooh</a></h6>
                                                        <small className="text-muted">2 days ago</small>
                                                    </div>
                                                </div>
                                                <div className="media mb-3">
                                                    <div className="media-object mr-4"><img className="avatar avatar-md" src="../assets/images/xs/avatar2.jpg" alt="Generic placeholder " /></div>
                                                    <div className="media-body">
                                                        <h6 className="mb-0"><a href="fake_url" className="text-color">Here are just some of the magazine reviews we have had</a></h6>
                                                        <small className="text-muted">1 day ago</small>
                                                    </div>
                                                </div>
                                                <div className="media mb-3">
                                                    <div className="media-object mr-4"><img className="avatar avatar-md" src="../assets/images/xs/avatar3.jpg" alt="Generic placeholder " /></div>
                                                    <div className="media-body">
                                                        <h6 className="mb-0"><a href="fake_url" className="text-color">Lorem ipsum dolor amet, consectetur adipisicing elit.</a></h6>
                                                        <small className="text-muted">2 days ago</small>
                                                    </div>
                                                </div>
                                                <div className="media mb-3">
                                                    <div className="media-object mr-4"><img className="avatar avatar-md" src="../assets/images/xs/avatar4.jpg" alt="Generic placeholder " /></div>
                                                    <div className="media-body">
                                                        <h6 className="mb-0"><a href="fake_url" className="text-color">“It’s just brilliant. I will recommend it to everyone!”</a></h6>
                                                        <small className="text-muted">2 mins ago</small>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="media-object mr-4"><img className="avatar avatar-md" src="../assets/images/xs/avatar5.jpg" alt="Generic placeholder " /></div>
                                                    <div className="media-body">
                                                        <h6 className="mb-0"><a href="fake_url" className="text-color">John has just started working on the project</a></h6>
                                                        <small className="text-muted">right now</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h3 className="card-title">Private message</h3>
                                                <div className="card-subtitle"> Send private message to Olivia Wenscombe </div>
                                                <form>
                                                    <div className="form-group">
                                                        <label className="form-label">Subject</label>
                                                        <input placeholder="Message subject" className="form-control" type="email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Message</label>
                                                        <textarea rows={3} placeholder="Your message" className="form-control" defaultValue={""} />
                                                    </div>
                                                    <button className="btn btn-primary btn-block">Send</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label className="form-label">Search</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Ratios</label>
                                                        <div className="row align-items-center">
                                                            <div className="col">
                                                                <input type="range" className="form-control custom-range" step={5} min={0} max={50} />
                                                            </div>
                                                            <div className="col-auto">
                                                                <input type="number" className="form-control w-8" defaultValue={45} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Intensity</label>
                                                        <div className="selectgroup w-100">
                                                            <label className="selectgroup-item">
                                                                <input type="radio" name="intensity" defaultValue="low" className="selectgroup-input" defaultChecked />
                                                                <span className="selectgroup-button">Low</span>
                                                            </label>
                                                            <label className="selectgroup-item">
                                                                <input type="radio" name="intensity" defaultValue="medium" className="selectgroup-input" />
                                                                <span className="selectgroup-button">Medium</span>
                                                            </label>
                                                            <label className="selectgroup-item">
                                                                <input type="radio" name="intensity" defaultValue="high" className="selectgroup-input" />
                                                                <span className="selectgroup-button">High</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Size</label>
                                                        <div className="selectgroup w-100">
                                                            <label className="selectgroup-item">
                                                                <input type="checkbox" name="value" defaultValue={50} className="selectgroup-input" defaultChecked />
                                                                <span className="selectgroup-button">S</span>
                                                            </label>
                                                            <label className="selectgroup-item">
                                                                <input type="checkbox" name="value" defaultValue={100} className="selectgroup-input" />
                                                                <span className="selectgroup-button">M</span>
                                                            </label>
                                                            <label className="selectgroup-item">
                                                                <input type="checkbox" name="value" defaultValue={150} className="selectgroup-input" />
                                                                <span className="selectgroup-button">L</span>
                                                            </label>
                                                            <label className="selectgroup-item">
                                                                <input type="checkbox" name="value" defaultValue={200} className="selectgroup-input" />
                                                                <span className="selectgroup-button">XL</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Company</label>
                                                        <input type="text" className="form-control" placeholder="e.g. ACME Technology" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Add to list</label>
                                                        <select className="form-control custom-select">
                                                            <option>Base</option>
                                                            <option>Custom</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-footer text-right">
                                                        <button type="submit" className="btn btn-primary">Search</button>
                                                    </div>
                                                </form>
                                            </div>
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
    fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(WOther); 