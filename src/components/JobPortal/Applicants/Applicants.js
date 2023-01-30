/* eslint-disable jsx-a11y/anchor-is-valid */
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCompanyData } from '../../../config/common';
import { getAllCandidates } from '../../../services/candidate';
import { getJob } from '../../../services/job';
import { downloadAndZip, downloadSinglePdf } from '../../common/downloader';
import FeatureNotAvailable from '../../common/featureDisabled';
import Loader from '../../common/loader';
import EmptyState from '../../EmptyState';

const Applicants = () => {
	const [job, setJob] = useState({});
	const [applicants, setApplicants] = useState([]);
	const [loading, setLoading] = useState(false);
	const [featureEnabled, setFeatureEnabled] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [ApplicantPage] = useState(15);
	const [searchApplicant, setSearchApplicant] = useState('');

	const params = useParams();

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const jobData = await getJob(params.job_id)
			setJob(jobData);
			const companyData = await getCompanyData();
			companyData.settings?.features['jobManagement'] ? setFeatureEnabled(true) : setFeatureEnabled(false);
			const applicantsData = await getAllCandidates(params.job_id)
			setApplicants(applicantsData);
			setLoading(false);
		}
		fetchData();

	}, [params.job_id]);

	const downloadPdf = (url, name) => {
		return downloadSinglePdf(url, name)
	}

	const downloadAllPdfs = () => {
		const urls = [];
		const names = [];

		applicants.forEach(applicant => {
			urls.push(applicant.resume)
			names.push(applicant.firstName + applicant.lastName)
		});

		const data = {
			urls: urls,
			names: names,
		}

		return downloadAndZip(data, job.jobTitle)
	}

	
	const getApplicantBySearchQuery = (
		applicants,
		searchQuery,
	  ) => {
		return applicants.filter(applicant =>
			applicant.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			applicant.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			applicant.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
			applicant.phone.toLowerCase().includes(searchQuery.toLowerCase())
		);
	  };
	
	  const allApplicantArray = useMemo(() => {
		let allApplicants = applicants;
		if (searchApplicant) {
		  allApplicants = getApplicantBySearchQuery(allApplicants, searchApplicant);
		}
	
		return allApplicants || [];
	  }, [applicants, searchApplicant]);
	
	  const setSearch = (e) => {
		const { value } = e.target;
		setSearchApplicant(value);
	  };
  
	const indexOfLastApplicant = currentPage * ApplicantPage;
	const indexOfFirstApplicant = indexOfLastApplicant - ApplicantPage;
	const currentApplicants = allApplicantArray.slice(indexOfFirstApplicant, indexOfLastApplicant);
  
	const paginate = pageNumber => setCurrentPage(pageNumber);
	const nextPage = () => setCurrentPage(currentPage + 1);
	const prevPage = () => setCurrentPage(currentPage - 1);
  
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(allApplicantArray.length / ApplicantPage); i++) {
	  pageNumbers.push(i);
	}

	if (loading) {
		return <Loader />
	}

	if (!featureEnabled) {
		return <FeatureNotAvailable />
	}

	console.log(applicants)

	return (
		<>
			<div className='section-body mt-3'>
				<div className="container-fluid">
					<div className="d-flex justify-content-between align-items-center">
						<ul className="nav nav-tabs page-header-tab">
							<li className="nav-item">
								<Link to={'/jobportal-positions'} className="nav-link active">
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
			<div className={`section-body  mt-3`}>
				<div className="container-fluid">
					<div className="row clearfix">
						<div className="col-12">
							<h5 className=''>{job.jobTitle}</h5>
							{/* <div className="card">
								<div className="card-body">
									<div className="row">
										<div className="col-lg-4 col-md-4 col-sm-6">
											<label>Search</label>
											<div className="input-group">
												<input
													type="text"
													className="form-control"
													placeholder="Search..."
												/>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-sm-6">
											<label>Status</label>
											<div className="multiselect_div">
												<select className="custom-select">
													<option>None Selected</option>
													<option value={1}>All Status</option>
													<option value={2}>New</option>
													<option value={3}>Contacted</option>
												</select>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-sm-6">
											<label>Order</label>
											<div className="form-group">
												<select className="custom-select">
													<option>Newest first</option>
													<option value={1}>Oldest first</option>
													<option value={2}>Low salary first</option>
													<option value={3}>High salary first</option>
													<option value={3}>Sort by name</option>
												</select>
											</div>
										</div>
										<div className="col-lg-2 col-md-4 col-sm-6">
											<label>&nbsp;</label>
											<a href="#" onClick={downloadAllPdfs} className="btn btn-sm btn-primary btn-block">
												Download all PDFS
											</a>

										</div>
									</div>
								</div>
							</div> */}
							<div className='card'>
							<div className="card-header">
								<h3 className="card-title">Applicants</h3>
								<div className="col-lg-10 col-md-4 col-sm-6 card-body">
									<a href="#" onClick={downloadAllPdfs} className="btn btn-sm btn-primary btn-block">
										Download all PDFS
									</a>
								</div>
								<div className="card-options">
									<div className="input-group">
										<input
										type="text"
										className="form-control form-control-sm"
										placeholder="Search Applicants..."
										onChange={setSearch}
										value={searchApplicant}
										name="s"
										/>
									</div>
								</div>
								
								</div>
								</div>
							{currentApplicants.length === 0 ? (
								<EmptyState />
							) : (
								<><div className="table-responsive card card-body">
										<table className="table table-hover table-vcenter table_custom text-nowrap spacing5 border-style mb-0">
											<thead>
												<tr>
													<th></th>
													<th className="w200">
														<p>Applicant</p>
														<p>Position</p>
													</th>
													<th className="w100">Salary</th>
													<th className="w60">Job Type</th>
													<th className="w100">Resume</th>
													<th className="w50">Address</th>
													<th className="w50">Date Available</th>
													<th className="w100">Application Date</th>
												</tr>
											</thead>
											<tbody>
												{currentApplicants.map((applicant, index) => (
													<tr key={index}>
														<td className="w60">
															<div
																className="avatar avatar-pink"
																data-toggle="tooltip"
																data-placement="top"
																data-original-title="Avatar Name"
															>

																{applicant.firstName && applicant.lastName && (<span>
																	{(applicant.firstName[0] + applicant.lastName[0]).toUpperCase()}</span>
																)}
															</div>
														</td>
														<td>
															<div className="font-15">{applicant.firstName + " " + applicant.lastName}</div>
															<span className="text-muted">{job.jobTitle}</span>
														</td>
														<td>{applicant.desiredPay ?? 'Salary not provided'}</td>
														<td>
															<span className="tag tag-primary">{job.jobType}</span>
														</td>
														<td>

															<span className="tag tag-info text-white">
																{applicant.resume ? (
																	<a href='#' onClick={() => downloadPdf(applicant.resume, applicant.firstName + applicant.lastName)} className="text-white">
																		{'Download Resume'}
																	</a>
																) : (
																	<a href='#' className="text-white">No Resume
																	</a>
																)}
															</span>
														</td>
														<td>
															<span>{applicant.address}</span>
														</td>
														<td className="text-right">
															Available on: <strong>{moment(applicant.dateAvailable).format('MMM Do YYYY')}</strong>
														</td>
														<td className="text-right">
															Applied on: <strong>{moment(applicant.createdAt).format('MMM Do YYYY')}</strong>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div><div className=''>
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
										</div></>
							)}
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
export default connect(mapStateToProps, mapDispatchToProps)(Applicants);