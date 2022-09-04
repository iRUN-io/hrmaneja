import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class TablesBasic extends Component {
    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item"><NavLink to="/tables" className="nav-link">Basic</NavLink></li>
                                <li className="nav-item"><NavLink to="/tables-datatable" className="nav-link">Datatable</NavLink></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" data-toggle="dropdown" href="/#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
                                    <div className="dropdown-menu">
                                        <NavLink to="/tables-color" className="dropdown-item">Table Color</NavLink>
                                        <NavLink to="/tables-basic" className="dropdown-item active">Other</NavLink>
                                    </div>
                                </li>
                            </ul>
                            <div className="header-action">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body py-4">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Basic Example 1</h3>
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
                                        <div className="table-responsive">
                                            <table className="table text-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Patients</th>
                                                        <th>Adress</th>
                                                        <th>START Date</th>
                                                        <th>END Date</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td><span>John</span></td>
                                                        <td><span className="text-info">70 Bowman St. South Windsor, CT 06074</span></td>
                                                        <td>Sept 13, 2019</td>
                                                        <td>Sept 16, 2019</td>
                                                        <td><span className="tag tag-success">Admit</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td><span>Jack Bird</span></td>
                                                        <td><span className="text-info">123 6th St. Melbourne, FL 32904</span></td>
                                                        <td>Sept 13, 2019</td>
                                                        <td>Sept 22, 2019</td>
                                                        <td><span className="tag tag-default">Discharge</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td><span>Dean Otto</span></td>
                                                        <td><span className="text-info">123 6th St. Melbourne, FL 32904</span></td>
                                                        <td>Sept 13, 2019</td>
                                                        <td>Sept 23, 2019</td>
                                                        <td><span className="tag tag-success">Admit</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td><span>Jack Bird</span></td>
                                                        <td><span className="text-info">4 Shirley Ave. West Chicago, IL 60185</span></td>
                                                        <td>Sept 17, 2019</td>
                                                        <td>Sept 16, 2019</td>
                                                        <td><span className="tag tag-default">Discharge</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td><span>Hughe L.</span></td>
                                                        <td><span className="text-info">4 Shirley Ave. West Chicago, IL 60185</span></td>
                                                        <td>Sept 18, 2019</td>
                                                        <td>Sept 18, 2019</td>
                                                        <td><span className="tag tag-success">Admit</span></td>
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
                <div className="section-gray py-4">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12">
                                <div className="card bg-none">
                                    <div className="card-header">
                                        <h3 className="card-title">User List</h3>
                                        <div className="card-options">
                                            <a href="/#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                                            <a href="/#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize" /></a>
                                            <a href="/#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-vcenter text-nowrap table_custom spacing8 mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center w-1"><i className="icon-people" /></th>
                                                        <th>User</th>
                                                        <th>Usage</th>
                                                        <th className="text-center">Payment</th>
                                                        <th>Activity</th>
                                                        <th className="text-center">Satisfaction</th>
                                                        <th className="text-center"><i className="icon-settings" /></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center">
                                                            <div className="avatar d-block">
                                                                <img className="rounded-circle" src="../assets/images/xs/avatar7.jpg" alt="avatar" />
                                                                <span className="avatar-status bg-secondary" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>Teresa Reyes</div>
                                                            <div className="small text-muted">Registered: Mar 4, 2018</div>
                                                        </td>
                                                        <td>
                                                            <div className="clearfix">
                                                                <div className="float-left"><strong>36%</strong></div>
                                                                <div className="float-right"><small className="text-muted">Jun 11, 2019 - Jul 10, 2019</small></div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-red" role="progressbar" style={{ width: '36%' }} aria-valuenow={36} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="payment payment-ebay" />
                                                        </td>
                                                        <td>
                                                            <div className="small text-muted">Last login</div>
                                                            <div>2 minutes ago</div>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="mx-auto chart-circle chart-circle-xs" data-value="0.36" data-thickness={3} data-color="blue"><canvas width={40} height={40} />
                                                                <div className="chart-circle-value">36%</div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="item-action dropdown">
                                                                <a href="fake_url" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical" /></a>
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
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">
                                                            <div className="avatar d-block">
                                                                <img className="rounded-circle" src="../assets/images/xs/avatar3.jpg" alt="avatar" />
                                                                <span className="avatar-status bg-warning" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>Emma Wade</div>
                                                            <div className="small text-muted">Registered: Mar 20, 2018</div>
                                                        </td>
                                                        <td>
                                                            <div className="clearfix">
                                                                <div className="float-left"><strong>7%</strong></div>
                                                                <div className="float-right"><small className="text-muted">Jun 11, 2019 - Jul 10, 2019</small></div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-red" role="progressbar" style={{ width: '7%' }} aria-valuenow={7} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="payment payment-paypal" />
                                                        </td>
                                                        <td>
                                                            <div className="small text-muted">Last login</div>
                                                            <div>a minute ago</div>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="mx-auto chart-circle chart-circle-xs" data-value="0.07" data-thickness={3} data-color="blue"><canvas width={40} height={40} />
                                                                <div className="chart-circle-value">7%</div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="item-action dropdown">
                                                                <a href="fake_url" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical" /></a>
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
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">
                                                            <div className="avatar d-block">
                                                                <img className="rounded-circle" src="../assets/images/xs/avatar8.jpg" alt="avatar" />
                                                                <span className="avatar-status bg-success" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>Carol Henderson</div>
                                                            <div className="small text-muted">Registered: Feb 22, 2018</div>
                                                        </td>
                                                        <td>
                                                            <div className="clearfix">
                                                                <div className="float-left"><strong>80%</strong></div>
                                                                <div className="float-right"><small className="text-muted">Jun 11, 2019 - Jul 10, 2019</small></div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-green" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="payment payment-visa" />
                                                        </td>
                                                        <td>
                                                            <div className="small text-muted">Last login</div>
                                                            <div>9 minutes ago</div>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="mx-auto chart-circle chart-circle-xs" data-value="0.8" data-thickness={3} data-color="blue"><canvas width={40} height={40} />
                                                                <div className="chart-circle-value">80%</div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="item-action dropdown">
                                                                <a href="fake_url" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical" /></a>
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
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">
                                                            <div className="avatar d-block">
                                                                <img className="rounded-circle" src="../assets/images/xs/avatar2.jpg" alt="avatar" />
                                                                <span className="avatar-status bg-success" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>Christopher Harvey</div>
                                                            <div className="small text-muted">Registered: Jan 22, 2018</div>
                                                        </td>
                                                        <td>
                                                            <div className="clearfix">
                                                                <div className="float-left"><strong>65%</strong></div>
                                                                <div className="float-right"><small className="text-muted">Jun 11, 2019 - Jul 10, 2019</small></div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-green" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="payment payment-googlewallet" />
                                                        </td>
                                                        <td>
                                                            <div className="small text-muted">Last login</div>
                                                            <div>8 minutes ago</div>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="mx-auto chart-circle chart-circle-xs" data-value="0.83" data-thickness={3} data-color="blue"><canvas width={40} height={40} />
                                                                <div className="chart-circle-value">83%</div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="item-action dropdown">
                                                                <a href="fake_url" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical" /></a>
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
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="card bg-none">
                                    <div className="card-header">
                                        <h3 className="card-title">User Details</h3>
                                        <div className="card-options">
                                            <a href="/#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
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
                                    <div className="card-body pt-0">
                                        <div className="table-responsive table_e2">
                                            <table className="table table-hover table-vcenter table_custom text-nowrap spacing5 text-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <label className="custom-control custom-checkbox mb-0">
                                                                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                                                                <span className="custom-control-label">&nbsp;</span>
                                                            </label>
                                                        </th>
                                                        <th>Name</th>
                                                        <th>Phone</th>
                                                        <th>Address</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="width45">
                                                            <label className="custom-control custom-checkbox mb-0">
                                                                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                                                                <span className="custom-control-label">&nbsp;</span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <img src="../assets/images/xs/avatar1.jpg" className="rounded" alt="fake_url" />
                                                            <span className="c_name">John Smith</span>
                                                        </td>
                                                        <td>
                                                            <span className="phone"><i className="fa fa-phone mr-2" />264-625-2583</span>
                                                        </td>
                                                        <td>
                                                            <span><i className="fa fa-map-marker" />123 6th St. Melbourne, FL 32904</span>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-primary btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                                                            <button type="button" className="btn btn-danger btn-sm" title="Delete"><i className="fa fa-trash-o" /></button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="custom-control custom-checkbox mb-0">
                                                                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                                                                <span className="custom-control-label">&nbsp;</span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <img src="../assets/images/xs/avatar3.jpg" className="rounded" alt="fake_url" />
                                                            <span className="c_name">Hossein Shams</span>
                                                        </td>
                                                        <td>
                                                            <span className="phone"><i className="fa fa-phone mr-2" />264-625-5689</span>
                                                        </td>
                                                        <td>
                                                            <address><i className="fa fa-map-marker" />44 Shirley Ave. West Chicago, IL 60185</address>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-primary btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                                                            <button type="button" className="btn btn-danger btn-sm" title="Delete"><i className="fa fa-trash-o" /></button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="custom-control custom-checkbox mb-0">
                                                                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                                                                <span className="custom-control-label">&nbsp;</span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <img src="../assets/images/xs/avatar9.jpg" className="rounded" alt="fake_url" />
                                                            <span className="c_name">Frank Camly</span>
                                                        </td>
                                                        <td>
                                                            <span className="phone"><i className="fa fa-phone mr-2" />264-625-9999</span>
                                                        </td>
                                                        <td>
                                                            <address><i className="fa fa-map-marker" />123 6th St. Melbourne, FL 32904</address>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-primary btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                                                            <button type="button" className="btn btn-danger btn-sm" title="Delete"><i className="fa fa-trash-o" /></button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="custom-control custom-checkbox mb-0">
                                                                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                                                                <span className="custom-control-label">&nbsp;</span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <img src="../assets/images/xs/avatar10.jpg" className="rounded" alt="fake_url" />
                                                            <span className="c_name">Tim Hank</span>
                                                        </td>
                                                        <td>
                                                            <span className="phone"><i className="fa fa-phone mr-2" />264-625-1212</span>
                                                        </td>
                                                        <td>
                                                            <address><i className="fa fa-map-marker" />70 Bowman St. South Windsor, CT 06074</address>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-primary btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                                                            <button type="button" className="btn btn-danger btn-sm" title="Delete"><i className="fa fa-trash-o" /></button>
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
                <div className="section-body py-4">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Basic Example 2</h3>
                                        <div className="card-options">
                                            <a href="/#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
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
                                        <div className="table-responsive">
                                            <table className="table table-hover text-nowrap mb-0">
                                                <tbody>
                                                    <tr>
                                                        <th><i className="fa fa-circle text-success" /></th>
                                                        <td>Twitter</td>
                                                        <td><span>862 Records</span></td>
                                                        <td>35% <i className="fa fa-caret-up " /></td>
                                                        <td><span className="sparkbar">5,8,6,3,5,9,2</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th><i className="fa fa-circle text-info" /></th>
                                                        <td>Facebook</td>
                                                        <td><span>451 Records</span></td>
                                                        <td>15% <i className="fa fa-caret-up " /></td>
                                                        <td><span className="sparkbar">8,2,1,5,-2,6,-4</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th><i className="fa fa-circle text-warning" /></th>
                                                        <td>Mailchimp</td>
                                                        <td><span>502 Records</span></td>
                                                        <td>20% <i className="fa fa-caret-down" /></td>
                                                        <td><span className="sparkbar">2,3,3,-2,-8,4,8</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th><i className="fa fa-circle text-danger" /></th>
                                                        <td>Google</td>
                                                        <td><span>502 Records</span></td>
                                                        <td>20% <i className="fa fa-caret-up " /></td>
                                                        <td><span className="sparkbar">5,5,5,6,3,2,1</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th><i className="fa fa-circle " /></th>
                                                        <td>Other</td>
                                                        <td><span>237 Records</span></td>
                                                        <td>10% <i className="fa fa-caret-down" /></td>
                                                        <td><span className="sparkbar">5,8,6,3,5,9,2</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Basic Example 3</h3>
                                        <div className="card-options">
                                            <a href="/#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
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
                                        <div className="table-responsive">
                                            <table className="table table-hover text-nowrap mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td>Twitter</td>
                                                        <td><span>862 Records</span></td>
                                                        <td><i className="icon-bubble text-info"><span className="ml-1">241</span></i></td>
                                                        <td><i className="icon-like text-success"><span className="ml-1">595</span></i></td>
                                                        <td style={{ width: 150 }}>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '40%' }}> <span className="sr-only">40% Complete</span> </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Facebook</td>
                                                        <td><span>451 Records</span></td>
                                                        <td><i className="icon-bubble text-info"><span className="ml-1">540</span></i></td>
                                                        <td><i className="icon-like text-success"><span className="ml-1">1K</span></i></td>
                                                        <td><div className="progress progress-xs">
                                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} style={{ width: '15%' }}> <span className="sr-only">15% Complete</span> </div>
                                                        </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>LinkedIn</td>
                                                        <td><span>502 Records</span></td>
                                                        <td><i className="icon-bubble text-info"><span className="ml-1">102</span></i></td>
                                                        <td><i className="icon-like text-success"><span className="ml-1">201</span></i></td>
                                                        <td><div className="progress progress-xs">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: '100%' }}> <span className="sr-only">100% Complete</span> </div>
                                                        </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Google</td>
                                                        <td><span>502 Records</span></td>
                                                        <td><i className="icon-bubble text-info"><span className="ml-1">21</span></i></td>
                                                        <td><i className="icon-like text-success"><span className="ml-1">28</span></i></td>
                                                        <td><div className="progress progress-xs">
                                                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }}> <span className="sr-only">85% Complete</span> </div>
                                                        </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Other</td>
                                                        <td><span>237 Records</span></td>
                                                        <td><i className="icon-bubble text-info"><span className="ml-1">9</span></i></td>
                                                        <td><i className="icon-like text-success"><span className="ml-1">15</span></i></td>
                                                        <td>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '40%' }}> <span className="sr-only">40% Complete</span> </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix row-deck">
                            <div className="col-lg-12 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Social Statistics</h3>
                                        <div className="card-options">
                                            <a href="/#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
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
                                        <div className="table-responsive">
                                            <table className="table table-hover table-vcenter text-nowrap card-table table_custom">
                                                <thead>
                                                    <tr>
                                                        <th>Media</th>
                                                        <th>Name</th>
                                                        <th>Like</th>
                                                        <th>Comments</th>
                                                        <th>Share</th>
                                                        <th>Members</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="width40"><i className="fa fa-linkedin" /></td>
                                                        <td><span className="list-name">Linked In</span>
                                                            <span className="text-muted">Florida, United States</span>
                                                        </td>
                                                        <td>19K</td>
                                                        <td>14K</td>
                                                        <td>10K</td>
                                                        <td>
                                                            <span className="tag tag-success">2341</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="fa fa-twitter" /></td>
                                                        <td><span className="list-name">Twitter</span>
                                                            <span className="text-muted">Arkansas, United States</span>
                                                        </td>
                                                        <td>7K</td>
                                                        <td>11K</td>
                                                        <td>21K</td>
                                                        <td>
                                                            <span className="tag tag-success">952</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="fa fa-facebook" /></td>
                                                        <td><span className="list-name">Facebook</span>
                                                            <span className="text-muted">Illunois, United States</span>
                                                        </td>
                                                        <td>15K</td>
                                                        <td>18K</td>
                                                        <td>8K</td>
                                                        <td>
                                                            <span className="tag tag-success">6127</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="fa fa-google-plus" /></td>
                                                        <td><span className="list-name">Google Plus</span>
                                                            <span className="text-muted">Arizona, United States</span>
                                                        </td>
                                                        <td>15K</td>
                                                        <td>18K</td>
                                                        <td>154</td>
                                                        <td>
                                                            <span className="tag tag-success">325</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="fa fa-youtube-play" /></td>
                                                        <td><span className="list-name">YouTube</span>
                                                            <span className="text-muted">Alaska, United States</span>
                                                        </td>
                                                        <td>15K</td>
                                                        <td>18K</td>
                                                        <td>200</td>
                                                        <td>
                                                            <span className="tag tag-success">160</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="fa fa-twitter" /></td>
                                                        <td><span className="list-name">Twitter</span>
                                                            <span className="text-muted">Arkansas, United States</span>
                                                        </td>
                                                        <td>7K</td>
                                                        <td>11K</td>
                                                        <td>21K</td>
                                                        <td>
                                                            <span className="tag tag-success">952</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Store</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-vcenter text-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Order No</th>
                                                        <th>Product Name</th>
                                                        <th>Purchased On</th>
                                                        <th>Shipping Status</th>
                                                        <th>Payment Method</th>
                                                        <th>Payment Status</th>
                                                        <th />
                                                        <th />
                                                        <th />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Q01</td>
                                                        <td>Iphone 7</td>
                                                        <td>12 Jan 2018</td>
                                                        <td>Dispatched</td>
                                                        <td>Credit card</td>
                                                        <td><label className="tag tag-success">Approved</label></td>
                                                        <td><a href="fake_url;" className="btn btn-success btn-sm">View Order</a></td>
                                                        <td><button className="btn btn-danger btn-sm"><i className="icon-trash" /></button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Q02</td>
                                                        <td>Galaxy S8</td>
                                                        <td>18 Jan 2018</td>
                                                        <td>Dispatched</td>
                                                        <td>Internet banking</td>
                                                        <td><label className="tag tag-warning">Pending</label></td>
                                                        <td><a href="fake_url;" className="btn btn-success btn-sm">View Order</a></td>
                                                        <td><button className="btn btn-danger btn-sm"><i className="icon-trash" /></button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Q03</td>
                                                        <td>Amazon Echo</td>
                                                        <td>22 Feb 2018</td>
                                                        <td>Dispatched</td>
                                                        <td>Credit card</td>
                                                        <td><label className="tag tag-success">Approved</label></td>
                                                        <td><a href="fake_url;" className="btn btn-success btn-sm">View Order</a></td>
                                                        <td><button className="btn btn-danger btn-sm"><i className="icon-trash" /></button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Q04</td>
                                                        <td>Google Pixel</td>
                                                        <td>22 Feb 2018</td>
                                                        <td>Dispatched</td>
                                                        <td>Cash on delivery</td>
                                                        <td><label className="tag tag-danger">Rejected</label></td>
                                                        <td><a href="fake_url;" className="btn btn-success btn-sm">View Order</a></td>
                                                        <td><button className="btn btn-danger btn-sm"><i className="icon-trash" /></button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Q05</td>
                                                        <td>Mac Mini</td>
                                                        <td>8 March 2018</td>
                                                        <td>Dispatched</td>
                                                        <td>Debit card</td>
                                                        <td><label className="tag tag-success">Approved</label></td>
                                                        <td><a href="fake_url;" className="btn btn-success btn-sm">View Order</a></td>
                                                        <td><button className="btn btn-danger btn-sm"><i className="icon-trash" /></button></td>
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
    fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(TablesBasic);