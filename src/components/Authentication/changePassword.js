import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar';
import { changePassword, confirmToken } from '../../services/user';
import Image from '../elements/Image';

const ForgotPassword = () => {
    const [password, setPassword] = useState();
    const [changedPassword, setChangedPassword] = useState();
    const [status, setStatus] = useState('');
    const [tokenStatus, setTokenStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0)

    const token = window.location.href.split("/").pop();
    const initiatePasswordChange = async () => {
        try {
            const body = {
                token: token,
                password: password,
                changedPassword: changedPassword
            }

            const response = await changePassword(body);
            if (response.status === 404) {
                toast.error(response.message + " Please try again !");
                return;
            }
            if (response.status === 200) {
                setStatus('success');
                toast.success(response.message)
            }

        } catch (err) {
            toast.error("Error, try again");
        }

    };


    useEffect(() => {
        async function fetchData() {
            setProgress(10);
            setProgress(50);
            const response = await confirmToken({ token });
            if(response.status === 404){
                setTokenStatus('expired');
                return;
            }
            if (response.status === 200) {
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

    }, []);


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
                            {tokenStatus === 'success' ? (
                            <div className="card-body">
                                <div className="card-title">Change password</div>
                                {status === 'success' &&
                                    <div className="">
                                        <p className="text-success">Your password has been changed</p>
                                        <Link to="/login">Login Here</Link>
                                    </div>
                                }
                                <p className="text-muted">

                                </p>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="exampleInputEmail1">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />

                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="exampleInputEmail1">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={changedPassword}
                                        onChange={e => setChangedPassword(e.target.value)}
                                    />

                                </div>
                                <div className="form-footer">
                                    <Link onClick={() => initiatePasswordChange()} className="btn btn-primary btn-block" >
                                        Proceed
                                    </Link>
                                </div>
                            </div>
                            ) : (
                                <div className="card-body">
                                    <div className="card-title text-primary text-center"><i className="fa fa-spinner fa-5x" aria-hidden="true"></i></div>
                                    <p className="text-muted">
                                        <LoadingBar/>
                                    </p>
                                </div>
                            )}
                            {tokenStatus === 'expired' && (
                                <div className="card-body">
                                    <div className="card-title text-danger" style={{fontWeight: 'bold'}}>Token Expired</div>
                                    <p className="text-muted">
                                        <Link to="/forgot-password">Request new token</Link>
                                    </p>
                                </div>
                            )}
                            <div className="text-center text-muted">
                                Forget it, <Link to="/login">Send me Back</Link> to the Sign in screen.
                            </div>
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

export default ForgotPassword;