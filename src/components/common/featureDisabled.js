/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { useHistory } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import Image from "../elements/Image";

const FeatureNotAvailable = () => {
	const history = useHistory();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 align-center" style={{marginTop: '10px', marginBottom: '10px'}}>
                        <Image
                            src={require("../../assets/images/subscribe.svg")}
                            alt="This feature is not available for you now, click below to subscribe"
                            className="img-fluid"
                            width={500}
                            style={{marginBottom: '20px'}}
                        />
                    <p>🙇 This feature is not available for you now, click below to subscribe</p>

                    </div>

                    <div className="col-md-12 align-center">
                        <button onClick={()=> history.push('/support')} type="button" className="btn btn-primary btn-lg">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeatureNotAvailable;