import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // you will need this link
import Image from "../../elements/Image"; // you will need this image for company logo
import ReactGA from 'react-ga';
import { GOOGLE_ANALYTICS_ID } from '../../../config/config';


ReactGA.initialize(GOOGLE_ANALYTICS_ID);
const AllJobs = () => {
	const [jobs, setJobs] = useState([]);
	useEffect(() => {
		// get Jobs from url e.g jobs/irun-tech
        ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<>
		<div className="container">
				
			<div className=" job-layout">
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
					<div className="social-icons col-6 d-flex justify-content-end">
						<span>fb</span>
						<span>Ig</span>
						<span>twit</span>
					</div>

				</div>
				
				<div className="card col-md-12 mx-auto job-listings">
					<div className="card-body">
                        {/* All Jobs here in a loop */}
                        <h2 className='jobs-header'>Current Openings</h2>
						<p className='small-header'>Thanks for checking out our job openings. See something that interests you? Apply here.</p>
						<hr />
						
						<div class="d-flex flex-row row">
							<div class="job-role col-6">
								<p className='job-dept'>Finance</p>
								<a>DevOps Engineer (Remote)</a></div>
							<div class=" col-3" >

								<span className='job-icon'>
									<i class="fa fa-location-dot"></i>
								</span>
								<span className='job-location'>London</span>
								<p className='pl-4 sub-location'>Greater London</p>
							</div>
							<div class=" col-3" >
								<span className='job-icon'>
									<i class="fa fa-user"></i>
								</span>
								<span className='job-location'>Engineering</span>
								<p className='pl-4 sub-location'>FullTime</p>
							</div>
							
						</div>
						<hr />
						<div class="d-flex flex-row row">
							<div class="job-role col-6"><a>DevOps Engineer (Remote)</a></div>
							<div class=" col-3" >

								<span className='job-icon'>
									<i class="fa fa-location-dot"></i>
								</span>
								<span className='job-location'>London</span>
								<p className='pl-4 sub-location'>Greater London</p>
							</div>
							<div class=" col-3" >
								<span className='job-icon'>
									<i class="fa fa-user"></i>
								</span>
								<span className='job-location'>Engineering</span>
								<p className='pl-4 sub-location'>FullTime</p>
							</div>
							
						</div>
						<hr />
						<div class="d-flex flex-row row">
							
							<div class="job-role col-6">
							<p className='job-dept'>Engineering</p>

								<a>DevOps Engineer (Remote)</a>
							</div>
							
							<div class=" col-3" >

								<span className='job-icon'>
									<i class="fa fa-location-dot"></i>
								</span>
								<span className='job-location'>London</span>
								<p className='pl-4 sub-location'>Greater London</p>
							</div>
							<div class=" col-3" >
								<span className='job-icon'>
									<i class="fa fa-user"></i>
								</span>
								<span className='job-location'>Engineering</span>
								<p className='pl-4 sub-location'>FullTime</p>
							</div>
							
						</div>
						<hr />
						<div class="d-flex flex-row row">
							<div class="job-role col-6"><a>DevOps Engineer (Remote)</a></div>
							<div class=" col-3" >

								<span className='job-icon'>
									<i class="fa fa-location-dot"></i>
								</span>
								<span className='job-location'>London</span>
								<p className='pl-4 sub-location'>Greater London</p>
							</div>
							<div class=" col-3" >
								<span className='job-icon'>
									<i class="fa fa-user"></i>
								</span>
								<span className='job-location'>Engineering</span>
								<p className='pl-4 sub-location'>FullTime</p>
							</div>
							
						</div>
						<hr /><div class="d-flex flex-row row">
							<div class="job-role col-6"><a>DevOps Engineer (Remote)</a></div>
							<div class=" col-3" >

								<span className='job-icon'>
									<i class="fa fa-location-dot"></i>
								</span>
								<span className='job-location'>London</span>
								<p className='pl-4 sub-location'>Greater London</p>
							</div>
							<div class=" col-3" >
								<span className='job-icon'>
									<i class="fa fa-user"></i>
								</span>
								<span className='job-location'>Engineering</span>
								<p className='pl-4 sub-location'>FullTime</p>
							</div>
							
						</div>
						<hr /><div class="d-flex flex-row row">
							<div class="job-role col-6"><a>DevOps Engineer (Remote)</a></div>
							<div class=" col-3" >

								<span className='job-icon'>
									<i class="fa fa-location-dot"></i>
								</span>
								<span className='job-location'>London</span>
								<p className='pl-4 sub-location'>Greater London</p>
							</div>
							<div class=" col-3" >
								<span className='job-icon'>
									<i class="fa fa-user"></i>
								</span>
								<span className='job-location'>Engineering</span>
								<p className='pl-4 sub-location'>FullTime</p>
							</div>
							
						</div>
						
						
					</div>
				</div>
			</div>

		
		</div>
		<footer className='job-footer fixed-bottom'>
		<div className='row d-flex align-items-center flex-row justify-content-between mb-4'>
			
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

		</footer>
        </>
	);
}

export default AllJobs;

