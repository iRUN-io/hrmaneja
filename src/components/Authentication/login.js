import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from "../../services/auth";
import { setUserSession } from '../../config/common';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

	const Login = () => {
		const [email, setUserName] = useState();
		const [password, setPassword] = useState();
		const handleSubmit = async e => {
		  e.preventDefault();
		  const response = await loginUser({
			email,
			password
		  });
		  try {
		  if ('token' in response.data) {
			toast.success('Logged in successfully !')
			  setUserSession(response.data.token, response.data);
			  window.location.href = "/";
		  } else {
			toast.error("Failed");
		  }
		} catch (error) {
		  console.log('error', error);
		  if (response.data.status === 'error') 
		  toast.error(response.data.message);
		  else toast.error("Something went wrong. Please try again later.");
		}
		};
		return (
			<div className="auth">
				<ToastContainer/>
				<div className="auth_left">
					<div className="card">
						<div className="text-center mb-2">
							<Link className="header-brand" to="/">
								<i className="fe fe-command brand-logo" />
							</Link>
						</div>
						<form  noValidate onSubmit={handleSubmit} className="authFormInput">
						<div className="card-body">
							<div className="card-title">Login to your account</div>
							<div className="form-group">
								<select className="custom-select">
									<option>HR Dashboard</option>
									<option>Project Dashboard</option>
									<option>Job Portal</option>
								</select>
							</div>
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
									onChange={e => setUserName(e.target.value)}
								/>
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
									onChange={e => setPassword(e.target.value)}
								/>
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
						<div className="text-center text-muted">
							Don't have account yet? <Link to="/signup">Sign Up</Link>
						</div>
					</div>
				</div>
				<div className="auth_right">
					<div className="carousel slide" data-ride="carousel" data-interval={3000}>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img src="assets/images/slider1.svg" className="img-fluid" alt="login page" />
								<div className="px-4 mt-4">
									<h4>Fully Responsive</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src="assets/images/slider2.svg" className="img-fluid" alt="login page" />
								<div className="px-4 mt-4">
									<h4>Quality Code and Easy Customizability</h4>
									<p>There are many variations of passages of Lorem Ipsum available.</p>
								</div>
							</div>
							<div className="carousel-item">
								<img src="assets/images/slider3.svg" className="img-fluid" alt="login page" />
								<div className="px-4 mt-4">
									<h4>Cross Browser Compatibility</h4>
									<p>Overview We're a group of women who want to learn JavaScript.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

export default Login;

