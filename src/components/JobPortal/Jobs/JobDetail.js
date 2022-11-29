import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Image from "../../elements/Image"; // you will need this image for company logo
import ReactGA from 'react-ga';
import { GOOGLE_ANALYTICS_ID } from '../../../config/config';
import JobsFooter from './JobsFooter';
import { Link, useHistory, useParams } from 'react-router-dom';
import Loader from '../../common/loader';
import Country from '../../common/country';
import { toast } from 'material-react-toastify';
import { createCandidate } from '../../../services/candidate';
import { sendEmail } from '../../../services/mail/sendMail';
import { emailCase } from '../../../enums/emailCase';
import JobSuccess from '../../common/JobSent';
// import Convert from '../../common/convertFileToBase';
import UploadCloudinary from '../../common/UploadCloudinary';
import { getCompany } from '../../../services/company';
import { getJob } from '../../../services/job';

ReactGA.initialize(GOOGLE_ANALYTICS_ID);
const JobDetail = () => {
	const [showForm, setShowForm] = useState(false)
	const [job, setJob] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const [companyData, setCompanyData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [resume, setResume] = useState('');
	const [selectedResume, setSelectedResume] = useState('');
	const [formState, setFormState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		address: '',
		city: '',
		province: '',
		postCode: '',
		country: '',
		dateAvailable: '',
		desiredPay: '',
		portfolio: '',
		linkedin: '',
	})

	const params = useParams();

	const handleDisplay = () => {
		setShowForm(!showForm)
	}

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
		async function fetchData() {
			setLoading(true);
			const companyData = await getCompany(params.company_id);
			const jobData = await getJob(params.id)
			if (jobData.status === 500) {
				window.location.href = `/jobs/${companyData.id}`;
			}
			setJob(jobData);
			setCompanyData(companyData);
			setLoading(false);
		}
		fetchData();

	}, []);


	const submitCandidate = async () => {
		try {
			setFormState({ ...formState });
			const body = {
				...formState,
				company_id: companyData.id,
				jobId: job.id,
				resume: resume,
			}
			if (formState.email === '' || formState.firstName === '') {
				toast.error('Please fill all the fields');
				return;
			}
			const response = await createCandidate(body);

			if (response.id) {
				sendEmail(companyData.email, companyData.name, emailCase.candidateAppliedAdmin);
				sendEmail(formState.email, formState.firstName, emailCase.candidateAppliedUser);
				setSubmitted(true);
				toast.success("Application sent successfully");
			} else {
				toast.info(response.message);
			}

			setFormState({
				departmentHead: '',
				departmentName: '',
				allEmployee: '',
			});
		} catch (err) {
			toast.error("Error, try again");
			setFormState({ ...formState });
		}
		// console.log(body)
	};

	const updateForm = e => {
		const { value, name } = e.target;
		setFormState({
			...formState,
			[name]: value
		});
	};


	const setRequirement = new Set(job.requirements);
	const requirements = [...setRequirement];

	const setResponsibilities = new Set(job.responsibilities);
	const responsibilities = [...setResponsibilities];

	const setBenefits = new Set(job.benefits);
	const benefits = [...setBenefits];

	const goback = () => {
		window.location.href = `/jobs/${companyData.id}`;
	}

	const handleFile = async e => {
		const file = e.target.files[0];
		const upload = await UploadCloudinary(file);
		// const convertedFile = await Convert(file) // switch this to use base64
		setResume(upload.secure_url);
		console.log('kkk', upload.original_filename)
		setSelectedResume(upload.original_filename);
	}

	const chooseFile = useCallback(() => {
		const dropArea = document.querySelector(".drop_box");
		const button = dropArea.querySelector("button");
		const input = dropArea.querySelector("input");
		button.onclick();
		input.click();

	}, [])

	const uploadFile = useMemo(() => {
		return (
			<div className="drop_box">
				<header>
					{selectedResume !== '' ? (
						<div className="alert alert-success" role="alert">
							<h4>{selectedResume}.pdf</h4>
						</div>
					) : (
						<h4>Select Resume here</h4>
					)}
				</header>
				<p>Files Supported: PDF</p>
				<input name="file" type="file" onChange={handleFile} hidden accept="application/pdf" id="fileID" style={{ display: 'none' }} />
				<button onClick={chooseFile} className="btn-sm btn-upload">Choose File</button>
			</div>
		)
	}, [chooseFile, selectedResume]);


	if (submitted) {
		return <JobSuccess />
	}

	if (loading) {
		return <Loader />
	}


	return (
		<>
			<div className="container">
				<div className="job-layout">
					<div className='row d-flex flex-row justify-content-between mb-4'>
						<div className="logo col-md-6">
							<Image
								src={require("../../../assets/images/hr-manager-logo.png")}
								alt="Open"
								className="img-fluid"
								width={100}
							/>
						</div>
						<div className="col-md-12" style={{ marginTop: '20px' }} >
							<Link onClick={() => goback()}><i className="fa fa-arrow-left" data-toggle="tooltip" title="fa fa-arrow-left" />&nbsp;Roles</Link>
						</div>
					</div>

					<div className="row ">
						<div className="col-md-4 fixed top-2">
							<div className="card card-body apply-card">
								{!showForm ?
									<button
										type='submit'
										className="btn btn-primary btn-block btn-apply"
										onClick={handleDisplay}>
										Apply
									</button>
									:
									<button
										type='submit'
										className="btn btn-primary btn-block btn-apply"
										onClick={handleDisplay}>
										View Job Description
									</button>
								}
								<hr />
								<input className="mb-2 p-2 job-link" type="text" name="" id="" readOnly
									value={`${window.location.href}`}
								/>
								{/* <div className='job-social-links mt-2'>
									<span>Fb</span>
									<span>IG</span>
									<span>WA</span>

								</div> */}
							</div>
							<br></br>
							<div className="card card-body" >
								<span className='text-small'>Location</span>
								<p className='text-medium'>{job.location}</p>
								<hr />

								<span className=' text-small'>Department</span>
								<p className='text-medium'>{job.department}</p>
								<hr />

								<span className=' text-small'>Employment Type</span>
								<p className='text-medium'>{job.jobType}</p>
								<hr />
							</div>
						</div>

						<div className="col-md-8 ">
							<div className="card job-wrapper card-body ">
								{/* Right Job Detail here */}
								<div className=''>
									<h5>{job.jobTitle}</h5>
									<span>{job.department} &nbsp; | &nbsp; </span> <span>{job.location}</span>
								</div>
								<hr />
								{!showForm ?
									<div className='job-details'>
										<h6>About {companyData.name}:</h6>
										<p>
											{job.aboutCompany}
											<br />
										</p>

										<h6>About the Role:</h6>
										<p>
											{job.aboutRole}
										</p> <br />

										<h6>Responsibilities:</h6>
										<ul>
											{responsibilities.map((responsibility, index) => (
												<li key={index}>{responsibility}</li>
											))}
										</ul> <br />

										<h6>Requirements</h6>
										<ul>
											{requirements.map((requirement, index) => (
												<li key={index}>{requirement}</li>
											))}
										</ul>


										<h6>Benefits:</h6>
										<ul>
											{benefits.map((benefit, index) => (
												<li key={index}>{benefit}</li>
											))}
										</ul>

									</div>

									:
									<div className="form form-details">
										{/* <h2>Apply for This Position</h2> */}
										<div className="row d-flex ">
											<div className="form-group col-6">
												<label className="job-form-label">First Name*</label>
												<input type="text" name='firstName' value={formState?.firstName} onChange={updateForm}
													className="form-control" placeholder="Enter First Name" />

											</div>
											<div className='form-group col-6'>
												<label className="job-form-label">Last Name*</label>
												<input type="text" name='lastName'
													className="form-control" value={formState?.lastName} onChange={updateForm} placeholder="Enter Last Name" />
											</div>

											<div className="form-group col-6">
												<label className="job-form-label">Email address*</label>
												<input type="email" name='email'
													className="form-control" value={formState?.email} onChange={updateForm} placeholder="Enter email" />
											</div>


											<div className="form-group col-6">
												<label className="job-form-label">Phone*</label>
												<input type="text" name='phone'
													className="form-control" value={formState?.phone} onChange={updateForm} placeholder="Enter Phone Number" />
											</div>
											<div className="form-group col-12">
												<label className="job-form-label">Address*</label>
												<input type="text" name='address'
													className="form-control" value={formState?.address} onChange={updateForm} placeholder="Enter Address" />
											</div>
										</div>

										<div className='row'>
											<div className="form-group col-12 col-md-4">
												<label className="job-form-label">City*</label>
												<input type="text" name='city'
													className="form-control" value={formState?.city} onChange={updateForm} placeholder="Enter City" />
											</div>
											<div className="form-group col-12 col-md-4">
												<label className="job-form-label">Province*</label>
												<input type="text" name='province'
													className="form-control" value={formState?.province} onChange={updateForm} placeholder="Enter Province" />
											</div>
											<div className="form-group col-12 col-md-4">
												<label className="job-form-label">Postal Code*</label>
												<input type="text" name='postCode'
													className="form-control" value={formState?.postCode} onChange={updateForm} placeholder="Enter Postal Code" />
											</div>
										</div>
										<div className="form-group">
											<label className="form-label job-form-label">Country*</label>

											<select
												className="form-control"
												name="country"
												id="country"
												value={formState?.country}
												onChange={updateForm}
											>
												<Country />
											</select>
										</div>
										<hr />
										<div className="form-group">
											{uploadFile}
										</div>
										<div className='row'>
											<div className="form-group col-6">
												<label className="form-label">Date Available*</label>
												<input className='form-control' value={formState?.dateAvailable} onChange={updateForm} type="date" name="dateAvailable"
													min="2018-01-01" max="2024-12-31" />
											</div>
											<div className="form-group col-6">
												<label className="form-label job-form-label ">Desired Pay*</label>
												<input type="text" name='desiredPay' value={formState?.desiredPay} onChange={updateForm}
													className="form-control" />
											</div>
										</div>
										<hr />
										<div className='row'>
											<div className="form-group col-md-6 col-12">
												<label className="job-form-label ">Website, Blog or Portfolio*</label>
												<input type="text" name='portfolio'
													value={formState?.portfolio} onChange={updateForm}
													className="form-control" />
											</div>
											<div className="form-group col-md-6 col-12">
												<label className="job-form-label">LinkedIn*</label>
												<input type="text" name='linkedin' value={formState?.linkedin} onChange={updateForm}
													className="form-control" />
											</div>
										</div>
									</div>
								}


							</div>
						</div>


					</div>
				</div>
				{!showForm ?
					<JobsFooter />
					:
					<footer className='job-footer job-layout fixed-bottom submit-footer'>
						<div className='row  d-md-flex align-items-center flex-row justify-content-between mb-4'>
							<div className="col-6">
								<div className="d-flex container">
									<button onClick={submitCandidate} className="btn btn-primary submit-btn">
										Submit Application
									</button>

									<button className="btn btn-cancel" onClick={handleDisplay}>
										Cancel
									</button>

								</div>

							</div>

							<div className="logo col-6 justify-content-end d-flex pr-4">
								<Image
									src={require("../../../assets/images/hr-manager-logo.png")}
									alt="Open"
									className="img-fluid"
									width={100}
								/>
							</div>

						</div>


					</footer>
				}


			</div>
		</>
	);
}

export default JobDetail;

