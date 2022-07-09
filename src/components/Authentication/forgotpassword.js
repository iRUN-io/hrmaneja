import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../elements/Image';

export default class ForgotPassword extends Component {
	render() {
		return (
			<div className="auth">
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
		);
	}
}
