import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from "../../services/auth";
import { setUserSession, getUser } from '../../config/common';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "../elements/Image";
import LoadingBar from 'react-top-loading-bar';

const Login = () => {
	const [email, setUserName] = useState();
	const [password, setPassword] = useState();
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		if (getUser()) {
			window.location.href = "/";
		}
	}, []);

	const handleSubmit = async e => {
		e.preventDefault();
		setProgress(10);
      	setProgress(50);
		const response = await loginUser({
			email,
			password
		});
		try {
			setProgress(50);
			console.log('response', response);
			if (response.status === 'ok') {
				setProgress(100);
				toast.success('Logged in successfully !')
				setUserSession(response.data.token, response.data);
				window.location.href = "/";
			} else {
				toast.error("Invalid password or email, please try again !");
			}
		} catch (error) {
			console.log('error', error);
			if (response.status === 'error')
				toast.error(response.data.message);
			else toast.error("Something went wrong. Please try again later.");
		}
	};
	return (
		<>
		<LoadingBar progress={progress} color='#f11946' />
		<div className="auth">
			<ToastContainer />
			<div className="auth_left">
				<div className="card">
					<div className="text-center mb-2">
						<Link className="header-brand" to="/">
							<Image
								src={require("../../assets/images/hr-manager-logo.png")}
								alt="Open"
								className="img-fluid"
								width={100} />
						</Link>
					</div>
					<form noValidate onSubmit={handleSubmit} className="authFormInput">
						<div className="card-body">
							<div className="card-title">Login to your account</div>
				
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
									onChange={e => setUserName(e.target.value)} />
							</div>
							<div className="form-group">
								<label className="form-label">
									Password
									<Link className="float-right small" to="/forgotpassword">
										I forgot password
									</Link>
								</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Password"
									onChange={e => setPassword(e.target.value)} />
							</div>
							<div className="form-group">
								<label className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" />
									<span className="custom-control-label">Remember me</span>
								</label>
							</div>
							<div className="form-footer">
								<button type='submit' className="btn btn-primary btn-block" href="/">
									Click to login
								</button>
							</div>
						</div>
					</form>
					{/* <div className="text-center text-muted">
        Don't have account yet? <Link to="/signup">Sign Up</Link>
    </div> */}
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
		</div></>
	);
}

export default Login;

