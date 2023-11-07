/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { toast } from "material-react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import { formatMoney, getCompanyData, getUser, removeUserSession } from '../../config/common';
import { getAllEmployees, getEmployee } from '../../services/employee';
import { createActivity, getActivity } from '../../services/activities';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import { getAllLeaves } from '../../services/leave';
import { Link, useHistory } from 'react-router-dom';
import { changePassword } from '../../services/user';
import { sendEmail } from '../../services/mail/sendMail';
import { emailCase } from '../../enums/emailCase';
import { createDocument, deleteDocument, getEmployeeDocument } from '../../services/documents';
import UploadCloudinary from '../common/UploadCloudinary';
import EmptyState from '../EmptyState';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import Time from '../elements/Time';

function Profile(props) {
    const { fixNavbar } = props;
    const [user, setUser] = useState({});
    const [employee, setEmployee] = useState({});
    const [company, setCompany] = useState({});
    const [activity, setActivity] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ActivityPerPage] = useState(20);
    const [myTeamMembers, setTeamMembers] = useState([]);
    const [myTotalLeaves, setTotalLeaves] = useState(0);
    const [loading, setLoading] = useState(false);
    const [documents, setDocuments] = useState([]);
    const [uploadDocument, setDocument] = useState('');
    const [uploadLoading, setUploadLoading] = useState(false);
    const history = useHistory();
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const user = await getUser();
            if (user) {
                const employee = await getEmployee(user.employee_id);
                const activity = await getActivity(user.employee_id);
                const allEmployee = await getAllEmployees(user.company_id);
                const allLeaves = await getAllLeaves(user.company_id);
                const companyData = await getCompanyData();
                const document = await getEmployeeDocument(user.employee_id);
                const teamMembers = allEmployee.filter(mYemployee => mYemployee.department === employee.department).filter(employee => employee.id !== user.employee_id);
                const totalLeaves = allLeaves.filter(leave => leave.employee_id === user.employee_id).length;
                setUser(user);
                setTotalLeaves(totalLeaves);
                setActivity(activity);
                setEmployee(employee);
                setCompany(companyData);
                setTeamMembers(teamMembers);
                setDocuments(document);
                setLoading(false);
            }
        }
        fetchData();

    }, []);
    const [formState, setFormState] = useState({
        username: user.username,
        email: user.emailAddress,
        name: user.name,
        company: user.company_id,
        address: employee.Address,
        city: user.city,
        postal_code: user.postalCode,
        phone: employee.phone,
        country: employee.country,
        about_me: user.about,
        currentPassword: '',
        confirmPassword: '',
        newPassword: '',
        selectedFile: null,
        documentName: '',
    })

    useEffect(() => {
        setFormState({
            username: user.username,
            email: user.emailAddress,
            name: user.name,
            company: user.company_id,
            address: employee.address,
            phone: employee.phone,
            country: employee.country,
        })
    }, [employee.address, employee.country, employee.phone, user])

    const createProfileAction = async () => {
        try {
            setFormState({ ...formState });
        }
        catch (err) {
            toast.error("Error, try again");
            setFormState({ ...formState });
        }
    }

    const changePasswordAction = async () => {
            if (formState.newPassword !== formState.confirmPassword) {
                toast.error("Passwords do not match");
                return;
            }
            try {
                setFormState({ ...formState });
                const body = {
                    password: formState.currentPassword,
                    changedPassword: formState.newPassword,
                    token: user.token,
                }
                if (body.currentPassword === '' || body.newPassword === '') {
                    toast.error('Please fill all the fields');
                    return;
                }
                const response = await changePassword(body);
    
                if (response.status === 200) {
                    const logDepartment = await createActivity(
                        {
                            name: 'Update Password',
                            employee_id: user.employee_id,
                            activity: `${user.name} has updated password`,
                            activity_name: 'Update Password',
                            user: user.name,
                            company_id: user.company_id,
                        }
                    )
    
                    if (logDepartment.id) {
                        sendEmail(user.emailAddress, user.name, emailCase.passwordReset);
                        toast.success("Password updated successfully, you will be redirected to enter new password");
                        removeUserSession();
                        setTimeout(() => {
                            history.push('/login');
                        } , 2000);

                    }
    
                }else{
                    toast.error(response.message || "Error, try again");
                }
    
                setFormState({
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                });
            } catch (err) {
                toast.error("Error, try again");
                setFormState({ ...formState });
            }

        };

        const submitDocument = async () => {
            try {
                setFormState({ ...formState });
                const body = {
                    name: formState.documentName,
                    company_id: user.company_id,
                    url: uploadDocument,
                    employee_id: user.employee_id,
                }
                if (formState.documentName === '' || formState.firstName === '') {
                    toast.error('Please fill all the fields');
                    return;
                }
                const response = await createDocument(body);
    
                if (response.id) {
                    await createActivity(
                        {
                          name: 'Create Document',
                          employee_id: user.employee_id,
                          activity: `${user.name} created a document with name; ${document.name}`,
                          activity_name: 'Creation',
                          user: user.name,
                          company_id: user.company_id
                        }
                      )
                    setDocuments([...documents, response])
                    toast.success("Document sent successfully");
                } else {
                    toast.info(response.message);
                }
    
                setFormState({documentName: ''});
    
            } catch (err) {
                toast.error("Error, try again");
                setFormState({ ...formState });
            }
            // console.log(body)
        };

        const removeDocument = async (documentId) => {
            try {
    
              const response = await deleteDocument(documentId);
        
              if (response.message) {
                const logEmployee = await createActivity(
                  {
                    name: 'Delete Document',
                    employee_id: user.employee_id,
                    activity: `${user.name} deleted a document with name; ${document.name}`,
                    activity_name: 'Deletion',
                    user: user.name,
                    company_id: user.company_id
                  }
                )
                if (logEmployee.id) {
                  const newDocuments = documents.filter(document => document.id !== documentId);
                  setDocuments(newDocuments);
                  toast.info(response.message);
                }
              }
        
            } catch (err) {
              toast.error("Error, try again");
              setFormState({ ...formState });
            }
        
          };
    
    const updateForm = e => {
        const { value, name, type } = e.target;
        if (type === 'file') {
            const file = e.target.files[0];
        
            setFormState((prevState) => ({
              ...prevState,
              selectedFile: file,
            }));
          } else {
            setFormState((prevState) => ({
              ...prevState,
              [name]: value,
            }));
          }
    };

    const handleFile = async e => {
		setUploadLoading(true);
		const file = e.target.files[0];
		const upload = await UploadCloudinary(file);
		setDocument(upload.secure_url);
		// setSelectedResume(upload.original_filename);
		setUploadLoading(false);
	}

    const readableDate = (date) => {
        return Time(date);
    }

    const openFileInNewWindow = (url) => {
         window.open(url, '_blank');
      };

    const indexOfLastActivity = currentPage * ActivityPerPage;
    const indexOfFirstActivity = indexOfLastActivity - ActivityPerPage;
    const currentActivity = activity.slice(indexOfFirstActivity, indexOfLastActivity);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(activity.length / ActivityPerPage); i++) {
        pageNumbers.push(i);
    }

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
                                        {employee.gender === 'Female' ? (
                                                <img
                                                    className="card-profile-img"
                                                    src="../assets/images/sm/avatar1.jpg"
                                                    alt={employee.name}
                                                />
                                            ) : (
                                                <img
                                                    className="card-profile-img"
                                                    src="../assets/images/sm/avatar2.jpg"
                                                    alt={employee.name}

                                                />
                                            )}
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
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-password-tab" data-toggle="pill" href="#pills-password" role="tab" aria-controls="pills-password" aria-selected="false">Change Password</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-document-tab" data-toggle="pill" href="#pills-document" role="tab" aria-controls="pills-document" aria-selected="false">Upload Document</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-8 col-md-12">
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-timeline" role="tabpanel" aria-labelledby="pills-timeline-tab">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Activity</h3>
                                                    {/* <div className="card-options">
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
                                                    </div> */}
                                                </div>
                                                <div className="card-body">
                                                    {currentActivity.map((activity, index) => (
                                                        <div className="timeline_item " key={index}>
                                                            <img className="tl_avatar" src="../assets/images/xs/avatar1.jpg" alt="fake_url" />
                                                            <span><a href="fake_url;">{activity.name}</a>  <small className="float-right text-right">{moment(activity.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</small></span>
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
                                                    <div className="row wrapper content">
                                                    <nav aria-label="Page navigation example">
                                                        <ul className="pagination justify-content-end">
                                                            <li className="page-item" style={{ marginRight: '5px' }}>
                                                                <button className="btn btn-sm btn-primary" onClick={prevPage} disabled={currentPage === 1 ? true : false}><i className="fa fa-angle-double-left"></i></button>
                                                            </li>
                                                            {pageNumbers.map(number => (
                                                                <li key={number} className="page-item" style={{ marginRight: '5px' }}>
                                                                    <button onClick={() => paginate(number)} className={currentPage === number ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline-primary'}>{number}</button>
                                                                </li>
                                                            ))}
                                                            <li className="page-item">
                                                                <button className="btn btn-sm btn-primary" onClick={nextPage} disabled={currentPage === pageNumbers.length ? true : false}><i className="fa fa-angle-double-right"></i></button>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Edit Profile</h3>
                                                    {/* <div className="card-options">
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
                                                    </div> */}
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
                                                                    value={company.name}
                                                                    onChange={updateForm}
                                                                    readOnly

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
                                                                <input readOnly type="email" className="form-control" placeholder="Email"
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
                                                        {/* <div className="col-sm-6 col-md-4">
                                                            <div className="form-group">
                                                                <label className="form-label">City</label>
                                                                <input type="text" className="form-control" placeholder="City"
                                                                    name='city'
                                                                    id='city'
                                                                    value={formState?.city}
                                                                    onChange={updateForm}
                                                                />
                                                            </div>
                                                        </div> */}
                                                        <div className="col-sm-6 col-md-3">
                                                            <div className="form-group">
                                                                <label className="form-label">Phone</label>
                                                                <input type="text" className="form-control" placeholder="Phone"
                                                                    name='phone'
                                                                    id='postalCode'
                                                                    value={formState?.phone}
                                                                    onChange={updateForm}
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-md-5">
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
                                                        </div> */}
                                                            {/* <div className="col-md-12">
                                                                <div className="form-group mb-0">
                                                                    <label className="form-label">About Me</label>
                                                                    <textarea rows={5} className="form-control" placeholder="Here can be your description"
                                                                        name='about'
                                                                        id='about'
                                                                        value={formState?.about_me}
                                                                        onChange={updateForm}
                                                                    />
                                                                </div>
                                                            </div> */}
                                                    </div>
                                                </div>
                                                <div className="card-footer text-right">
                                                    <button type="submit" onClick={() => createProfileAction()} className="btn btn-primary" disabled >Update Profile</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-password" role="tabpanel" aria-labelledby="pills-password-tab">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Change password</h3>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row clearfix">
                                                        <div className="col-sm-6 col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Current password</label>
                                                                <input type="password" className="form-control" placeholder=""
                                                                    name='currentPassword'
                                                                    id='currentPassword'
                                                                    value={formState?.currentPassword}
                                                                    onChange={updateForm}

                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Password</label>
                                                                <input type="password" className="form-control"
                                                                    placeholder=""
                                                                    name='newPassword'
                                                                    id='newPassword'
                                                                    value={formState?.newPassword}
                                                                    onChange={updateForm}

                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Repeat Password</label>
                                                                <input type="password" className="form-control" placeholder=""
                                                                    name='confirmPassword'
                                                                    id='confirmPassword'
                                                                    value={formState?.confirmPassword}
                                                                    onChange={updateForm}
                                                                />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="card-footer text-right">
                                                    <button type="submit" onClick={() => changePasswordAction()} className="btn btn-primary" >Change Password</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-document" role="tabpanel" aria-labelledby="pills-document-tab">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Upload Document</h3>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row clearfix">
                                                        <div className="col-sm-6 col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Document Name</label>
                                                                <input type="text" className="form-control" placeholder=""
                                                                    name='documentName'
                                                                    id='documentName'
                                                                    value={formState?.documentName}
                                                                    onChange={updateForm}

                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Document</label>
                                                                <input type="file" className="form-control"
                                                                    placeholder=""
                                                                    name='selectedFile'
                                                                    id='selectedFile'
                                                                    value={formState?.selectedFile}
                                                                    onChange={handleFile}

                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer text-right">
                                                    <button type="submit" onClick={() => submitDocument()} className="btn btn-primary" >Upload</button>
                                                </div>
                                            </div>
                                                {documents.length === 0 && !loading ? (
                                                    <div className='card'>
                                                        <EmptyState />
                                                        </div>
                                                ) : (
                                                <div className="row row-cards">
                                                    {documents.map((document) => (
                                                    <div key={document.id} className="col-sm-6 col-lg-4">
                                                        <div className="card p-3">
                                                        <div className="d-flex align-items-center px-2">
                                                                <div>
                                                                    <div>{document.name}</div>
                                                                    <small className="d-block text-muted">{readableDate(document.createdAt)}</small>
                                                                </div>
                                                                <div className="ml-auto text-muted">
                                                                <a onClick={()=> openFileInNewWindow(document.url)} className="mb-3">
                                                                <button className='btn btn-sm btn-outline-primary'>View File</button>
                                                            </a>
                                                                </div>
                                                            </div>
                                                            <OverlayTrigger trigger="focus" placement="bottom" delay={1}
                                                                overlay={
                                                                <Popover id="popover-basic">
                                                                    <Popover.Header as="p">Confirm Delete</Popover.Header>
                                                                    <Popover.Body>
                                                                    <div className="clearfix" >
                                                                        <button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success">Cancel</button>
                                                                        <button style={{ margin: '10px' }} onClick={() => removeDocument(document.id)} type="button" className="btn btn-sm btn-danger">Delete</button>
                                                                    </div>
                                                                    </Popover.Body>
                                                                </Popover>
                                                                }>
                                                                <button type="button" className="btn btn-sm btn-icon js-sweetalert" title="Delete" data-type="confirm"><i className="fe fe-trash text-danger" /></button>
                                                            </OverlayTrigger>
                                                            {/* <a onClick={openFileInNewWindow(document.url)} className="mb-3">
                                                                <button className='btn btn-sm btn-primary'>View File</button>
                                                            </a> */}
                                                            
                                                        </div>
                                                    </div>
                                                    ))}
                                                </div>
                                                )}
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

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="widgets1">
                                                <div className="icon">
                                                    <i className="fa fa-money text-success font-30" />
                                                </div>
                                                <div className="details">
                                                    <h6 className="mb-0 font600">Salary</h6>
                                                    <span className="mb-0">{formatMoney(employee.salary)} </span>
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