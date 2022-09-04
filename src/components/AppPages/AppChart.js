import React, { Component } from 'react'
import { connect } from 'react-redux';

class AppChart extends Component {
    render() {
      //  const { fixNavbar } = this.props;
        return (
            <>
                <div className="section-light py-3 chat_app">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="card bg-none b-none">
                                    <div className="card-header bline pt-1">
                                        <h3 className="card-title">Friends Group <small>Last seen: 2 hours ago</small></h3>
                                        <div className="card-options">
                                            <a href="/#" className="p-1 chat_list_btn"><i className="fa fa-align-right" /></a>
                                            <a href="/#" className="p-1"><i className="fa fa-plus" /></a>
                                            <a href="/#" className="p-1"><i className="fa fa-cog" /></a>
                                            <a href="/#" className="p-1"><i className="fa fa-refresh" /></a>
                                        </div>
                                    </div>
                                    <div className="chat_windows">
                                        <ul className="mb-0">
                                            <li className="other-message">
                                                <img className="avatar mr-3" src="../assets/images/xs/avatar2.jpg" alt="avatar" />
                                                <div className="message">
                                                    <p className="bg-light-blue">Are we meeting today?</p>
                                                    <span className="time">10:10 AM, Today</span>
                                                </div>
                                            </li>
                                            <li className="other-message">
                                                <img className="avatar mr-3" src="../assets/images/xs/avatar3.jpg" alt="avatar" />
                                                <div className="message">
                                                    <p className="bg-light-cyan">Hi Aiden, how are you? How is the project coming along?</p>
                                                    <p className="bg-light-cyan">Are we meeting today?</p>
                                                    <span className="time">10:15 AM, Today</span>
                                                </div>
                                            </li>
                                            <li className="my-message">
                                                <div className="message">
                                                    <p className="bg-light-gray">Project has been already finished and I have results to show you.</p>
                                                    <div className="file_folder">
                                                        <a href="/#;">
                                                            <div className="icon">
                                                                <i className="fa fa-file-excel-o text-success" />
                                                            </div>
                                                            <div className="file-name">
                                                                <p className="mb-0 text-muted">Report2017.xls</p>
                                                                <small>Size: 68KB</small>
                                                            </div>
                                                        </a>
                                                        <a href="/#;">
                                                            <div className="icon">
                                                                <i className="fa fa-file-word-o text-primary" />
                                                            </div>
                                                            <div className="file-name">
                                                                <p className="mb-0 text-muted">Report2017.doc</p>
                                                                <small>Size: 68KB</small>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <span className="time">10:17 AM, Today</span>
                                                </div>
                                            </li>
                                            <li className="other-message">
                                                <img className="avatar mr-3" src="../assets/images/xs/avatar4.jpg" alt="avatar" />
                                                <div className="message">
                                                    <div className="media_img">
                                                        <img src="../assets/images/gallery/1.jpg" className="w150 img-thumbnail" alt="avatar" />
                                                        <img src="../assets/images/gallery/2.jpg" className="w150 img-thumbnail" alt="avatar" />
                                                    </div>
                                                    <span className="time">10:15 AM, Today</span>
                                                </div>
                                            </li>
                                            <li className="other-message">
                                                <span className="avatar avatar-blue mr-3">NG</span>
                                                <div className="message">
                                                    <p className="bg-light-pink">Are we meeting today I have results?</p>
                                                    <p className="bg-light-pink">Project has been already finished and to show you.</p>
                                                    <span className="time">10:18 AM, Today</span>
                                                </div>
                                            </li>
                                            <li className="my-message">
                                                <div className="message">
                                                    <p className="bg-light-gray">Well we have good budget for the project</p>
                                                    <span className="time">10:25 AM, Today</span>
                                                </div>
                                            </li>
                                            <li className="my-message">
                                                <div className="message">
                                                    <div className="media_img">
                                                        <img src="../assets/images/gallery/3.jpg" className="w100 img-thumbnail" alt="avatar" />
                                                        <img src="../assets/images/gallery/4.jpg" className="w100 img-thumbnail" alt="avatar" />
                                                        <img src="../assets/images/gallery/5.jpg" className="w100 img-thumbnail" alt="avatar" />
                                                        <img src="../assets/images/gallery/6.jpg" className="w100 img-thumbnail" alt="avatar" />
                                                    </div>
                                                    <span className="time">10:25 AM, Today</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="chat-message clearfix">
                                            <a href="/#;"><i className="icon-camera" /></a>
                                            <a href="/#;"><i className="icon-camcorder" /></a>
                                            <a href="/#;"><i className="icon-paper-plane" /></a>
                                            <div className="input-group mb-0">
                                                <input type="text" className="form-control" placeholder="Enter text here..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat_list section-white" id="users">
                        <a href="/#" className="chat_list_btn float-right"><i className="fa fa-align-right" /></a>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="users-tab" data-toggle="tab" href="#users-list" role="tab" aria-controls="users-list" aria-selected="true">Users</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="groups-tab" data-toggle="tab" href="#groups" role="tab" aria-controls="groups" aria-selected="false">Groups</a>
                            </li>
                        </ul>
                        <div className="input-group mt-2 mb-2">
                            <input type="text" className="form-control search" placeholder="Search..." />
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="users-list" role="tabpanel" aria-labelledby="users-tab">
                                <ul className="right_chat list-unstyled list">
                                    <li className="online">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar4.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Ava Phillip Smith</span>
                                                    <span className="message">Are we meeting today?</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="online">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar5.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Debra Stewart</span>
                                                    <span className="message">Project has been already</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="offline">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar2.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Harry McCall</span>
                                                    <span className="message">Well we have good budget</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="offline">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar1.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Nancy Flanary</span>
                                                    <span className="message">i'm meeting today</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="online">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar3.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Marshall Nichols</span>
                                                    <span className="message">I have results to show you</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="online">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar5.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Debra Stewart</span>
                                                    <span className="message">How is the project coming</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="offline">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar2.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Harry McCall</span>
                                                    <span className="message">Well we have good budget</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="offline">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar2.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Harry McCall</span>
                                                    <span className="message">Are we meeting today?</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="offline">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar1.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Nancy Flanary</span>
                                                    <span className="message">Hi Suse, how are you?</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="online">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar5.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Debra Stewart</span>
                                                    <span className="message">Hi Aiden, how are you?</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="offline">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar1.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Nancy Flanary</span>
                                                    <span className="message">I have results to show you</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="online">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar3.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Marshall Nichols</span>
                                                    <span className="message">Well we have good budget</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="online">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar5.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Debra Stewart</span>
                                                    <span className="message">Hi Aiden, how are you?</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="offline">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar2.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Harry McCall</span>
                                                    <span className="message">I have results to show you</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="groups" role="tabpanel" aria-labelledby="groups-tab">
                                <ul className="right_chat list-unstyled list">
                                    <li className="online">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar1.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">PHP Groups</span>
                                                    <span className="message">How is the project coming</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="online">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar2.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Family Groups</span>
                                                    <span className="message">Update Code</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="offline">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar3.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Harry McCall</span>
                                                    <span className="message">3 New design bug</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="offline">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar4.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">Friends holic</span>
                                                    <span className="message">Hello All!</span>
                                                    <span className="badge badge-outline status" />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="online">
                                        <a href="/#;">
                                            <div className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar5.jpg" alt="fake_url" />
                                                <div className="media-body">
                                                    <span className="name">CL City 2</span>
                                                    <span className="message">Add new contact</span>
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
            </>
        )
    }
}
const mapStateToProps = state => ({
    fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(AppChart);