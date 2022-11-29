import React from 'react';
import Image from "../../elements/Image"; 
const JobsFooter = () => {
    return (
        <>
            <footer className='job-footer fixed-bottom'>
                <div className='row d-flex align-items-center flex-row justify-content-between mb-4'>

                    <div className="social-icons col-6 d-flex ">
                        <ul>
                            <li><p className="mb-0">© {new Date().getFullYear()} iRUN Technology </p></li>
                        </ul>
                    </div>

                    <div className="logo col-6 justify-content-end d-flex pr-4">
                        <a target={'_blank'} rel="noopener noreferrer" href='https://hrmaneja.com'>
                        <Image
                            src={require("../../../assets/images/hr-manager-logo.png")}
                            alt="Open"
                            className="img-fluid"
                            width={100}
                        />
                        </a>
                    </div>

                </div>

            </footer>
        </>
    );
}

export default JobsFooter;

