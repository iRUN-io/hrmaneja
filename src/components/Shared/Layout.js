import React, { Component } from 'react';
import Menu from './Menu';
import { getBillingData, getUser } from "../../config/common";
import { ToastContainer } from 'material-react-toastify';
import Subscribe from '../common/subscribe';
// import 'react-toastify/dist/ReactToastify.css';
export default class Layout extends Component {
	constructor() {
        super();
        this.state = { 
			billingExist: false, 
			checked: false,
		}; 
    }

		
	getCompanyBilling = async function () {
		const billingStatus = await getBillingData();
			this.setState({
				billingExist: billingStatus,
				checked: true,
			});
	}

	render() {
		if (!getUser()) {
			if (window.location.pathname !== "/forgot-password") {
				window.location.href = "/login";
			}
		}

		if (this.state.checked === false) {
			this.getCompanyBilling();
		}
		const billingExist = this.state.billingExist;
		const checked = this.state.checked;

		const props = { ...this.props, billingExist, checked };
		return (
			<div id="main_content">
			<ToastContainer />
			<Menu {...props} />
			{/* {!checked && !billingExist ? (
				<Menu {...props} />
			) : (
				<div>
				<Subscribe />
				</div>
			)} */}
			</div>
		);
	}
}
