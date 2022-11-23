import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // you will need this link
import Image from "../../elements/Image"; // you will need this image for company logo
import ReactGA from 'react-ga';
import { GOOGLE_ANALYTICS_ID } from '../../../config/config';


ReactGA.initialize(GOOGLE_ANALYTICS_ID);
const JobDetail = () => {
	const [job, setJob] = useState({});
    // job ID here
	useEffect(() => {
		// get Job from ID provided in link
        ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<>
		<div className="container">
			<div className="row job-layout">
				<div className="col-md-8">
					<div className="card card-body">
                        {/* Left Job Detail here */}
                        <h3>Job Title</h3>
					</div>
				</div>
                <div className="col-md-4">
					<div className="card card-body">
                        {/* Right Job Detail here */}
                        <h3>Apply</h3>
					</div>
				</div>
			</div>
		</div>
        </>
	);
}

export default JobDetail;

