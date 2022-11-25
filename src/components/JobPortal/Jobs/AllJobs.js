import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Image from "../../elements/Image"; 
import ReactGA from 'react-ga';
import { GOOGLE_ANALYTICS_ID } from '../../../config/config';
import { getAllJobs } from '../../../services/job';
import EmptyState from '../../EmptyState';
import Loader from '../../common/loader';
import { getCompany } from '../../../services/company';

ReactGA.initialize(GOOGLE_ANALYTICS_ID);
const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [companyData, setCompanyData] = useState([]);
    const [loading, setLoading] = useState(false);
    const companyId = window.location.href.split("/").pop();

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
        async function fetchData() {
            setLoading(true);
            const response = await getAllJobs(companyId);
            const companyData = await getCompany(companyId);
            if (response.status === 404) {
                return;
            }
            setJobs(response);
            setCompanyData(companyData);
            setLoading(false);
        }
        fetchData();

    }, [companyId]);

    if (loading) {
        return <Loader />
    }

    const getDepartments = () => {
        const departments = jobs
            .map(job => job.department)
            .filter((item, index, arr) => arr.indexOf(item) === index);
        return departments;
    }

    const departments = getDepartments();

    return (
        <>
            <div className="container" style={{ marginBottom: '200px' }}>
                <div className=" job-layout">
                    <div className='row d-flex flex-row justify-content-between mb-4'>
                        <div className="logo col-6">
                            <h5>{companyData.name}</h5>
                            {/* add below when companies can upload thier logos */}
                            {/* <Image
                                src={require("../../../assets/images/hr-manager-logo.png")}
                                alt="Open"
                                className="img-fluid"
                                width={100}
                            /> */}
                        </div>
                        {/* <div className="social-icons col-6 d-flex justify-content-end">
                            <span>fb</span>
                            <span>Ig</span>
                            <span>twit</span>
                        </div> */}

                    </div>

                    <div className="card table-card col-md-12 mx-auto">
                        <div className="card-body">

                            <h5 className='jobs-header'>Open Positions</h5>
                            <hr className='header-line'></hr>
                            {/* <p className='small-header'>Thanks for checking out our job openings. See something that interests you? Apply here.</p> */}
                            {jobs.length === 0 ? (
                                <><EmptyState />
                                    <div>
                                        <h5 className='mx-auto text-center' style={{ marginTop: '50px' }}>We do not have any opening yet</h5>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        {departments.map((dept, index) => (
                                            <div key={index}>
                                                <span className='badge badge-warning' style={{ marginBottom: '10px' }}>{dept}</span>
                                                {jobs.map((job, index) => (
                                                    <div key={index}>
                                                        {job.department === dept ? (
                                                            <>
                                                                <Link to={`/jd/${job.id}`}>
                                                                    <div className="card d-flex flex-row row job-card" style={{ paddingTop: '20px', paddingBottom: '30px' }}>
                                                                        <div className="job-role col-6">
                                                                            {job.jobTitle}
                                                                        </div>
                                                                        <div className=" col-3">

                                                                            <span className='job-location'><i className="text-primary fa fa-location-arrow"></i> {job.location}</span>
                                                                            {/* <p className='pl-4 sub-location'>{job.jobType}</p> */}
                                                                        </div>
                                                                        <div className=" col-3">
                                                                            <span className='job-location'><i className="text-primary fa fa-suitcase"></i> {job.jobType}</span>
                                                                        </div>

                                                                    </div>
                                                                </Link>
                                                                <hr />

                                                            </>
                                                        ) : (
                                                            null
                                                        )}

                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>


            </div>
            <footer className='job-footer fixed-bottom'>
                <div className='row d-flex align-items-center flex-row justify-content-between mb-4'>

                    <div className="social-icons col-6 d-flex ">
                        <ul>
                            {/* <li><a>Privacy Policy</a> &nbsp; . &nbsp;</li>
                            <li><a>  Terms of Service</a></li> &nbsp; . &nbsp; */}
                            <li><p className="mb-0">© {new Date().getFullYear()} iRUN Technology </p></li>
                        </ul>
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
        </>
    );
}

export default AllJobs;

