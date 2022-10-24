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

const Login = () => {
	const [email, setUserName] = useState();
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
				sendEmail(response.data.emailAddress, response.data.name, emailCase.userLoggedIn); 
				const company =  await getCompany(response.data.company_id);
				setUserSession(response.data.token, response.data);
				toast.success(response.message)
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
		<LoadingBar progress={progress} color='#8759ff' height={5} />
		<div className="auth">
			<ToastContainer />
			<div className="auth_left">
				<div className="card" style={{marginTop: '40px'}}>
					<div className="text-center mb-2">
						<Link className="header-brand" to="https://hrmaneja.com">
							<Image
								src={require("../../assets/images/hr-manager-logo.png")}
								alt="Open"
								className="img-fluid"
								width={100} />
						</Link>
					</div>
						<div className="card-body">
							{/* <div className="card-title">Login to your account</div> */}
				
							<div className="form-group">
								<label className="form-label">Email</label>
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
									required
									onChange={e => setUserName(e.target.value)} />
							</div>
							<div className="form-group">
								<label className="form-label">
									Password
									<Link className="float-right small" to="/forgot-password">
										forgot password ?
									</Link>
								</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Password"
									required
									onChange={e => setPassword(e.target.value)} />
							</div>
							{/* <div className="form-group">
								<label className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" />
									<span className="custom-control-label">Remember me</span>
								</label>
							</div> */}
							<div className="form-footer">
								<button type='submit' onClick={() => handleSubmit()} className="btn btn-primary btn-block">
									Click to login
								</button>

								<div className="text-center text-muted" style={{marginTop: '10px'}}>
									No account yet? <Link to="/register">create one</Link>
								</div>
							</div>
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

export default Login;

