import React from 'react'
import { useHistory } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import Image from "../elements/Image";

const ComingSoon = () => {
	const history = useHistory();

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 align-center" style={{marginTop: '50px', marginBottom: '50px'}}>
                        <Image
                            src={require("../../assets/images/comingsoon.svg")}
                            alt="Coming Soon"
                            className="img-fluid"
                            width={500}
                            style={{marginBottom: '50px'}}
                        />
                    <h4>Coming Soon </h4>

                    </div>

                    <div className="col-md-12 align-center">
                        <button onClick={()=> history.push('/support')}  type="button" className="btn btn-primary btn-lg">
                            Get notified
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ComingSoon;