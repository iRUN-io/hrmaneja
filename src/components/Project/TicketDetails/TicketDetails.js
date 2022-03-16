import React, { Component } from 'react'
import { connect } from 'react-redux';
import Ckeditor from '../../common/ckeditor'
import {
    boxCloseAction, box2CloseAction, box3CloseAction
} from '../../../actions/settingsAction';

class TicketDetails extends Component {
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
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12">
                                <div className="card c_grid c_yellow">
                                    <div className="card-body text-center">
                                        <div className="circle">
                                            <img className="rounded-circle" src="../assets/images/sm/avatar1.jpg" alt="fake_url" />
                                        </div>
                                        <h6 className="mt-3 mb-0">Michelle Green</h6>
                                        <span>jason-porter@info.com</span>
                                        <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-facebook" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-slack" /></a></li>
                                            <li><a className="p-3" target="_blank" href="/#"><i className="fa fa-linkedin" /></a></li>
                                        </ul>
                                        <button className="btn btn-default btn-sm">Follow</button>
                                        <button className="btn btn-default btn-sm">Message</button>
                                    </div>
                                </div>
                                {boxClose ?
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Ticket Details</h3>
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
                                            <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</span>
                                        </div>
                                    </div>
                                    : ""}
                                {box2Close ?
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Ticket Info</h3>
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
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <small className="text-muted">Title: </small>
                                                    <p className="mb-0">Oculux Admin Template</p>
                                                </li>
                                                <li className="list-group-item">
                                                    <small className="text-muted">Department: </small>
                                                    <p className="mb-0">Pre-Sales</p>
                                                </li>
                                                <li className="list-group-item">
                                                    <small className="text-muted">Product: </small>
                                                    <p className="mb-0">Oculux Side Menu Open OnClick</p>
                                                </li>
                                                <li className="list-group-item">
                                                    <small className="text-muted">Date: </small>
                                                    <p className="mb-0">07 Feb 2019</p>
                                                </li>
                                                <li className="list-group-item">
                                                    <div>In Progress</div>
                                                    <div className="progress progress-xs mb-0">
                                                        <div className="progress-bar bg-info" style={{ width: '58%' }} />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    : ""}
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <Ckeditor></Ckeditor>
                                    </div>
                                </div>
                                {box3Close ?
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Ticket Replies</h3>
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
                                            <div className="timeline_item ">
                                                <img className="tl_avatar" src="../assets/images/xs/avatar1.jpg" alt="fake_url" />
                                                <span><a href="fake_url">Elisse Joson</a> San Francisco, CA <small className="float-right text-right">20-April-2019 - Today</small></span>
                                                <h6 className="font600">Hello, 'Im a single div responsive timeline without media Queries!</h6>
                                                <div className="msg">
                                                    <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web card she has is the Lorem card.</p>
                                                    <a href="fake_url" className="mr-20 text-muted"><i className="fa fa-heart text-pink" /> 12 Love</a>
                                                    <a className="text-muted" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-comments" /> 1 Comment</a>
                                                    <div className="collapse p-4 section-gray mt-2" id="collapseExample">
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
                                                <span><a href="fake_url" >Dessie Parks</a> Oakland, CA <small className="float-right text-right">19-April-2019 - Yesterday</small></span>
                                                <h6 className="font600">Oeehhh, that's awesome.. Me too!</h6>
                                                <div className="msg">
                                                    <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.</p>
                                                    <div className="timeline_img mb-20">
                                                        <img className="width100" src="../assets/images/gallery/1.jpg" alt="Awesome" />
                                                        <img className="width100" src="../assets/images/gallery/2.jpg" alt="Awesome" />
                                                    </div>
                                                    <a href="fake_url" className="mr-20 text-muted"><i className="fa fa-heart text-pink" /> 23 Love</a>
                                                    <a className="text-muted" role="button" data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"><i className="fa fa-comments" /> 2 Comment</a>
                                                    <div className="collapse p-4 section-gray mt-2" id="collapseExample1">
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
                                                                    <h5>Dessie Parks <small className="float-right font-14">1min ago</small></h5>
                                                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="timeline_item ">
                                                <img className="tl_avatar" src="../assets/images/xs/avatar7.jpg" alt="fake_url" />
                                                <span><a href="fake_url">Rochelle Barton</a> San Francisco, CA <small className="float-right text-right">12-April-2019</small></span>
                                                <h6 className="font600">An Engineer Explains Why You Should Always Order the Larger Pizza</h6>
                                                <div className="msg">
                                                    <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, is the Lorem card.</p>
                                                    <a href="fake_url" className="mr-20 text-muted"><i className="fa fa-heart text-pink" /> 7 Love</a>
                                                    <a className="text-muted" role="button" data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2"><i className="fa fa-comments" /> 1 Comment</a>
                                                    <div className="collapse p-4 section-gray mt-2" id="collapseExample2">
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
                                    : ""}
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
export default connect(mapStateToProps, mapDispatchToProps)(TicketDetails);