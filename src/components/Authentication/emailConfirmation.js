import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'material-react-toastify';
import LoadingBar from 'react-top-loading-bar';
import Image from '../elements/Image';
import { verifyEmail } from '../../services/company';

const EmailConfirmation = () => {
    const [tokenStatus, setTokenStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0)

    const token = window.location.href.split("/").pop();

    useEffect(() => {
        async function fetchData() {
            setProgress(10);
            setProgress(50);
            const response = await verifyEmail(token);
            if(response.status === 404){
                setTokenStatus('expired');
                return;
            }
            if (response.name) {
                setProgress(50);
                setProgress(80);
                setProgress(100);
                setTokenStatus('success');
                
            }
            else {
                setProgress(10);
                setLoading(false);
                setTokenStatus('error');
            }

        }
        fetchData();

    }, [token]);


    return (
        <>

            {loading === false ? (
                <div className="auth">
                    <ToastContainer />
                    <div className="auth_left">
                        <div className="card">
                            <div className="text-center mb-5">
                                <Link className="header-brand" to="/">
                                    <Image
                                        src={require("../../assets/images/hr-manager-logo.png")}
                                        alt="Open"
                                        className="img-fluid"
                                        width={100} />
                                </Link>
                            </div>
                            {tokenStatus === 'success' && (
                            <div className="text-center text-muted">
                                <div className="card-title text-success">Email Confirmed</div>
                                    <div className="">
                                      <Image
                                        src={require("../../assets/images/confirmation.svg")}
                                        alt="Open"
                                        className="img-fluid"
                                        width={200} />
                                        
                                    </div>
                                    <div className="text-center text-muted">
                                <Link to="/login">Login here</Link>
                            </div>
                            </div>
                            )}
                            {tokenStatus === 'expired' && (
                                <><div className="text-center text-muted">
                                    <div className="card-title text-danger" style={{ fontWeight: 'bold' }}>Token Expired</div>
                                    <p className="text-muted">
                                        {'Don\'t worry, we have sent you a new one, check your email'}
                                    </p>
                                    <Image
                                        src={require("../../assets/images/expired.svg")}
                                        alt="Open"
                                        className="img-fluid"
                                        width={200} />
                                </div>
                                <div className="text-center text-muted">
                                        Forget it, <Link to="/login">Send me Back</Link> to the Sign in screen.
                                </div>
                                </>
                            )}
                            
                        </div>
                    </div>
                    <div className="auth_right">
                        <div className="carousel slide" data-ride="carousel" data-interval={3000}>
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <Image
                                        src={require("../../assets/images/login/organize.svg")}
                                        alt="Manage"
                                        className="img-fluid"
                                        width={100} />
                                    <div className="px-4 mt-4">
                                        <h4>Manage</h4>
                                        <p>The intelligent way to manage employees.</p>
                                    </div>
                                </div>
                                <div className="carousel-item active">
                                    <Image
                                        src={require("../../assets/images/login/analysis.svg")}
                                        alt="Manage"
                                        className="img-fluid"
                                        width={100} />
                                    <div className="px-4 mt-4">
                                        <h4>HR Data & Analysis</h4>
                                        <p>We provide you a quality interactive work platform that enhances productivity.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <Image
                                        src={require("../../assets/images/login/expense.svg")}
                                        alt="Manage"
                                        className="img-fluid"
                                        width={100} />
                                    <div className="px-4 mt-4">
                                        <h4>Expense Management</h4>
                                        <p>Have the ultimate visibility of expenses in your company..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <LoadingBar progress={progress} color='#8759ff' height={7} />
            )}
        </>
    );
}

export default EmailConfirmation;