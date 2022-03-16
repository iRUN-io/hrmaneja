import React, { Component } from 'react'
import { connect } from 'react-redux';

class Clients extends Component {
    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""} mt-3`}>
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="Clinet Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-4 col-sm-6">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="Project" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-12">
                                                <a href="fake_url;" className="btn btn-sm btn-primary" >Search</a>
                                                <a href="fake_url;" className="btn btn-sm btn-success" >Add New</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-body text-center ribbon">
                                        <div className="ribbon-box green">New</div>
                                        <img className="rounded-circle img-thumbnail w100" src="../assets/images/sm/avatar1.jpg" alt="fake_url" />
                                        <h6 className="mt-3 mb-0">Michelle Green</h6>
                                        <span>jason-porter@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-facebook" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-slack" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-linkedin" /></a></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm">View Profile</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                        <div className="row text-center mt-4">
                                            <div className="col-lg-6 border-right">
                                                <label className="mb-0">Project</label>
                                                <h4 className="font-18">07</h4>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="mb-0">Deal</label>
                                                <h4 className="font-18">$2,510</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-body text-center ribbon">
                                        <div className="ribbon-box indigo">India</div>
                                        <img className="rounded-circle img-thumbnail w100" src="../assets/images/sm/avatar3.jpg" alt="fake_url" />
                                        <h6 className="mt-3 mb-0">David Wallace</h6>
                                        <span>Michelle@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-twitter" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-dribbble" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-slack" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-linkedin" /></a></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm">View Profile</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                        <div className="row text-center mt-4">
                                            <div className="col-lg-6 border-right">
                                                <label className="mb-0">Project</label>
                                                <h4 className="font-18">14</h4>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="mb-0">Deal</label>
                                                <h4 className="font-18">$7,510</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img className="rounded-circle img-thumbnail w100" src="../assets/images/sm/avatar4.jpg" alt="fake_url" />
                                        <h6 className="mt-3 mb-0">Michelle Green</h6>
                                        <span>jason-porter@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-facebook" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-slack" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-linkedin" /></a></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm">View Profile</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                        <div className="row text-center mt-4">
                                            <div className="col-lg-6 border-right">
                                                <label className="mb-0">Project</label>
                                                <h4 className="font-18">08</h4>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="mb-0">Deal</label>
                                                <h4 className="font-18">$5,510</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img className="rounded-circle img-thumbnail w100" src="../assets/images/sm/avatar6.jpg" alt="fake_url" />
                                        <h6 className="mt-3 mb-0">Michelle Green</h6>
                                        <span>jason-porter@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-facebook" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-pinterest" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-linkedin" /></a></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm">View Profile</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                        <div className="row text-center mt-4">
                                            <div className="col-lg-6 border-right">
                                                <label className="mb-0">Project</label>
                                                <h4 className="font-18">05</h4>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="mb-0">Deal</label>
                                                <h4 className="font-18">$1,071</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-body text-center ribbon">
                                        <div className="ribbon-box orange">Gold</div>
                                        <img className="rounded-circle img-thumbnail w100" src="../assets/images/sm/avatar5.jpg" alt="fake_url" />
                                        <h6 className="mt-3 mb-0">Michelle Green</h6>
                                        <span>jason-porter@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-facebook" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-slack" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-linkedin" /></a></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm">View Profile</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                        <div className="row text-center mt-4">
                                            <div className="col-lg-6 border-right">
                                                <label className="mb-0">Project</label>
                                                <h4 className="font-18">31</h4>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="mb-0">Deal</label>
                                                <h4 className="font-18">$45,510</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img className="rounded-circle img-thumbnail w100" src="../assets/images/sm/avatar1.jpg" alt="fake_url" />
                                        <h6 className="mt-3 mb-0">Sean Black</h6>
                                        <span>jason-porter@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-facebook" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-slack" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-linkedin" /></a></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm">View Profile</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                        <div className="row text-center mt-4">
                                            <div className="col-lg-6 border-right">
                                                <label className="mb-0">Project</label>
                                                <h4 className="font-18">31</h4>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="mb-0">Deal</label>
                                                <h4 className="font-18">$45,510</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-body text-center ribbon">
                                        <div className="ribbon-box pink">USA</div>
                                        <img className="rounded-circle img-thumbnail w100" src="../assets/images/sm/avatar2.jpg" alt="fake_url" />
                                        <h6 className="mt-3 mb-0">Jason Porter</h6>
                                        <span>Carol@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-skype" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-instagram" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-dribbble" /></a></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm">View Profile</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                        <div className="row text-center mt-4">
                                            <div className="col-lg-6 border-right">
                                                <label className="mb-0">Project</label>
                                                <h4 className="font-18">22</h4>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="mb-0">Deal</label>
                                                <h4 className="font-18">$12,510</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img className="rounded-circle img-thumbnail w100" src="../assets/images/sm/avatar2.jpg" alt="fake_url" />
                                        <h6 className="mt-3 mb-0">David Wallace</h6>
                                        <span>jason-porter@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-flickr" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-dropbox" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-apple" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-pinterest" /></a></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm">View Profile</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                        <div className="row text-center mt-4">
                                            <div className="col-lg-6 border-right">
                                                <label className="mb-0">Project</label>
                                                <h4 className="font-18">12</h4>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="mb-0">Deal</label>
                                                <h4 className="font-18">$1,840</h4>
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
export default connect(mapStateToProps, mapDispatchToProps)(Clients);