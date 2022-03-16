import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ForgotPassword extends Component {
	render() {
		return (
			<div className="auth">
				<div className="auth_left">
					<div className="card">
						<div className="text-center mb-5">
							<Link className="header-brand" to="/">
								<i className="fe fe-command brand-logo" />
							</Link>
						</div>
						<div className="card-body">
							<div className="card-title">Forgot password</div>
							<p className="text-muted">
								Enter your email address and your password will be reset and emailed to you.
							</p>
							<div className="form-group">
								<label className="form-label" htmlFor="exampleInputEmail1">
									Email address
								</label>
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
								/>
							</div>
							<div className="form-footer">
								<Link className="btn btn-primary btn-block" to="/login">
									Send me new password
								</Link>
							</div>
						</div>
						<div className="text-center text-muted">
							Forget it, <Link to="/login">Send me Back</Link> to the Sign in screen.
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
}
