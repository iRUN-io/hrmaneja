import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // you will need this link
import Image from "../../elements/Image"; // you will need this image for company logo
import ReactGA from 'react-ga';
import { GOOGLE_ANALYTICS_ID } from '../../../config/config';



ReactGA.initialize(GOOGLE_ANALYTICS_ID);
const JobDetail = () => {
	const [job, setJob] = useState({});
	const [showForm, setShowForm] = useState(false)

	const handleDisplay = () => {
		console.log("show form")
		return setShowForm(!showForm)
	}
	// job ID here
	useEffect(() => {
		// get Job from ID provided in link
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<>
			<div className="container">
				<div className="job-layout">
					<div className='row d-flex flex-row justify-content-between mb-4'>
						<div className="logo col-6">
							<Image
								// src={require("../../assets/images/hr-manager-logo.png")}
								src={require("../../../assets/images/hr-manager-logo.png")}
								alt="Open"
								className="img-fluid"
								width={100}
							/>
						</div>


					</div>

					<div className="row ">
						<div className="col-md-4 fixed top-2">
							<div className="card card-body apply-card">
								{/* Left Job Detail here */}

								{/* <a href=""> */}
								{!showForm ?
									<button
										type='submit'
										className="btn btn-primary btn-block btn-apply"
										onClick={handleDisplay}>
										Apply For This Job
									</button>
									:
									<button
										type='submit'
										className="btn btn-primary btn-block btn-apply"
										onClick={handleDisplay}>
										View Job Description
									</button>
								}

								{/* </a> */}

								<hr />
								<p>Link to this job</p>
								<input className="mb-2 p-2 " type="text" name="" id="" read only
									value="https://klasha.bamboohr.com/jobs/view.php?id=74"
								/>
								<div className='job-social-links mt-2'>
									<span>Fb</span>
									<span>IG</span>
									<span>WA</span>

								</div>
							</div>
							<div className="location pl-2 pt-4">
								<span className=' text-small'>Location</span>
								<p className='text-medium'>London, Greater London</p>
								<hr />

								<span className=' text-small'>Department</span>
								<p className='text-medium'>Engineering</p>
								<hr />

								<span className=' text-small'>Employment Type</span>
								<p className='text-medium'>Full Time</p>
								<hr />

								<span className=' text-small'>Minimum Experience</span>
								<p className='text-medium'>Experienced</p>
								<hr />
							</div>
						</div>

						<div className="col-md-8 ">
							<div className="card job-wrapper card-body ">
								{/* Right Job Detail here */}
								<div className=''>
									<a href="#">job opening</a>
									<p className="jobs-header">DevOps Engineer (Remote)</p>
									<span>Engineering &nbsp; . &nbsp; </span> <span>London, Greater London</span>
								</div>
								<hr />
								{!showForm ?
									<div className='job-details'>
										<h3>About Hrmaneja</h3>
										<p>
											Klasha is a technology company that builds cross-border commerce solutions for African consumers and international businesses wanting to sell into Africa. Our mission is to make online consumer goods and services more accessible to customers across Africa. We've built the KlashaCheckout which allows African consumers to transact online and across borders in local African currencies, alongside an entire toolkit of software products including: KlashaWire, KlashaCargo, Payment Links and the Klasha App.
											<br />



										</p>
										<p>
											Our vision is for African consumers to have frictionless access to the goods they want, regardless of their geographic location, by transacting using African currencies and money methods.
										</p> <br />

										<p>
											Klasha is currently live in Nigeria, Tanzania, Uganda, South Africa, Kenya and Zambia. Klasha is backed by leading venture investors, including Greycroft (investors in Braintree and Venmo), Seedcamp (investors in Revolut), Techstars (investors in Remitly) and Plug and Play (investors in Paypal, Honey and Dropbox).
										</p> <br />

										<h5>About the Role</h5>
										<p>
											Are you an inquisitive, 0-{'>'}1 DevOps Engineer looking to scale a startup's capabilities from scratch? As a custodian of all things Platform at Klasha, you'll be empowered to build a robust, scalable function. This role would suit a resourceful, high-performance IC with experience creating bespoke environments for growing Engineering teams.
										</p> <br />

										<p>We're a Seed-stage startup, so ideally you'd be comfortable wearing multiple hats. We're learning quickly, shipping regularly, and working cross-functionally to build the future of commerce in Africa. You'll join a mission-led team that cares deeply about connecting Africa with the global economy. </p> <br />

										<h5>Responsiblities</h5>
										<ul>
											<li>Work alongside our VP Engineering to scope out areas for immediate improvement </li>
											<li>Creating a scalable environment for our engineers</li>
											<li>Work alongside our VP Engineering to scope out areas for immediate improvement </li>
											<li>Creating a scalable environment for our engineers</li>
											<li>Work alongside our VP Engineering to scope out areas for immediate improvement </li>
											<li>Creating a scalable environment for our engineers</li>
										</ul> <br />

										<h5>Requirements</h5>
										<ul>
											<li>Work alongside our VP Engineering to scope out areas for immediate improvement </li>
											<li>Creating a scalable environment for our engineers</li>
											<li>Work alongside our VP Engineering to scope out areas for immediate improvement </li>
											<li>Creating a scalable environment for our engineers</li>
											<li>Work alongside our VP Engineering to scope out areas for immediate improvement </li>
											<li>Creating a scalable environment for our engineers</li>
										</ul>


										<h5>Benefits</h5>
										<ul>
											<li>Work alongside our VP Engineering to scope out areas for immediate improvement </li>
											<li>Creating a scalable environment for our engineers</li>
											<li>Work alongside our VP Engineering to scope out areas for immediate improvement </li>
											<li>Creating a scalable environment for our engineers</li>
											<li>Work alongside our VP Engineering to scope out areas for immediate improvement </li>
											<li>Creating a scalable environment for our engineers</li>
										</ul>

									</div>

									:
									<div className="form form-details">
										<h2>Apply for This Position</h2>
										<div className="row d-flex  ">
											<div className="form-group col-6">
												<label className="job-form-label">First Name*</label>
												<input type="text" name='firstname' 
												className="form-control" placeholder="Enter First Name" />
											 
											</div>
											<div className='form-group col-6'>
												<label className="job-form-label">Last Name*</label>
												<input type="text" name='lastname'
												className="form-control" placeholder="Enter Last Name" />
											 </div>
										</div>	 
											<div className="form-group col-6">
											<label className="job-form-label">Email address*</label>
											<input type="email" name='email' 
											className="form-control" placeholder="Enter email" />
											</div>
										
										
										<div className="form-group col-6">
											<label className="job-form-label">Phone*</label>
											<input type="text" name='phone' 
											className="form-control" placeholder="Enter Phone Number" />
										</div>
										<div className="form-group col-6">
											<label className="job-form-label">Address*</label>
											<input type="text" name='Address' 
											className="form-control" placeholder="Enter Address" />
										</div>
										
										<div className='row'>
											<div className="form-group col-12 col-md-4">
												<label className="job-form-label">City*</label>
												<input type="text" name='city'
												className="form-control" placeholder="Enter City" />
											</div>
											<div className="form-group col-12 col-md-4">
												<label className="job-form-label">Province*</label>
												<input type="text" name='province'
												className="form-control" placeholder="Enter Province" />
											</div>
											<div className="form-group col-12 col-md-4">
												<label className="job-form-label">Postal Code*</label>
												<input type="text" name='postal'
												className="form-control" placeholder="Enter Postal Code" />
											</div>
										</div>
										<div className="form-group">
											<label className="form-label job-form-label">Country*</label>

											<select name="" id="">
												<option value="">Nigeria</option>
												<option value="">Wakanda</option>
											</select>
										</div>
										<hr />
										<div className="form-group">
										<label className="label form-label job-form-label">Resume*</label>

										<input type="file"
										id="avatar" name="file"
										accept="image/png, image/jpeg" />
										</div>
										<div className="form-group">
										<label className="form-label job-form-label">Date Available*</label>

										<input type="date" id="" name="date"
										value="2018-07-22"
										min="2018-01-01" max="2018-12-31" />
										</div>
										<div className="form-group col-md-4 col-12">
											<label className="form-label job-form-label ">Desired Pay*</label>
											<input type="text" name='desiredPay' 
											className="form-control"  />
										</div>
										<hr />
										<div className="form-group col-md-6 col-12">
											<label className="job-form-label ">Website, Blog or Portfolio*</label>
											<input type="text" name='portfolio' 
											className="form-control"  />
										</div>
										<div className="form-group col-md-6 col-12">
											<label className="job-form-label">LinkedIn*</label>
											<input type="text" name='linkedin' 
											className="form-control"  />
										</div>
									</div>
								}


							</div>
						</div>


					</div>
				</div>
				{!showForm ?
					<footer className='job-footer fixed-bottom '>
						<div className='d-none row d-md-flex align-items-center flex-row justify-content-between mb-4'>

							<div className="social-icons col-6 d-flex ">
								<ul>


									<li><a>Privacy Policy</a> &nbsp; . &nbsp;</li>
									<li><a>  Terms of Service</a></li> &nbsp; . &nbsp;
									<li><a>  &nbsp; &copy; 2021 HrManeja All rights reserved.</a></li>
								</ul>
							</div>

							<div className="logo col-6 justify-content-end d-flex pr-4">
								{/* <p>hello</p> */}
								<Image
									// src={require("../../assets/images/hr-manager-logo.png")}
									src={require("../../../assets/images/hr-manager-logo.png")}
									alt="Open"
									className="img-fluid"
									width={100}
								/>
							</div>

						</div>

						<div className='d-md-none'>

							<div className='mx-auto container'>
								<div className="logo text-align-center logo-small mx-auto mb-3">
									<Image
										// src={require("../../assets/images/hr-manager-logo.png")}
										src={require("../../../assets/images/hr-manager-logo.png")}
										alt="Open"
										className="img-fluid"
										width={100}
									/>
								</div>
								<div className="socials-small ">

									<a>Privacy Policy</a> &nbsp; . &nbsp;
									<a>Terms of Service</a>
									<p>&copy; 2021 - 2022 HrManeja All rights reserved.</p>

								</div>
							</div>
						</div>

					</footer>
					:
					<footer className='job-footer fixed-bottom submit-footer'>
						<div className='d-none row d-md-flex align-items-center flex-row justify-content-between mb-4'>

							<div className="col-6">
								<div className="d-flex">
									<button className="btn btn-primary submit-btn">
									Submit Application
									</button>

									<button className="btn btn-cancel" onClick={handleDisplay}>
									Cancel
									</button>

								</div>
								
							</div>

							<div className="logo col-6 justify-content-end d-flex pr-4">
								{/* <p>hello</p> */}
								<Image
									// src={require("../../assets/images/hr-manager-logo.png")}
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

