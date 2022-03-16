import React, { Component } from 'react'
import { connect } from 'react-redux';

class Resumes extends Component {
    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item"><a className="nav-link active" id="Resumes-tab" data-toggle="tab" href="#Resumes-list">List View</a></li>
                                <li className="nav-item"><a className="nav-link" id="Resumes-tab" data-toggle="tab" href="#Resumes-grid">Grid View</a></li>
                            </ul>
                            <div className="header-action d-md-flex">
                                <div className="input-group mr-2">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                </div>
                                <button type="button" className="btn btn-primary"><i className="fe fe-plus mr-2" />Add</button>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <label>Search</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="Search..." />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <label>Hourly Rate</label>
                                                <div className="multiselect_div">
                                                    <select className="custom-select">
                                                        <option>All rates</option>
                                                        <option value={1}>$0 - $50</option>
                                                        <option value={2}>$50 - $100</option>
                                                        <option value={3}>$100 - $200</option>
                                                        <option value={4}>$200 - $500</option>
                                                        <option value={5}>$500 +</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-6">
                                                <label>Academic Degree</label>
                                                <div className="form-group">
                                                    <select className="custom-select">
                                                        <option >All degrees</option>
                                                        <option value={1}>Associate degree</option>
                                                        <option value={2}>Bachelor's degree</option>
                                                        <option value={3}>Master's degree</option>
                                                        <option value={4}>Doctoral degree</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-6">
                                                <label>Order</label>
                                                <div className="form-group">
                                                    <select className="custom-select">
                                                        <option >Relevance</option>
                                                        <option value={1}>Highest rate first</option>
                                                        <option value={2}>Lowest rate first</option>
                                                        <option value={3}>Highest degree first</option>
                                                        <option value={4}>Lowest degree first</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-6">
                                                <label>&nbsp;</label>
                                                <a href="fake_url;" className="btn btn-sm btn-primary btn-block" >Filter</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body">
                    <div className="container-fluid">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="Resumes-list" role="tabpanel">
                                <div className="table-responsive">
                                    <table className="table table-vcenter table_custom spacing5 border-style mb-0">
                                        <thead>
                                            <tr>
                                                <th className="w40">#</th>
                                                <th>Name</th>
                                                <th>Designation</th>
                                                <th>Address</th>
                                                <th>Rate</th>
                                                <th>Experience</th>
                                                <th>Review</th>
                                                <th className="w40" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-pink" data-toggle="tooltip" data-placement="top" data-original-title="Avatar Name">GH</span>
                                                </td>
                                                <td>Michelle Green</td>
                                                <td>Web Developer</td>
                                                <td><span>123 6th St. Melbourne, FL 32904</span></td>
                                                <td>$34 per hour</td>
                                                <td>2+ Year</td>
                                                <td>
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </td>
                                                <td>
                                                    <div className="item-action dropdown">
                                                        <a href="fake_url" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(18px, 25px, 0px)' }}>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img className="avatar" src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" data-original-title="Avatar Name" alt="fake_url" />
                                                </td>
                                                <td>Jason Porter</td>
                                                <td>UI UX Designer</td>
                                                <td><span>123 6th St. Melbourne, FL 32904</span></td>
                                                <td>$61 per hour</td>
                                                <td>5+ Year</td>
                                                <td>
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star" />
                                                </td>
                                                <td>
                                                    <div className="item-action dropdown">
                                                        <a href="fake_url" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(18px, 25px, 0px)' }}>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-indigo" data-toggle="tooltip" data-placement="top" data-original-title="Avatar Name">KL</span>
                                                </td>
                                                <td>David Wallace</td>
                                                <td>Java Developer</td>
                                                <td><span>123 6th St. Melbourne, FL 32904</span></td>
                                                <td>$76 per hour</td>
                                                <td>7+ Year</td>
                                                <td>
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star" />
                                                </td>
                                                <td>
                                                    <div className="item-action dropdown">
                                                        <a href="fake_url" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(18px, 25px, 0px)' }}>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-orange" data-toggle="tooltip" data-placement="top" data-original-title="Avatar Name">KL</span>
                                                </td>
                                                <td>David Wallace</td>
                                                <td>Java Developer</td>
                                                <td><span>123 6th St. Melbourne, FL 32904</span></td>
                                                <td>$76 per hour</td>
                                                <td>7+ Year</td>
                                                <td>
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                </td>
                                                <td>
                                                    <div className="item-action dropdown">
                                                        <a href="fake_url" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(18px, 25px, 0px)' }}>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img className="avatar" src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" data-original-title="Avatar Name" alt="fake_url" />
                                                </td>
                                                <td>Michelle Green</td>
                                                <td>PHP</td>
                                                <td><span>123 6th St. Melbourne, FL 32904</span></td>
                                                <td>$29 per hour</td>
                                                <td>4+ Year</td>
                                                <td>
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star" />
                                                </td>
                                                <td>
                                                    <div className="item-action dropdown">
                                                        <a href="fake_url" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(18px, 25px, 0px)' }}>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img className="avatar" src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" data-original-title="Avatar Name" alt="fake_url" />
                                                </td>
                                                <td>Michelle Green</td>
                                                <td>PHP</td>
                                                <td><span>123 6th St. Melbourne, FL 32904</span></td>
                                                <td>$29 per hour</td>
                                                <td>4+ Year</td>
                                                <td>
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star" />
                                                </td>
                                                <td>
                                                    <div className="item-action dropdown">
                                                        <a href="fake_url" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(18px, 25px, 0px)' }}>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-blue" data-toggle="tooltip" data-placement="top" data-original-title="Avatar Name">KL</span>
                                                </td>
                                                <td>David Wallace</td>
                                                <td>Java Developer</td>
                                                <td><span>123 6th St. Melbourne, FL 32904</span></td>
                                                <td>$76 per hour</td>
                                                <td>7+ Year</td>
                                                <td>
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </td>
                                                <td>
                                                    <div className="item-action dropdown">
                                                        <a href="fake_url" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(18px, 25px, 0px)' }}>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img className="avatar" src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" data-original-title="Avatar Name" alt="fake_url" />
                                                </td>
                                                <td>Michelle Green</td>
                                                <td>PHP</td>
                                                <td><span>123 6th St. Melbourne, FL 32904</span></td>
                                                <td>$29 per hour</td>
                                                <td>4+ Year</td>
                                                <td>
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star" />
                                                </td>
                                                <td>
                                                    <div className="item-action dropdown">
                                                        <a href="fake_url" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(18px, 25px, 0px)' }}>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img className="avatar" src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" data-original-title="Avatar Name" alt="fake_url" />
                                                </td>
                                                <td>Michelle Green</td>
                                                <td>PHP</td>
                                                <td><span>123 6th St. Melbourne, FL 32904</span></td>
                                                <td>$29 per hour</td>
                                                <td>4+ Year</td>
                                                <td>
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star" />
                                                </td>
                                                <td>
                                                    <div className="item-action dropdown">
                                                        <a href="fake_url" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(18px, 25px, 0px)' }}>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-green" data-toggle="tooltip" data-placement="top" data-original-title="Avatar Name">KL</span>
                                                </td>
                                                <td>David Wallace</td>
                                                <td>Java Developer</td>
                                                <td><span>123 6th St. Melbourne, FL 32904</span></td>
                                                <td>$76 per hour</td>
                                                <td>7+ Year</td>
                                                <td>
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                    <i className="fa fa-star text-orange" />
                                                </td>
                                                <td>
                                                    <div className="item-action dropdown">
                                                        <a href="fake_url" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{ position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(18px, 25px, 0px)' }}>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                            <a href="fake_url" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="Resumes-grid" role="tabpanel">
                                <div className="row clearfix">
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card">
                                            <div className="body text-center p-4">
                                                <img className="rounded-circle w100 img-thumbnail" src="../assets/images/sm/avatar1.jpg" alt="fake_url" />
                                                <h6 className="mt-3 mb-0">Michelle Green</h6>
                                                <span>Web Developer</span>
                                                <ul className="mt-3 mb-4 list-unstyled d-flex justify-content-center">
                                                    <li><a className="p-3" target="_blank" href="/#">Java</a></li>
                                                    <li><a className="p-3" target="_blank" href="/#">CSS</a></li>
                                                    <li><a className="p-3" target="_blank" href="/#">HTML</a></li>
                                                </ul>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <div><i className="fa fa-dollar" /> 55 / hour</div>
                                                    <div><i className="fa fa-map-marker" /> Akron, OH</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card">
                                            <div className="body text-center p-4">
                                                <img className="rounded-circle w100 img-thumbnail" src="../assets/images/sm/avatar2.jpg" alt="fake_url" />
                                                <h6 className="mt-3 mb-0">Jason Porter</h6>
                                                <span>Carol@info.com</span>
                                                <ul className="mt-3 mb-4 list-unstyled d-flex justify-content-center">
                                                    <li><a className="p-3" target="_blank" href="/#">Creativity</a></li>
                                                    <li><a className="p-3" target="_blank" href="/#">UIUX</a></li>
                                                </ul>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <div><i className="fa fa-dollar" /> 55 / hour</div>
                                                    <div><i className="fa fa-map-marker" /> Akron, OH</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card">
                                            <div className="body text-center p-4">
                                                <img className="rounded-circle w100 img-thumbnail" src="../assets/images/sm/avatar3.jpg" alt="fake_url" />
                                                <h6 className="mt-3 mb-0">David Wallace</h6>
                                                <span>Michelle@info.com</span>
                                                <ul className="mt-3 mb-4 list-unstyled d-flex justify-content-center">
                                                    <li><a className="p-3" target="_blank" href="/#">Swift</a></li>
                                                    <li><a className="p-3" target="_blank" href="/#">Xcode</a></li>
                                                    <li><a className="p-3" target="_blank" href="/#">C#</a></li>
                                                </ul>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <div><i className="fa fa-dollar" /> 55 / hour</div>
                                                    <div><i className="fa fa-map-marker" /> Akron, OH</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card">
                                            <div className="body text-center p-4">
                                                <img className="rounded-circle w100 img-thumbnail" src="../assets/images/sm/avatar4.jpg" alt="fake_url" />
                                                <h6 className="mt-3 mb-0">Michelle Green</h6>
                                                <span>jason-porter@info.com</span>
                                                <ul className="mt-3 mb-4 list-unstyled d-flex justify-content-center">
                                                    <li><a className="p-3" target="_blank" href="/#">Android</a></li>
                                                    <li><a className="p-3" target="_blank" href="/#">Playstor</a></li>
                                                    <li><a className="p-3" target="_blank" href="/#">Perl</a></li>
                                                </ul>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <div><i className="fa fa-dollar" /> 55 / hour</div>
                                                    <div><i className="fa fa-map-marker" /> Akron, OH</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card">
                                            <div className="body text-center p-4">
                                                <img className="rounded-circle w100 img-thumbnail" src="../assets/images/sm/avatar5.jpg" alt="fake_url" />
                                                <h6 className="mt-3 mb-0">Michelle Green</h6>
                                                <span>jason-porter@info.com</span>
                                                <ul className="mt-3 mb-4 list-unstyled d-flex justify-content-center">
                                                    <li><a className="p-3" target="_blank" href="/#">Negotiation</a></li>
                                                    <li><a className="p-3" target="_blank" href="/#">Writing</a></li>
                                                </ul>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <div><i className="fa fa-dollar" /> 55 / hour</div>
                                                    <div><i className="fa fa-map-marker" /> Akron, OH</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card">
                                            <div className="body text-center p-4">
                                                <img className="rounded-circle w100 img-thumbnail" src="../assets/images/sm/avatar6.jpg" alt="fake_url" />
                                                <h6 className="mt-3 mb-0">Michelle Green</h6>
                                                <span>jason-porter@info.com</span>
                                                <ul className="mt-3 mb-4 list-unstyled d-flex justify-content-center">
                                                    <li><a className="p-3" target="_blank" href="/#">HTML</a></li>
                                                    <li><a className="p-3" target="_blank" href="/#">CSS</a></li>
                                                    <li><a className="p-3" target="_blank" href="/#">SCSS</a></li>
                                                </ul>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <div><i className="fa fa-dollar" /> 55 / hour</div>
                                                    <div><i className="fa fa-map-marker" /> Akron, OH</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card">
                                            <div className="body text-center p-4">
                                                <img className="rounded-circle w100 img-thumbnail" src="../assets/images/sm/avatar1.jpg" alt="fake_url" />
                                                <h6 className="mt-3 mb-0">Sean Black</h6>
                                                <span>jason-porter@info.com</span>
                                                <ul className="mt-3 mb-4 list-unstyled d-flex justify-content-center">
                                                    <li><a className="p-3" target="_blank" href="/#">PHP</a></li>
                                                    <li><a className="p-3" target="_blank" href="/#">Wordpress</a></li>
                                                </ul>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <div><i className="fa fa-dollar" /> 55 / hour</div>
                                                    <div><i className="fa fa-map-marker" /> Akron, OH</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card">
                                            <div className="body text-center p-4">
                                                <img className="rounded-circle w100 img-thumbnail" src="../assets/images/sm/avatar2.jpg" alt="fake_url" />
                                                <h6 className="mt-3 mb-0">David Wallace</h6>
                                                <span>jason-porter@info.com</span>
                                                <ul className="mt-3 mb-4 list-unstyled d-flex justify-content-center">
                                                    <li><a className="p-3" target="_blank" href="/#">C#</a></li>
                                                    <li><a className="p-3" target="_blank" href="/#">SQL Server</a></li>
                                                    <li><a className="p-3" target="_blank" href="/#">HTML</a></li>
                                                </ul>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <div><i className="fa fa-dollar" /> 55 / hour</div>
                                                    <div><i className="fa fa-map-marker" /> Akron, OH</div>
                                                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Resumes);