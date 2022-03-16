import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Layout from './components/Shared/Layout';
import Login from './components/Authentication/login';
import SignUp from './components/Authentication/signup';
import ForgotPassword from './components/Authentication/forgotpassword';
import NotFound from './components/Authentication/404';
import InternalServer from './components/Authentication/500';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		const { darkMode, boxLayout, darkSidebar, iconColor, gradientColor, rtl, fontType } = this.props
		return (
			<div className={`${darkMode ? "dark-mode" : ""}${darkSidebar ? "sidebar_dark" : ""} ${iconColor ? "iconcolor" : ""} ${gradientColor ? "gradient" : ""} ${rtl ? "rtl" : ""} ${fontType ? fontType : ""}${boxLayout ? "boxlayout" : ""}`}>
				<Router>
					<Switch>
						<Route path="/signup" component={SignUp} />
						<Route path="/login" component={Login} />
						<Route path="/forgotpassword" component={ForgotPassword} />
						<Route path="/notfound" component={NotFound} />
						<Route path="/internalserver" component={InternalServer} />
						<Route component={Layout} />
					</Switch>
				</Router>
			</div>
		);
		// let navHeader = this.state.visibility ? <Layout /> : <Login />;
		// return (
		//   <div>
		//       {navHeader}
		//   </div>
		// )
	}
}
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