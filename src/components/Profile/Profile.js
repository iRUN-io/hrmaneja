import React, { Component } from 'react'
import { connect } from 'react-redux';

class Profile extends Component {
    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card card-profile">
                                    <div className="card-body text-center">
                                        <img className="card-profile-img" src="../assets/images/sm/avatar1.jpg" alt="fake_url" />
                                        <h4 className="mb-3">Sara Hopkins</h4>
                                        <ul className="social-links list-inline mb-3 mt-2">
                                            <li className="list-inline-item"><a href="fake_url" title="Facebook" data-toggle="tooltip"><i className="fa fa-facebook" /></a></li>
                                            <li className="list-inline-item"><a href="fake_url" title="Twitter" data-toggle="tooltip"><i className="fa fa-twitter" /></a></li>
                                            <li className="list-inline-item"><a href="fake_url" title={1234567890} data-toggle="tooltip"><i className="fa fa-phone" /></a></li>
                                            <li className="list-inline-item"><a href="fake_url" title="@skypename" data-toggle="tooltip"><i className="fa fa-skype" /></a></li>
                                        </ul>
                                        <p className="mb-4">Contrary to popular belief, Lorem Ipsum is not simply random text.<br /> It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                        <button className="btn btn-outline-primary btn-sm"><span className="fa fa-twitter" /> Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body  py-4">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-12">
                                <ul className="nav nav-tabs mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="pills-calendar-tab" data-toggle="pill" href="#pills-calendar" role="tab" aria-controls="pills-calendar" aria-selected="false">Calendar</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-timeline-tab" data-toggle="pill" href="#pills-timeline" role="tab" aria-controls="pills-timeline" aria-selected="true">Timeline</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-blog-tab" data-toggle="pill" href="#pills-blog" role="tab" aria-controls="pills-blog" aria-selected="true">Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-calendar" role="tabpanel" aria-labelledby="pills-calendar-tab">
                                        <div className="card">
                                            <div className="card-header bline">
                                                <h3 className="card-title">Calendar</h3>
                                                <div className="card-options">
                                                    <a href="/#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize" /></a>
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
                                                <div id="calendar" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-timeline" role="tabpanel" aria-labelledby="pills-timeline-tab">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Activity</h3>
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
                                                <div className="timeline_item ">
                                                    <img className="tl_avatar" src="../assets/images/xs/avatar1.jpg" alt="fake_url" />
                                                    <span><a href="fake_url;">Elisse Joson</a> San Francisco, CA <small className="float-right text-right">20-April-2019 - Today</small></span>
                                                    <h6 className="font600">Hello, 'Im a single div responsive timeline without media Queries!</h6>
                                                    <div className="msg">
                                                        <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web card she has is the Lorem card.</p>
                                                        <a href="fake_url;" className="mr-20 text-muted"><i className="fa fa-heart text-pink" /> 12 Love</a>
                                                        <a className="text-muted" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-comments" /> 1 Comment</a>
                                                        <div className="collapse p-4 section-gray" id="collapseExample">
                                                            <form className="well">
                                                                <div className="form-group">
                                                                    <textarea rows={2} className="form-control no-resize" placeholder="Enter here for tweet..." defaultValue={""} />
                                                                </div>
                                                                <button className="btn btn-primary">Submit</button>
                                                            </form>
                                                            <ul className="recent_comments list-unstyled mt-4 mb-0">
                                                                <li>
                                                                    <div className="avatar_img">
                                                                        <img className="rounded img-fluid" src="../assets/images/xs/avatar4.jpg" alt="fake_url" />
                                                                    </div>
                                                                    <div className="comment_body">
                                                                        <h6>Donald Gardner <small className="float-right font-14">Just now</small></h6>
                                                                        <p>Lorem ipsum Veniam aliquip culpa laboris minim tempor</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="timeline_item ">
                                                    <img className="tl_avatar" src="../assets/images/xs/avatar4.jpg" alt="fake_url" />
                                                    <span><a href="fake_url;" >Dessie Parks</a> Oakland, CA <small className="float-right text-right">19-April-2019 - Yesterday</small></span>
                                                    <h6 className="font600">Oeehhh, that's awesome.. Me too!</h6>
                                                    <div className="msg">
                                                        <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.</p>
                                                        <div className="timeline_img mb-20">
                                                            <img className="width100" src="../assets/images/gallery/1.jpg" alt="Awesome" />
                                                            <img className="width100" src="../assets/images/gallery/2.jpg" alt="Awesome" />
                                                        </div>
                                                        <a href="fake_url;" className="mr-20 text-muted"><i className="fa fa-heart text-pink" /> 23 Love</a>
                                                        <a className="text-muted" role="button" data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"><i className="fa fa-comments" /> 2 Comment</a>
                                                        <div className="collapse p-4 section-gray" id="collapseExample1">
                                                            <form className="well">
                                                                <div className="form-group">
                                                                    <textarea rows={2} className="form-control no-resize" placeholder="Enter here for tweet..." defaultValue={""} />
                                                                </div>
                                                                <button className="btn btn-primary">Submit</button>
                                                            </form>
                                                            <ul className="recent_comments list-unstyled mt-4 mb-0">
                                                                <li>
                                                                    <div className="avatar_img">
                                                                        <img className="rounded img-fluid" src="../assets/images/xs/avatar4.jpg" alt="fake_url" />
                                                                    </div>
                                                                    <div className="comment_body">
                                                                        <h6>Donald Gardner <small className="float-right font-14">Just now</small></h6>
                                                                        <p>Lorem ipsum Veniam aliquip culpa laboris minim tempor</p>
                                                                        <div className="timeline_img mb-20">
                                                                            <img className="width150" src="../assets/images/gallery/7.jpg" alt="Awesome" />
                                                                            <img className="width150" src="../assets/images/gallery/8.jpg" alt="Awesome" />
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="avatar_img">
                                                                        <img className="rounded img-fluid" src="../assets/images/xs/avatar3.jpg" alt="fake_url" />
                                                                    </div>
                                                                    <div className="comment_body">
                                                                        <h6>Dessie Parks <small className="float-right font-14">1min ago</small></h6>
                                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="timeline_item ">
                                                    <img className="tl_avatar" src="../assets/images/xs/avatar7.jpg" alt="fake_url" />
                                                    <span><a href="fake_url;" >Rochelle Barton</a> San Francisco, CA <small className="float-right text-right">12-April-2019</small></span>
                                                    <h6 className="font600">An Engineer Explains Why You Should Always Order the Larger Pizza</h6>
                                                    <div className="msg">
                                                        <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, is the Lorem card.</p>
                                                        <a href="fake_url;" className="mr-20 text-muted"><i className="fa fa-heart text-pink" /> 7 Love</a>
                                                        <a className="text-muted" role="button" data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2"><i className="fa fa-comments" /> 1 Comment</a>
                                                        <div className="collapse p-4 section-gray" id="collapseExample2">
                                                            <form className="well">
                                                                <div className="form-group">
                                                                    <textarea rows={2} className="form-control no-resize" placeholder="Enter here for tweet..." defaultValue={""} />
                                                                </div>
                                                                <button className="btn btn-primary">Submit</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Edit Profile</h3>
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
                                                <div className="row clearfix">
                                                    <div className="col-md-5">
                                                        <div className="form-group">
                                                            <label className="form-label">Company</label>
                                                            <input type="text" className="form-control" disabled placeholder="Company" defaultValue="Epic Theme" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-3">
                                                        <div className="form-group">
                                                            <label className="form-label">Username</label>
                                                            <input type="text" className="form-control" placeholder="Username" defaultValue="michael23" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-4">
                                                        <div className="form-group">
                                                            <label className="form-label">Email address</label>
                                                            <input type="email" className="form-control" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">First Name</label>
                                                            <input type="text" className="form-control" placeholder="Company" defaultValue="Jane" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Last Name</label>
                                                            <input type="text" className="form-control" placeholder="Last Name" defaultValue="Pearson" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="form-label">Address</label>
                                                            <input type="text" className="form-control" placeholder="Home Address" defaultValue="455 S. Airport St. Moncks Corner" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-4">
                                                        <div className="form-group">
                                                            <label className="form-label">City</label>
                                                            <input type="text" className="form-control" placeholder="City" defaultValue="New York" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-3">
                                                        <div className="form-group">
                                                            <label className="form-label">Postal Code</label>
                                                            <input type="number" className="form-control" placeholder="ZIP Code" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <div className="form-group">
                                                            <label className="form-label">Country</label>
                                                            <select className="form-control custom-select">
                                                                <option value>USA</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-0">
                                                            <label className="form-label">About Me</label>
                                                            <textarea rows={5} className="form-control" placeholder="Here can be your description" defaultValue={"Oh so, your weak rhyme You doubt I'll bother, reading into it I'll probably won't, left to my own devices But that's the difference in our opinions."} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer text-right">
                                                <button type="submit" className="btn btn-primary">Update Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-blog" role="tabpanel" aria-labelledby="pills-blog-tab">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="new_post">
                                                    <div className="form-group">
                                                        <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
                                                    </div>
                                                    <div className="mt-4 text-right">
                                                        <button className="btn btn-warning"><i className="icon-link" /></button>
                                                        <button className="btn btn-warning"><i className="icon-camera" /></button>
                                                        <button className="btn btn-primary">Post</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card blog_single_post">
                                            <div className="img-post">
                                                <img className="d-block img-fluid" src="../assets/images/gallery/6.jpg" alt="First slide" />
                                            </div>
                                            <div className="card-body">
                                                <h4><a href="/#">All photographs are accurate</a></h4>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                            </div>
                                            <div className="footer">
                                                <div className="actions">
                                                    <a href="fake_url;" className="btn btn-outline-secondary">Continue Reading</a>
                                                </div>
                                                <ul className="stats list-unstyled">
                                                    <li><a href="fake_url;">General</a></li>
                                                    <li><a href="fake_url;" className="icon-heart"> 28</a></li>
                                                    <li><a href="fake_url;" className="icon-bubbles"> 128</a></li>
                                                </ul>
                                            </div>
                                            <ul className="list-group card-list-group">
                                                <li className="list-group-item py-5">
                                                    <div className="media">
                                                        <img className="media-object avatar avatar-md mr-4" src="../assets/images/xs/avatar3.jpg" alt="fake_url" />
                                                        <div className="media-body">
                                                            <div className="media-heading">
                                                                <small className="float-right text-muted">4 min</small>
                                                                <h5>Peter Richards</h5>
                                                            </div>
                                                            <div>
                                                                Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
                                                                justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes,
                                                                nascetur ridiculus mus.
                        </div>
                                                            <ul className="media-list">
                                                                <li className="media mt-4">
                                                                    <img className="media-object avatar mr-4" src="../assets/images/xs/avatar1.jpg" alt="fake_url" />
                                                                    <div className="media-body">
                                                                        <strong>Debra Beck: </strong>
                                                                        Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus
                                                                        auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
                            </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card blog_single_post">
                                            <div className="img-post">
                                                <img className="d-block img-fluid" src="../assets/images/gallery/4.jpg" alt="First slide" />
                                            </div>
                                            <div className="card-body">
                                                <h4><a href="/#">All photographs are accurate</a></h4>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                            </div>
                                            <div className="footer">
                                                <div className="actions">
                                                    <a href="fake_url;" className="btn btn-outline-secondary">Continue Reading</a>
                                                </div>
                                                <ul className="stats list-unstyled">
                                                    <li><a href="fake_url;">General</a></li>
                                                    <li><a href="fake_url;" className="icon-heart"> 28</a></li>
                                                    <li><a href="fake_url;" className="icon-bubbles"> 128</a></li>
                                                </ul>
                                            </div>
                                            <ul className="list-group card-list-group">
                                                <li className="list-group-item py-5">
                                                    <div className="media">
                                                        <img className="media-object avatar avatar-md mr-4" src="../assets/images/xs/avatar7.jpg" alt="fake_url" />
                                                        <div className="media-body">
                                                            <div className="media-heading">
                                                                <small className="float-right text-muted">12 min</small>
                                                                <h5>Peter Richards</h5>
                                                            </div>
                                                            <div>
                                                                Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis
                                                                parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item py-5">
                                                    <div className="media">
                                                        <img className="media-object avatar avatar-md mr-4" src="../assets/images/xs/avatar6.jpg" alt="fake_url" />
                                                        <div className="media-body">
                                                            <div className="media-heading">
                                                                <small className="float-right text-muted">34 min</small>
                                                                <h5>Peter Richards</h5>
                                                            </div>
                                                            <div>
                                                                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                                                                venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                        </div>
                                                            <ul className="media-list">
                                                                <li className="media mt-4">
                                                                    <img className="media-object avatar mr-4" src="../assets/images/xs/avatar5.jpg" alt="fake_url" />
                                                                    <div className="media-body">
                                                                        <strong>Wayne Holland: </strong>
                                                                        Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus
                                                                        auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
                            </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="widgets1">
                                            <div className="icon">
                                                <i className="icon-trophy text-success font-30" />
                                            </div>
                                            <div className="details">
                                                <h6 className="mb-0 font600">Total Earned</h6>
                                                <span className="mb-0">$96K +</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="widgets1">
                                            <div className="icon">
                                                <i className="icon-heart text-warning font-30" />
                                            </div>
                                            <div className="details">
                                                <h6 className="mb-0 font600">Total Likes</h6>
                                                <span className="mb-0">6,270</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="widgets1">
                                            <div className="icon">
                                                <i className="icon-handbag text-danger font-30" />
                                            </div>
                                            <div className="details">
                                                <h6 className="mb-0 font600">Delivered</h6>
                                                <span className="mb-0">720 Delivered</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="widgets1">
                                            <div className="icon">
                                                <i className="icon-user text-primary font-30" />
                                            </div>
                                            <div className="details">
                                                <h6 className="mb-0 font600">Jobs</h6>
                                                <span className="mb-0">614</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Followers</h3>
                                        <div className="card-options">
                                            <a href="/#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                                            <a href="/#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <ul className="right_chat list-unstyled mb-0">
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
export default connect(mapStateToProps, mapDispatchToProps)(Profile);