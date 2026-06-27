/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../elements/Image';

export default class NotFound extends Component {
	render() {
		return (
			<div className="auth">
				<div className="auth_left">
					<div className="card">
						<div className="card-body">
							<div className="display-3 text-muted mb-5">
								<i className="si si-exclamation" /> 404
							</div>
							<h1 className="h3 mb-3">What did you do??? </h1>
							<p className="h6 text-muted font-weight-normal mb-3">
							Ohh no its not you, its us 😔
							</p>
							<Link className="btn btn-primary" to="/">
								<i className="fe fe-arrow-left mr-2" />
								Go back
							</Link>
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
