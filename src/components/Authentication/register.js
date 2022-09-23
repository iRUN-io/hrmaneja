import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from "../../services/auth";
import { setUserSession, setCompanySession } from '../../config/common';
import { ToastContainer, toast } from 'material-react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Image from "../elements/Image";
import LoadingBar from 'react-top-loading-bar';
import { sendEmail } from '../../services/mail/sendMail';
import { emailCase } from '../../enums/emailCase';
import { createCompany, getCompany } from '../../services/company';
import PasswordStrengthBar from 'react-password-strength-bar';
import { createNormalUser } from '../../services/user';
import { createEmployee } from '../../services/employee';
import { Button } from 'react-bootstrap';

const Register = () => {
	const [password, setPassword] = useState();
	const [progress, setProgress] = useState(0)
	const [loggedResponse, setResponse] = useState();
	const [passwordCheck, setCheckPassword] = useState('');
	const [formState, setFormState] = useState({
		name: '',
		registered_company_number: '',
		vat_number: '',
		email: '',
		address_line1: 'Lagos, Nigeria',
		address_line2: '',
		city: '',
		country: '',
		phone: '',
		company_logo: '',
		leave: false,
		payroll: false,
		employee: true,
		department: true,
		user: true,
		activity: true,
		events: false,
		reports: false,
		notification: false,
		expenseManagement: false,
		inventoryManagement: false,
		jobManagement: false,
		holidayManagement: false,
		projectManagement: false,
		currency: 'USD', // NGN
		timezone: '',
		dateFormat: 'DD/MM/YYYY',
		timeFormat: 'HH:mm',
		language: 'en',
		theme: 'light',
		password: '',
		confirmPassword: '',
	})

	const createCompaniesAction = async () => {
		try {
			setFormState({ ...formState });
			const body = {
				name: formState.name,
				registered_company_number: formState.registered_company_number,
				incorporation_date: formState.incorporation_date,
				vat_number: formState.vat_number,
				email: formState.email,
				address_line1: formState.address_line1,
				address_line2: formState.address_line2,
				city: formState.city,
				country: formState.country,
				phone: formState.phone,
				company_logo: formState.logo,
				settings: {
					features: {
						leave: formState.leave,
						payroll: formState.payroll,
						employee: formState.employee,
						department: formState.department,
						user: formState.user,
						activity: formState.activity,
						events: formState.events,
						reports: formState.reports,
						notification: formState.notification,
						expenseManagement: formState.expenseManagement,
						inventoryManagement: formState.inventoryManagement,
						jobManagement: formState.jobManagement,
						holidayManagement: formState.holidayManagement,
						projectManagement: formState.projectManagement
					},
					currency: formState.currency,
					timezone: formState.timezone,
					dateFormat: formState.dateFormat,
					timeFormat: formState.timeFormat,
					language: formState.language,
					theme: formState.theme,
				}
			}

			if (body.name === '' || body.email === '' || body.password === '' || body.confirmPassword === '' || body.phone === '') {
				toast.error('Please fill all the fields');
				return;
			}

			if (body.password !== body.confirmPassword) {
				toast.error('Password does not match');
				return;
			}

			const response = await createCompany(body);

			if(response.status === 404){
				toast.error(response.message);
				return;
			}

			setResponse(response);

			const employeeData = {
				name: body.name,
				email: body.email,
				phone: formState.phone,
				address: formState.address,
				company_id: response.id,
				role: 'HR Manager',
				password: formState.password,
			}

			const employeeResponse = await createEmployee(employeeData);
			setResponse(employeeResponse);

			if(employeeResponse.status === 404){
				toast.error(employeeResponse.message);
				return;
			}

			const userData = {
				employee_id: employeeResponse.id,
				name: formState.name,
				userName: formState.name,
				email: formState.email,
				phone: formState.phone,
				company_id: response.id,
				role: 'HR Manager',
				password: formState.password,
				confirmPassword: formState.password,
			}

			const userResponse = await createNormalUser(userData);
			if(employeeResponse.status === 404){
				toast.error(employeeResponse.message);
				return;
			}
			setResponse(userResponse);

			if (response.id && employeeResponse.id && userResponse.id) {
				sendEmail(body.email, body.name, emailCase.userCreation); // implement email sending
				login();
				toast.success("Company created successfully");
			}

			setFormState({
				name: '',
				registered_company_number: '',
				vat_number: '',
				email: '',
				address_line1: '',
				address_line2: '',
				city: '',
				country: '',
				phone: '',
				company_logo: '',
				leave: false,
				payroll: false,
				employee: true,
				department: true,
				user: true,
				activity: false,
				events: false,
				reports: false,
				notification: true,
				expenseManagement: false,
				inventoryManagement: false,
				jobManagement: false,
				holidayManagement: false,
				projectManagement: false,
				currency: 'USD',
				timezone: '',
				date_format: 'DD/MM/YYYY',
				time_format: 'HH:mm',
				language: 'en',
				theme: 'light',
			});

		} catch (err) {

			if (loggedResponse?.status === 404)
			toast.error(loggedResponse.message);
		else toast.error("Something went wrong. Please try again later.");	
			// toast.error("Error, try again",);
			setFormState({ ...formState });

		};

	}

	const login =  async () => {
		const email = formState.email;
		if (!password || !formState.email) {
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

	const checkPassword = (myPassword) => {
		setPassword(myPassword);
		const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");
		if (strongRegex.test(password)) {
			setCheckPassword('password is strong');
			// document.getElementById("password").style.borderColor = "green";
		} else {
			setCheckPassword('password is weak, try adding special characters, numbers and capital letters');
			// document.getElementById("password").style.borderColor = "red";
		}
	}

    const updateForm = (e) => {
        const { value, name } = e.target;
		if (name === "password") {
			checkPassword(value);
		}
        setFormState({
            ...formState,
            [name]: value,
        });
    };

	return (
		<>
		<LoadingBar progress={progress} color='#8759ff' height={7} />
		<div className="auth">
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
								<input type="text" name='name' value={formState?.name} onChange={updateForm}  className="form-control" placeholder="Enter Company Name" />
							</div>
							<div className="form-group">
								<label className="form-label">Email address</label>
								<input type="email" name='email' value={formState?.email} onChange={updateForm}  className="form-control" placeholder="Enter email" />
							</div>
							<div className="form-group">
								<label className="form-label">Address </label>
								<input type="text" name='address' value={formState?.address} onChange={updateForm}  className="form-control" placeholder="Enter Company Address " />
							</div>
							<div className="form-group">
								<label className="form-label">Phone</label>
								<input type="text" name='phone' value={formState?.phone} onChange={updateForm}  className="form-control" placeholder="Enter Phone Number" />
							</div>
							<div className="form-group">
								<label className="form-label">Password</label>
								<input id='password' type="password" name='password' value={formState?.password} onChange={updateForm}  className="form-control" placeholder="Enter Password" />
								{formState?.password !== '' &&
								<PasswordStrengthBar password={password} />
								}
							</div>
							<div className="form-group">
								<label className="form-label">Confirm Password</label>
								{formState?.confirmPassword !== '' && formState?.password !== formState?.confirmPassword && <small style={{color: 'red'}}>Password does not match</small>}
								{formState?.confirmPassword !== '' && formState?.password === formState?.confirmPassword && <small style={{color: 'green'}}>Password match</small>}
								<input name='confirmPassword' value={formState?.confirmPassword} onChange={updateForm}  type="password" className="form-control" placeholder="Confirm Password" />
							</div>
							{/* <div className="form-group">
								<label className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" />
									<span className="custom-control-label">
										Agree the <a href="/#">terms and policy</a>
									</span>
								</label>
							</div> */}
							<div className="form-footer">
								<Button onClick={()=> createCompaniesAction()} className="btn btn-primary btn-block" to="/login">
									Create new account
								</Button>
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

