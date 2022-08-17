/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import data from '../../config/data';
import Country from '../common/country';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUser } from '../../config/common';
import { getAllEmployees, getEmployee } from '../../services/employee';
import { getActivity } from '../../services/activities';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import { getAllLeaves } from '../../services/leave';
import { Link, useHistory } from 'react-router-dom';

function Profile(props) {
    const { fixNavbar } = props;
    const [user, setUser] = useState({});
    const [employee, setEmployee] = useState({});
    const [activity, setActivity] = useState([]);
    const [myTeamMembers, setTeamMembers] = useState([]);
    const [myTotalLeaves, setTotalLeaves] = useState(0);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const user = await getUser();
            if (user) {
                const user = getUser();
                const employee = await getEmployee(user.employee_id);
                const activity = await getActivity(user.employee_id);
                const allEmployee = await getAllEmployees(user.company_id);
                const allLeaves = await getAllLeaves(user.company_id);
                const teamMembers = allEmployee.filter(mYemployee => mYemployee.department === employee.department).filter(employee => employee.id !== user.employee_id);
                const totalLeaves = allLeaves.filter(leave => leave.employee_id === user.employee_id).length;
                setUser(user);
                setTotalLeaves(totalLeaves);
                setActivity(activity);
                setEmployee(employee);
                setTeamMembers(teamMembers);
                setLoading(false);
            }
        }
        fetchData();

    }, []);
    const [formState, setFormState] = useState({
        username: user.username,
        email: user.email,
        name: user.name,
        company: user.company,
        address: user.Address,
        city: user.city,
        postal_code: user.postalCode,
        country: user.country,
        about_me: user.about
    })

    useEffect(() => {
        setFormState({
            username: user.username,
            email: user.email,
            name: user.name,
            company: user.company,
            address: user.Address,
            city: user.city,
            postal_code: user.postalCode,
            country: user.country,
            about_me: user.about
        })
    }, [user])

    const createProfileAction = async () => {
        try {
            setFormState({ ...formState });
        }
        catch (err) {
            toast.error("Error, try again");
            setFormState({ ...formState });
        }
        console.log(formState)
    }

    const updateForm = e => {
        const { value, name } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };


    return (
        <>
            {loading ? (
                <Skeleton count={3} height={50} />
            ) : (
                <div >
                    <div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
                        <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
							<ul className="nav nav-tabs page-header-tab">
								<li className="nav-item">

									<Link onClick={() => history.goBack()} className="nav-link active">
										<i className="fa fa-arrow-left"></i>
									</Link>
								</li>
							</ul>

						</div>
                            <div className="row clearfix">
                                <div className="col-md-12">
                                    {/* card profile */}
                                    <div className="card card-profile">
                                        <div className="card-body text-center">
                                            <img className="card-profile-img" src="../assets/images/sm/avatar1.jpg" alt="fake_url" />
                                            <h4 className="mb-3">{user.name}</h4>
                                            <p className="mb-4">{user.role}</p>
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
                                            <a className="nav-link active" id="pills-timeline-tab" data-toggle="pill" href="#pills-timeline" role="tab" aria-controls="pills-timeline" aria-selected="true">Timeline</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="col-lg-8 col-md-12">
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-timeline" role="tabpanel" aria-labelledby="pills-timeline-tab">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Activity</h3>
                                                    <div className="card-options">
                                                        <a href="/#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                                                        <a href="/#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize" /></a>
                                                        <a href="/#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                                                        <div className="item-action dropdown ml-2">
                                                            <a href="#" data-toggle="dropdown"><i className="fe fe-more-vertical" /></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="#" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                                <a href="#" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                                <a href="#" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                                <div className="dropdown-divider" />
                                                                <a href="#" className="dropdown-item"><i className="dropdown-icon fa fa-copy" /> Copy to</a>
                                                                <a href="#" className="dropdown-item"><i className="dropdown-icon fa fa-folder" /> Move to</a>
                                                                <a href="#" className="dropdown-item"><i className="dropdown-icon fa fa-edit" /> Rename</a>
                                                                <a href="#" className="dropdown-item"><i className="dropdown-icon fa fa-trash" /> Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    {activity.map((activity, index) => (
                                                        <div className="timeline_item " key={index}>
                                                            <img className="tl_avatar" src="../assets/images/xs/avatar1.jpg" alt="fake_url" />
                                                            <span><a href="fake_url;">{activity.name}</a>  <small className="float-right text-right">{moment(activity.created_at).format('MMMM Do YYYY, h:mm:ss a')}</small></span>
                                                            <h6 className="font600">{activity.action}</h6>
                                                            <div className="msg">

                                                                <p>{activity.activity}</p>
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
                                                                            {/* <div className="comment_body">
                                                                                <h6>Donald Gardner <small className="float-right font-14">Just now</small></h6>
                                                                                <p>Lorem ipsum Veniam aliquip culpa laboris minim tempor</p>
                                                                            </div> */}
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
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
                                                        <div className="col-sm-6 col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Name</label>
                                                                <input type="text" className="form-control" placeholder="Name"
                                                                    name='name'
                                                                    id='name'
                                                                    value={formState?.name}
                                                                    onChange={updateForm}

                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Company</label>
                                                                <input type="text" className="form-control"
                                                                    placeholder="Company"
                                                                    name='company'
                                                                    id='company'
                                                                    value={formState?.company}
                                                                    onChange={updateForm}

                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Username</label>
                                                                <input type="text" className="form-control" placeholder="Username"
                                                                    name='username'
                                                                    id='username'
                                                                    value={formState?.username}
                                                                    onChange={updateForm}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Email address</label>
                                                                <input type="email" className="form-control" placeholder="Email"
                                                                    name='email'
                                                                    id='email'
                                                                    value={formState?.email}
                                                                    onChange={updateForm}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="form-label">Address</label>
                                                                <input type="text" className="form-control"
                                                                    placeholder="Home Address"
                                                                    name='address'
                                                                    id='lastName'
                                                                    value={formState?.address}
                                                                    onChange={updateForm}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-md-4">
                                                            <div className="form-group">
                                                                <label className="form-label">City</label>
                                                                <input type="text" className="form-control" placeholder="City"
                                                                    name='city'
                                                                    id='city'
                                                                    value={formState?.city}
                                                                    onChange={updateForm}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-md-3">
                                                            <div className="form-group">
                                                                <label className="form-label">Postal Code</label>
                                                                <input type="number" className="form-control" placeholder="ZIP Code"
                                                                    name='postal_code'
                                                                    id='postalCode'
                                                                    value={formState?.postal_code}
                                                                    onChange={updateForm}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-5">
                                                            <div className="form-group">
                                                                <label className="form-label">Country</label>
                                                                <select className="form-control custom-select"
                                                                    name='country'
                                                                    id='country'
                                                                    value={formState?.country}
                                                                    onChange={updateForm}
                                                                >
                                                                    <Country />
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group mb-0">
                                                                <label className="form-label">About Me</label>
                                                                <textarea rows={5} className="form-control" placeholder="Here can be your description"

                                                                    name='about'
                                                                    id='about'
                                                                    value={formState?.about_me}
                                                                    onChange={updateForm}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer text-right">
                                                    <button type="submit" onClick={() => createProfileAction()} className="btn btn-primary" >Update Profile</button>
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
                                                    <h6 className="mb-0 font600">Salary</h6>
                                                    <span className="mb-0">{employee.salary} </span>
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
                                                    <h6 className="mb-0 font600">Total Leave</h6>
                                                    <span className="mb-0">{myTotalLeaves}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Team Members</h3>
                                            <div className="card-options">
                                                <a href="/#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                                                <a href="/#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <ul className="right_chat list-unstyled mb-0">
                                                {myTeamMembers.map((member, index) => (
                                                <li key={index} className="online">
                                                    <a href="#">
                                                        <div className="media">
                                                        <span className="avatar avatar-orange" data-toggle="tooltip" title="Avatar Name">
                                                            {member.name.charAt(0).toUpperCase()}
                                                            </span>
                                                            <div className="media-body" style={{marginLeft: '20px'}}>
                                                                <span className="name">{member.name}</span>
                                                                <span className="message">{member.role}</span>
                                                                <span className="badge badge-outline status" />
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            )}

                
        </>
    )

}
const mapStateToProps = state => ({
    fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Profile);