/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { useHistory } from 'react-router-dom';
import Image from "../elements/Image";
import JobsFooter from '../JobPortal/Jobs/JobsFooter';

const JobSuccess = () => {
	const history = useHistory();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 align-center" style={{marginTop: '200px', marginBottom: '10px'}}>
                        <Image
                            src={require("../../assets/images/success.svg")}
                            alt="We have received your application"
                            className="img-fluid"
                            width={200}
                            style={{marginBottom: '20px'}}
                        />
                    <p>Your application is received</p>

                    </div>

                    <div className="col-md-12 align-center">
                        <button onClick={()=> history.push('/register')}  type="button" className="btn btn-primary btn-lg">
                                Create your own jobs here 
                        </button>
                        
                    </div>

                    
                </div>
            </div>
            <JobsFooter/>
        </>
    );
}

export default JobSuccess;