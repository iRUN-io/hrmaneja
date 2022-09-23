import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from "../../services/auth";
import { setUserSession, getUser, setCompanySession } from '../../config/common';
import { ToastContainer, toast } from 'material-react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Image from "../elements/Image";
import LoadingBar from 'react-top-loading-bar';
import { sendEmail } from '../../services/mail/sendMail';
import { emailCase } from '../../enums/emailCase';
import { getCompany } from '../../services/company';

const Register = () => {
	const [email, setUserName] = useState();
	const [name, setName] = useState();
	const [phone, setPhone] = useState();
	const [address, setAddress] = useState();
	const [password, setPassword] = useState();
	const [progress, setProgress] = useState(0)
	const [loggedResponse, setResponse] = useState();
	useEffect(() => {
		if (getUser()) {
			window.location.href = "/";
		}
	}, []);

	const handleSubmit =  async () => {
		if (!password || !email) {
			toast.error("Email / Password is required !");
			return;
		}
		setProgress(10);
      	setProgress(50);
		try {
			const response = await loginUser({
				email,
				password
			});
			setProgress(50);
			setResponse(response);
			setProgress(100);
			await new Promise(resolve => setTimeout(resolve, 1000));
			if (response.data) {
				toast.success(response.message)
				sendEmail(response.data.emailAddress, response.data.name, emailCase.userLoggedIn); 
				const company =  await getCompany(response.data.company_id);
				setUserSession(response.data.token, response.data);
				setCompanySession(company);
				window.location.href = "/";
			} else {
				setProgress(10);
				toast.error("Invalid password or email, please try again !");
			}
		} catch (error) {
			setProgress(10);
			if (loggedResponse?.status === 404)
				toast.error(loggedResponse.message);
			else toast.error("Something went wrong. Please try again later.");
		}
	};
	return (
		<>
		<LoadingBar progress={progress} color='#8759ff' height={7} />
		<div className="auth">
			<ToastContainer />
			<div className="auth_left">
				<div className="card" style={{marginTop: '10px'}}>
					<div className="text-center mb-2">
						<Link className="header-brand" to="/">
							<Image
								src={require("../../assets/images/hr-manager-logo.png")}
								alt="Open"
								className="img-fluid"
								width={100} />
						</Link>
					</div>
					<div className="card-body">
							<div className="card-title">Create new account</div>
							<div className="form-group">
								<label className="form-label">Company</label>
								<input type="text" className="form-control" placeholder="Enter Company Name" />
							</div>
							<div className="form-group">
								<label className="form-label">Email address</label>
								<input type="email" className="form-control" placeholder="Enter email" />
							</div>
							<div className="form-group">
								<label className="form-label">Password</label>
								<input type="password" className="form-control" placeholder="Enter Password" />
							</div>
							<div className="form-group">
								<label className="form-label">Address </label>
								<input type="email" className="form-control" placeholder="Enter Company Address " />
							</div>
							<div className="form-group">
								<label className="form-label">Phone</label>
								<input type="text" className="form-control" placeholder="Enter Phone Number" />
							</div>
							<div className="form-group">
								<label className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" />
									<span className="custom-control-label">
										Agree the <a href="/#">terms and policy</a>
									</span>
								</label>
							</div>
							<div className="form-footer">
								<Link className="btn btn-primary btn-block" to="/login">
									Create new account
								</Link>
							</div>
						</div>
						<div className="text-center text-muted">
							Already have account? <Link to="/login">Sign In</Link>
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
		</div></>
	);
}

export default Register;

