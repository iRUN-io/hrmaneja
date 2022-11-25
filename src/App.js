import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Layout from './components/Shared/Layout';
import Login from './components/Authentication/login';
import SignUp from './components/Authentication/signup';
import Register from './components/Authentication/register';
import ForgotPassword from './components/Authentication/forgotPassword';
import ChangePassword from './components/Authentication/changePassword';
import NotFound from './components/Authentication/404';
import InternalServer from './components/Authentication/500';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import EmailConfirmation from './components/Authentication/emailConfirmation';
import AllJobs from './components/JobPortal/Jobs/AllJobs';
import JobDetail from './components/JobPortal/Jobs/JobDetail';

class App extends Component {
	render() {
		const { darkMode, boxLayout, darkSidebar, iconColor, gradientColor, rtl, fontType } = this.props
		return (
			<><ToastContainer /><div className={`${darkMode ? "dark-mode" : ""}${darkSidebar ? "sidebar_dark" : ""} ${iconColor ? "iconcolor" : ""} ${gradientColor ? "gradient" : ""} ${rtl ? "rtl" : ""} ${fontType ? fontType : ""}${boxLayout ? "boxlayout" : ""}`}>
				<Router>
					<Switch>
						{/* <Route path="/signup" component={SignUp} /> */}
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
						<Route path="/change-password/:token" component={ChangePassword} />
						<Route path="/verify-email/:token" component={EmailConfirmation} />
						<Route path="/forgot-password" component={ForgotPassword} />
						<Route path="/internalserver" component={InternalServer} />
						<Route path="/jobs/:company_id" component={AllJobs} />
						{/* add id later to jobDetail */}
						<Route path="/jd/:job_id" component={JobDetail} /> 
						<Route component={Layout} />
						<Route path="/notfound" component={NotFound} />
					</Switch>
				</Router>
			</div></>
		);
		// let navHeader = this.state.visibility ? <Layout /> : <Login />;
		// return (
		//   <div>
		//       {navHeader}
		//   </div>
		// )
	}
}

// useEffect(() => {
// 	ReactGA.pageview(window.location.pathname + window.location.search);
//   }, []);

const mapStateToProps = state => ({
	darkMode: state.settings.isDarkMode,
	darkSidebar: state.settings.isDarkSidebar,
	iconColor: state.settings.isIconColor,
	gradientColor: state.settings.isGradientColor,
	rtl: state.settings.isRtl,
	fontType: state.settings.isFont,
	boxLayout: state.settings.isBoxLayout
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(App)