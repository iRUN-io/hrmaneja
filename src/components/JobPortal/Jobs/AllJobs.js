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
			<div className="row job-layout">
				<div className="card col-md-12 mx-auto">
					<div className="card-body">
                        {/* All Jobs here in a loop */}
                        <h3>Current Openings</h3>
					</div>
				</div>
			</div>
		</div>
        </>
	);
}

export default AllJobs;

