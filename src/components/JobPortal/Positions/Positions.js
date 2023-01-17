import { toast } from 'material-react-toastify';
import React, {  useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCompanyData, getUser } from '../../../config/common';
import { emailCase } from '../../../enums/emailCase';
import { createActivity } from '../../../services/activities';
import { getAllDepartments } from '../../../services/department';
import { createJob, deleteJob, getAllJobs } from '../../../services/job';
import { sendEmail } from '../../../services/mail/sendMail';
import Country from '../../common/country';
import FeatureNotAvailable from '../../common/featureDisabled';
import Loader from '../../common/loader';
import EmptyState from '../../EmptyState';

const Positions = () => {
    const [featureEnabled, setFeatureEnabled] = useState(false);
	const [loading, setLoading] = useState(false);
	const [jobs, setJobs] = useState([]);
    const [user, setUser] = useState([]);
	const [departments, setDepartments] = useState([]);
	const [companyData, setCompany] = useState([]);
	const [formState, setFormState] = useState({
        jobTitle: '',
		department: '',
		location: '',
		aboutCompany: '',
		aboutRole: '',
		responsibilities: '',
		requirements: '',
		benefits: '',
		totalSalary: '',
		jobType: '',
    });

	const updateForm = (e) => {
        const { value, name } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

	const createDepartmentAction = async () => {
        if (!featureEnabled) {
            toast.error('Feature not enabled');
            return;
        }
        try {
            setFormState({ ...formState });
            const body = {
                ...formState,
                company_id: user.company_id,
                companyName: companyData.name,
            }
            if (body.jobTitle === '') {
                toast.error('Please fill all the fields');
                return;
            }
            const response = await createJob(body, user.employee_id);

            if (response.id) {
                const logJob = await createActivity(
                    {
                        name: 'Job created',
                        employee_id: user.employee_id,
                        activity: `${user.name} Created a new job`,
                        activity_name: 'Creation',
                        user: user.name,
                        company_id: user.company_id,
                    }
                )

                if (logJob.id) {
                    sendEmail(user.emailAddress, user.name, emailCase.createJob);
                    setJobs([...jobs, response])
                    toast.success("Job created successfully");
                }

            }

            // setFormState({
            //  title: '',
			// 	department: '',
			// 	location: '',
			// 	aboutCompany: '',
			// 	aboutRole: '',
			// 	responsibilities: '',
			// 	requirements: '',
			// 	benefits: '',
			// 	totalSalary: '',
			// 	jobType: '',
            // });
        } catch (err) {
            toast.error("Error, try again");
            setFormState({ ...formState });
        }
        // console.log(body)
    };

	useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const user = await getUser();
            if (user) {
                const company_id = user.company_id;
                const companyData = await getCompanyData();
                companyData.settings?.features['jobManagement'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
                const response = await getAllJobs(company_id);
				const departmentResponse = await getAllDepartments(company_id);
                setJobs(response);
                setUser(user);
                setLoading(false);
				setCompany(companyData);
				setDepartments(departmentResponse);
            }
        }
        fetchData();

    }, []);

	if (loading ) {
		return <Loader />
	}

	if (!featureEnabled) {
		return <FeatureNotAvailable />
	}

	const seeApplicants = (id) => {
			window.location.href = `/jobportal-applicants/${id}`;
	};

	const removeJob = async (id) => {
		const response = await deleteJob(id);
		if (response) {
			const logJob = await createActivity(
				{
					name: 'Job deleted',
					employee_id: user.employee_id,
					activity: `${user.name} deleted a job`,
					activity_name: 'Deletion',
					user: user.name,
					company_id: user.company_id,
				}
			)

			if (logJob.id) {
				// sendEmail(user.emailAddress, user.name, emailCase.deleteJob);
				setJobs(jobs.filter(job => job.id !== id))
				toast.success("Job deleted successfully");
			}
		}
	}

		return (
			<>
				<div className='section-body mt-3'>
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center">
							<ul className="nav nav-tabs page-header-tab">
								<li className="nav-item">
									<Link to={'/admin/settings'} className="nav-link active">
										<i className="fa fa-arrow-left"></i>
									</Link>
								</li>
							</ul>
							<div className="header-action">
								<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Add</button>
							</div>
						</div>
					</div>
				</div>
				<div className={`section-body mt-3`}>
					<div className="container-fluid">
						<div className="row clearfix">
							<div className="col-12">
								{/* <div className="card">
									<div className="card-body">
										<div className="row">
											<div className="col-lg-3 col-md-5 col-sm-6">
												<label>TYPE</label>
												<div className="multiselect_div">
													<select className="custom-select">
														<option>None Selected</option>
														<option value={1}>Part Time</option>
														<option value={2}>Full Time</option>
														<option value={3}>All Type</option>
													</select>

												</div>
											</div>
											<div className="col-lg-3 col-md-5 col-sm-6">
												<label>Category</label>
												<div className="form-group">
													<select className="custom-select">
														<option>Designer</option>
														<option value={1}>Project Manager</option>
														<option value={2}>Senior Developer</option>
														<option value={3}>Front-end Developer</option>
													</select>
												</div>
											</div>
											<div className="col-lg-3 col-md-5 col-sm-6">
												<label>Salary</label>
												<div className="input-group">
													<input
														type="text"
														className="form-control"
														placeholder="Salary"
													/>
												</div>
											</div>
											<div className="col-lg-3 col-md-5 col-sm-6">
												<label>Search</label>
												<div className="input-group">
													<input
														type="text"
														className="form-control"
														placeholder="Search..."
													/>
												</div>
											</div>
										</div>
									</div>
								</div> */}
								{jobs.length === 0 ? (
								<EmptyState />
								) : (
								<div className="table-responsive card">
									<table className="card-body table table-hover table-vcenter table_custom text-nowrap spacing5 mb-0">
										<tbody>
											{jobs.map((job, index) => (
											<tr key={index}>
												<td className="w60">
													<span
														className={`avatar ${job.status === 'active' ? 'avatar-green' : 'avatar-warning'}`}
														data-toggle="tooltip"
														data-placement="top"
														data-original-title="Avatar Name"
													>
													</span>
												</td>
												<td>
													<div className="font-15">{job.jobTitle}</div>
													<span className="text-muted">{job.department}</span>
												</td>
												<td>
													<span className="tag tag-info">{job.jobType ?? 'dhhd'}</span>
												</td>
												<td>
													Applicants: <strong>{job.applicants ?? 0}</strong>
												</td>
												<td>
													<span>{job.location}</span>
												</td>
												<td>
													<span className={`tag ${job.status === 'active' ? 'tag-success' : 'tag-warning'}`}>{job.status}</span>
												</td>
												<td>
													<div className="dropdown">
														<a href="fake_url;" className="btn btn-sm btn-primary" data-toggle="dropdown">
															<i className="fa fa-ellipsis-v" />
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<button onClick={()=> seeApplicants(job.id) } className="dropdown-item"> <i className="fa fa-eye" /> View</button>
															<button onClick={() => removeJob(job.id)} className="dropdown-item"> <i className="fa fa-trash" /> Delete</button>
														</div>
													</div>
												</td>
											</tr>
											))}
										</tbody>
									</table>
								</div>
								)}
								<div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog modal-lg" role="document">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="exampleModalLabel">Add Job</h5>
												<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
											</div>
											{/* update form */}
											<div className="modal-body">
												<div className="row clearfix card-body">
													<div className="col-md-6">
														<div className="form-group">
															<label>Job Title</label>
															<input name='jobTitle' value={formState?.jobTitle}
																onChange={updateForm} type="text" className="form-control" placeholder="Senior Software Engineer" />
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label>Job Type</label>
															<select name='jobType' value={formState?.jobType}
																onChange={updateForm} className="form-control show-tick">
																<option value="">-- Please select --</option>
																<option value="Full-Time">Full-Time</option>
																<option value="Part-Time">Part-Time</option>
																<option value="Freelance">Freelance</option>
																<option value="Internship">Internship</option>
																<option value="Temporary">Temporary</option>
															</select>
														</div>
													</div>
													
													<div className="col-md-6">
														<div className="form-group">
															<label>Salary</label>
															<input name='salary' value={formState?.salary}
																onChange={updateForm} type="text" className="form-control" placeholder="$2,000.00" />
														</div>
													</div>
													<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label style={{ fontSize: '12px' }}>Department</label>
														<select
														onChange={updateForm}
														value={formState?.department}
														className="form-control"
														name="department"
														id="department"
														>
														<option value="">Select Department</option>
														{departments.map((department, index) => (
															<option key={index} value={department.name}>
															{department.name}
															</option>
														))}
														</select>
													</div>
													</div>
													<div className="col-lg-6 col-md-6">
														<div className="form-group">
															<label style={{ fontSize: '12px' }}>Location</label>
															<select
															className="form-control"
															name="location"
															id="country"
															value={formState?.location}
															onChange={updateForm}
															>
															<Country />
															</select>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label>Minimum Experience</label>
															<input name='minExperience' value={formState?.minExperience}
																onChange={updateForm} type="text" className="form-control" placeholder="Engineering" />
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">
															<label>About Role</label>
															<textarea name='aboutRole' value={formState?.aboutRole}
																onChange={updateForm} type="text" className="form-control" />
														</div>
													</div>

													<div className="col-md-12">
														<div className="form-group">
															<label>About Company</label>
															<textarea name='aboutCompany' value={formState?.aboutCompany}
																onChange={updateForm} type="text" className="form-control" />
														</div>
													</div>

													<div className="col-md-12">
														<div className="form-group">
															<label>Job Responsibilities</label>
															<textarea name='responsibilities' value={formState?.responsibilities}
																onChange={updateForm} type="text" className="form-control" />
														</div>
													</div>

													<div className="col-md-12">
														<div className="form-group">
															<label>Job Requirements</label>
															<textarea name='requirements' value={formState?.requirements}
																onChange={updateForm} type="text" className="form-control" />
														</div>
													</div>

													<div className="col-md-12">
														<div className="form-group">
															<label>Job Benefits</label>
															<textarea name='benefits' value={formState?.benefits}
																onChange={updateForm} type="text" className="form-control" />
														</div>
													</div>
												</div>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
												<button type="submit" onClick={() => createDepartmentAction()} className="btn btn-primary">Save changes</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</>
		);
	}

const mapStateToProps = state => ({
	fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Positions);