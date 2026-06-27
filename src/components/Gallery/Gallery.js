import React, { Component } from 'react'
import { connect } from 'react-redux';

class Gallery extends Component {
    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""} mt-3`}>
                    <div className="container-fluid">
                        <div className="row row-cards">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="page-subtitle ml-0">1 - 12 of 1713 photos</div>
                                        <div className="page-options d-flex">
                                            <select className="form-control custom-select w-auto">
                                                <option value="asc">Newest</option>
                                                <option value="desc">Oldest</option>
                                            </select>
                                            <div className="input-icon ml-2">
                                                <span className="input-icon-addon">
                                                    <i className="fe fe-search" />
                                                </span>
                                                <input type="text" className="form-control" placeholder="Search photo" />
                                            </div>
                                            <button type="submit" className="btn btn-primary ml-2">Upload New</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cards">
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="fake_url" className="mb-3">
                                        <img src="../assets/images/gallery/1.jpg" alt=" by Nathan Guerrero" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar1.jpg" alt="fake_url" />
                                        <div>
                                            <div>Nathan Guerrero</div>
                                            <small className="d-block text-muted">12 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted">
                                            <a href="fake_url" className="icon"><i className="fe fe-eye mr-1" /> 112</a>
                                            <a href="fake_url" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" /> 42</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="fake_url" className="mb-3">
                                        <img src="../assets/images/gallery/2.jpg" alt=" by Nathan Guerrero" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar2.jpg" alt="fake_url" />
                                        <div>
                                            <div>Alice Mason</div>
                                            <small className="d-block text-muted">12 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted">
                                            <a href="fake_url" className="icon"><i className="fe fe-eye mr-1" /> 70</a>
                                            <a href="fake_url" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" /> 0</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="fake_url" className="mb-3">
                                        <img src="../assets/images/gallery/3.jpg" alt=" by Rose Bradley" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar3.jpg" alt="fake_url" />
                                        <div>
                                            <div>Rose Bradley</div>
                                            <small className="d-block text-muted">4 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted">
                                            <a href="fake_url" className="icon"><i className="fe fe-eye mr-1" /> 166</a>
                                            <a href="fake_url" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" /> 96</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="fake_url" className="mb-3">
                                        <img src="../assets/images/gallery/4.jpg" alt="by Peter Richards" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar4.jpg" alt="fake_url" />
                                        <div>
                                            <div>Peter Richards</div>
                                            <small className="d-block text-muted">18 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted">
                                            <a href="fake_url" className="icon"><i className="fe fe-eye mr-1" /> 76</a>
                                            <a href="fake_url" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" /> 6</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="fake_url" className="mb-3">
                                        <img src="../assets/images/gallery/5.jpg" alt="by Wayne Holland" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar5.jpg" alt="fake_url" />
                                        <div>
                                            <div>Wayne Holland</div>
                                            <small className="d-block text-muted">16 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted">
                                            <a href="fake_url" className="icon"><i className="fe fe-eye mr-1" /> 106</a>
                                            <a href="fake_url" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" /> 36</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="fake_url" className="mb-3">
                                        <img src="../assets/images/gallery/6.jpg" alt=" by Michelle Ross" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar6.jpg" alt="fake_url" />
                                        <div>
                                            <div>Michelle Ross</div>
                                            <small className="d-block text-muted">4 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted">
                                            <a href="fake_url" className="icon"><i className="fe fe-eye mr-1" /> 77</a>
                                            <a href="fake_url" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" /> 7</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="fake_url" className="mb-3">
                                        <img src="../assets/images/gallery/7.jpg" alt=" by Debra Beck" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar7.jpg" alt="fake_url" />
                                        <div>
                                            <div>Debra Beck</div>
                                            <small className="d-block text-muted">6 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted">
                                            <a href="fake_url" className="icon"><i className="fe fe-eye mr-1" /> 150</a>
                                            <a href="fake_url" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" /> 80</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="fake_url" className="mb-3">
                                        <img src="../assets/images/gallery/8.jpg" alt=" by Phillip Peters" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar8.jpg" alt="fake_url" />
                                        <div>
                                            <div>Phillip Peters</div>
                                            <small className="d-block text-muted">17 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted">
                                            <a href="fake_url" className="icon"><i className="fe fe-eye mr-1" /> 153</a>
                                            <a href="fake_url" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" /> 83</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="fake_url" className="mb-3">
                                        <img src="../assets/images/gallery/9.jpg" alt=" by Jack Ruiz" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar1.jpg" alt="fake_url" />
                                        <div>
                                            <div>Jack Ruiz</div>
                                            <small className="d-block text-muted">15 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted">
                                            <a href="fake_url" className="icon"><i className="fe fe-eye mr-1" /> 143</a>
                                            <a href="fake_url" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" /> 73</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="fake_url" className="mb-3">
                                        <img src="../assets/images/gallery/10.jpg" alt=" by Ronald Bradley" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar2.jpg" alt="fake_url" />
                                        <div>
                                            <div>Ronald Bradley</div>
                                            <small className="d-block text-muted">11 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted">
                                            <a href="fake_url" className="icon"><i className="fe fe-eye mr-1" /> 149</a>
                                            <a href="fake_url" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" /> 79</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="fake_url" className="mb-3">
                                        <img src="../assets/images/gallery/11.jpg" alt=" by Kathleen Harper" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar3.jpg" alt="fake_url" />
                                        <div>
                                            <div>Kathleen Harper</div>
                                            <small className="d-block text-muted">16 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted">
                                            <a href="fake_url" className="icon"><i className="fe fe-eye mr-1" /> 164</a>
                                            <a href="fake_url" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" /> 94</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="card p-3">
                                    <a href="fake_url" className="mb-3">
                                        <img src="../assets/images/gallery/12.jpg" alt=" by Bobby Knight" className="rounded" />
                                    </a>
                                    <div className="d-flex align-items-center px-2">
                                        <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar4.jpg" alt="fake_url" />
                                        <div>
                                            <div>Bobby Knight</div>
                                            <small className="d-block text-muted">6 days ago</small>
                                        </div>
                                        <div className="ml-auto text-muted">
                                            <a href="fake_url" className="icon"><i className="fe fe-eye mr-1" /> 160</a>
                                            <a href="fake_url" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" /> 90</a>
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
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);