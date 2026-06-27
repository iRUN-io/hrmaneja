import React, { Component } from 'react'
import { connect } from 'react-redux';
import MapChart from '../../common/MapChart'
import {
    boxCloseAction, box2CloseAction, box3CloseAction
} from '../../../actions/settingsAction';

class JobPortalDashboard extends Component {
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
        const { fixNavbar, boxClose, box2Close, box3Close } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""} mt-3`}>
                    <div className="container-fluid">
                        <div className="row clearfix row-deck">
                            <div className="col-lg-6 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Top Locations</h3>
                                        <div className="card-options">
                                            {/* <a href="fake_url" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a> */}
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
                                        <MapChart />
                                        {/* <div id="world-map-markers" className="jvector-map" style={{ height: 300 }} /> */}
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-xl-4 col-md-12">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>35%</strong></div>
                                                    <div className="float-right"><small className="text-muted">2018</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-gray" role="progressbar" style={{ width: '35%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span className="text-uppercase font-10">USA</span>
                                            </div>
                                            <div className="col-xl-4 col-md-12">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>61%</strong></div>
                                                    <div className="float-right"><small className="text-muted">2018</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-gray" role="progressbar" style={{ width: '61%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span className="text-uppercase font-10">India</span>
                                            </div>
                                            <div className="col-xl-4 col-md-12">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>37%</strong></div>
                                                    <div className="float-right"><small className="text-muted">2018</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-gray" role="progressbar" style={{ width: '37%' }} aria-valuenow={37} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span className="text-uppercase font-10">Australia</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                {boxClose ?
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Job View</h3>
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
                                        <div className="card-body">
                                            <div className="row text-center">
                                                <div className="col-lg-4 col-sm-12 border-right">
                                                    <label className="mb-0 font-10">All Time</label>
                                                    <h4 className="font-20 font-weight-bold">2,025</h4>
                                                </div>
                                                <div className="col-lg-4 col-sm-12 border-right">
                                                    <label className="mb-0 font-10">Last Month</label>
                                                    <h4 className="font-20 font-weight-bold">754</h4>
                                                </div>
                                                <div className="col-lg-4 col-sm-12">
                                                    <label className="mb-0 font-10">Today</label>
                                                    <h4 className="font-20 font-weight-bold">54</h4>
                                                </div>
                                            </div>
                                            <table className="table table-striped mt-4">
                                                <tbody><tr>
                                                    <td>
                                                        <label className="d-block">Biology - BIO <span className="float-right">43%</span></label>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-lightgray" role="progressbar" aria-valuenow={43} aria-valuemin={0} aria-valuemax={100} style={{ width: '43%' }} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="d-block">Business Analysis - BUS <span className="float-right">27%</span></label>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-lightgray" role="progressbar" aria-valuenow={27} aria-valuemin={0} aria-valuemax={100} style={{ width: '27%' }} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="d-block">Computer Technology - CT <span className="float-right">81%</span></label>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-lightgray" role="progressbar" aria-valuenow={77} aria-valuemin={0} aria-valuemax={100} style={{ width: '81%' }} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="d-block">Management - MGT <span className="float-right">61%</span></label>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-lightgray" role="progressbar" aria-valuenow={77} aria-valuemin={0} aria-valuemax={100} style={{ width: '61%' }} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label className="d-block">Angular Dev <span className="float-right">77%</span></label>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-lightgray" role="progressbar" aria-valuenow={77} aria-valuemin={0} aria-valuemax={100} style={{ width: '77%' }} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                        <div className="card-footer">
                                            <small>Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="/#">Learn More</a></small>
                                        </div>
                                    </div>
                                    : ""}
                            </div>
                            <div className="col-lg-3 col-md-6">
                                {box2Close ?
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Current job Openings</h3>
                                            <div className="card-options">
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
                                            <div className="table-responsive">
                                                <table className="table table-vcenter table_custom spacing5 mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td className="w40">
                                                                <i className="flag flag-us" data-toggle="tooltip" data-original-title="flag flag-us" />
                                                            </td>
                                                            <td>
                                                                <small>United States</small>
                                                                <h5 className="mb-0">434</h5>
                                                            </td>
                                                            {/* <td>
                                                            <span className="chart">5,3,7,8,6,1,4,9</span>
                                                        </td> */}
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <i className="flag flag-au" data-toggle="tooltip" data-original-title="flag flag-au" />
                                                            </td>
                                                            <td>
                                                                <small>Australia</small>
                                                                <h5 className="mb-0">215</h5>
                                                            </td>
                                                            {/* <td>
                                                            <span className="chart">4,2,2,5,6,9,8,1</span>
                                                        </td> */}
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <i className="flag flag-ca" data-toggle="tooltip" data-original-title="flag flag-ca" />
                                                            </td>
                                                            <td>
                                                                <small>Canada</small>
                                                                <h5 className="mb-0">105</h5>
                                                            </td>
                                                            {/* <td>
                                                            <span className="chart">7,5,3,9,5,1,4,6</span>
                                                        </td> */}
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <i className="flag flag-gb" data-toggle="tooltip" data-original-title="flag flag-gb" />
                                                            </td>
                                                            <td>
                                                                <small>United Kingdom</small>
                                                                <h5 className="mb-0">250</h5>
                                                            </td>
                                                            {/* <td>
                                                            <span className="chart">3,5,6,4,9,5,5,2</span>
                                                        </td> */}
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <i className="flag flag-nl" data-toggle="tooltip" data-original-title="flag flag-nl" />
                                                            </td>
                                                            <td>
                                                                <small>Netherlands</small>
                                                                <h5 className="mb-0">52</h5>
                                                            </td>
                                                            {/* <td>
                                                            <span className="chart">8,2,1,5,6,3,4,9</span>
                                                        </td> */}
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <small>Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="/#">Learn More</a></small>
                                        </div>
                                    </div>
                                    : ""}
                            </div>
                        </div>
                        <div className="row clearfix row-deck">
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                {box3Close ?
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Recent Applicants</h3>
                                            <div className="card-options">
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
                                            <div className="table-responsive">
                                                <table className="table table-hover table-striped table-vcenter mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th />
                                                            <th>Name</th>
                                                            <th>Apply for</th>
                                                            <th>Date</th>
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="w60">
                                                                <div className="avtar-pic w35 bg-red" data-toggle="tooltip" data-placement="top" title="Avatar Name"><span>MN</span></div>
                                                            </td>
                                                            <td>
                                                                <div className="font-15">Marshall Nichols</div>
                                                                <span className="text-muted">marshall-n@gmail.com</span>
                                                            </td>
                                                            <td><span>Full-stack developer</span></td>
                                                            <td>24 Jun, 2015</td>
                                                            <td>
                                                                <a href="fake_url;" className="btn btn-info btn-round">Interview</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="w60">
                                                                <img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                            </td>
                                                            <td>
                                                                <div className="font-15">Susie Willis</div>
                                                                <span className="text-muted">sussie-w@gmail.com</span>
                                                            </td>
                                                            <td><span>Designer</span></td>
                                                            <td>28 Jun, 2015</td>
                                                            <td>
                                                                <a href="fake_url;" className="btn btn-info btn-round">Interview</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="w60">
                                                                <div className="avtar-pic w35 bg-pink" data-toggle="tooltip" data-placement="top" title="Avatar Name"><span>MN</span></div>
                                                            </td>
                                                            <td>
                                                                <div className="font-15">Debra Stewart</div>
                                                                <span className="text-muted">debra@gmail.com</span>
                                                            </td>
                                                            <td><span>Project Manager</span></td>
                                                            <td>21 July, 2015</td>
                                                            <td>
                                                                <a href="fake_url;" className="btn btn-danger btn-round">Cancel</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="w60">
                                                                <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                            </td>
                                                            <td>
                                                                <div className="font-15">Francisco Vasquez</div>
                                                                <span className="text-muted">francisv@gmail.com</span>
                                                            </td>
                                                            <td><span>Senior Developer</span></td>
                                                            <td>18 Jan, 2016</td>
                                                            <td>
                                                                <a href="fake_url;" className="btn btn-info btn-round">Interview</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="w60">
                                                                <img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="Avatar Name" alt="Avatar" className="w35 h35 rounded" />
                                                            </td>
                                                            <td>
                                                                <div className="font-15">Jane Hunt</div>
                                                                <span className="text-muted">jane-hunt@gmail.com</span>
                                                            </td>
                                                            <td><span>Front-end Developer</span></td>
                                                            <td>08 Mar, 2016</td>
                                                            <td>
                                                                <a href="fake_url;" className="btn btn-success btn-round">Interviewed</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    : ""}
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <div className="card-body text-center d-flex align-items-center justify-content-center">
                                        <div style={{ maxWidth: 340 }}>
                                            <img src="../assets/images/we-released.svg" alt="..." className="img-fluid mb-4 mt-4" style={{ maxWidth: 272 }} />
                                            <h5 className="mb-2">We released Bootstrap 4x versions of our theme.</h5>
                                            <p className="text-muted">This is a true story and totally not made up. This is going to be better in the long run but for now this is the way it is.</p>
                                            <a href="#!" className="btn btn-primary">Try it for free</a>
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
    boxClose: state.settings.isBoxClose,
    box2Close: state.settings.isBox2Close,
    box3Close: state.settings.isBox3Close,
})

const mapDispatchToProps = dispatch => ({
    boxCloseAction: (e) => dispatch(boxCloseAction(e)),
    box2CloseAction: (e) => dispatch(box2CloseAction(e)),
    box3CloseAction: (e) => dispatch(box3CloseAction(e)),
})
export default connect(mapStateToProps, mapDispatchToProps)(JobPortalDashboard);